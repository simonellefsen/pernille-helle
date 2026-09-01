"use client";

import split from "@/lib/data/split.json";
import { numberLocale } from "@/lib/i18n/config";
import { useI18n } from "@/lib/i18n/context";
import { getScience } from "@/lib/i18n/science";
import { Reveal } from "./Reveal";

const ORIGIN_ORDER = ["scandinavia", "central-europe", "ireland", "isles"] as const;
const ANCIENT_ORDER = ["hunter", "farmer", "invader"] as const;

function pct(n: number, fmt: string, digits = 0) {
  return n.toLocaleString(fmt, { maximumFractionDigits: digits, minimumFractionDigits: digits });
}

export function ParentalSplit() {
  const { locale, t } = useI18n();
  const s = getScience(locale);
  const fmt = numberLocale(locale);
  const f = split.fractions;
  const hellePct = pct(f.helleAssignedAutosomalPct, fmt, 1);
  const motherPct = pct(f.motherAutosomalPct, fmt, 0);
  const pgfPct = pct(f.notHellePaternalPct, fmt, 1);
  const maternalN = split.maternalInformative.x.toLocaleString(fmt);
  const xPct = pct(f.xHellePctOfMap, fmt, 0);

  return (
    <div className="mt-16">
      <Reveal>
        <p className="kicker">{s.split.kicker}</p>
        <h3 className="mt-3 max-w-3xl font-display text-3xl leading-[1.05] md:text-5xl">
          {s.split.title}
          <span className="italic text-rose">{s.split.accent}</span>
        </h3>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted">{s.split.lede}</p>
      </Reveal>

      <div className="mt-10 grid gap-4 md:grid-cols-3">
        <article className="rounded-3xl border border-rose/30 bg-white/4 p-6">
          <p className="kicker">{s.split.mother}</p>
          <p className="mt-3 font-display text-4xl">{motherPct}%</p>
          <p className="mt-3 text-sm leading-relaxed text-muted">{s.split.motherCopy}</p>
        </article>
        <article className="rounded-3xl border border-amber/30 bg-white/4 p-6">
          <p className="kicker">{s.split.helle}</p>
          <p className="mt-3 font-display text-4xl">{hellePct}%</p>
          <p className="mt-3 text-sm leading-relaxed text-muted">
            {s.split.helleCopy(hellePct, String(f.expectedHellePct))}
          </p>
        </article>
        <article className="rounded-3xl border border-white/10 p-6">
          <p className="kicker">{s.split.grandfather}</p>
          <p className="mt-3 font-display text-4xl">{pgfPct}%</p>
          <p className="mt-3 text-sm leading-relaxed text-muted">{s.split.grandfatherCopy}</p>
        </article>
      </div>

      <div className="mt-10">
        <p className="kicker">{s.split.originsTitle}</p>
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted">{s.split.originsLede}</p>
        <div className="mt-6 overflow-x-auto">
          <table className="w-full min-w-[32rem] text-left text-sm">
            <thead className="text-xs tracking-[0.16em] text-faint uppercase">
              <tr>
                <th className="pb-3 font-normal" />
                <th className="pb-3 font-normal">{s.split.colHelle}</th>
                <th className="pb-3 font-normal">{s.split.colPernille}</th>
                <th className="pb-3 font-normal">{s.split.colOther}</th>
              </tr>
            </thead>
            <tbody className="text-muted">
              {ORIGIN_ORDER.map((id) => {
                const row = split.origins[id];
                const other = row.otherThreeQuarters < 0 ? "—" : `${pct(row.otherThreeQuarters, fmt, 0)}%`;
                return (
                  <tr key={id} className="border-t border-white/10">
                    <td className="py-3 text-ink">{t.originLabels[id] ?? id}</td>
                    <td className="py-3">{pct(row.helle, fmt, 0)}%</td>
                    <td className="py-3">{id === "isles" ? "<2%" : `${pct(row.pernille, fmt, 0)}%`}</td>
                    <td className="py-3 text-amber">{other}</td>
                  </tr>
                );
              })}
              {ANCIENT_ORDER.map((id) => {
                const row = split.ancient[id];
                return (
                  <tr key={id} className="border-t border-white/10">
                    <td className="py-3 text-ink">{t.ancientLabels[id] ?? id}</td>
                    <td className="py-3">{pct(row.helle, fmt, 0)}%</td>
                    <td className="py-3">{pct(row.pernille, fmt, 0)}%</td>
                    <td className="py-3">{pct(row.otherThreeQuarters, fmt, 0)}%</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      <article className="mt-8 rounded-3xl border border-amber/25 bg-white/4 p-6 md:p-8">
        <p className="kicker">{s.split.irelandTitle}</p>
        <p className="mt-4 leading-relaxed text-muted">{s.split.irelandCopy}</p>
      </article>

      <div className="mt-8 grid gap-4 md:grid-cols-2">
        <article className="rounded-3xl border border-white/10 p-6">
          <p className="kicker">{s.split.chromTitle}</p>
          <p className="mt-4 text-sm text-amber">{s.split.chromHelle}</p>
          <p className="mt-1 font-display text-2xl">{split.chromosomes.mostlyHelle.join(" · ")}</p>
          <p className="mt-4 text-sm text-muted">{s.split.chromSilent}</p>
          <p className="mt-1 font-display text-2xl">{split.chromosomes.silent.join(" · ")}</p>
        </article>
        <article className="rounded-3xl border border-white/10 p-6">
          <p className="kicker">{s.split.xTitle}</p>
          <p className="mt-3 leading-relaxed text-muted">{s.split.xCopy(xPct, maternalN)}</p>
          <p className="mt-4 text-sm text-amber">{s.split.mitoTitle}</p>
          <p className="mt-2 text-sm leading-relaxed text-muted">{s.split.mitoCopy}</p>
        </article>
      </div>

      <p className="mt-6 max-w-3xl text-sm leading-relaxed text-faint">{s.split.note}</p>
    </div>
  );
}
