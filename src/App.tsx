import React, { ReactNode } from "react";
import SystemLoadMain from "./components/Pages/1-system-load/SystemLoadMain";
import { BrowserRouter, Route, Routes } from "react-router-dom";
const Login = React.lazy(() => import("./components/Pages/2-login/Login"));
import { useIsBootedContext } from "./context/1-isBooted/isBootedContext";
const App = () => {
  const { isBoot } = useIsBootedContext();
  console.log(isBoot);
  return (
    <BrowserRouter>
      {/* <SystemLoadMain /> */}
      <Routes>{BootOrLogin(isBoot)}</Routes>
    </BrowserRouter>
  );
};

export default App;

// ? Booting or Login
function BootOrLogin(isBooted: boolean) {
  if (!isBooted) {
    return <Route path="/" element={<SystemLoadMain />} />;
  }
  if (isBooted) {
    return <Route path="/" element={<Login />} />;
  } else {
    throw new Error("Error Occurred !");
  }
}
