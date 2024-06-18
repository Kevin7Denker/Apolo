import { Navigate } from "react-router-dom";
import { useAuth } from "../Providers/AuthProvider";

interface ProtectedRouteProps {
  element: React.ReactElement;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ element }) => {
  const { state } = useAuth();
  const { isLoggedIn } = state;

  const allowedRoutes = ["/welcome", "/signup"];

  if (!isLoggedIn && !allowedRoutes.includes(window.location.pathname)) {
    return <Navigate to="/welcome" replace />;
  }

  return element;
};

export default ProtectedRoute;
