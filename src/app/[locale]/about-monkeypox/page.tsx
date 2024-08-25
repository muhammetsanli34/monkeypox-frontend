import Overlay from "../../../components/overlay";
import QandACarousel from "../../../page-sections/QandaCarousel";
import QandA from "../../../page-sections/qanda";
import getMetaData from "../../../actions/getMetaData";
import { useTranslations } from "next-intl";

export async function generateMetadata() {
  return await getMetaData();
}

export default function MonkeypoxPage() {
  const t = useTranslations();
  return (
    <>
      <Overlay
        title="Maymun Çiçeği"
        breadcrumb={[
          {
            link: "/",
            text: t("home"),
          },
          {
            link: "/about-monkeypox",
            text: t("monkeypox.breadcrumb"),
          },
        ]}
      />

      <div className="container mx-auto mt-12">
        <h2 className="text-4xl text-left font-bold text-primary mt-12">
          Sıkça Sorulan Sorular
        </h2>
        <hr className="w-64 mr-auto border-2 border-primary my-6" />

        <div
          className="grid grid-cols-1
        lg:grid-cols-2 gap-8
      "
        >
          <QandA />
          <QandACarousel />
        </div>
      </div>
    </>
  );
}
