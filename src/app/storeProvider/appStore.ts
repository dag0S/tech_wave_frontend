import { configureStore, ReducersMapObject } from "@reduxjs/toolkit";
import { baseApi } from "@/shared/api";
import { userSlice, UserState } from "@/entities/user";
import { loginSlice, LoginState } from "@/features/login/model/slice";
import {
  registrationReducers,
  RegistrationState,
} from "@/features/registration";
import { listenerMiddleware } from "@/entities/user/model/authMiddleware";

export interface StateSchema {
  loginSlice: LoginState;
  registrationSlice: RegistrationState;
  userSlice: UserState;
  [baseApi.reducerPath]: ReturnType<typeof baseApi.reducer>;
}

export function createReduxStore(initialState?: StateSchema) {
  const rootReducers: ReducersMapObject<StateSchema> = {
    registrationSlice: registrationReducers,
    loginSlice: loginSlice.reducer,
    userSlice: userSlice.reducer,
    [baseApi.reducerPath]: baseApi.reducer,
  };

  return configureStore({
    reducer: rootReducers,
    preloadedState: initialState,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware()
        .concat(baseApi.middleware)
        .prepend(listenerMiddleware.middleware),
  });
}

export type AppDispatch = ReturnType<typeof createReduxStore>["dispatch"];
