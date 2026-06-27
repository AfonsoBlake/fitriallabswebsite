import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import ReactGA from "react-ga4";
import { RouterProvider } from "@tanstack/react-router";
import { getRouter } from "./router";
import "./styles.css";

ReactGA.initialize("G-ZBCV2KZE9W");

declare global {
  interface Window {
    Cal?: {
      ns: Record<string, (...args: unknown[]) => void>;
    } & ((...args: unknown[]) => void);
  }
}

document.addEventListener("click", (e) => {
  if ((e.target as HTMLElement).closest?.("[data-cal-link]")) {
    ReactGA.event("book_call_clicked");
  }
});

window.Cal?.ns["30min"]("on", {
  action: "bookingSuccessful",
  callback: () => {
    ReactGA.event({ category: "Booking", action: "completed", label: "demo_call_booked" });
  },
});

const router = getRouter();

const rootElement = document.getElementById("root")!;
ReactDOM.createRoot(rootElement).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
