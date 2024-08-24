import { FC } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { paths } from "@/shared/lib/react-router";
import BaseLayout from "../layout/BaseLayout/BaseLayout";
import { HomePage } from "@/pages/home";
import { AuthPage } from "@/pages/auth";
import { CartPage } from "@/pages/cart";
import { FavoritesPage } from "@/pages/favorites";
import { NotFoundPage } from "@/pages/notFound";

const router = createBrowserRouter([
  {
    path: paths.home,
    element: <BaseLayout />,
    children: [
      {
        path: paths.home,
        element: <HomePage />,
      },
      {
        path: paths.auth,
        element: <AuthPage />,
      },
      {
        path: paths.cart,
        element: <CartPage />,
      },
      {
        path: paths.favorites,
        element: <FavoritesPage />,
      },
      {
        path: paths.notFound,
        element: <NotFoundPage />,
      },
    ],
  },
]);

const AppStore: FC = () => {
  return <RouterProvider router={router} />;
};

export default AppStore;
