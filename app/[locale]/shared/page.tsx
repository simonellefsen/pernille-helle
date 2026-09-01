import Image from "next/image";
import Link from "next/link";
import { AncientCompare } from "@/components/AncientCompare";
import { ArchiveChrome } from "@/components/ArchiveChrome";
import { ChromosomeShare } from "@/components/ChromosomeShare";
import { IbdMap } from "@/components/IbdMap";
import { ParentalSplit } from "@/components/ParentalSplit";
import { MotherlineFork } from "@/components/MotherlineFork";
import { OriginCompare } from "@/components/OriginCompare";
import { Reveal } from "@/components/Reveal";
import sharing from "@/lib/data/sharing.json";
import {
  isLocale,
  languageAlternates,
  numberLocale,
  ogLocale,
  withLocale,
  type Locale,
} from "@/lib/i18n/config";
import { getMessages } from "@/lib/i18n/messages";
import type { Metadata } from "next";

type Params = { locale: string };

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const t = getMessages(locale);
  return {
    title: t.meta.sharedTitle,
    description: t.meta.sharedDescription,
    openGraph: {
      title: t.meta.sharedTitle,
      description: t.meta.sharedDescription,
      images: ["/images/kinship-shore.jpg"],
      locale: ogLocale(locale),
    },
    alternates: {
      canonical: withLocale(locale, "/shared"),
      languages: languageAlternates("/shared"),
    },
  };
}

export default async function SharedPage({ params }: { params: Promise<Params> }) {
  const { locale: raw } = await params;
  const locale: Locale = isLocale(raw) ? raw : "en";
  const t = getMessages(locale);
  const fmt = numberLocale(locale);
  const pctIdentical = (sharing.identical * 100).toFixed(1);
  const pctOpposite = (sharing.opposite * 100).toFixed(1);
  const compared = sharing.compared.toLocaleString(fmt);
  const xCompared = (sharing.chromosomes.find((c) => c.id === "X")?.compared ?? 0).toLocaleString(fmt);

  return (
    <main>
      <ArchiveChrome home={false} />
      <section className="relative isolate min-h-[100svh] overflow-hidden">
        <Image
          src="/images/kinship-shore.jpg"
          alt={t.shared.heroAlt}
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-bg via-transparent to-black/30" />
        <div className="relative z-10 mx-auto flex min-h-[100svh] w-full min-w-0 max-w-6xl flex-col justify-end px-5 pb-16 pt-24 md:justify-center md:px-8">
          <p className="kicker">{t.shared.heroKicker}</p>
          <h1 className="mt-4 max-w-3xl font-display text-[2.6rem] leading-[0.95] sm:text-6xl md:text-7xl">
            Helle &amp; Pernille
            <span className="block italic text-amber/90">{t.shared.heroAccent}</span>
          </h1>
          <p className="mt-6 max-w-xl text-sm leading-relaxed text-muted sm:text-lg">{t.shared.heroLede}</p>
          <div className="mt-8 flex flex-wrap gap-3 text-sm">
            <Link
              href={withLocale(locale, "/helle")}
              className="rounded-full border border-white/15 px-4 py-2 tracking-[0.16em] uppercase hover:border-white/40"
            >
              Helle
            </Link>
            <Link
              href={withLocale(locale, "/pernille")}
              className="rounded-full border border-white/15 px-4 py-2 tracking-[0.16em] uppercase hover:border-white/40"
            >
              Pernille
            </Link>
            <Link
              href={withLocale(locale, "/")}
              className="rounded-full px-4 py-2 tracking-[0.16em] text-amber uppercase"
            >
              {t.shared.allStories}
            </Link>
          </div>
        </div>
      </section>

      <section className="chapter">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <p className="kicker">{t.shared.relationKicker}</p>
            <h2 className="mt-3 max-w-3xl font-display text-4xl md:text-6xl">{t.shared.relationTitle}</h2>
          </Reveal>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <article className="rounded-3xl border border-white/10 p-6">
              <p className="kicker">Helle</p>
              <p className="mt-3 font-display text-2xl">{t.shared.helleRole}</p>
              <p className="mt-3 text-sm leading-relaxed text-muted">{t.shared.helleCopy}</p>
            </article>
            <article className="rounded-3xl border border-amber/30 bg-white/5 p-6">
              <p className="kicker">{t.shared.expected}</p>
              <p className="mt-3 font-display text-2xl">{t.shared.expectedTitle}</p>
              <p className="mt-3 text-sm leading-relaxed text-muted">{t.shared.expectedCopy}</p>
            </article>
            <article className="rounded-3xl border border-white/10 p-6">
              <p className="kicker">Pernille</p>
              <p className="mt-3 font-display text-2xl">{t.shared.pernilleRole}</p>
              <p className="mt-3 text-sm leading-relaxed text-muted">{t.shared.pernilleCopy}</p>
            </article>
          </div>
        </div>
      </section>

      <section className="chapter">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <p className="kicker">{t.shared.originsKicker}</p>
            <h2 className="mt-3 max-w-3xl font-display text-4xl md:text-6xl">
              {t.shared.originsTitle}
              <span className="italic text-amber">{t.shared.originsAccent}</span>
            </h2>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted">{t.shared.originsLede}</p>
          </Reveal>
          <div className="mt-10">
            <p className="mb-3 hidden text-xs tracking-[0.2em] text-faint uppercase md:block">
              {t.shared.rowHint}
            </p>
            <OriginCompare />
          </div>
        </div>
      </section>

      <section className="chapter">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <p className="kicker">{t.shared.deepKicker}</p>
            <h2 className="mt-3 max-w-3xl font-display text-4xl md:text-6xl">{t.shared.deepTitle}</h2>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted">{t.shared.deepLede}</p>
          </Reveal>
          <div className="mt-10">
            <AncientCompare />
          </div>
        </div>
      </section>

      <section className="chapter">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <p className="kicker">{t.shared.mitoKicker}</p>
            <h2 className="mt-3 max-w-3xl font-display text-4xl md:text-6xl">
              {t.shared.mitoTitle}
              <span className="italic text-rose">{t.shared.mitoAccent}</span>
            </h2>
          </Reveal>
          <div className="mt-10">
            <MotherlineFork />
          </div>
          <figure className="relative mt-8 h-56 overflow-hidden rounded-3xl md:h-72">
            <Image
              src="/images/kinship-threads.jpg"
              alt={t.shared.threadsAlt}
              fill
              className="object-cover"
              sizes="100vw"
            />
          </figure>
        </div>
      </section>

      <section className="chapter">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <p className="kicker">{t.shared.autoKicker}</p>
            <h2 className="mt-3 max-w-3xl font-display text-4xl md:text-6xl">{t.shared.autoTitle(compared)}</h2>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted">
              {t.shared.autoLede(pctIdentical, pctOpposite, xCompared)}
            </p>
          </Reveal>
          <div className="mt-10">
            <ChromosomeShare />
          </div>
          <IbdMap />
          <ParentalSplit />
          <p className="mt-6 max-w-3xl text-sm leading-relaxed text-faint">{t.shared.autoNote}</p>
        </div>
      </section>

      <section className="chapter pb-24">
        <div className="mx-auto max-w-3xl">
          <p className="kicker">{t.shared.togetherKicker}</p>
          <h2 className="mt-3 font-display text-4xl">{t.shared.togetherTitle}</h2>
          <p className="mt-5 leading-relaxed text-muted">{t.shared.togetherLede}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href={withLocale(locale, "/helle")}
              className="rounded-full bg-ink px-5 py-2 text-sm tracking-[0.16em] text-bg uppercase"
            >
              {t.shared.helleStory}
            </Link>
            <Link
              href={withLocale(locale, "/pernille")}
              className="rounded-full border border-white/15 px-5 py-2 text-sm tracking-[0.16em] uppercase"
            >
              {t.shared.pernilleStory}
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
