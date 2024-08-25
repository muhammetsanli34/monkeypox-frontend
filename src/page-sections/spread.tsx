import { useTranslations } from "next-intl";
import Image from "next/image";

export default async function Spread() {
  const t = useTranslations();

  return (
    <div
      className="flex gap-8 items-start mt-24 container mx-auto
      flex-col lg:flex-row
    "
    >
      <Image
        src="/spread.jpg"
        alt={t("spread.title")}
        width={500}
        height={500}
      />
      <div className="flex flex-col  gap-8">
        <h2 className="text-3xl font-bold uppercase">{t("spread.title")}</h2>
        <h3 className="text-2xl font-bold text-red-600">
          {t("spread.subtitle")}
        </h3>
        <p className="text-justify text-gray-500">{t("spread.paragraph1")}</p>
        <p className="text-justify text-gray-500">{t("spread.paragraph2")}</p>
      </div>
    </div>
  );
}
