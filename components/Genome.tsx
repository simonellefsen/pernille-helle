"use client";

import { useMemo, useState } from "react";
import { numberLocale } from "@/lib/i18n/config";
import { useI18n } from "@/lib/i18n/context";
import type { Profile } from "@/lib/types";
import { AutosomalBeyond } from "./AutosomalBeyond";
import { Reveal } from "./Reveal";

export function Genome({ profile }: { profile: Profile }) {
  const { t, locale } = useI18n();
  const { chromosomes, genome } = profile;
  const max = useMemo(() => Math.max(...chromosomes.map((c) => c.snps)), [chromosomes]);
  const [active, setActive] = useState(chromosomes[0].id);
  const current = chromosomes.find((c) => c.id === active) ?? chromosomes[0];
  const share = ((current.snps / genome.snps) * 100).toFixed(1);

  return (
    <section id="genome" className="chapter">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="kicker">{t.genome.kicker}</p>
          <h2 className="mt-3 max-w-3xl font-display text-4xl leading-[1.05] md:text-6xl">
            {genome.snps.toLocaleString(numberLocale(locale))} {t.genome.markers}
            <span className="italic text-aurora">{t.genome.skyline}</span>
          </h2>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted">
            {t.genome.intro} {genome.painting}
          </p>
        </Reveal>

        <div className="mt-10 rounded-3xl border border-white/10 bg-black/25 p-5 md:p-8">
          <div className="skyline-scroll flex items-end gap-[2px] md:gap-1.5" role="list">
            {chromosomes.map((c) => {
              const on = c.id === active;
              const h = 8 + (c.snps / max) * 220;
              return (
                <button
                  key={c.id}
                  type="button"
                  role="listitem"
                  onClick={() => setActive(c.id)}
                  onMouseEnter={() => setActive(c.id)}
                  className="group flex flex-1 flex-col items-center gap-2"
                  aria-label={`${t.genome.chromosome(c.id)}, ${c.snps.toLocaleString(numberLocale(locale))} SNPs`}
                >
                  <span
                    className={`w-full rounded-t-sm transition ${
                      on ? "bg-amber" : c.id === "X" ? "bg-aurora/70" : "bg-aurora/40 group-hover:bg-aurora/70"
                    }`}
                    style={{ height: h }}
                  />
                  <span className={`text-[10px] md:text-xs ${on ? "text-ink" : "text-faint"}`}>{c.id}</span>
                </button>
              );
            })}
          </div>
          <div className="mt-8 flex flex-wrap items-end justify-between gap-4 border-t border-white/10 pt-5">
            <div>
              <p className="kicker">{t.genome.chromosome(current.id)}</p>
              <p className="mt-2 font-display text-4xl">
                {current.snps.toLocaleString(numberLocale(locale))}
                <span className="ml-2 text-lg text-muted">{t.genome.snpShare(share)}</span>
              </p>
            </div>
            <p className="max-w-md text-sm leading-relaxed text-muted">
              {genome.build}. {t.genome.hover}
            </p>
          </div>
        </div>
        <AutosomalBeyond profile={profile} />
      </div>
    </section>
  );
}
