import { Ancient } from "@/components/Ancient";
import { Connections } from "@/components/Connections";
import { Genome } from "@/components/Genome";
import { Hero } from "@/components/Hero";
import { KinshipBanner } from "@/components/KinshipBanner";
import { Motherline } from "@/components/Motherline";
import { Notes } from "@/components/Notes";
import { Origins } from "@/components/Origins";
import { SiteNav } from "@/components/SiteNav";
import type { Locale } from "@/lib/i18n/config";
import type { Profile } from "@/lib/types";

export function StoryView({ profile, locale }: { profile: Profile; locale: Locale }) {
  return (
    <>
      <SiteNav slug={profile.slug} />
      <main>
        <Hero profile={profile} locale={locale} />
        <KinshipBanner profile={profile} locale={locale} />
        <Origins profile={profile} />
        <Ancient profile={profile} />
        <Motherline profile={profile} />
        <Connections profile={profile} />
        <Genome profile={profile} />
        <Notes profile={profile} locale={locale} />
      </main>
    </>
  );
}
