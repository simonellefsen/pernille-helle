import { notFound } from "next/navigation";
import { StoryView } from "@/components/StoryView";
import { isLocale, languageAlternates, locales, ogLocale, withLocale } from "@/lib/i18n/config";
import { getMessages } from "@/lib/i18n/messages";
import { getProfile, publishedProfiles } from "@/lib/profiles";
import type { Metadata } from "next";

type Params = { locale: string; slug: string };

export function generateStaticParams() {
  return locales.flatMap((locale) => publishedProfiles.map((p) => ({ locale, slug: p.slug })));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { locale, slug } = await params;
  if (!isLocale(locale)) return { title: "Not found" };
  const profile = getProfile(slug, locale);
  const t = getMessages(locale);
  if (!profile) return { title: "Not found" };
  const path = `/${slug}`;
  return {
    title: t.meta.profileTitle(profile.firstName),
    description: profile.lede,
    openGraph: {
      title: t.meta.profileTitle(profile.firstName),
      description: profile.lede,
      images: [profile.heroImage],
      locale: ogLocale(locale),
    },
    alternates: {
      canonical: withLocale(locale, path),
      languages: languageAlternates(path),
    },
  };
}

export default async function ProfilePage({ params }: { params: Promise<Params> }) {
  const { locale, slug } = await params;
  if (!isLocale(locale)) notFound();
  const profile = getProfile(slug, locale);
  if (!profile) notFound();
  return <StoryView profile={profile} locale={locale} />;
}
