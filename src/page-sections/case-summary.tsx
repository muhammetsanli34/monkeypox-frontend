"use client";
import { useTranslations } from "next-intl";
import useCases from "../hooks/useCases";

export default function CaseSummary() {
  const { totalCases, totalDeaths } = useCases();
  const t = useTranslations();
  return (
    <div
      style={{
        backgroundImage: "url(/case-summary-bg.png)",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        padding: "2rem 0",
        marginTop: "2.2rem",
      }}
    >
      <div
        className="container
        mx-auto
        
      "
      >
        <div>
          <h3
            className="
            text-4xl
            font-bold
            text-white
            text-center
            py-8
            "
          >
            {t("summary.title")}
          </h3>
          <div className="flex items-center gap-8 flex-wrap">
            <div
              className="
              bg-white  p-8 rounded-lg flex justify-between items-center flex-1
            "
            >
              <div className="flex flex-col flex-1">
                <h4 className=" text-blue-300">{t("summary.cases")}</h4>
                <h2 className="text-4xl font-bold">{totalCases}</h2>
              </div>
              <i
                className="ti ti-users
                 text-4xl text-blue-300
                "
              ></i>
            </div>

            <div
              className="
              bg-white  p-8 rounded-lg flex justify-between items-center flex-1"
            >
              <div className="flex flex-col">
                <h4 className=" text-red-300">{t("summary.deaths")}</h4>
                <h2 className="text-4xl font-bold">{totalDeaths}</h2>
              </div>
              <i
                className="ti ti-bed
                    text-5xl text-red-300
                "
              ></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
