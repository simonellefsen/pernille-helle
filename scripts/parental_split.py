"""Infer what Pernille got from Helle vs from the other three grandparents.

Writes counts and mixing estimates only — no raw genotypes.
"""

from __future__ import annotations

import json
from collections import defaultdict
from pathlib import Path

from beyond_ftdna import GEN_CM, TRAITS, ibs, is_het, kit_csv, load_rows

ROOT = Path(__file__).resolve().parents[1]
BEYOND = ROOT / "lib/data/beyond.json"
OUT = ROOT / "lib/data/split.json"

HELLE_ORIGINS = {"scandinavia": 41, "central-europe": 41, "ireland": 19, "isles": 0}
PERNILLE_ORIGINS = {"scandinavia": 71, "central-europe": 28, "ireland": 0, "isles": 1.5}
HELLE_ANCIENT = {"hunter": 49, "farmer": 40, "invader": 11}
PERNILLE_ANCIENT = {"hunter": 50, "farmer": 38, "invader": 13}


def haploid_auto_cm() -> float:
    return sum(GEN_CM[str(i)] for i in range(1, 23))


def in_segments(chrom: str, pos: int, segs: list[dict]) -> bool:
    for s in segs:
        if s["chromosome"] == chrom and s["start"] <= pos <= s["end"]:
            return True
    return False


def other_mix(p: float, h: float) -> float:
    """If mother and paternal grandfather share a mix X: P = 0.75 X + 0.25 H."""
    return (p - 0.25 * h) / 0.75


def main() -> None:
    beyond = json.loads(BEYOND.read_text())
    segs = beyond["ibd"]["segments"]
    pa = load_rows(kit_csv("pernille"))
    pb = load_rows(kit_csv("helle"))

    auto_map = haploid_auto_cm()
    helle_auto = beyond["ibd"]["autosomalCm"]
    helle_x = beyond["ibd"]["xCm"]
    x_map = GEN_CM["X"]

    # Diploid autosomal fractions (IBD is one haplotype).
    helle_frac = helle_auto / (2 * auto_map)
    pgf_frac = (auto_map - helle_auto) / (2 * auto_map)
    mother_frac = 0.5

    maternal_inf = 0
    maternal_inf_x = 0
    compared_in_ibd = 0
    compared_x = 0
    x_helle_hom = 0
    x_both_hom_same = 0
    x_ibs0 = 0
    by_chr: dict[str, dict[str, int]] = defaultdict(lambda: {"ibd": 0, "maternalInformative": 0})

    for rsid, (chrom, pos, ga) in pa.items():
        if rsid not in pb:
            continue
        chrom_b, _pos_b, gb = pb[rsid]
        if chrom != chrom_b or chrom not in GEN_CM:
            continue
        inside = in_segments(chrom, pos, segs)
        if chrom == "X":
            compared_x += 1
            score = ibs(ga, gb)
            if score == 0:
                x_ibs0 += 1
            helle_hom = not is_het(gb)
            pern_hom = not is_het(ga)
            if helle_hom:
                x_helle_hom += 1
            if helle_hom and pern_hom and ga[0] == gb[0]:
                x_both_hom_same += 1
            if helle_hom and not pern_hom and (ga[0] in gb or ga[1] in gb):
                maternal_inf_x += 1
            continue
        if not inside:
            continue
        compared_in_ibd += 1
        by_chr[chrom]["ibd"] += 1
        helle_hom = not is_het(gb)
        if helle_hom and is_het(ga) and (ga[0] in gb or ga[1] in gb):
            maternal_inf += 1
            by_chr[chrom]["maternalInformative"] += 1

    origins = {}
    for k, p in PERNILLE_ORIGINS.items():
        h = HELLE_ORIGINS[k]
        raw = other_mix(p, h)
        origins[k] = {
            "helle": h,
            "pernille": p,
            "otherThreeQuarters": round(raw, 1),
            "expectedIfRandomHelle": round(0.25 * h, 1),
        }

    ancient = {}
    for k, p in PERNILLE_ANCIENT.items():
        h = HELLE_ANCIENT[k]
        ancient[k] = {
            "helle": h,
            "pernille": p,
            "otherThreeQuarters": round(other_mix(p, h), 1),
        }

    trait_rows = []
    seen = set()
    for spec in TRAITS:
        if spec["id"] in seen or spec.get("label") == "skip":
            continue
        seen.add(spec["id"])
        a = pa.get(spec["rsid"])
        b = pb.get(spec["rsid"])
        row = {"id": spec["id"], "rsid": spec["rsid"], "label": spec["label"]}
        if not a:
            row["pernille"] = None
        else:
            row["pernille"] = a[2][0] + "/" + a[2][1]
        if not b:
            row["helle"] = None
        else:
            row["helle"] = b[2][0] + "/" + b[2][1]
        if a and b:
            row["same"] = sorted(a[2]) == sorted(b[2])
        else:
            row["same"] = None
        trait_rows.append(row)

    silent = [c["id"] for c in beyond["ibd"]["chromosomes"] if c["id"] != "X" and c["ibdCm"] == 0]
    nearly = [
        c["id"]
        for c in beyond["ibd"]["chromosomes"]
        if c["id"] != "X" and c["mapCm"] and c["ibdCm"] / c["mapCm"] >= 0.7
    ]

    payload = {
        "note": "Pernille’s autosomes are one maternal haplotype plus one paternal haplotype. The paternal haplotype is a recombinant mix of Helle and the paternal grandfather. Long no-IBS0 runs are assigned to Helle; the rest of the paternal copy is counted as not-Helle (mostly paternal grandfather, plus any Helle segments below the length cutoff). The maternal haplotype cannot be painted as a block without the mother on the chip. In Helle-assigned regions, sites where Helle is homozygous and Pernille is heterozygous reveal the mother’s allele. X: father passed Helle’s X intact, so Pernille’s paternal X is Helle and her other X is her mother. mtDNA is entirely the mother.",
        "fractions": {
            "haploidAutosomalCm": round(auto_map, 1),
            "helleAssignedCm": helle_auto,
            "helleAssignedAutosomalPct": round(helle_frac * 100, 1),
            "notHellePaternalPct": round(pgf_frac * 100, 1),
            "motherAutosomalPct": round(mother_frac * 100, 1),
            "expectedHellePct": 25,
            "xHelleCm": helle_x,
            "xMapCm": x_map,
            "xHellePctOfMap": round(helle_x / x_map * 100, 1),
        },
        "chromosomes": {
            "silent": silent,
            "mostlyHelle": nearly,
        },
        "maternalInformative": {
            "autosomalInHelleBlocks": maternal_inf,
            "snpsInHelleBlocks": compared_in_ibd,
            "x": maternal_inf_x,
            "xCompared": compared_x,
            "xHelleHomozygous": x_helle_hom,
            "xBothHomozygousSame": x_both_hom_same,
            "xOpposite": x_ibs0,
        },
        "origins": origins,
        "ancient": ancient,
        "traits": trait_rows,
        "mtdna": {
            "mother": "H10a1u",
            "helle": "H1e1b1f1",
            "sharedNode": "H",
            "sharedWhen": "8000 BCE",
        },
    }
    OUT.write_text(json.dumps(payload, indent=2) + "\n")
    print(f"Wrote {OUT}")
    print("helle diploid %", payload["fractions"]["helleAssignedAutosomalPct"])
    print("pgf-ish %", payload["fractions"]["notHellePaternalPct"])
    print("maternal informative auto", maternal_inf, "of", compared_in_ibd)
    print("maternal informative X", maternal_inf_x, "of", compared_x)
    print("silent", silent, "mostly Helle", nearly)
    for k, v in origins.items():
        print(k, v)


if __name__ == "__main__":
    main()
