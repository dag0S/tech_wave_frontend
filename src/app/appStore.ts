import { configureStore, Store } from "@reduxjs/toolkit";
import { baseApi } from "@/shared/api";
import { authSlice } from "@/entities/user";

export const store: Store = configureStore({
  reducer: {
    [baseApi.reducerPath]: baseApi.reducer,
    [authSlice.name]: authSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(baseApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
