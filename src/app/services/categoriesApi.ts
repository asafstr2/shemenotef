// Need to use the React-specific entry point to import createApi
import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQuery, baseQueryWithUserForCategories } from "util/functions";
import { Category } from "app/types/core";
// Define a service using a base URL and expected endpoints
export const categoriesApi = createApi({
  reducerPath: "categories",
  baseQuery: baseQuery,
  tagTypes: ["getAllCategories", "getCategoryById"],
  endpoints: (build: any) => ({
    getAllcategories: build.query({
      query: () => `categories`,
      providesTags: ["getAllCategories"],
    }),
    getCategoryById: build.query({
      query: ({ id }: { id: string }) => `categories/${id}`,
      providesTags: ["getProductById"],
    }),
  }),
});
// Define a service using a base URL and expected endpoints
export const categoriesApiAdmin = createApi({
  reducerPath: "AdminCategories",
  baseQuery: baseQueryWithUserForCategories,
  tagTypes: ["addCategory"],
  endpoints: (build: any) => ({
    addCategory: build.mutation({
      query: (category: Category[]) => ({
        url: `/foradmin`,
        method: "POST",
        body: category,
      }),
      invalidatesTags: ["addCategory"],
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetAllcategoriesQuery, useGetCategoryByIdQuery } =
  categoriesApi;

export const { useAddCategoryMutation } = categoriesApiAdmin;
