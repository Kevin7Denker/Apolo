import React, { useEffect, useState } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../useAuth";

interface ProtectedRouteProps {
  element: React.ReactElement;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ element }) => {
  const { state: authState } = useAuth();
  const location = useLocation();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [shouldRedirect, setShouldRedirect] = useState<boolean>(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    if (!isLoading) {
      const isLoggedIn = authState.isLoggedIn;

      if (isLoggedIn === false && location.pathname !== "/") {
        setShouldRedirect(true);
      } else {
        setShouldRedirect(false);
      }
    }
  }, [authState, isLoading, location]);

  if (isLoading) {
    return <div>Carregando...</div>;
  } else if (shouldRedirect) {
    return <Navigate to="/" replace />;
  } else {
    return element;
  }
};

export default ProtectedRoute;
