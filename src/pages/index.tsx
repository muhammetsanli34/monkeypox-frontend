import AppMap from "../components/AppMap";
import CaseSummary from "../page-sections/home/case-summary";
import Spread from "../page-sections/home/spread";

export default function Home() {
  const position = { lat: 51.505, lng: -0.09 };
  return (
    <>
      <AppMap center={position} style={{ background: "white" }} />
      <CaseSummary />
      <Spread />
    </>
  );
}
