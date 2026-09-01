"""Compare two autosomal CSVs. Writes derived IBS counts only — no genotypes."""

from __future__ import annotations

import csv
import json
from collections import defaultdict
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / "lib/data/sharing.json"


def kit_csv(stem: str) -> Path:
    hits = list((ROOT / "ftdna").glob(f"{stem}_*/*.csv"))
    if not hits:
        raise SystemExit(f"No autosomal csv for {stem}")
    return hits[0]


def load(path: Path) -> dict[str, tuple[str, str]]:
    rows: dict[str, tuple[str, str]] = {}
    with path.open(newline="") as f:
        reader = csv.DictReader(f)
        for row in reader:
            rsid = row["RSID"].strip('"')
            chrom = row["CHROMOSOME"].strip('"')
            gt = row["RESULT"].strip('"')
            if not rsid or gt in {"--", "00", ""}:
                continue
            if len(gt) != 2:
                continue
            rows[rsid] = (chrom, gt)
    return rows


def ibs(a: str, b: str) -> int:
    if a == b:
        return 2
    if a[0] in b or a[1] in b:
        return 1
    return 0


def main() -> None:
    pa = load(kit_csv("pernille"))
    pb = load(kit_csv("helle"))
    shared = pa.keys() & pb.keys()

    totals = {"compared": 0, "ibs0": 0, "ibs1": 0, "ibs2": 0}
    by_chr: dict[str, dict[str, int]] = defaultdict(lambda: {"compared": 0, "ibs0": 0, "ibs1": 0, "ibs2": 0})

    for rsid in shared:
        chrom, ga = pa[rsid]
        chrom_b, gb = pb[rsid]
        if chrom != chrom_b:
            continue
        score = ibs(ga, gb)
        totals["compared"] += 1
        totals[f"ibs{score}"] += 1
        bucket = by_chr[chrom]
        bucket["compared"] += 1
        bucket[f"ibs{score}"] += 1

    order = [str(i) for i in range(1, 23)] + ["X"]
    chromosomes = []
    for cid in order:
        b = by_chr.get(cid)
        if not b or not b["compared"]:
            continue
        n = b["compared"]
        chromosomes.append(
            {
                "id": cid,
                "compared": n,
                "ibs0": b["ibs0"],
                "ibs1": b["ibs1"],
                "ibs2": b["ibs2"],
                "shareAtLeastOne": round((b["ibs1"] + b["ibs2"]) / n, 4),
                "identical": round(b["ibs2"] / n, 4),
                "opposite": round(b["ibs0"] / n, 4),
            }
        )

    n = totals["compared"]
    payload = {
        "a": "pernille",
        "b": "helle",
        "relation": "paternal-grandmother",
        "compared": n,
        "ibs0": totals["ibs0"],
        "ibs1": totals["ibs1"],
        "ibs2": totals["ibs2"],
        "shareAtLeastOne": round((totals["ibs1"] + totals["ibs2"]) / n, 4),
        "identical": round(totals["ibs2"] / n, 4),
        "opposite": round(totals["ibs0"] / n, 4),
        "chromosomes": chromosomes,
        "note": "IBS from unphased microarray genotypes. Opposite homozygotes (IBS0) cannot sit in a shared segment. Paternal grandmother and granddaughter are expected to share about one quarter of autosomal DNA and the father's X.",
    }
    OUT.parent.mkdir(parents=True, exist_ok=True)
    OUT.write_text(json.dumps(payload, indent=2) + "\n")
    print(f"Wrote {OUT} compared={n} ibs2={payload['identical']} ibs0={payload['opposite']}")


if __name__ == "__main__":
    main()
