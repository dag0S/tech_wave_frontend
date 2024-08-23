import { FC } from "react";
import { ThemeProvider } from "@/entities/theme";
import { ProvidersProps } from "./providersProps";
import { AuthProvider } from "../authProvider";
import { StoreProvider } from "../storeProvider";

export const Providers: FC<ProvidersProps> = ({ children }) => {
  return (
    <StoreProvider>
      <AuthProvider>
        <ThemeProvider>{children}</ThemeProvider>
      </AuthProvider>
    </StoreProvider>
  );
};
