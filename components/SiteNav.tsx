"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useI18n } from "@/lib/i18n/context";
import { publishedProfiles } from "@/lib/profiles";
import { LanguageSwitcher } from "./LanguageSwitcher";

export function SiteNav({ slug }: { slug: string }) {
  const { t, href } = useI18n();
  const [active, setActive] = useState<string>(t.nav.chapters[0].id);
  const others = publishedProfiles.filter((p) => p.slug !== slug);

  useEffect(() => {
    const nodes = t.nav.chapters
      .map((c) => document.getElementById(c.id))
      .filter((n): n is HTMLElement => Boolean(n));
    const obs = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target.id) setActive(visible.target.id);
      },
      { threshold: [0.2, 0.45, 0.7], rootMargin: "-18% 0px -40% 0px" },
    );
    nodes.forEach((n) => obs.observe(n));
    return () => obs.disconnect();
  }, [t.nav.chapters]);

  return (
    <nav
      aria-label={t.nav.stories}
      className="pointer-events-none fixed inset-x-0 top-0 z-40 flex justify-center p-2 md:inset-auto md:top-1/2 md:right-5 md:-translate-y-1/2 md:p-0"
    >
      <div className="pointer-events-auto flex max-w-[calc(100vw-1rem)] flex-col items-stretch gap-2 md:max-w-none">
        <div className="hidden items-center justify-between gap-2 md:flex">
          <LanguageSwitcher />
        </div>
        <Link
          href={href("/")}
          className="hidden rounded-full border border-white/10 bg-black/45 px-3 py-1.5 text-center text-[10px] tracking-[0.18em] text-amber uppercase backdrop-blur-md md:block"
        >
          {t.nav.allStories}
        </Link>
        <ul className="flex gap-1 overflow-x-auto rounded-full border border-white/10 bg-black/45 px-1.5 py-1.5 backdrop-blur-md md:flex-col md:rounded-3xl md:px-2 md:py-3">
          <li className="shrink-0 md:hidden">
            <Link
              href={href("/")}
              className="flex items-center gap-2 whitespace-nowrap rounded-full px-2.5 py-1.5 text-[10px] tracking-[0.14em] text-amber uppercase"
            >
              {t.nav.stories}
            </Link>
          </li>
          {t.nav.chapters.map((c) => {
            const on = active === c.id;
            return (
              <li key={c.id} className="shrink-0">
                <a
                  href={`#${c.id}`}
                  className={`flex items-center gap-2 whitespace-nowrap rounded-full px-2.5 py-1.5 text-[10px] tracking-[0.14em] uppercase transition md:px-3 md:text-[11px] md:tracking-[0.18em] ${
                    on ? "bg-white/10 text-ink" : "text-faint hover:text-ink"
                  }`}
                >
                  <span className={`h-1.5 w-1.5 rounded-full ${on ? "bg-amber" : "bg-white/25"}`} />
                  <span className="md:inline">{c.label}</span>
                </a>
              </li>
            );
          })}
          <li className="shrink-0">
            <Link
              href={href("/shared")}
              className="flex items-center gap-2 whitespace-nowrap rounded-full px-2.5 py-1.5 text-[10px] tracking-[0.14em] text-amber uppercase hover:text-ink md:px-3 md:text-[11px] md:tracking-[0.18em]"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-amber" />
              {t.nav.shared}
            </Link>
          </li>
          {others.map((p) => (
            <li key={p.slug} className="hidden shrink-0 md:block">
              <Link
                href={href(`/${p.slug}`)}
                className="flex items-center gap-2 whitespace-nowrap rounded-full px-3 py-1.5 text-[11px] tracking-[0.18em] text-muted uppercase hover:text-ink"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-aurora/60" />
                {p.firstName}
              </Link>
            </li>
          ))}
        </ul>
        <div className="flex justify-center md:hidden">
          <LanguageSwitcher />
        </div>
      </div>
    </nav>
  );
}
