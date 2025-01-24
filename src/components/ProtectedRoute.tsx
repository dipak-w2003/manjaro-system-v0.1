import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

interface ProtectedRouteProps {
  isLogged: boolean;
  children: React.ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({
  isLogged,
  children,
}) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLogged) {
      // Navigate programmatically to avoid UI blocking
      navigate("/login", { replace: true });
    }
  }, [isLogged, navigate]); 
  // / Include navigate in dependency array

  return <>{children}</>;
};

export default ProtectedRoute;
