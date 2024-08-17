import { QueryClient, QueryClientProvider } from "react-query";

// Layouts
import { MainLayout } from "@layouts/index";
// Pages
// Router Functions
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Hero from "@components/Met2ashara/Home/Hero";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement:<p>Error</p>,
    children: [
      {
        index: true,
        element:<>
        <Hero />
        </>,
      },
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
