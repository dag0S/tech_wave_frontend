import { FC } from "react";
import { Provider } from "react-redux";
import { ThemeProvider } from "@/entities/theme";
import { ProvidersProps } from "./providersProps";
import { store } from "../appStore";

const Providers: FC<ProvidersProps> = ({ children }) => {
  return (
    <Provider store={store}>
      <ThemeProvider>{children}</ThemeProvider>
    </Provider>
  );
};

export default Providers;
