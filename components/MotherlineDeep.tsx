"use client";

import Image from "next/image";
import { getScience } from "@/lib/i18n/science";
import { useI18n } from "@/lib/i18n/context";
import type { Profile } from "@/lib/types";
import { Reveal } from "./Reveal";

export function MotherlineDeep({ profile }: { profile: Profile }) {
  const { locale } = useI18n();
  const twig = getScience(locale).twigs[profile.haplogroup.id];
  if (!twig) return null;

  return (
    <div className="mt-16">
      <Reveal>
        <p className="kicker">{twig.kicker}</p>
        <h3 className="mt-3 max-w-3xl font-display text-3xl leading-[1.05] md:text-5xl">
          {twig.title}
          <span className="italic text-rose">{twig.accent}</span>
        </h3>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted">{twig.lede}</p>
      </Reveal>

      <figure className="relative mt-8 h-64 overflow-hidden rounded-3xl md:h-80">
        <Image src={twig.image} alt={twig.imageAlt} fill className="object-cover" sizes="100vw" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
      </figure>

      <div className="mt-8 grid gap-4 md:grid-cols-2">
        {twig.cards.map((card) => (
          <article key={card.title} className="rounded-3xl border border-white/10 bg-black/25 p-6">
            <h4 className="font-display text-2xl">{card.title}</h4>
            <p className="mt-3 text-sm leading-relaxed text-muted">{card.copy}</p>
          </article>
        ))}
      </div>

      <ul className="mt-8 space-y-3 rounded-3xl border border-white/10 p-6 text-sm text-muted">
        {twig.papers.map((p) => (
          <li key={p.cite}>
            <span className="text-ink">{p.cite}.</span> {p.point}
          </li>
        ))}
      </ul>
    </div>
  );
}
