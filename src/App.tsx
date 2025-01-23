import React, { lazy, Suspense, useEffect, useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
const SystemLoadMain = lazy(
  () => import("./components/Pages/1-system-load/SystemLoadMain")
);
import Login from "./components/Pages/2-login/Login";
const DesktopMain = lazy(() => import("./components/Desktop/DesktopMain"));
const ProtectedRoute = lazy(() => import("./components/ProtectedRoute"));

// Context & Redux
import { useIsBootedContext } from "./context/1-isBooted/isBootedContext";
import { useSelector } from "react-redux";
import { RootState } from "./Redux/store";

const App: React.FC = () => {
  const { isBoot } = useIsBootedContext();
  const isLogged = useSelector(
    (state: RootState) => state.isLoggedSlice.isLogged
  );
  const activeUser = useSelector(
    (state: RootState) => state.activeUser.user[0]
  );
  const navigate = useNavigate();
  const [isLandscape, setIsLandscape] = useState<boolean>(
    window.matchMedia("(orientation: landscape)").matches
  );

  useEffect(() => {
    if (isBoot && !isLogged) {
      // ? make it session Logged or local Storage logged based so, ever time we exit or refresh we don't have to automatically to login page
      navigate("/login");
    } else if (isLogged && activeUser?.desktopEnv && activeUser?.id) {
      // '?' is used : true navigate dynamic
      navigate(`/desktop/${activeUser.desktopEnv}?u=${activeUser.id}`);
    }

    // ? handle orientation
    const handleOrientationChange = () => {
      setIsLandscape(window.matchMedia("(orientation: landscape)").matches);
    };

    const mediaQuery = window.matchMedia("(orientation: landscape)");
    mediaQuery.addEventListener("change", handleOrientationChange);
  }, [isBoot, isLogged, activeUser, navigate]);
  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/" element={<SystemLoadMain />} />
      <Route path="/login" element={<Login />} />

      {/* Protected Routes */}
      <Route
        path="/desktop/:desktopEnv"
        element={
          <ProtectedRoute isLogged={isLogged}>
            <DesktopMain />
          </ProtectedRoute>
        }
      />

      {/* Fallback Route */}
      <Route path="*" element={<p>Page Not Found</p>} />
    </Routes>
  );
};

export default App;
