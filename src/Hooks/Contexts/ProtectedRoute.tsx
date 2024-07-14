import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../Providers/AuthProvider";

interface ProtectedRouteProps {
  element: React.ReactElement;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ element }) => {
  const { state } = useAuth();
  const location = useLocation();
  const { isLoggedIn } = state;

  const allowedRoutes = ["/", "/signup"];

  if (!isLoggedIn && !allowedRoutes.includes(location.pathname)) {
    return <Navigate to="/" replace />;
  }

  return element;
};

export default ProtectedRoute;
