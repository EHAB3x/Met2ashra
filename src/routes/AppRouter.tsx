import { QueryClient, QueryClientProvider } from "react-query";

// Layouts
import { HomeLayout, MainLayout } from "@layouts/index";
import AuthLayout from "../layouts/AuthLayout";
// Pages
import Login from "@pages/Login";
import Signup from "@pages/Signup";
import Companies from "@pages/Companies";
import CompanyPage from "@pages/CompanyPage";
import RoadMap from "@pages/RoadMap";
import Profile from "@pages/Profile";
// Router Functions
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AuthProvider } from "../context/AuthContext";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <p>Error</p>,
    children: [
      {
        index: true,
        element: <HomeLayout />,
      },
      {
        path: "/companies",
        element: <Companies />,
      },
      {
        path: "/roadmap",
        element: <RoadMap />,
      },
      {
        path: "/companies/:companyId",
        element: <CompanyPage />,
      },
      {
        path:"/profile",
        element: <Profile />
      }
    ],
  },
  {
    path: "/",
    element: <AuthLayout />,
    errorElement: <p>Error</p>,
    children: [
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "signup",
        element: <Signup />,
      },
    ],
  },
]);

const queryClient = new QueryClient();
const AppRouter = () => {
  return (
    <AuthProvider>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </AuthProvider>
  );
};

export default AppRouter;
