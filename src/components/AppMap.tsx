import L from "leaflet";
import countries from "../countries.json";
import { useEffect, useMemo, useRef } from "react";
import useCases from "../hooks/useCases";

interface CaseData {
  country: string;
  iso3: string;
  who_region: string;
  month_lab: string;
  cases: number;
  deaths: number;
}

interface MapProps {
  center: { lat: number; lng: number };
  style?: React.CSSProperties;
}

const AppMap: React.FC<MapProps> = ({ center, style }) => {
  const { calculatedCases, deathsByCountry, cases } = useCases();
  const mapRef = useRef<L.Map | null>(null);

  useEffect(() => {
    if (!cases || mapRef.current) {
      return;
    }
    const map = L.map("map", {
      zoomControl: false,
    }).setView([center.lat, center.lng], 2);

    mapRef.current = map;
    L.tileLayer(
      `http://tile.stamen.com/terrain-background/{z}/{x}/{y}.jpg?key=${process.env.REACT_APP_MAPTILER_API_KEY}`,
      {
        // attribution: "© OpenStreetMap contributors",
        crossOrigin: true,
      }
    ).addTo(map);

    const getColor = (cases: number) => {
      if (cases >= 0 && cases <= 10) {
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

    Object.keys(calculatedCases).forEach((iso3) => {
      const country = countries.features.find((country) => country.id === iso3);
      if (country) {
        L.geoJSON(country, {
          style: {
            color: "black",
            weight: 0.5,
            fillColor: getColor(calculatedCases[iso3]),
            fillOpacity: 0.5,
          },
        })
          .bindPopup(
            `<b>${country.properties.name}</b><br>Cases: ${calculatedCases[iso3]}<br>Deaths: ${deathsByCountry[iso3]}`
          )
          .addTo(map);
        if (country.lat && country.lng) {
          L.circle([country.lat, country.lng], {
            color: "red",
            fillColor: "red",
            fillOpacity: 0.5,
            radius: Math.sqrt(calculatedCases[iso3]) * 5000,
          }).addTo(map);
        }
      }
    });
  }, [cases]);

  return (
    <div id="map" style={{ height: "400px", width: "100%", ...style }}></div>
  );
};

export default AppMap;
