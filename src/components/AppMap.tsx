"use client";
import L from "leaflet";
import countries from "../countries.json";
import { useEffect, useMemo, useRef } from "react";
import useCases from "../hooks/useCases";

interface MapProps {
  center: { lat: number; lng: number };
  style?: React.CSSProperties;
}

const AppMap: React.FC<MapProps> = ({ center, style }) => {
  const { calculatedCases, deathsByCountry, cases } = useCases();
  console.log("cases", cases);
  const mapRef = useRef<L.Map | null>(null);

  useEffect(() => {
    if (!cases || mapRef.current) {
      return;
    }
    const map = L.map("map", {
      zoomControl: false,
    }).setView([center.lat, center.lng], 4);

    mapRef.current = map;
    L.tileLayer(
      `http://tile.stamen.com/terrain-background/{z}/{x}/{y}.jpg?key=${process.env.REACT_APP_MAPTILER_API_KEY}`,
      {
        // attribution: "© OpenStreetMap contributors",
        crossOrigin: true,
      }
    ).addTo(map);

    const getColor = (cases: number) => {
      if (cases === 0) {
        return "#FFFFFF";
      } else if (cases >= 0 && cases <= 10) {
        return "#FFCCCC";
      } else if (cases > 10 && cases <= 100) {
        return "#FF6666";
      } else if (cases > 100 && cases <= 1000) {
        return "#FF3333";
      } else if (cases > 1000) {
        return "#990000";
      }
      return "#FFCCCC";
    };

    countries.features.forEach((country) => {
      const iso3 = country.id;
      if (!(iso3 in calculatedCases)) {
        calculatedCases[iso3] = 0;
        deathsByCountry[iso3] = 0;
      }

      L.geoJSON(country, {
        style: {
          color: "black",
          weight: 0.5,
          fillColor: getColor(calculatedCases[iso3]),
          fillOpacity: 0.5,
        },
      })
        .bindPopup(
          `<b>${country.properties.name}</b><br>Vaka Sayısı: ${calculatedCases[iso3]}<br>Ölümler: ${deathsByCountry[iso3]}`
        )
        .addTo(map);
      if (country.lat && country.lng) {
        L.circle([country.lat, country.lng], {
          color: calculatedCases[iso3] > 0 ? "red" : "white",
          fillColor: "red",
          fillOpacity: 0.5,
          radius: Math.sqrt(calculatedCases[iso3]) * 5000,
        })
          .addTo(map)
          .bindPopup(
            `<b>${country.properties.name}</b><br>Vaka Sayısı: ${calculatedCases[iso3]}<br>Ölümler: ${deathsByCountry[iso3]}`
          );
      }
    });
  }, [cases]);

  return (
    <div
      id="map"
      style={{ height: "600px", width: "100%", zIndex: 2, ...style }}
    ></div>
  );
};

export default AppMap;
