import React from "react";
import { Navigate } from "react-router-dom";

interface ProtectedRouteProps {
  isLogged: boolean;
  children: React.ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({
  isLogged,
  children,
}) => {
  if (!isLogged) {
    return <Navigate to="/login" replace />;
  }

  return <>{children}</>;
};

export default ProtectedRoute;
