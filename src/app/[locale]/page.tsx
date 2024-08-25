import CaseSummary from "../../page-sections/case-summary";
import Spread from "../../page-sections/spread";
import { headers } from "next/headers";
import { getTranslations } from "next-intl/server";
import AppMap from "../../components/AppMap";
import getMetaData from "../../actions/getMetaData";

export async function generateMetadata() {
  return await getMetaData();
}

export default async function Page() {
  const position = { lat: 51.505, lng: -0.09 };

  return (
    <>
      <AppMap center={position} style={{ background: "white" }} />
      <CaseSummary />
      <Spread />
    </>
  );
}
