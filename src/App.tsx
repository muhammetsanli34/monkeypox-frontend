import "./App.css";
import AppMap from "./components/AppMap";
import Navbar from "./components/navbar";
import CaseSummary from "./page-sections/case-summary";

function App() {
  const position = { lat: 51.505, lng: -0.09 };

  return (
    <div className="App">
      <Navbar />
      <AppMap center={position} style={{ background: "white" }} />
      <CaseSummary />
    </div>
  );
}

export default App;
