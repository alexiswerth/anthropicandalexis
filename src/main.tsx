import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import ErrorBoundary from "./components/ErrorBoundary.tsx";
import { logWebVitals } from "./lib/perf.ts";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <ErrorBoundary>
    <App />
  </ErrorBoundary>
);

// Log web vitals after load
window.addEventListener("load", () => {
  setTimeout(logWebVitals, 1000);
});
