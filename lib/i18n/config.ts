export const locales = ["en", "da"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "en";

export function isLocale(value: string): value is Locale {
  return value === "en" || value === "da";
}

export function localeFromHeader(header: string | null): Locale {
  if (!header) return defaultLocale;
  const parts = header.split(",").map((part) => {
    const [tag, ...params] = part.trim().split(";");
    const q = params.find((p) => p.trim().startsWith("q="));
    const quality = q ? Number(q.trim().slice(2)) : 1;
    return { tag: tag.toLowerCase(), quality: Number.isFinite(quality) ? quality : 1 };
  });
  parts.sort((a, b) => b.quality - a.quality);
  for (const { tag } of parts) {
    if (tag === "da" || tag.startsWith("da-")) return "da";
    if (tag === "en" || tag.startsWith("en-")) return "en";
  }
  return defaultLocale;
}

export function withLocale(locale: Locale, path = "/"): string {
  const clean = path === "/" ? "" : path.startsWith("/") ? path : `/${path}`;
  return `/${locale}${clean}`;
}

export function stripLocale(pathname: string): string {
  const parts = pathname.split("/");
  if (parts[1] && isLocale(parts[1])) {
    const rest = parts.slice(2).join("/");
    return rest ? `/${rest}` : "/";
  }
  return pathname || "/";
}

export function localeFromPath(pathname: string): Locale | null {
  const first = pathname.split("/")[1];
  return first && isLocale(first) ? first : null;
}

export function numberLocale(locale: Locale): string {
  return locale === "da" ? "da-DK" : "en-GB";
}

export function ogLocale(locale: Locale): string {
  return locale === "da" ? "da_DK" : "en_GB";
}

export function languageAlternates(path = "/"): Record<string, string> {
  return {
    en: withLocale("en", path),
    da: withLocale("da", path),
    "x-default": withLocale("en", path),
  };
}
