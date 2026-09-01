"use client";

import { useI18n } from "@/lib/i18n/context";
import { ancientCompare } from "@/lib/kinship";

export function AncientCompare() {
  const { t } = useI18n();
  return (
    <div className="grid gap-4 md:grid-cols-3">
      {ancientCompare.map((row) => (
        <article key={row.id} className="rounded-2xl border border-white/10 p-5">
          <p className="text-sm text-muted">{t.ancientLabels[row.id] ?? row.label}</p>
          <p className="mt-2 font-display text-3xl" style={{ color: row.color }}>
            {row.pernille}%
            <span className="mx-2 text-lg text-faint">/</span>
            {row.helle}%
          </p>
          <p className="mt-1 text-xs tracking-[0.16em] text-faint uppercase">{t.shared.compareNames}</p>
          <div className="mt-4 space-y-2">
            <div className="h-1.5 overflow-hidden rounded-full bg-white/10">
              <div className="h-full" style={{ width: `${row.pernille}%`, background: row.color }} />
            </div>
            <div className="h-1.5 overflow-hidden rounded-full bg-white/10">
              <div className="h-full opacity-80" style={{ width: `${row.helle}%`, background: row.color }} />
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}
