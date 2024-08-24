"use client";
import { useMemo } from "react";
import AppMap from "../components/AppMap";
import CaseSummary from "../page-sections/case-summary";
import Spread from "../page-sections/spread";
import dynamic from "next/dynamic";

export default function Page() {
  const position = { lat: 51.505, lng: -0.09 };
  const Map = useMemo(
    () =>
      dynamic(() => import("../components/AppMap"), {
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
