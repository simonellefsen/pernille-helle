import Image from "next/image";
import Link from "next/link";
import { ArchiveChrome } from "@/components/ArchiveChrome";
import { isLocale, languageAlternates, withLocale, type Locale } from "@/lib/i18n/config";
import { getMessages } from "@/lib/i18n/messages";
import { getCatalog } from "@/lib/profiles";
import type { Metadata } from "next";

type Params = { locale: string };

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const t = getMessages(locale);
  return {
    title: t.meta.siteTitle,
    description: t.meta.siteDescription,
    alternates: {
      canonical: withLocale(locale, "/"),
      languages: languageAlternates("/"),
    },
  };
}

export default async function HomePage({ params }: { params: Promise<Params> }) {
  const { locale: raw } = await params;
  const locale: Locale = isLocale(raw) ? raw : "en";
  const t = getMessages(locale);
  const entries = getCatalog(locale);

  return (
    <main>
      <ArchiveChrome />
      <section className="relative isolate min-h-[70svh] overflow-hidden">
        <Image
          src="/images/archive-threads.jpg"
          alt=""
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/70 to-black/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-bg via-transparent to-black/40" />
        <div className="relative z-10 mx-auto flex min-h-[70svh] w-full min-w-0 max-w-6xl flex-col justify-end px-5 pb-16 pt-20 md:justify-center md:px-8">
          <p className="kicker">{t.home.kicker}</p>
          <h1 className="mt-4 max-w-3xl font-display text-[2.5rem] leading-[0.95] sm:text-6xl md:text-7xl">
            {t.meta.siteTitle}
            <span className="block italic text-amber/90">
              {t.home.titleAccent1} <br className="sm:hidden" />
              {t.home.titleAccent2}
            </span>
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted sm:text-lg">{t.home.lede}</p>
        </div>
      </section>

      <section className="chapter">
        <div className="mx-auto max-w-6xl">
          <p className="kicker">{t.home.stories}</p>
          <h2 className="mt-3 font-display text-4xl md:text-5xl">{t.home.openGenome}</h2>
          <Link
            href={withLocale(locale, "/shared")}
            className="group relative mt-10 flex min-h-56 overflow-hidden rounded-3xl border border-amber/25"
          >
            <Image
              src="/images/kinship-shore.jpg"
              alt=""
              fill
              className="object-cover transition duration-700 group-hover:scale-105"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black via-black/55 to-black/20" />
            <div className="relative z-10 mt-auto p-7 md:p-10">
              <p className="kicker">{t.home.sharedKicker}</p>
              <h3 className="mt-2 font-display text-3xl md:text-5xl">{t.home.sharedTitle}</h3>
              <p className="mt-3 max-w-xl text-muted">{t.home.sharedLede}</p>
            </div>
          </Link>
          <ul className="mt-10 grid gap-6 md:grid-cols-2">
            {entries.map((entry) => {
              if (entry.status === "coming") {
                return (
                  <li
                    key={entry.slug}
                    className="flex min-h-72 flex-col justify-between rounded-3xl border border-dashed border-white/15 bg-white/3 p-7"
                  >
                    <div>
                      <p className="kicker">{t.home.coming}</p>
                      <h3 className="mt-3 font-display text-3xl text-muted">{t.home.nextKit}</h3>
                      <p className="mt-3 leading-relaxed text-muted">{entry.teaser}</p>
                    </div>
                    <p className="text-sm tracking-[0.2em] text-faint uppercase">{t.home.waiting}</p>
                  </li>
                );
              }

              const lead = entry.origins[0];
              return (
                <li key={entry.slug}>
                  <Link
                    href={withLocale(locale, `/${entry.slug}`)}
                    className="group relative flex min-h-72 overflow-hidden rounded-3xl border border-white/10"
                  >
                    <Image
                      src={entry.heroImage}
                      alt=""
                      fill
                      className="object-cover transition duration-700 group-hover:scale-105"
                      sizes="(min-width: 1024px) 33vw, 100vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/45 to-black/10" />
                    <div className="relative z-10 mt-auto p-7">
                      <p className="kicker">{entry.haplogroup.id}</p>
                      <h3 className="mt-2 font-display text-4xl">{entry.firstName}</h3>
                      <p className="mt-2 text-sm text-muted">{entry.tagline}</p>
                      <p className="mt-4 text-sm text-ink/80">
                        {lead.label} {lead.display ?? `${lead.percent}%`}
                      </p>
                    </div>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </section>
    </main>
  );
}
