import { FC } from "react";
import { ThemeProvider } from "@/entities/theme";
import { ProvidersProps } from "./providersProps";
import { StoreProvider } from "../storeProvider";

export const Providers: FC<ProvidersProps> = ({ children }) => {
  return (
    <StoreProvider>
      <ThemeProvider>{children}</ThemeProvider>
    </StoreProvider>
  );
};
