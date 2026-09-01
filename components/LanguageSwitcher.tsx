"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { stripLocale, withLocale, type Locale } from "@/lib/i18n/config";
import { useI18n } from "@/lib/i18n/context";

export function LanguageSwitcher() {
  const { locale, t } = useI18n();
  const pathname = usePathname() || "/";
  const rest = stripLocale(pathname);

  const btn = (code: Locale, label: string) => {
    const on = locale === code;
    return (
      <Link
        href={withLocale(code, rest)}
        hrefLang={code}
        className={`rounded-full px-2 py-0.5 text-[10px] tracking-[0.16em] uppercase ${
          on ? "bg-white/15 text-ink" : "text-faint hover:text-ink"
        }`}
        aria-current={on ? "true" : undefined}
      >
        {label}
      </Link>
    );
  };

  return (
    <div
      className="pointer-events-auto flex items-center gap-0.5 rounded-full border border-white/10 bg-black/45 p-1 backdrop-blur-md"
      aria-label={t.nav.language}
    >
      {btn("en", t.nav.langEn)}
      {btn("da", t.nav.langDa)}
    </div>
  );
}
