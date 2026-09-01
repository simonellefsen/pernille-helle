"use client";

import { useMemo, useState } from "react";
import beyond from "@/lib/data/beyond.json";
import { numberLocale } from "@/lib/i18n/config";
import { useI18n } from "@/lib/i18n/context";
import { getScience } from "@/lib/i18n/science";
import { Reveal } from "./Reveal";

type Seg = {
  chromosome: string;
  start: number;
  end: number;
  mb: number;
  snps: number;
  cM: number;
};

export function IbdMap() {
  const { locale } = useI18n();
  const s = getScience(locale);
  const fmt = numberLocale(locale);
  const { ibd } = beyond;
  const [active, setActive] = useState("13");
  const current = ibd.chromosomes.find((c) => c.id === active) ?? ibd.chromosomes[0];
  const blocks = useMemo(
    () => (ibd.segments as Seg[]).filter((seg) => seg.chromosome === current.id),
    [ibd.segments, current.id],
  );
  const autoCm = ibd.autosomalCm.toLocaleString(fmt, { maximumFractionDigits: 0 });
  const xCm = ibd.xCm.toLocaleString(fmt, { maximumFractionDigits: 0 });

  return (
    <div className="mt-8">
      <Reveal>
        <p className="kicker">{s.ibd.kicker}</p>
        <h3 className="mt-3 max-w-3xl font-display text-3xl leading-[1.05] md:text-5xl">
          {s.ibd.title}
          <span className="italic text-amber">{s.ibd.accent}</span>
        </h3>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted">
          {s.ibd.lede(autoCm, String(ibd.autosomalSegments), xCm)}
        </p>
      </Reveal>

      <div className="mt-8 rounded-3xl border border-white/10 bg-black/25 p-5 md:p-8">
        <p className="mb-6 text-sm text-muted">{s.ibd.hover}</p>
        <div className="flex items-end gap-[3px] md:gap-1.5">
          {ibd.chromosomes.map((c) => {
            const on = c.id === active;
            const h = 16 + (c.ibdCm / c.mapCm) * 180;
            return (
              <button
                key={c.id}
                type="button"
                onClick={() => setActive(c.id)}
                onMouseEnter={() => setActive(c.id)}
                className="flex flex-1 flex-col items-center gap-2"
                aria-label={s.ibd.chrom(c.id, c.ibdCm.toFixed(0), String(c.segments))}
              >
                <span
                  className={`w-full rounded-t-sm ${on ? "ring-1 ring-ink/40" : ""} ${
                    c.ibdCm === 0 ? "bg-white/10" : "bg-amber"
                  }`}
                  style={{ height: h }}
                />
                <span className={`text-[10px] md:text-xs ${on ? "text-ink" : "text-faint"}`}>{c.id}</span>
              </button>
            );
          })}
        </div>

        <div className="mt-8 border-t border-white/10 pt-5">
          <p className="kicker">{s.ibd.chrom(current.id, current.ibdCm.toFixed(1), String(current.segments))}</p>
          {current.ibdCm === 0 ? (
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted">{s.ibd.empty}</p>
          ) : (
            <div className="mt-4">
              <div className="relative h-6 overflow-hidden rounded-full bg-white/10">
                {blocks.map((seg) => (
                  <span
                    key={`${seg.start}-${seg.end}`}
                    className="absolute top-0 h-full bg-amber"
                    style={{
                      left: `${(seg.start / 1_000_000 / current.physMb) * 100}%`,
                      width: `${(seg.mb / current.physMb) * 100}%`,
                    }}
                    title={`${seg.cM} cM`}
                  />
                ))}
              </div>
              <ul className="mt-4 grid gap-2 text-sm text-muted md:grid-cols-2">
                {blocks.map((seg) => (
                  <li key={`${seg.start}-${seg.end}`}>
                    {seg.mb.toLocaleString(fmt, { maximumFractionDigits: 1 })} Mb · {seg.cM.toLocaleString(fmt, { maximumFractionDigits: 1 })} cM ·{" "}
                    {seg.snps.toLocaleString(fmt)} SNPs
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
      <p className="mt-6 max-w-3xl text-sm leading-relaxed text-faint">{s.ibd.note}</p>
    </div>
  );
}
