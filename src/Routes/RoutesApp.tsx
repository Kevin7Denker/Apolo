import { BrowserRouter, Route, Routes } from "react-router-dom";
import Welcome from "../Pages/Welcome/Welcome";
import Error from "../Pages/Error/Error";
import Soon from "../Pages/Soon/Soon";
import SignUp from "../Pages/SignUp/SignUp";
import ProtectedRoute from "../Hooks/Contexts/ProtectedRoute";

export default function RoutesApp() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<Error />} />
        <Route path="/" element={<Soon />} />
        <Route path="/welcome" element={<Welcome />} />
        <Route
          path="/signup"
          element={<ProtectedRoute element={<SignUp />} />}
        />
      </Routes>
    </BrowserRouter>
  );
}
