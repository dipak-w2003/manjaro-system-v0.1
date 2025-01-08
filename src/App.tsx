import React, { useEffect } from "react";
import SystemLoadMain from "./components/Pages/1-system-load/SystemLoadMain";
import Login from "./components/Pages/2-login/Login";
import DesktopMain from "./components/Desktop/DesktopMain";
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";

// Context & Redux
import { useIsBootedContext } from "./context/1-isBooted/isBootedContext";
import { useSelector } from "react-redux";
import { RootState } from "./Redux/store";

// ProtectedRoute
import ProtectedRoute from "./components/ProtectedRoute";
import XfceMain from "./components/Desktop/xfce/XfceMain";
import KdeMain from "./components/Desktop/kde/KdeMain";
import GnomeMain from "./components/Desktop/gnome/GnomeMain";

const App = () => {
  const { isBoot } = useIsBootedContext();
  const isLogged = useSelector(
    (state: RootState) => state.isLoggedSlice.isLogged
  );
  const navigate = useNavigate();
  function BootOrLogin(isBooted: boolean) {
    if (isBooted) navigate("/login");
  }

  useEffect(() => {
    BootOrLogin(isBoot);
    if (isLogged) {
      navigate("/desktop/xfce");
    }
  }, [isLogged, isBoot]);

  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/" element={<SystemLoadMain />} />
      <Route path="/login" element={<Login />} />
      {/* Protected Routes */}
      <Route
        path="/desktop"
        element={
          <ProtectedRoute isLogged={isLogged}>
            <DesktopMain />
          </ProtectedRoute>
        }
      />
      <Route
        path="/desktop/xfce"
        element={
          <ProtectedRoute isLogged={isLogged}>
            <XfceMain />
          </ProtectedRoute>
        }
      />
      <Route
        path="/desktop/kde"
        element={
          <ProtectedRoute isLogged={isLogged}>
            <KdeMain />
          </ProtectedRoute>
        }
      />{" "}
      <Route
        path="/desktop/gnome"
        element={
          <ProtectedRoute isLogged={isLogged}>
            <GnomeMain />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
};

export default App;
