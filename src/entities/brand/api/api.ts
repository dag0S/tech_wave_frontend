import { baseApi } from "@/shared/api";
import { BrandData, ResponseBrandData } from "../model/types";

export const brandApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllBrands: builder.query<ResponseBrandData[], void>({
      query: () => ({
        url: "/brands",
        method: "GET",
      }),
    }),
    createBrand: builder.mutation<ResponseBrandData, BrandData>({
      query: (brandData) => ({
        url: "/brands",
        method: "POST",
        body: brandData,
      }),
    }),
  }),
});

export const { useGetAllBrandsQuery, useCreateBrandMutation } = brandApi;
