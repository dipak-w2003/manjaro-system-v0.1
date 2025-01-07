import React, { useEffect } from "react";
import SystemLoadMain from "./components/Pages/1-system-load/SystemLoadMain";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/Pages/2-login/Login";
// ? context
import { useIsBootedContext } from "./context/1-isBooted/isBootedContext";
import { getIsBooted } from "./constants/sessionStorage";
import { useSelector } from "react-redux";
import { RootState } from "./Redux/store";
import DesktopMain from "./components/Desktop/DesktopMain";

const App = () => {
  const { isBoot } = useIsBootedContext();
  const isLogged = useSelector(
    (state: RootState) => state.isLoggedSlice.isLogged
  );
  useEffect(() => {
    console.log("Logged,", isLogged);
  }, [isLogged]);
  return !isLogged ? <Routes>{BootOrLogin(isBoot)}</Routes> : <DesktopMain />;
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
