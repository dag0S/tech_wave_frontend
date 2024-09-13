import { StateSchema } from "@/app/storeProvider";
import { fetchBaseQuery, retry } from "@reduxjs/toolkit/query";

const BaseQuery = fetchBaseQuery({
  baseUrl: `${import.meta.env.VITE_API_URL}/api`,
  prepareHeaders: (headers, { getState }) => {
    const token =
      (getState() as StateSchema).userSlice?.token ||
      localStorage.getItem(import.meta.env.VITE_TOKEN);

    if (token) {
      headers.set("authorization", `Bearer ${token}`);
    }
  },
});

export const baseQueryWithRetry = retry(BaseQuery, { maxRetries: 1 });
