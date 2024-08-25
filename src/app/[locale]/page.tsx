"use client";

import dynamic from "next/dynamic";
import { useMemo } from "react";
import CaseSummary from "../../page-sections/case-summary";
import Spread from "../../page-sections/spread";


export default function Page() {
  const position = { lat: 51.505, lng: -0.09 };
  const Map = useMemo(
    () =>
      dynamic(() => import("../../components/AppMap"), {
        ssr: false,
      }),
    []
  );
  return (
    <>
      <Map center={position} style={{ background: "white" }} />
      <CaseSummary />
      <Spread />
    </>
  );
}
