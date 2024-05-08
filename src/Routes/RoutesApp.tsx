import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../Views/Home";
import Error from "../Views/Error";
import Login from "../Views/Login";

export default function RoutesApp() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<Error />} />
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}
