import { useTranslations } from "next-intl";

export default function useMenuItems() {
  const t = useTranslations();
  console.log(t);
  return [
    {
      // text: dictionary?.navbar?.home,
      text: t("navbar.home"),
      link: "/",
    },
    {
      // text: dictionary?.navbar?.symptoms,
      text: t("navbar.symptoms"),
      // link: dictionary.navbar?.symptomsLink || "/monkeypox-symptoms",
      link: t("navbar.symptomsLink") || "/monkeypox-symptoms",
    },
    {
      // text: dictionary?.navbar?.monkeypox,
      text: t("navbar.monkeypox"),
      // link: dictionary?.navbar?.monkeypoxLink || "about-monkeypox",
      link: t("navbar.monkeypoxLink") || "about-monkeypox",
    },
  ];
}
