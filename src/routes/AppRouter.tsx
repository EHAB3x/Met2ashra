import { QueryClient, QueryClientProvider } from "react-query";

// Layouts
import { HomeLayout, MainLayout } from "@layouts/index";
// Pages
import Login from "@pages/Login";
import Signup from "@pages/Signup";
import CompanyPage from "@pages/CompanyPage";
// Router Functions
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AuthLayout from "../layouts/AuthLayout";

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
        path:"/companies/:companyId",
        element: <CompanyPage />
      }
    ],
  },
  {
    path:"/",
    element: <AuthLayout />,
    errorElement: <p>Error</p>,
    children:[
      {
        path:"login",
        element: <Login />,
      },
      {
        path: "signup",
        element: <Signup />,
      },
    ]
  }
]);

const queryClient = new QueryClient();
const AppRouter = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
};

export default AppRouter;
