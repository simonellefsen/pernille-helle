"use client";

import Image from "next/image";
import { useState } from "react";
import { useI18n } from "@/lib/i18n/context";
import type { Profile } from "@/lib/types";
import { Reveal } from "./Reveal";

export function Ancient({ profile }: { profile: Profile }) {
  const { t } = useI18n();
  const { ancientOrigins } = profile;
  const [active, setActive] = useState(ancientOrigins[0].id);
  const current = ancientOrigins.find((o) => o.id === active) ?? ancientOrigins[0];

  return (
    <section id="ancient" className="chapter bg-[linear-gradient(180deg,transparent,rgba(16,18,24,0.9),transparent)]">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="kicker">{t.ancient.kicker}</p>
          <h2 className="mt-3 max-w-3xl font-display text-4xl leading-[1.05] md:text-6xl">
            {profile.ancientHeadline.lead}
            <span className="italic text-rose"> {profile.ancientHeadline.mid}</span>
            <span className="italic text-amber"> {profile.ancientHeadline.end}</span>
          </h2>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted">{profile.ancientLede}</p>
        </Reveal>

        <div className="mt-10 overflow-hidden rounded-full border border-white/10">
          <div className="flex h-4">
            {ancientOrigins.map((o) => (
              <button
                key={o.id}
                type="button"
                onClick={() => setActive(o.id)}
                style={{ width: `${o.percent}%`, background: o.color }}
                className={`h-full transition opacity-90 hover:opacity-100 ${active === o.id ? "opacity-100" : ""}`}
                aria-label={`${o.label} ${o.percent}%`}
              />
            ))}
          </div>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {ancientOrigins.map((o) => {
            const on = o.id === active;
            return (
              <button
                key={o.id}
                type="button"
                onClick={() => setActive(o.id)}
                className={`rounded-2xl border p-5 text-left transition ${
                  on ? "border-white/25 bg-white/8" : "border-white/10 bg-white/3 hover:border-white/20"
                }`}
              >
                <div className="flex items-center gap-3">
                  <span className="relative h-12 w-12 overflow-hidden rounded-full">
                    <Image src={o.emblem} alt="" fill className="object-cover" sizes="48px" />
                  </span>
                  <div>
                    <p className="text-sm text-muted">{o.era}</p>
                    <p className="font-display text-2xl" style={{ color: o.color }}>
                      {o.percent}%
                    </p>
                  </div>
                </div>
                <h3 className="mt-4 text-lg">{o.label}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{o.summary}</p>
              </button>
            );
          })}
        </div>

        <Reveal className="mt-8" delay={0.05}>
          <article className="grid overflow-hidden rounded-3xl border border-white/10 md:grid-cols-2">
            <div className="relative min-h-64">
              <Image src={current.image} alt="" fill className="object-cover" sizes="(min-width: 768px) 50vw, 100vw" />
            </div>
            <div className="bg-black/30 p-7 md:p-10">
              <p className="kicker">{current.when}</p>
              <h3 className="mt-3 font-display text-3xl">{current.label}</h3>
              <p className="mt-4 leading-relaxed text-muted">{current.detail}</p>
            </div>
          </article>
        </Reveal>
      </div>
    </section>
  );
}
