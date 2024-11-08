import { StateSchema } from "@/app/storeProvider";
import { fetchBaseQuery, retry } from "@reduxjs/toolkit/query";

const BaseQuery = fetchBaseQuery({
  baseUrl: `${import.meta.env.VITE_API_URL}/`,
  prepareHeaders: (headers, { getState }) => {
    const token =
      (getState() as StateSchema).userSlice?.email ||
      localStorage.getItem(import.meta.env.VITE_TOKEN);

    if (token) {
      headers.set("authorization", token);
    }
  },
});

export const baseQueryWithRetry = retry(BaseQuery, { maxRetries: 1 });
