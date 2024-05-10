import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../Views/Home/Home";
import Error from "../Views/Error/Error";
import SignIn from "../Views/SignIn/SignIn";

export default function RoutesApp() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<Error />} />
        <Route path="/" element={<Home />} />
        <Route path="/signIn" element={<SignIn />} />
      </Routes>
    </BrowserRouter>
  );
}
