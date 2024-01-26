import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import DashboardContainer from "./containers/DashboardContainer/DashboardContainer.tsx";
import InvestissementContainer from "./containers/InvestissementContainer/InvestissementContainer.tsx";
import DepenseContainer from "./containers/DepenseContainer/DepenseContainer.tsx";
import EconomieContainer from "./containers/EconomieContainer/EconomieContainer.tsx";
import config from "./utils/config.ts";

const router = createBrowserRouter([
  {
    path: `/${config.image_base_url}`,
    element: <App />,
    children: [
      {
        path: "",
        element: <DashboardContainer />,
      },
      {
        path: "investissement",
        element: <InvestissementContainer />,
      },
      {
        path: "depense",
        element: <DepenseContainer />,
      },
      {
        path: "economie",
        element: <EconomieContainer />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
