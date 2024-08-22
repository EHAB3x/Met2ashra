import ReactDOM from "react-dom/client";
// Redux
// Styles
import "./index.css";
//Routes
import AppRouter from "@routes/AppRouter";
import { AuthProvider } from "@context/AuthContext";
//Providers
ReactDOM.createRoot(document.getElementById("root")!).render(
<AuthProvider>
    <AppRouter />
</AuthProvider>

);
