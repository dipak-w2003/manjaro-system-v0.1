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
      navigate("/desktop");
    }
  }, [isLogged, isBoot]);

  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/" element={<SystemLoadMain />} />
      <Route path="/login" element={<Login />} />

      {/* Protected Routes */}
      <Route
        path="/desktop/*"
        element={
          <ProtectedRoute isLogged={isLogged}>
            <DesktopMain />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
};

export default App;
