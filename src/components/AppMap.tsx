import { useEffect } from "react";
import Map from "ol/Map";
import { View } from "ol";
import VectorSource from "ol/source/Vector";
import GeoJSON from "ol/format/GeoJSON";
import VectorLayer from "ol/layer/Vector";
import TileLayer from "ol/layer/Tile";
import { OSM } from "ol/source";
import countries from "../countries.json";

interface MapProps {
  center: { lat: number; lng: number };
  style?: React.CSSProperties;
}

const AppMap: React.FC<MapProps> = ({ center, style }) => {
  let map: Map;
  console.log(countries);
  const view = new View({
    center: [center.lng, center.lat],
    zoom: 3,
  });

  const vectorSource = new VectorSource({
    format: new GeoJSON(),
    features: new GeoJSON().readFeatures({ ...countries }),
  });

  console.log(vectorSource);

  const countryLayers = [
    new VectorLayer({
      source: vectorSource,
      style: {
        "fill-color": ["string", ["get", "COLOR"], "#eee"],
      },
    }),
  ];

  const layer = new TileLayer({
    source: new OSM(),
  });

  const mapInstance = new Map({
    view,
    layers: [layer, ...countryLayers],
  });

  useEffect(() => {
    map = mapInstance;
    map.setTarget("map");
  }, [center]);

  return (
    <div id="map" style={{ height: "400px", width: "100%", ...style }}></div>
  );
};

export default AppMap;
