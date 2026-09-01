import Link from "next/link";
import type { Locale } from "@/lib/i18n/config";
import { withLocale } from "@/lib/i18n/config";
import { getMessages } from "@/lib/i18n/messages";
import type { Profile } from "@/lib/types";

export function KinshipBanner({ profile, locale }: { profile: Profile; locale: Locale }) {
  if (!profile.kinship) return null;
  const t = getMessages(locale);
  const k = profile.kinship;
  const sentence =
    k.role === t.kinshipRoles["paternal grandmother"] || k.role === "paternal grandmother"
      ? t.kinshipBanner.grandmother(k.otherName, profile.firstName)
      : t.kinshipBanner.granddaughter(profile.firstName, k.otherName);

  return (
    <div className="border-y border-white/10 bg-white/4">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-5 py-4 md:px-8 md:pr-28">
        <p className="text-sm text-muted">
          <span className="text-ink">{sentence}</span> {t.kinshipBanner.rest}
        </p>
        <Link
          href={withLocale(locale, "/shared")}
          className="shrink-0 text-sm tracking-[0.18em] text-amber uppercase hover:text-ink"
        >
          {t.kinshipBanner.cta}
        </Link>
      </div>
    </div>
  );
}
