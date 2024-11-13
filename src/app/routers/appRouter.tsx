import { FC } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { paths } from "@/shared/lib/react-router";
import BaseLayout from "../layout/BaseLayout/BaseLayout";
import { HomePage } from "@/pages/home";
import { AuthPage } from "@/pages/auth";
import { CartPage } from "@/pages/cart";
import { FavoritesPage } from "@/pages/favorites";
import { NotFoundPage } from "@/pages/notFound";
import { ProductPage } from "@/pages/product";
import { ProfilePage } from "@/pages/profile";
import { PrivateRoute } from "./PrivateRoute";
import { useAppSelector } from "@/shared/model";

const AppStore: FC = () => {
  const { isAuthenticated } = useAppSelector((state) => state.userSlice);

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
          path: `${paths.product}/:id`,
          element: <ProductPage />,
        },
        {
          path: paths.profile,
          element: (
            <PrivateRoute isAuthenticated={isAuthenticated}>
              <ProfilePage />
            </PrivateRoute>
          ),
        },
        {
          path: paths.notFound,
          element: <NotFoundPage />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default AppStore;
