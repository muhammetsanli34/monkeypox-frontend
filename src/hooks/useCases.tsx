import { useEffect, useMemo, useState } from "react";
import casesJson from "../cases.json";

interface CaseData {
  country: string;
  iso3: string;
  who_region: string;
  month_lab: string;
  cases: number;
  deaths: number;
}

export default function useCases() {
  const [cases, setCases] = useState<Array<CaseData> | null>(null);

  const fetchCases = async () => {
    fetch("https://trackmonkeypox.com:8000/get_all_data", {
      method: "GET",
      headers: {
        Accept: "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setCases(data.monkey_pox_cases);
      })
      .catch((error) => setCases(casesJson.monkey_pox_cases));
  };

  const calculatedCases = useMemo(() => {
    const casesByCountry = cases?.reduce((acc, curr) => {
      if (!acc[curr.iso3]) {
        acc[curr.iso3] = 0;
      }
      acc[curr.iso3] += curr.cases;
      return acc;
    }, {} as Record<string, number>);
    return casesByCountry || {};
  }, [cases]);

  const deathsByCountry = useMemo(() => {
    const deathsByCountry = cases?.reduce((acc, curr) => {
      if (!acc[curr.iso3]) {
        acc[curr.iso3] = 0;
      }
      acc[curr.iso3] += curr.deaths;
      return acc;
    }, {} as Record<string, number>);
    return deathsByCountry || {};
  }, [cases]);

  const totalCases = useMemo(() => {
    return cases?.reduce((acc, curr) => acc + curr.cases, 0);
  }, [cases]);

  const totalDeaths = useMemo(() => {
    return cases?.reduce((acc, curr) => acc + curr.deaths, 0) || 0;
  }, [cases]);

  useEffect(() => {
    fetchCases();
  }, []);

  return {
    cases,
    calculatedCases,
    deathsByCountry,
    fetchCases,
    totalCases,
    totalDeaths,
  };
}
