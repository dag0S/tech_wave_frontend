import { configureStore, ReducersMapObject, Store } from "@reduxjs/toolkit";
import { baseApi } from "@/shared/api";
import { userSlice, UserState } from "@/entities/user";
import { loginSlice, LoginState } from "@/features/login/model/slice";

export interface StateSchema {
  loginSlice: LoginState;
  userSlice: UserState;
  [baseApi.reducerPath]: ReturnType<typeof baseApi.reducer>;
}

export function createReduxStore() {
  const rootReducers: ReducersMapObject<StateSchema> = {
    loginSlice: loginSlice.reducer,
    userSlice: userSlice.reducer,
    [baseApi.reducerPath]: baseApi.reducer,
  };

  return configureStore<StateSchema>({
    reducer: rootReducers,
  });
}

const store = createReduxStore();

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
