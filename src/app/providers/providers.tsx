import { FC } from "react";
import { Provider } from "react-redux";
import { ThemeProvider } from "@/entities/theme";
import { ProvidersProps } from "./providersProps";
import { createReduxStore } from "../appStore";

const Providers: FC<ProvidersProps> = ({ children }) => {
  const store = createReduxStore();

  return (
    <Provider store={store}>
      <ThemeProvider>{children}</ThemeProvider>
    </Provider>
  );
};

export default Providers;
