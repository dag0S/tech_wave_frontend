import { FC } from "react";
import { Provider } from "react-redux";
import { createReduxStore, StateSchema } from "./appStore";
import { StoreProviderProps } from "./StoreProviderProps";

export const StoreProvider: FC<StoreProviderProps> = ({
  children,
  initialState,
}) => {
  const store = createReduxStore(initialState as StateSchema);

  return <Provider store={store}>{children}</Provider>;
};
