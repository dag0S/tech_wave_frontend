import { useCurrentQuery } from "@/entities/user";
import { FC, ReactNode } from "react";

export const AuthProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const { isLoading } = useCurrentQuery();

  if (isLoading) {
    return <>Загрузка...</>;
  }

  return children;
};
