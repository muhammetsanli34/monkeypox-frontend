import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Navbar from "./components/navbar";
import Home from "./pages";
import Symptoms from "./pages/symptoms";
import Layout from "./layout";
import Monkeypox from "./pages/monkeypox";

function App() {
  const layouted = (element: JSX.Element) => {
    return <Layout>{element}</Layout>;
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: layouted(<Home />),
    },
    {
      path: "/belirtiler",
      element: layouted(<Symptoms />),
    },
    {
      path: "/maymun-cicegi",
      element: layouted(<Monkeypox />),
    },
  ]);
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
