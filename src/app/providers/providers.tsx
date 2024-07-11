import { FC } from "react";
import { ProvidersProps } from "./providersProps";
import { ThemeProvider } from "@/entities/theme";

const Providers: FC<ProvidersProps> = ({ children }) => {
  return <ThemeProvider>{children}</ThemeProvider>;
};

export default Providers;
