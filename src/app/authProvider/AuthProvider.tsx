import { FC } from "react";
import { AuthProviderProps } from "./AuthProviderProps";
import { useCurrentQuery } from "@/entities/user/api/api";
import { PageLoader } from "@/widgets/pageLoader";

export const AuthProvider: FC<AuthProviderProps> = ({ children }) => {
  const { isLoading } = useCurrentQuery();

  if (isLoading) {
    return <PageLoader/>;
  }

  return children;
};
