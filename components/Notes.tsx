import Link from "next/link";
import type { Locale } from "@/lib/i18n/config";
import { withLocale } from "@/lib/i18n/config";
import { getMessages } from "@/lib/i18n/messages";
import type { Profile } from "@/lib/types";

export function Notes({ profile, locale }: { profile: Profile; locale: Locale }) {
  const t = getMessages(locale);
  return (
    <section id="notes" className="chapter pb-24">
      <div className="mx-auto max-w-3xl">
        <p className="kicker">{t.notes.kicker}</p>
        <h2 className="mt-3 font-display text-4xl md:text-5xl">{t.notes.title}</h2>
        <div className="mt-8 space-y-5 text-muted leading-relaxed">
          <p>{t.notes.p1}</p>
          <p>{t.notes.p2(profile.haplogroup.id)}</p>
          <p>{t.notes.p3(profile.firstName)}</p>
          <p>{t.notes.p4(profile.firstName)}</p>
          {profile.kinship ? (
            <p>
              {t.notes.kinshipBefore(profile.firstName)}
              <Link href={withLocale(locale, "/shared")} className="text-amber hover:text-ink">
                {t.notes.sharedLink}
              </Link>
              {t.notes.kinshipAfter(profile.kinship.otherName, profile.kinship.role)}
            </p>
          ) : null}
        </div>
        <div className="hairline mt-12" />
        <p className="mt-6 text-sm text-faint">
          <Link href={withLocale(locale, "/")} className="text-amber hover:text-ink">
            {t.meta.siteTitle}
          </Link>
          {" · "}
          {t.notes.footer(profile.firstName)}
        </p>
      </div>
    </section>
  );
}
