"use client";

import { createContext, useContext } from "react";
import type { Locale } from "./config";
import { withLocale } from "./config";
import { getMessages, type Messages } from "./messages";

const I18nContext = createContext<{
  locale: Locale;
  t: Messages;
  href: (path?: string) => string;
} | null>(null);

export function I18nProvider({ locale, children }: { locale: Locale; children: React.ReactNode }) {
  const t = getMessages(locale);
  return (
    <I18nContext.Provider
      value={{
        locale,
        t,
        href: (path = "/") => withLocale(locale, path),
      }}
    >
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used within I18nProvider");
  return ctx;
}
