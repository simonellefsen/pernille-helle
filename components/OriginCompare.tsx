"use client";

import { useState } from "react";
import { useI18n } from "@/lib/i18n/context";
import { originCompare } from "@/lib/kinship";

export function OriginCompare() {
  const { t } = useI18n();
  const [focus, setFocus] = useState(originCompare[0].id);
  const current = originCompare.find((r) => r.id === focus) ?? originCompare[0];

  return (
    <div className="space-y-6">
      <div className="grid gap-3">
        {originCompare.map((row) => {
          const on = row.id === focus;
          return (
            <button
              key={row.id}
              type="button"
              onClick={() => setFocus(row.id)}
              className={`rounded-2xl border p-4 text-left transition ${
                on ? "border-white/25 bg-white/8" : "border-white/10 hover:border-white/20"
              }`}
            >
              <div className="mb-2 flex items-center justify-between gap-3 text-sm">
                <span>{t.originLabels[row.id] ?? row.label}</span>
                <span className="text-muted">
                  Pernille {row.pernilleDisplay ?? `${row.pernille}%`} · Helle {row.helle}%
                </span>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div className="h-2 overflow-hidden rounded-full bg-white/10">
                  <div
                    className="h-full rounded-full"
                    style={{ width: `${row.pernille}%`, background: row.color }}
                  />
                </div>
                <div className="h-2 overflow-hidden rounded-full bg-white/10">
                  <div
                    className="h-full rounded-full"
                    style={{ width: `${row.helle}%`, background: row.color, opacity: 0.85 }}
                  />
                </div>
              </div>
            </button>
          );
        })}
      </div>
      <p className="text-sm leading-relaxed text-muted">
        {t.shared.originBlurb}
        {current.id === "ireland"
          ? t.shared.irelandBlurb
          : current.id === "isles"
            ? t.shared.islesBlurb
            : current.id === "scandinavia"
              ? t.shared.scandBlurb
              : ""}
      </p>
    </div>
  );
}
