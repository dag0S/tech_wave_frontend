import { baseApi } from "@/shared/api";
import { CategoryData, ResponseCategoryData } from "../model/types";

export const categoryApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllCategories: builder.query<ResponseCategoryData[], void>({
      query: () => ({
        url: "/categories",
        method: "GET",
      }),
    }),
    getCategoryById: builder.query<ResponseCategoryData, number>({
      query: (id) => ({
        url: `/categories/${id}`,
        method: "GET",
      }),
    }),
    createCategory: builder.mutation<ResponseCategoryData, CategoryData>({
      query: (categoryData) => ({
        url: "/categories",
        method: "POST",
        body: categoryData,
      }),
    }),
  }),
});

export const {
  useGetAllCategoriesQuery,
  useCreateCategoryMutation,
  useGetCategoryByIdQuery,
} = categoryApi;
