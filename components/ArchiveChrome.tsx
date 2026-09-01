"use client";

import Link from "next/link";
import { useI18n } from "@/lib/i18n/context";
import { LanguageSwitcher } from "./LanguageSwitcher";

export function ArchiveChrome({ home = true }: { home?: boolean }) {
  const { href, t } = useI18n();
  return (
    <div className="pointer-events-none fixed inset-x-0 top-0 z-40 flex justify-end p-3">
      <div className="pointer-events-auto flex items-center gap-2">
        {!home ? (
          <Link
            href={href("/")}
            className="rounded-full border border-white/10 bg-black/45 px-3 py-1.5 text-[10px] tracking-[0.18em] text-amber uppercase backdrop-blur-md"
          >
            {t.nav.allStories}
          </Link>
        ) : null}
        <LanguageSwitcher />
      </div>
    </div>
  );
}
