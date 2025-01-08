import React from "react";
import { Navigate } from "react-router-dom";

interface ProtectedRouteProps {
  isLogged: boolean;
  children: JSX.Element;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({
  isLogged,
  children,
}) => {
  return isLogged ? children : <Navigate to="/" />;
};

export default ProtectedRoute;
