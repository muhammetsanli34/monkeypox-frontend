import createMiddleware from "next-intl/middleware";
import { pathnames, locales, localePrefix } from "./localization/config";
import { NextRequest, NextResponse } from "next/server";

// Mevcut middleware'i oluştur
const intlMiddleware = createMiddleware({
  defaultLocale: "en",
  locales,
  pathnames,
  localePrefix,
});

export function middleware(request: NextRequest) {
  // last request url
  const xUrl = request.nextUrl.pathname.split("/").pop() || "/";
  console.log("xUrl", xUrl);
  request.headers.set("x-url", xUrl);

  // Mevcut middleware'i çağırın
  const response = intlMiddleware(request);

  return response;
}

export const config = {
  // Sadece uluslararasılaştırılmış pathleri eşleştir
  matcher: ["/", "/(tr|en)/:path*", "/((?!_next|_vercel|.*\\..*).*)"],
};
