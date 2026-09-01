import type { Metadata } from "next";
import { Fraunces, Outfit } from "next/font/google";
import { notFound } from "next/navigation";
import { I18nProvider } from "@/lib/i18n/context";
import {
  isLocale,
  languageAlternates,
  locales,
  ogLocale,
  type Locale,
} from "@/lib/i18n/config";
import { getMessages } from "@/lib/i18n/messages";

const display = Fraunces({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const sans = Outfit({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

type Params = { locale: string };

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const t = getMessages(locale);
  return {
    title: {
      default: t.meta.siteTitle,
      template: "%s",
    },
    description: t.meta.siteDescription,
    openGraph: {
      title: t.meta.siteTitle,
      description: t.meta.siteOg,
      images: ["/images/archive-threads.jpg"],
      locale: ogLocale(locale),
      alternateLocale: locale === "da" ? ["en_GB"] : ["da_DK"],
    },
    alternates: {
      canonical: `/${locale}`,
      languages: languageAlternates("/"),
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<Params>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  return (
    <html lang={locale} className={`${display.variable} ${sans.variable}`}>
      <body className="antialiased">
        <I18nProvider locale={locale as Locale}>{children}</I18nProvider>
      </body>
    </html>
  );
}
