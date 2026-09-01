import { localizeCatalog, localizeProfile } from "@/lib/i18n/localize";
import type { Locale } from "@/lib/i18n/config";
import { helle } from "./helle";
import { pernille } from "./pernille";
import type { CatalogEntry, Profile } from "@/lib/types";

export const publishedProfiles: Profile[] = [pernille, helle];

export const catalog: CatalogEntry[] = [pernille, helle];

export function getProfile(slug: string, locale: Locale = "en"): Profile | undefined {
  const base = publishedProfiles.find((p) => p.slug === slug);
  return base ? localizeProfile(base, locale) : undefined;
}

export function getCatalog(locale: Locale = "en"): CatalogEntry[] {
  return localizeCatalog(catalog, locale);
}

export { pernille, helle };
