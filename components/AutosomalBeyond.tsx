"use client";

import beyond from "@/lib/data/beyond.json";
import { numberLocale } from "@/lib/i18n/config";
import { useI18n } from "@/lib/i18n/context";
import { getScience } from "@/lib/i18n/science";
import type { Profile } from "@/lib/types";
import { Reveal } from "./Reveal";

export function AutosomalBeyond({ profile }: { profile: Profile }) {
  const { locale } = useI18n();
  const s = getScience(locale);
  const fmt = numberLocale(locale);
  const isHelle = profile.slug === "helle";
  const het = isHelle ? beyond.heterozygosity.helle : beyond.heterozygosity.pernille;
  const roh = isHelle ? beyond.roh.helle : beyond.roh.pernille;
  const hetPct = (het.heterozygosity * 100).toLocaleString(fmt, { maximumFractionDigits: 1 });
  const longestRoh = roh[0] ? roh[0].cM.toLocaleString(fmt, { maximumFractionDigits: 1 }) : "0";

  return (
    <div className="mt-16">
      <Reveal>
        <p className="kicker">{s.beyond.kicker}</p>
        <h3 className="mt-3 max-w-3xl font-display text-3xl leading-[1.05] md:text-5xl">
          {s.beyond.title}
          <span className="italic text-aurora">{s.beyond.accent}</span>
        </h3>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted">{s.beyond.lede}</p>
      </Reveal>

      <article className="mt-8 rounded-3xl border border-amber/25 bg-white/4 p-6 md:p-8">
        <p className="kicker">{s.beyond.modelTitle}</p>
        <p className="mt-4 leading-relaxed text-muted">{s.beyond.modelCopy}</p>
      </article>

      <div className="mt-8 grid gap-4 md:grid-cols-2">
        <article className="rounded-3xl border border-white/10 p-6">
          <p className="kicker">{s.beyond.hetTitle}</p>
          <p className="mt-3 font-display text-3xl">{hetPct}%</p>
          <p className="mt-3 text-sm leading-relaxed text-muted">
            {s.beyond.hetCopy(profile.firstName, hetPct)}
          </p>
        </article>
        <article className="rounded-3xl border border-white/10 p-6">
          <p className="kicker">{s.beyond.rohTitle}</p>
          <p className="mt-3 font-display text-3xl">{roh.length}</p>
          <p className="mt-3 text-sm leading-relaxed text-muted">
            {s.beyond.rohCopy(String(roh.length), longestRoh)}
          </p>
        </article>
      </div>
    </div>
  );
}

