import { baseApi } from "@/shared/api";
import { BrandData, ResponseBrandData } from "../model/types";

export const brandApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllBrands: builder.query<ResponseBrandData[], void>({
      query: () => ({
        url: "/brand",
        method: "GET",
      }),
    }),
    createBrand: builder.mutation<ResponseBrandData, BrandData>({
      query: (brandData) => ({
        url: "/brand/create",
        method: "POST",
        body: brandData,
      }),
    }),
  }),
});

export const { useGetAllBrandsQuery, useCreateBrandMutation } = brandApi;
