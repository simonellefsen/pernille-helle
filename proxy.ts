import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { isLocale, localeFromHeader } from "@/lib/i18n/config";

const COOKIE = "NEXT_LOCALE";
const YEAR = 60 * 60 * 24 * 365;

function withLocaleCookie(response: NextResponse, locale: string) {
  response.cookies.set(COOKIE, locale, { path: "/", maxAge: YEAR });
  return response;
}

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/images") ||
    pathname.startsWith("/sprites") ||
    pathname === "/icon" ||
    pathname === "/apple-icon" ||
    pathname.includes(".")
  ) {
    return NextResponse.next();
  }

  const first = pathname.split("/")[1];
  if (first && isLocale(first)) {
    const requestHeaders = new Headers(request.headers);
    requestHeaders.set("x-locale", first);
    const response = NextResponse.next({ request: { headers: requestHeaders } });
    response.headers.set("x-locale", first);
    return withLocaleCookie(response, first);
  }

  const cookie = request.cookies.get(COOKIE)?.value;
  const locale =
    cookie && isLocale(cookie) ? cookie : localeFromHeader(request.headers.get("accept-language"));
  const url = request.nextUrl.clone();
  url.pathname = `/${locale}${pathname === "/" ? "" : pathname}`;
  return withLocaleCookie(NextResponse.redirect(url), locale);
}

export const config = {
  matcher: ["/((?!_next|.*\\..*).*)"],
};
