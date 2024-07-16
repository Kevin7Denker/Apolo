import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignIn from "../Pages/SignIn/SignIn";
import Error from "../Pages/Error/Error";
import SignUp from "../Pages/SignUp/SignUp";
import ProtectedRoute from "../Hooks/Contexts/ProtectedRoute";
import Home from "../Pages/Home/Home";
import Welcome from "../Pages/Welcome/Welcome";
import { AuthProvider } from "../Hooks/Providers/AuthProvider";

export default function RoutesApp() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<ProtectedRoute element={<Error />} />} />
          <Route path="/" element={<ProtectedRoute element={<SignIn />} />} />
          <Route
            path="/signup"
            element={<ProtectedRoute element={<SignUp />} />}
          />
          <Route
            path="/welcome"
            element={<ProtectedRoute element={<Welcome />} />}
          />
          <Route path="/home" element={<ProtectedRoute element={<Home />} />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}
