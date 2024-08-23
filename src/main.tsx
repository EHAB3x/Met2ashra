import ReactDOM from "react-dom/client";
// Redux
// Styles
import "./index.css";
//Routes
import AppRouter from "@routes/AppRouter";
import { AuthProvider } from "@context/AuthContext";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();
//Providers
ReactDOM.createRoot(document.getElementById("root")!).render(
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <AppRouter />
    </AuthProvider>
  </QueryClientProvider>
);
