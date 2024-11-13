import { paths } from "@/shared/lib/react-router";
import { FC, ReactNode } from "react";
import { Navigate } from "react-router-dom";

interface PrivateRouteProps {
  children: ReactNode;
  isAuthenticated: boolean;
}

export const PrivateRoute: FC<PrivateRouteProps> = ({
  children,
  isAuthenticated,
}) => {
  return isAuthenticated ? children : <Navigate to={paths.auth} />;
};
