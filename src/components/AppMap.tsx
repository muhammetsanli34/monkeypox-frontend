import L from "leaflet";
import countries from "../countries";
import { useEffect, useRef } from "react";

interface MapProps {
  center: { lat: number; lng: number };
  style?: React.CSSProperties;
}

const AppMap: React.FC<MapProps> = ({ center, style }) => {
  const mapRef = useRef<L.Map | null>(null);

  useEffect(() => {
    if (mapRef.current) return;
    const map = L.map("map", {
      zoomControl: false,
    }).setView([center.lat, center.lng], 11);

    mapRef.current = map;

    L.tileLayer(
      `http://tile.stamen.com/terrain-background/{z}/{x}/{y}.jpg?key=${process.env.REACT_APP_MAPTILER_API_KEY}`,
      {
        attribution: "© OpenStreetMap contributors",
        crossOrigin: true,
      }
    ).addTo(map);

    countries.features.forEach((country) => {
      L.geoJSON(country, {
        style: {
          color: "black",
          weight: 0.5,
          fillColor: "red",
          fillOpacity: 0.5,
        },
      }).addTo(map);
      if (country.lat && country.lng) {
        L.circle([country.lat, country.lng], {
          color: "red",
          fillColor: "red",
          fillOpacity: 0.5,
          radius: 220000,
        }).addTo(map);
      }
    });
  }, [center]);

  return (
    <div id="map" style={{ height: "400px", width: "100%", ...style }}></div>
  );
};

export default AppMap;
