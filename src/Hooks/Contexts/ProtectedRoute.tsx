import { Navigate } from "react-router-dom";
import { useAuth } from "../Providers/AuthProvider";

interface ProtectedRouteProps {
  element: React.ReactElement;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ element }) => {
  const { state } = useAuth();
  const { isLoggedIn } = state;

  const allowedRoutes = ["/", "/signup"];

  if (!isLoggedIn && !allowedRoutes.includes(window.location.pathname)) {
    return <Navigate to="/" replace />;
  }

  return element;
};

export default ProtectedRoute;
