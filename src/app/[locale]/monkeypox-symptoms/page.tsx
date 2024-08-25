import { useTranslations } from "next-intl";
import Overlay from "../../../components/overlay";
import Spread from "../../../page-sections/spread";
import style from "./style.module.css";
import getMetaData from "../../../actions/getMetaData";

export async function generateMetadata() {
  return await getMetaData();
}

export default function Symptoms() {
  const t = useTranslations();
  return (
    <div>
      <Overlay
        title={t("symptoms.banner_title")}
        breadcrumb={[
          {
            link: "/",
            text: "Home"
          },
          {
            link: "/symptoms",
            text: t("symptoms.breadcrumb"),
          },
        ]}
      />
      <div className="container mx-auto">
        <p className="my-2 text-gray-600 mt-8">{t("symptoms.paragraph1")}</p>
        <p className="my-2 text-gray-600">{t("symptoms.paragraph2")}</p>
        <p className="my-2 text-gray-600">{t("symptoms.paragraph3")}</p>
        <p className="my-2 text-gray-600">{t("symptoms.paragraph4")}</p>

        <div
          className="grid
        grid-cols-1
        gap-4
        mt-8
        md:grid-cols-2
        mx-auto
        "
        >
          <div
            className="flex items-center
          "
          >
            <img src="/spots.png" alt="lesion" className={style.symptomImage} />
            <h2 className="text-2xl font-bold">{t("symptoms.symptom1")}</h2>
          </div>
          <div
            className="flex items-center
          "
          >
            <img src="/fever.png" alt="lesion" className={style.symptomImage} />
            <h2 className="text-2xl font-bold">{t("symptoms.symptom2")}</h2>
          </div>
          <div className="flex items-center">
            <img
              src="/backache.png"
              alt="lesion"
              className={style.symptomImage}
            />
            <h2 className="text-2xl font-bold">{t("symptoms.symptom3")}</h2>
          </div>
          <div className="flex items-center">
            <img
              src="/headache.png"
              alt="lesion"
              className={style.symptomImage}
            />
            <h2 className="text-2xl font-bold">{t("symptoms.symptom4")}</h2>
          </div>
        </div>
      </div>
      <div className="container mx-auto">
        <Spread />
      </div>
    </div>
  );
}
