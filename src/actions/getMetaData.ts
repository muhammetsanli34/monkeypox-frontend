"use server";

import { getTranslations } from "next-intl/server";
import { headers } from "next/headers";

export default async function getMetaData() {
  const headersList = headers();
  const pathname = headersList.get("x-url") || "/";
  const t = await getTranslations();
  return {
    title: t(`meta.${pathname}.title`),
    description: t(`meta.${pathname}.description`),
  };
}
