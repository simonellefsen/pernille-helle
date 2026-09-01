import Image from "next/image";
import type { Locale } from "@/lib/i18n/config";
import { getMessages } from "@/lib/i18n/messages";
import type { Profile } from "@/lib/types";

const statColor = {
  aurora: "text-aurora",
  amber: "text-amber",
  ink: "text-ink",
  rose: "text-rose",
} as const;

export function Hero({ profile, locale }: { profile: Profile; locale: Locale }) {
  const t = getMessages(locale);
  return (
    <section id="open" className="relative isolate min-h-[100svh] overflow-hidden">
      <Image
        src={profile.heroImage}
        alt={profile.heroAlt}
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/25" />
      <div className="absolute inset-0 bg-gradient-to-t from-bg via-transparent to-black/30" />
      <Image
        src="/images/helix.png"
        alt=""
        width={920}
        height={520}
        className="pointer-events-none absolute -right-10 top-1/2 hidden w-[58vw] max-w-3xl -translate-y-1/2 opacity-70 mix-blend-screen md:block"
      />

      <div className="relative z-10 mx-auto flex min-h-[100svh] w-full min-w-0 max-w-6xl flex-col justify-end px-5 pb-16 pt-24 md:justify-center md:px-8 md:pt-28 md:pb-24 md:pr-28">
        <p className="kicker max-w-full whitespace-normal break-words text-[0.62rem] tracking-[0.14em] md:text-[0.72rem] md:tracking-[0.28em]">
          {profile.tested}
        </p>
        <h1 className="mt-4 max-w-3xl text-[2.7rem] leading-[0.95] text-ink sm:text-7xl md:text-8xl">
          {profile.firstName}
          <span className="block italic text-amber/90">{t.hero.storySuffix}</span>
        </h1>
        <p className="mt-5 max-w-xl text-base leading-relaxed text-muted sm:text-lg md:text-xl">
          {profile.lede}
        </p>

        <dl className="mt-8 grid w-full min-w-0 max-w-2xl grid-cols-3 gap-2 border-t border-white/10 pt-5 sm:gap-4 sm:pt-6">
          {profile.heroStats.map((stat) => (
            <div key={stat.label} className="min-w-0">
              <dt className="text-[10px] tracking-[0.14em] text-faint uppercase sm:text-[11px] sm:tracking-[0.2em]">
                {stat.label}
              </dt>
              <dd
                className={`mt-1 font-display text-2xl sm:text-3xl md:text-4xl ${
                  statColor[stat.color ?? "ink"]
                }`}
              >
                {stat.shortValue ? (
                  <>
                    <span className="md:hidden">{stat.shortValue}</span>
                    <span className="hidden md:inline">{stat.value}</span>
                  </>
                ) : (
                  stat.value
                )}
              </dd>
            </div>
          ))}
        </dl>

        <a
          href="#origins"
          className="mt-12 inline-flex w-fit items-center gap-3 text-sm tracking-[0.22em] text-ink/80 uppercase"
        >
          {t.hero.begin}
          <span className="block h-8 w-px bg-amber/80" />
        </a>
      </div>
    </section>
  );
}
