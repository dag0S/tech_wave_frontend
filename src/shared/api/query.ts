import { fetchBaseQuery, retry } from "@reduxjs/toolkit/query";

const BaseQuery = fetchBaseQuery({
  baseUrl: `${import.meta.env.VITE_API_URL}/api`,
});

export const baseQueryWithRetry = retry(BaseQuery, { maxRetries: 1 });
