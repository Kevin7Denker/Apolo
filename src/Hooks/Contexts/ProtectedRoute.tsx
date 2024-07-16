import React, { useEffect, useState } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../useAuth";

interface ProtectedRouteProps {
  element: React.ReactElement;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ element }) => {
  const state = useAuth();
  const location = useLocation();
  const [shouldRedirect, setShouldRedirect] = useState<boolean>(false); // Inicializado como false

  useEffect(() => {
    const isLoggedIn = state;

    if (isLoggedIn && location.pathname === "/") {
      setShouldRedirect(true);
    } else if (
      !isLoggedIn &&
      location.pathname !== "/" &&
      location.pathname !== "/signup"
    ) {
      setShouldRedirect(false);
    }
  }, [state, location]);

  if (shouldRedirect) {
    return <Navigate to="/home" replace />;
  } else {
    return element;
  }
};

export default ProtectedRoute;
