import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { EarlyaccessLanding } from "./screens/EarlyaccessLanding";

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <EarlyaccessLanding />
  </StrictMode>,
);
