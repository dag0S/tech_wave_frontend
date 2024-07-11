import { FC } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { paths } from "@/shared/lib/react-router";
import BaseLayout from "../layout/BaseLayout/BaseLayout";

const router = createBrowserRouter([
  {
    path: paths.home,
    element: <BaseLayout />,
    children: [
      {
        path: paths.home,
        element: <div>Hello world!</div>,
      },
    ],
  },
]);

const AppStore: FC = () => {
  return <RouterProvider router={router} />;
};

export default AppStore;
