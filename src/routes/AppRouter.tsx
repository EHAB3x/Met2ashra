import { QueryClient, QueryClientProvider } from "react-query";

// Layouts
import { HomeLayout, MainLayout } from "@layouts/index";
// Pages
import Login from "@pages/Login";
import Signup from "@pages/Signup";
import CompanyPage from "@pages/CompanyPage";
// Router Functions
import { createBrowserRouter, RouterProvider } from "react-router-dom";

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
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
      {
        path:"/companies/:companyId",
        element: <CompanyPage />
      }
    ],
  },
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
