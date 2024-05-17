import { Navigate } from "react-router-dom";
import { useAuth } from "../Providers/AuthProvider";

interface ProtectedRouteProps {
  element: React.ReactElement;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ element }) => {
  const { state } = useAuth();

  if (!state.isLoggedIn) {
    return <Navigate to="/welcome" replace />;
  }

  return element;
};

export default ProtectedRoute;
