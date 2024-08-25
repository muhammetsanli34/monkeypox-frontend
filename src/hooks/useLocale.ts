"use client";

import { usePathname } from "next/navigation";

export default function useLocale() {
  const pathName = usePathname();
  const locale = pathName.split("/")[1];
  return locale || "en";
}
