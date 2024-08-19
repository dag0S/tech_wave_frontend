import { FC } from "react";
import { Provider } from "react-redux";
import { ThemeProvider } from "@/entities/theme";
import { ProvidersProps } from "./providersProps";
import { createReduxStore } from "../appStore";
import { AuthProvider } from "../authProvider";

const Providers: FC<ProvidersProps> = ({ children }) => {
  const store = createReduxStore();

  return (
    <Provider store={store}>
      <AuthProvider>
        <ThemeProvider>{children}</ThemeProvider>
      </AuthProvider>
    </Provider>
  );
};

export default Providers;
