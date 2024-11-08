import { FC } from "react";
import { ThemeProvider } from "@/entities/theme";
import { ProvidersProps } from "./providersProps";
import { StoreProvider } from "../storeProvider";
import { AuthProvider } from "../authProvider/AuthProvider";

export const Providers: FC<ProvidersProps> = ({ children }) => {
  return (
    <StoreProvider>
      <AuthProvider>
        <ThemeProvider>{children}</ThemeProvider>
      </AuthProvider>
    </StoreProvider>
  );
};
