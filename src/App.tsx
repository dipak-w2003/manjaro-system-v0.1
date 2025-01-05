import React from "react";
import SystemLoadMain from "./components/Pages/1-system-load/SystemLoadMain";
import { BrowserRouter, Route, Routes } from "react-router-dom";
const Login = React.lazy(() => import("./components/Pages/2-login/Login"));

// ? context
import { useIsBootedContext } from "./context/1-isBooted/isBootedContext";
import { getIsBooted, getIsLogged } from "./constants/sessionStorage";
import { useIsLoggedContext } from "./context/1-isBooted/isLoggedContext";

const App = () => {
  const { isBoot } = useIsBootedContext();
  const { isLogged } = useIsLoggedContext();
  return (
    <BrowserRouter>
      <Routes>{BootOrLogin(isBoot)}</Routes>
    </BrowserRouter>
  );
};

export default App;

// ? Booting or Login
function BootOrLogin(isBooted: boolean) {
  if (!isBooted) {
    return <Route path="/" index element={<SystemLoadMain />} />;
  }
  if (isBooted && getIsBooted) {
    return <Route path="/" index element={<Login />} />;
  } else {
    throw new Error("Error Occurred !");
  }
}
