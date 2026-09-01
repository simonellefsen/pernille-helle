"use client";

import { useI18n } from "@/lib/i18n/context";
import { getScience } from "@/lib/i18n/science";
import type { Profile } from "@/lib/types";
import { Reveal } from "./Reveal";

export function IrelandDeep({ profile }: { profile: Profile }) {
  const { locale } = useI18n();
  if (!profile.origins.some((o) => o.id === "ireland" && o.percent >= 10)) return null;
  const s = getScience(locale).ireland;

  return (
    <div className="mt-16">
      <Reveal>
        <p className="kicker">{s.kicker}</p>
        <h3 className="mt-3 max-w-3xl font-display text-3xl leading-[1.05] md:text-5xl">
          {s.title}
          <span className="italic text-amber">{s.accent}</span>
        </h3>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted">{s.lede}</p>
      </Reveal>
      <div className="mt-8 grid gap-4 md:grid-cols-2">
        {s.cards.map((card) => (
          <article key={card.title} className="rounded-3xl border border-white/10 bg-black/25 p-6">
            <h4 className="font-display text-2xl">{card.title}</h4>
            <p className="mt-3 text-sm leading-relaxed text-muted">{card.copy}</p>
          </article>
        ))}
      </div>
    </div>
  );
}
