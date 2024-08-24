"use client";

import { useEffect, useState } from "react";
import getDictionary from "../helpers/get-dictionary";
import Locale from "../types/locale";

export default function useMenuItems(locale: Locale) {
  const [dictionary, setDictionary] = useState<Record<string, string>>({});

  useEffect(() => {
    getDictionary(locale).then((dictionary) => {
      setDictionary(dictionary);
    });
  }, [locale]);

  return [
    {
      text: dictionary?.navbar?.home,
      link: "/",
    },
    {
      text: dictionary?.navbar?.symptoms,
      link: dictionary.navbar?.symptomsLink || "/monkeypox-symptoms",
    },
    {
      text: dictionary?.navbar?.monkeypox,
      link: dictionary?.navbar?.monkeypoxLink || "about-monkeypox",
    },
  ];
}
