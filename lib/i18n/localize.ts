import type { CatalogEntry, Profile } from "@/lib/types";
import type { Locale } from "./config";
import { daComingTeaser, daProfiles } from "./da-profiles";
import { getMessages } from "./messages";

function translateLabel(locale: Locale, label: string): string {
  if (locale === "en") return label;
  const t = getMessages(locale);
  return t.originLabels[label] ?? t.ancientLabels[label] ?? t.era[label] ?? t.place[label] ?? label;
}

export function localizeProfile(profile: Profile, locale: Locale): Profile {
  const t = getMessages(locale);
  const overlay = locale === "da" ? daProfiles[profile.slug] : undefined;

  const origins = profile.origins.map((o) => ({
    ...o,
    label: t.originLabels[o.id] ?? o.label,
    kicker: overlay?.origins?.[o.id]?.kicker ?? o.kicker,
    summary: overlay?.origins?.[o.id]?.summary ?? o.summary,
    detail: overlay?.origins?.[o.id]?.detail ?? o.detail,
  }));

  const ancientOrigins = profile.ancientOrigins.map((o) => ({
    ...o,
    label: t.ancientLabels[o.id] ?? o.label,
    era: overlay?.ancientOrigins?.[o.id]?.era ?? t.era[o.era] ?? o.era,
    when: overlay?.ancientOrigins?.[o.id]?.when ?? o.when,
    summary: overlay?.ancientOrigins?.[o.id]?.summary ?? o.summary,
    detail: overlay?.ancientOrigins?.[o.id]?.detail ?? o.detail,
  }));

  const haploPath = profile.haploPath.map((step) => ({
    ...step,
    era: t.era[step.era] ?? step.era,
    place: t.place[step.place] ?? step.place,
    copy: overlay?.haploPath?.[step.haplogroup]?.copy ?? step.copy,
  }));

  const connections = profile.connections.map((c) => ({
    ...c,
    place: t.place[c.place] ?? c.place,
    blurb: overlay?.connections?.[c.id]?.blurb ?? c.blurb,
  }));

  const heroStats = profile.heroStats.map((stat) => {
    const key =
      stat.label === "Scandinavia"
        ? t.stats.scandinavia
        : stat.label === "Central Europe"
          ? t.stats.centralEurope
          : stat.label === "Ireland"
            ? t.stats.ireland
            : stat.label === "Motherline"
              ? t.stats.motherline
              : stat.label === "Markers"
                ? t.stats.markers
                : stat.label;
    return { ...stat, label: key };
  });

  const kinship = profile.kinship
    ? {
        ...profile.kinship,
        role: t.kinshipRoles[profile.kinship.role as keyof typeof t.kinshipRoles] ?? profile.kinship.role,
        href: `/${locale}/shared`,
      }
    : undefined;

  return {
    ...profile,
    tagline: overlay?.tagline ?? profile.tagline,
    lede: overlay?.lede ?? profile.lede,
    heroAlt: overlay?.heroAlt ?? profile.heroAlt,
    tested: overlay?.tested ?? profile.tested,
    heroStats,
    originsHeadline: overlay?.originsHeadline ?? profile.originsHeadline,
    originsLede: overlay?.originsLede ?? profile.originsLede,
    origins,
    ancientHeadline: overlay?.ancientHeadline ?? profile.ancientHeadline,
    ancientLede: overlay?.ancientLede ?? profile.ancientLede,
    ancientOrigins,
    haplogroup: {
      ...profile.haplogroup,
      formed: overlay?.haplogroup?.formed ?? profile.haplogroup.formed,
      headline: overlay?.haplogroup?.headline ?? profile.haplogroup.headline,
      testers: {
        ...profile.haplogroup.testers,
        known: overlay?.haplogroup?.known ?? profile.haplogroup.testers.known,
      },
      rarityNote: overlay?.haplogroup?.rarityNote ?? profile.haplogroup.rarityNote,
    },
    haploPath,
    motherlineMapCaption: overlay?.motherlineMapCaption ?? profile.motherlineMapCaption,
    motherlineSpotlights: overlay?.motherlineSpotlights
      ? profile.motherlineSpotlights.map((card, i) => ({
          ...card,
          title: overlay.motherlineSpotlights![i]?.title ?? card.title,
          copy: overlay.motherlineSpotlights![i]?.copy ?? card.copy,
        }))
      : profile.motherlineSpotlights,
    connectionsLede: overlay?.connectionsLede ?? profile.connectionsLede,
    connections,
    genome: {
      ...profile.genome,
      painting: overlay?.genomePainting ?? profile.genome.painting,
    },
    kinship,
  };
}

export function localizeCatalog(entries: CatalogEntry[], locale: Locale): CatalogEntry[] {
  return entries.map((entry) => {
    if (entry.status === "coming") {
      return {
        ...entry,
        teaser: locale === "da" ? daComingTeaser : entry.teaser,
      };
    }
    return localizeProfile(entry, locale);
  });
}

void translateLabel;
