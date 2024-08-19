import { FC } from "react";
import { AuthProviderProps } from "./AuthProviderProps";
import { useCurrentQuery } from "@/entities/user/api/api";

export const AuthProvider: FC<AuthProviderProps> = ({ children }) => {
  const { isLoading } = useCurrentQuery();

  if (isLoading) {
    return <span>Загрузка</span>;
  }

  return children;
};
