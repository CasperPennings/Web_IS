import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "performative-ui/styles.css";
import "./theme.css";
import { App } from "./App";

// Dark is the default; follow the visitor's system if they prefer light.
if (window.matchMedia?.("(prefers-color-scheme: light)").matches) {
  document.documentElement.setAttribute("data-theme", "light");
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
