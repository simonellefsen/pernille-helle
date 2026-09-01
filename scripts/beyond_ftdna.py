"""Derived autosomal findings only — no raw genotypes in the output."""

from __future__ import annotations

import csv
import json
from collections import defaultdict
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / "lib/data/beyond.json"

# Sex-averaged genetic lengths (cM) and GRCh37 physical lengths (Mb).
GEN_CM = {
    "1": 286.54,
    "2": 268.76,
    "3": 223.28,
    "4": 214.07,
    "5": 204.07,
    "6": 191.97,
    "7": 187.06,
    "8": 167.99,
    "9": 166.36,
    "10": 181.14,
    "11": 158.22,
    "12": 174.68,
    "13": 125.71,
    "14": 120.20,
    "15": 141.35,
    "16": 134.04,
    "17": 128.40,
    "18": 117.28,
    "19": 107.89,
    "20": 108.20,
    "21": 62.79,
    "22": 74.10,
    "X": 180.84,
}
PHYS_MB = {
    "1": 249.25,
    "2": 243.20,
    "3": 198.02,
    "4": 191.15,
    "5": 180.92,
    "6": 171.12,
    "7": 159.14,
    "8": 146.36,
    "9": 141.21,
    "10": 135.53,
    "11": 135.01,
    "12": 133.85,
    "13": 115.17,
    "14": 107.35,
    "15": 102.53,
    "16": 90.35,
    "17": 81.19,
    "18": 78.08,
    "19": 59.13,
    "20": 63.03,
    "21": 48.13,
    "22": 51.30,
    "X": 155.27,
}

# Ancestry/phenotype informative SNPs commonly on Illumina arrays.
# Alleles are on the plus strand as usually reported in dbSNP; chip strand may flip.
TRAITS = [
    {
        "id": "lactase",
        "rsid": "rs4988235",
        "gene": "MCM6 / LCT",
        "label": "Lactase persistence",
        "derived": "T",
        "note": "European -13910C>T. TT/CT associated with digesting milk in adulthood.",
    },
    {
        "id": "lactase2",
        "rsid": "rs182549",
        "gene": "MCM6 / LCT",
        "label": "Lactase persistence (linked)",
        "derived": "T",
        "note": "European -22018G>A/C>T tag, usually travels with rs4988235.",
    },
    {
        "id": "eyes",
        "rsid": "rs12913832",
        "gene": "HERC2 / OCA2",
        "label": "Eye colour",
        "derived": "G",
        "note": "GG strongly associated with blue/grey eyes in Europeans; AA with brown.",
    },
    {
        "id": "skin24a5",
        "rsid": "rs1426654",
        "gene": "SLC24A5",
        "label": "Light skin (SLC24A5)",
        "derived": "A",
        "note": "The A allele is nearly fixed in Europe and is the main light-skin variant.",
    },
    {
        "id": "skin45a2",
        "rsid": "rs16891982",
        "gene": "SLC45A2",
        "label": "Light skin (SLC45A2)",
        "derived": "G",
        "note": "European light-skin allele; still variable in southern Europe.",
    },
    {
        "id": "irf4",
        "rsid": "rs12203592",
        "gene": "IRF4",
        "label": "Hair / freckling",
        "derived": "T",
        "note": "T associated with lighter hair and freckling in Europeans.",
    },
    {
        "id": "mc1r7",
        "rsid": "rs1805007",
        "gene": "MC1R",
        "label": "Red hair (R151C)",
        "derived": "T",
        "note": "A well-known red-hair loss-of-function allele.",
    },
    {
        "id": "mc1r8",
        "rsid": "rs1805008",
        "gene": "MC1R",
        "label": "Red hair (R160W)",
        "derived": "T",
        "note": "A second common red-hair allele.",
    },
    {
        "id": "earwax",
        "rsid": "rs17822931",
        "gene": "ABCC11",
        "label": "Earwax type",
        "derived": "T",
        "note": "TT dry earwax (East Asian); CC wet earwax (typical in Europe).",
    },
    {
        "id": "edar",
        "rsid": "rs3827760",
        "gene": "EDAR",
        "label": "EDAR V370A",
        "derived": "G",
        "note": "East Asian hair-thickness allele; ancestral in Europe.",
    },
    {
        "id": "secretor",
        "rsid": "rs601338",
        "gene": "FUT2",
        "label": "ABO secretor status",
        "derived": "A",
        "note": "AA associated with non-secretor status in Europeans.",
    },
]


def kit_csv(stem: str) -> Path:
    hits = list((ROOT / "ftdna").glob(f"{stem}_*/*.csv"))
    if not hits:
        raise SystemExit(f"No autosomal csv for {stem}")
    return hits[0]


def load_rows(path: Path) -> dict[str, tuple[str, int, str]]:
    rows: dict[str, tuple[str, int, str]] = {}
    with path.open(newline="") as f:
        reader = csv.DictReader(f)
        for row in reader:
            rsid = row["RSID"].strip('"')
            chrom = row["CHROMOSOME"].strip('"')
            pos = int(row["POSITION"].strip('"'))
            gt = row["RESULT"].strip('"')
            if not rsid or gt in {"--", "00", ""} or len(gt) != 2:
                continue
            rows[rsid] = (chrom, pos, gt)
    return rows


def ibs(a: str, b: str) -> int:
    if a == b:
        return 2
    if a[0] in b or a[1] in b:
        return 1
    return 0


def is_het(gt: str) -> bool:
    return gt[0] != gt[1]


def cm_span(chrom: str, start: int, end: int) -> float:
    phys = PHYS_MB.get(chrom, 100) * 1_000_000
    gen = GEN_CM.get(chrom, 100)
    return (end - start) / phys * gen


def genotype_call(gt: str, derived: str) -> str:
    alleles = set(gt)
    # Chip may be reverse-complemented.
    complement = {"A": "T", "T": "A", "C": "G", "G": "C"}
    der = derived
    der_c = complement[derived]
    if alleles <= {der} or alleles <= {der_c}:
        return "derived/derived"
    if der in alleles or der_c in alleles:
        return "ancestral/derived"
    return "ancestral/ancestral"


def het_stats(rows: dict[str, tuple[str, int, str]]) -> dict:
    called = 0
    het = 0
    by_chr: dict[str, list[int]] = defaultdict(lambda: [0, 0])
    for chrom, _pos, gt in rows.values():
        if chrom not in GEN_CM:
            continue
        called += 1
        by_chr[chrom][0] += 1
        if is_het(gt):
            het += 1
            by_chr[chrom][1] += 1
    return {
        "called": called,
        "heterozygous": het,
        "heterozygosity": round(het / called, 4) if called else 0,
        "byChromosome": {
            c: {
                "called": v[0],
                "heterozygous": v[1],
                "heterozygosity": round(v[1] / v[0], 4) if v[0] else 0,
            }
            for c, v in sorted(by_chr.items(), key=lambda kv: (kv[0].isdigit(), int(kv[0]) if kv[0].isdigit() else 99, kv[0]))
        },
    }


def roh_runs(rows: dict[str, tuple[str, int, str]], min_mb: float = 1.5, min_snps: int = 200) -> list[dict]:
    by_chr: dict[str, list[tuple[int, str]]] = defaultdict(list)
    for chrom, pos, gt in rows.values():
        if chrom in GEN_CM:
            by_chr[chrom].append((pos, gt))
    found = []
    for chrom, pts in by_chr.items():
        pts.sort()
        run_start = None
        run_n = 0
        last = None
        for pos, gt in pts:
            homozygous = not is_het(gt)
            gap = last is not None and pos - last > 1_000_000
            if homozygous and not gap:
                if run_start is None:
                    run_start = pos
                    run_n = 1
                else:
                    run_n += 1
            else:
                if run_start is not None:
                    mb = (last - run_start) / 1_000_000
                    if mb >= min_mb and run_n >= min_snps:
                        found.append(
                            {
                                "chromosome": chrom,
                                "start": run_start,
                                "end": last,
                                "mb": round(mb, 2),
                                "snps": run_n,
                                "cM": round(cm_span(chrom, run_start, last), 1),
                            }
                        )
                run_start = pos if homozygous else None
                run_n = 1 if homozygous else 0
            last = pos
        if run_start is not None and last is not None:
            mb = (last - run_start) / 1_000_000
            if mb >= min_mb and run_n >= min_snps:
                found.append(
                    {
                        "chromosome": chrom,
                        "start": run_start,
                        "end": last,
                        "mb": round(mb, 2),
                        "snps": run_n,
                        "cM": round(cm_span(chrom, run_start, last), 1),
                    }
                )
    found.sort(key=lambda s: -s["cM"])
    return found


def ibd_segments(a: dict, b: dict) -> list[dict]:
    shared: dict[str, list[tuple[int, str, str]]] = defaultdict(list)
    for rsid, (chrom, pos, ga) in a.items():
        if rsid not in b:
            continue
        chrom_b, pos_b, gb = b[rsid]
        if chrom != chrom_b or chrom not in GEN_CM:
            continue
        shared[chrom].append((pos, ga, gb))

    segs = []
    for chrom, pts in shared.items():
        pts.sort()
        start = pts[0][0]
        n = 0
        ibs2 = 0
        last = pts[0][0]
        for pos, ga, gb in pts:
            score = ibs(ga, gb)
            gap = pos - last > 1_000_000
            if score == 0 or gap:
                if n:
                    segs.append(_close(chrom, start, last, n, ibs2))
                start = pos
                n = 0
                ibs2 = 0
                if score == 0:
                    last = pos
                    continue
            n += 1
            if score == 2:
                ibs2 += 1
            last = pos
        if n:
            segs.append(_close(chrom, start, last, n, ibs2))

    # Keep long candidate IBD1 stretches.
    kept = [s for s in segs if s["cM"] >= 5 and s["snps"] >= 100]
    kept.sort(key=lambda s: -s["cM"])
    return kept


def _close(chrom: str, start: int, end: int, n: int, ibs2: int) -> dict:
    return {
        "chromosome": chrom,
        "start": start,
        "end": end,
        "mb": round((end - start) / 1_000_000, 2),
        "snps": n,
        "cM": round(cm_span(chrom, start, end), 1),
        "identicalShare": round(ibs2 / n, 3) if n else 0,
    }


def trait_calls(rows: dict[str, tuple[str, int, str]]) -> list[dict]:
    seen = set()
    out = []
    for spec in TRAITS:
        if spec["id"] in seen or spec["label"] == "skip":
            continue
        seen.add(spec["id"])
        hit = rows.get(spec["rsid"])
        if not hit:
            out.append({**{k: spec[k] for k in ("id", "rsid", "gene", "label", "note")}, "called": False})
            continue
        chrom, pos, gt = hit
        out.append(
            {
                "id": spec["id"],
                "rsid": spec["rsid"],
                "gene": spec["gene"],
                "label": spec["label"],
                "note": spec["note"],
                "called": True,
                "chromosome": chrom,
                "position": pos,
                "genotype": gt[0] + "/" + gt[1],
                "zygosity": "heterozygous" if is_het(gt) else "homozygous",
                "state": genotype_call(gt, spec["derived"]),
            }
        )
    return out


def main() -> None:
    pa = load_rows(kit_csv("pernille"))
    pb = load_rows(kit_csv("helle"))
    segs = ibd_segments(pa, pb)
    auto = [s for s in segs if s["chromosome"] != "X"]
    x = [s for s in segs if s["chromosome"] == "X"]
    auto_cm = round(sum(s["cM"] for s in auto), 1)
    x_cm = round(sum(s["cM"] for s in x), 1)
    by_chr: dict[str, list[dict]] = defaultdict(list)
    for s in segs:
        by_chr[s["chromosome"]].append(s)
    chromosomes = []
    for cid in [str(i) for i in range(1, 23)] + ["X"]:
        ss = by_chr.get(cid, [])
        chromosomes.append(
            {
                "id": cid,
                "mapCm": GEN_CM[cid],
                "physMb": PHYS_MB[cid],
                "ibdCm": round(sum(s["cM"] for s in ss), 1),
                "ibdMb": round(sum(s["mb"] for s in ss), 1),
                "longestCm": max((s["cM"] for s in ss), default=0),
                "segments": len(ss),
            }
        )
    payload = {
        "a": "pernille",
        "b": "helle",
        "relation": "paternal-grandmother",
        "method": "Unphased no-IBS0 runs, gaps >1 Mb break a segment. Lengths use a sex-averaged chromosome genetic map, not a dense recombination map. Opposite homozygotes cannot sit inside a shared haplotype. This is candidate IBD, not a published match list.",
        "ibd": {
            "autosomalCm": auto_cm,
            "xCm": x_cm,
            "autosomalSegments": len(auto),
            "longestAutosomalCm": auto[0]["cM"] if auto else 0,
            "expectedGrandparentCm": "~1,500–2,000 cM autosomal (one quarter of the genome, broken by recombination in the father)",
            "chromosomes": chromosomes,
            "segments": segs,
        },
        "heterozygosity": {
            "pernille": het_stats(pa),
            "helle": het_stats(pb),
        },
        "roh": {
            "pernille": roh_runs(pa),
            "helle": roh_runs(pb),
            "note": "Runs of homozygosity longer than 1.5 Mb. Long ROH can reflect a cousin marriage; a handful of medium runs is typical in northern Europeans.",
        },
        "traits": {
            "pernille": trait_calls(pa),
            "helle": trait_calls(pb),
            "note": "Chip calls only. These are population associations, not a medical report and not a portrait.",
        },
    }
    OUT.parent.mkdir(parents=True, exist_ok=True)
    OUT.write_text(json.dumps(payload, indent=2) + "\n")
    print(
        f"Wrote {OUT} auto_cM={auto_cm} segs={len(auto)} "
        f"longest={payload['ibd']['longestAutosomalCm']} X_cM={x_cm}"
    )
    print("Pernille het", payload["heterozygosity"]["pernille"]["heterozygosity"])
    print("Helle het", payload["heterozygosity"]["helle"]["heterozygosity"])
    print("Pernille ROH", len(payload["roh"]["pernille"]), "Helle ROH", len(payload["roh"]["helle"]))
    for name, calls in payload["traits"].items():
        if name == "note":
            continue
        print(name)
        for t in calls:
            if t["called"]:
                print(f"  {t['rsid']} {t['label']}: {t['genotype']} {t['state']}")
            else:
                print(f"  {t['rsid']} {t['label']}: not on chip")


if __name__ == "__main__":
    main()
