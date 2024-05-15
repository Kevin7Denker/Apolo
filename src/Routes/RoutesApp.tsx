import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../Views/Home/Home";
import Error from "../Views/Error/Error";
import Soon from "../Views/Soon/Soon";
import SignUp from "../Views/SignUp/SignUp";

export default function RoutesApp() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<Error />} />
        <Route path="/" element={<Soon />} />
        <Route path="/welcome" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  );
}
