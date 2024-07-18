import React, { useEffect, useState } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../useAuth";
import Welcome from "../../Pages/Welcome/Welcome";

interface ProtectedRouteProps {
  element: React.ReactElement;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ element }) => {
  const location = useLocation();
  const { state: authState } = useAuth();

  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [shouldRedirect, setShouldRedirect] = useState<boolean>(false);
  const [newUser, setNewUser] = useState<boolean>(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    if (!isLoading) {
      const isLoggedIn = authState.isLoggedIn;

      if (authState.user && authState.user.profile.dateCreation == null) {
        setNewUser(true);
      }

      setShouldRedirect(!isLoggedIn && location.pathname !== "/");
    }
  }, [authState, isLoading, location]);

  if (isLoading) {
    return <div>Carregando...</div>;
  }

  if (shouldRedirect) {
    return <Navigate to="/" />;
  }

  if (newUser) {
    const newPathname = "/welcome";
    window.history.pushState({}, "", newPathname);
    return <Welcome />;
  }

  return element;
};

export default ProtectedRoute;
