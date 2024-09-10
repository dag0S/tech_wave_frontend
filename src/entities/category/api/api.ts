import { baseApi } from "@/shared/api";
import { CategoryData, ResponseCategoryData } from "../model/types";

export const categoryApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllCategories: builder.query<ResponseCategoryData[], void>({
      query: () => ({
        url: "/category",
        method: "GET",
      }),
    }),
    createCategory: builder.mutation<ResponseCategoryData, CategoryData>({
      query: (categoryData) => ({
        url: "/category/create",
        method: "POST",
        body: categoryData,
      }),
    }),
  }),
});

export const { useGetAllCategoriesQuery, useCreateCategoryMutation } =
  categoryApi;
