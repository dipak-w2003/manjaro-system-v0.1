import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import { BootedContextProvider as BootProvider } from "./context/1-isBooted/isBootedContext";
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BootProvider>
      <App />
    </BootProvider>
  </StrictMode>
);
