import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import ReactGA from "react-ga4";
import { RouterProvider } from "@tanstack/react-router";
import { getRouter } from "./router";
import "./styles.css";

ReactGA.initialize("G-ZBCV2KZE9W");

const router = getRouter();

const rootElement = document.getElementById("root")!;
ReactDOM.createRoot(rootElement).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
