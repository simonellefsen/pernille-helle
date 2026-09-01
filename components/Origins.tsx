"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { useI18n } from "@/lib/i18n/context";
import type { Profile } from "@/lib/types";
import { IrelandDeep } from "./IrelandDeep";
import { Reveal } from "./Reveal";

const TAU = Math.PI * 2;

function polar(cx: number, cy: number, r: number, a: number) {
  return [cx + r * Math.cos(a), cy + r * Math.sin(a)] as const;
}

function arc(cx: number, cy: number, r: number, start: number, end: number) {
  const large = end - start > Math.PI ? 1 : 0;
  const [sx, sy] = polar(cx, cy, r, start);
  const [ex, ey] = polar(cx, cy, r, end);
  return `M ${sx} ${sy} A ${r} ${r} 0 ${large} 1 ${ex} ${ey}`;
}

export function Origins({ profile }: { profile: Profile }) {
  const { t } = useI18n();
  const { origins } = profile;
  const [active, setActive] = useState(origins[0].id);
  const current = origins.find((o) => o.id === active) ?? origins[0];

  const slices = useMemo(() => {
    const r = 42;
    let cursor = -Math.PI / 2;
    return origins.map((o) => {
      const sweep = (o.percent / 100) * TAU;
      const start = cursor;
      const end = cursor + sweep;
      cursor = end;
      return { ...o, d: arc(50, 50, r, start, end), start, end };
    });
  }, [origins]);

  return (
    <section id="origins" className="chapter">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="kicker">{t.origins.kicker}</p>
          <h2 className="mt-3 max-w-3xl font-display text-4xl leading-[1.05] md:text-6xl">
            {profile.originsHeadline.lead}
            <span className="italic text-amber"> {profile.originsHeadline.accent}</span>
          </h2>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted">{profile.originsLede}</p>
        </Reveal>

        <div className="mt-12 grid items-center gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
          <Reveal>
            <div className="relative mx-auto w-full max-w-md">
              <svg viewBox="0 0 100 100" className="w-full drop-shadow-2xl" role="img" aria-label={t.origins.ringAria}>
                <circle cx="50" cy="50" r="42" fill="none" stroke="rgba(243,238,228,0.08)" strokeWidth="11" />
                {slices.map((s) => (
                  <path
                    key={s.id}
                    d={s.d}
                    fill="none"
                    stroke={s.color}
                    strokeWidth={active === s.id ? 13 : 9}
                    strokeLinecap="butt"
                    className="cursor-pointer transition-[stroke-width]"
                    onClick={() => setActive(s.id)}
                    onMouseEnter={() => setActive(s.id)}
                  >
                    <title>{`${s.label} ${s.display ?? `${s.percent}%`}`}</title>
                  </path>
                ))}
                <circle cx="50" cy="50" r="28" fill="#08090d" />
                <text x="50" y="48" textAnchor="middle" fill="#f3eee4" fontSize="9" fontFamily="Fraunces, serif">
                  {current.display ?? `${current.percent}%`}
                </text>
                <text x="50" y="58" textAnchor="middle" fill="#b7b0a4" fontSize="3.4" letterSpacing="0.12em">
                  {current.label.toUpperCase()}
                </text>
              </svg>
              <ul className="mt-6 flex flex-wrap justify-center gap-2">
                {origins.map((o) => (
                  <li key={o.id}>
                    <button
                      type="button"
                      onClick={() => setActive(o.id)}
                      className={`rounded-full border px-3 py-1.5 text-sm transition ${
                        active === o.id
                          ? "border-white/30 bg-white/10 text-ink"
                          : "border-white/10 text-muted hover:text-ink"
                      }`}
                    >
                      <span className="mr-2 inline-block h-2 w-2 rounded-full" style={{ background: o.color }} />
                      {o.label} {o.display ?? `${o.percent}%`}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <article className="overflow-hidden rounded-3xl border border-white/10 bg-white/5">
              <div className="relative h-56 md:h-72">
                <Image src={current.image} alt="" fill className="object-cover" sizes="(min-width: 1024px) 50vw, 100vw" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                <p className="absolute bottom-4 left-5 kicker">{current.kicker}</p>
              </div>
              <div className="space-y-3 p-6 md:p-8">
                <h3 className="font-display text-3xl">{current.label}</h3>
                <p className="text-muted leading-relaxed">{current.detail}</p>
              </div>
            </article>
          </Reveal>
        </div>
        <IrelandDeep profile={profile} />
      </div>
    </section>
  );
}
