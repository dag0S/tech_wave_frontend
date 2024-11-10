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
import { rangePriceSlice, RangePriceState } from "@/entities/rangePrice";
import { favoriteListSlice, FavoriteListState } from "@/entities/favoriteList";
import { profileSlice, ProfileState } from "@/features/editProfile";
import { searchSlice, SearchState } from "@/features/search";

export interface StateSchema {
  loginSlice: LoginState;
  registrationSlice: RegistrationState;
  userSlice: UserState;
  deviceSlice: DeviceState;
  categorySlice: CategoryState;
  brandSlice: BrandState;
  cartSlice: CartState;
  rangePrice: RangePriceState;
  favoriteList: FavoriteListState;
  profileSlice: ProfileState;
  searchSlice: SearchState;
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
    rangePrice: rangePriceSlice.reducer,
    favoriteList: favoriteListSlice.reducer,
    profileSlice: profileSlice.reducer,
    searchSlice: searchSlice.reducer,
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
