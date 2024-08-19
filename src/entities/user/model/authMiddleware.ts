import { createListenerMiddleware } from "@reduxjs/toolkit";
import { authApi } from "../api/api";

export const listenerMiddleware = createListenerMiddleware();

listenerMiddleware.startListening({
  matcher: authApi.endpoints.login.matchFulfilled,
  effect: async (action, listenerApi) => {
    listenerApi.cancelActiveListeners();

    if (action.payload.token) {
      localStorage.setItem(import.meta.env.VITE_TOKEN, action.payload.token);
    }
  },
});
