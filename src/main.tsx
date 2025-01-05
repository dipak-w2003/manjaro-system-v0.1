import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import { BootedContextProvider as BootProvider } from "./context/1-isBooted/isBootedContext";
import { LoggedContextProvider as LogProvider } from "./context/1-isBooted/isLoggedContext";
import { Provider } from "react-redux";
import store from "./Redux/store";
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <BootProvider>
        <LogProvider>
          <App />
        </LogProvider>
      </BootProvider>
    </Provider>
  </StrictMode>
);
