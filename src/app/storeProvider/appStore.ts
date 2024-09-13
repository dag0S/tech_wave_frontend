import { configureStore, ReducersMapObject } from "@reduxjs/toolkit";
import { baseApi } from "@/shared/api";
import { listenerMiddleware, userSlice, UserState } from "@/entities/user";
import { loginSlice, LoginState } from "@/features/login/model/slice";
import {
  registrationReducers,
  RegistrationState,
} from "@/features/registration";
import { categorySlice, CategoryState } from "@/entities/category";
import { brandSlice, BrandState } from "@/entities/brand";
import { deviceSlice, DeviceState } from "@/entities/device";
import { cartSlice, CartState } from "@/entities/cart";

export interface StateSchema {
  loginSlice: LoginState;
  registrationSlice: RegistrationState;
  userSlice: UserState;
  deviceSlice: DeviceState;
  categorySlice: CategoryState;
  brandSlice: BrandState;
  cartSlice: CartState;
  [baseApi.reducerPath]: ReturnType<typeof baseApi.reducer>;
}

export function createReduxStore(initialState?: StateSchema) {
  const rootReducers: ReducersMapObject<StateSchema> = {
    registrationSlice: registrationReducers,
    loginSlice: loginSlice.reducer,
    userSlice: userSlice.reducer,
    categorySlice: categorySlice.reducer,
    brandSlice: brandSlice.reducer,
    deviceSlice: deviceSlice.reducer,
    cartSlice: cartSlice.reducer,
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