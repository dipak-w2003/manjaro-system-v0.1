import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import { BootedContextProvider as BootProvider } from "./context/1-isBooted/isBootedContext";
import { Provider } from "react-redux";
import store from "./Redux/store";
import { BrowserRouter } from "react-router-dom";
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <BootProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </BootProvider>
    </Provider>
  </StrictMode>
);
