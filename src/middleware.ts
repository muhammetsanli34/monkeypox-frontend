import createMiddleware from "next-intl/middleware";
import { pathnames, locales, localePrefix, defaultLocale } from "./localization/config";
import { NextRequest } from "next/server";

// Mevcut middleware'i oluştur
const intlMiddleware = createMiddleware({
  defaultLocale,
  locales,
  pathnames,
  localePrefix,
  localeDetection: true,
});

export function middleware(request: NextRequest) {
  // last request url
  const xUrl = request.nextUrl.pathname.split("/").pop() || "/";
  request.headers.set("x-url", xUrl);

  // Mevcut middleware'i çağırın
  const response = intlMiddleware(request);

  return response;
}

export const config = {
  // Sadece uluslararasılaştırılmış pathleri eşleştir
  matcher: ["/", "/(tr|en)/:path*", "/((?!_next|_vercel|.*\\..*).*)"],
};
