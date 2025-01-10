import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";
import SystemLoadMain from "./components/Pages/1-system-load/SystemLoadMain";
import Login from "./components/Pages/2-login/Login";
import DesktopMain from "./components/Desktop/DesktopMain";
import ProtectedRoute from "./components/ProtectedRoute";

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

  useEffect(() => {
    if (isBoot && !isLogged) {
      navigate("/login");
    } else if (isLogged && activeUser?.desktopEnv && activeUser?.id) {
      navigate(`/desktop/${activeUser.desktopEnv}?u=${activeUser.id}`);
    }
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
