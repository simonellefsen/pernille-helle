"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import { useIsPhone } from "@/lib/device-context";
import { stripLocale } from "@/lib/i18n/config";
import { useI18n } from "@/lib/i18n/context";
import { publishedProfiles } from "@/lib/profiles";
import { useActiveChapter } from "@/lib/use-active-chapter";
import { LanguageSwitcher } from "./LanguageSwitcher";

export function PhoneDock() {
  const { t, href } = useI18n();
  const isPhone = useIsPhone();
  const pathname = usePathname() || "/";
  const rest = stripLocale(pathname);
  const [open, setOpen] = useState(false);
  const chapterIds = useMemo(() => t.nav.chapters.map((c) => c.id), [t.nav.chapters]);
  const onProfile = publishedProfiles.some((p) => rest === `/${p.slug}`);
  const active = useActiveChapter(onProfile ? chapterIds : [], t.nav.chapters[0].id);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!isPhone) setOpen(false);
  }, [isPhone]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const goChapter = (id: string) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <>
      {open ? (
        <div className="phone-sheet" role="dialog" aria-modal="true" aria-label={t.nav.jump}>
          <button type="button" className="phone-sheet-backdrop" aria-label={t.nav.close} onClick={() => setOpen(false)} />
          <div className="phone-sheet-panel">
            <div className="flex items-center justify-between gap-3">
              <p className="kicker">{t.nav.jump}</p>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="rounded-full px-3 py-2 text-sm tracking-[0.16em] text-muted uppercase"
              >
                {t.nav.close}
              </button>
            </div>
            <ul className="mt-5 grid gap-2">
              {publishedProfiles.map((p) => {
                const on = rest === `/${p.slug}`;
                return (
                  <li key={p.slug}>
                    <Link
                      href={href(`/${p.slug}`)}
                      className={`flex min-h-12 items-center rounded-2xl border px-4 py-3 text-lg ${
                        on ? "border-amber/50 bg-white/10 text-ink" : "border-white/10 text-muted"
                      }`}
                      onClick={() => setOpen(false)}
                    >
                      {p.firstName}
                    </Link>
                  </li>
                );
              })}
              <li>
                <Link
                  href={href("/shared")}
                  className={`flex min-h-12 items-center rounded-2xl border px-4 py-3 text-lg ${
                    rest === "/shared" ? "border-amber/50 bg-white/10 text-ink" : "border-white/10 text-muted"
                  }`}
                  onClick={() => setOpen(false)}
                >
                  {t.nav.shared}
                </Link>
              </li>
            </ul>
            {onProfile ? (
              <>
                <p className="kicker mt-8">{t.nav.stories}</p>
                <ul className="mt-3 grid grid-cols-2 gap-2">
                  {t.nav.chapters.map((c) => {
                    const on = active === c.id;
                    return (
                      <li key={c.id}>
                        <button
                          type="button"
                          onClick={() => goChapter(c.id)}
                          className={`flex min-h-12 w-full items-center rounded-2xl border px-4 py-3 text-left ${
                            on ? "border-amber/50 bg-white/10 text-ink" : "border-white/10 text-muted"
                          }`}
                        >
                          {c.label}
                        </button>
                      </li>
                    );
                  })}
                </ul>
              </>
            ) : null}
          </div>
        </div>
      ) : null}

      <nav className="phone-dock" aria-label={t.nav.stories}>
        <Link href={href("/")} className={`phone-dock-item ${rest === "/" ? "is-on" : ""}`}>
          {t.nav.allStories}
        </Link>
        <button type="button" className={`phone-dock-item ${open ? "is-on" : ""}`} onClick={() => setOpen((v) => !v)}>
          {t.nav.jump}
        </button>
        <Link href={href("/shared")} className={`phone-dock-item ${rest === "/shared" ? "is-on" : ""}`}>
          {t.nav.shared}
        </Link>
        <div className="phone-dock-lang">
          <LanguageSwitcher />
        </div>
      </nav>
    </>
  );
}
