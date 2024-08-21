import "./App.css";
import { Map } from "leaflet";
import AppMap from "./components/AppMap";
import { useEffect } from "react";
import Navbar from "./components/navbar";

function App() {
  const position = { lat: 51.505, lng: -0.09 };

  return (
    <div className="App">
      <Navbar />
      <AppMap center={position} zoom={13} />
    </div>
  );
}

export default App;
