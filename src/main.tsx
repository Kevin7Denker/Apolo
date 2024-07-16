import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./Styles/GlobalStyles.scss";
import { AuthProvider } from "./Hooks/Providers/AuthProvider.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <AuthProvider>
    <App />
  </AuthProvider>
);
