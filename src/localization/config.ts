import { Pathnames } from "next-intl/navigation";

export const locales = ["en", "tr"] as const;

export const defaultLocale = "en";

export const pathnames = {
  "/": "/",
  "/monkeypox-symptoms": {
    en: "/monkeypox-symptoms",
    tr: "/maymun-cicegi-belirtileri",
  },
  "/about-monkeypox": {
    en: "/about-monkeypox",
    tr: "/maymun-cicegi-hakkinda",
  },
} satisfies Pathnames<typeof locales>;

export const localePrefix = undefined;

export type AppPathnames = keyof typeof pathnames;
