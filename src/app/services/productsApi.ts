// Need to use the React-specific entry point to import createApi
import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQuery, baseQueryWithUserForProduct } from "util/functions";
import { store } from "app/store";
import { Products } from "app/types/core";
// Define a service using a base URL and expected endpoints
export const productsApi = createApi({
  reducerPath: "products",
  baseQuery: baseQuery,
  tagTypes: ["getAllProducts", "getProductById", "getProductsByCategory"],
  endpoints: (build: any) => ({
    getAllProducts: build.query({
      query: () => `products`,
      providesTags: ["getAllProducts"],
      //   transformResponse: (response: any, meta: any, arg: any) => {
      //     const lang: "hebrew" | "russian" = store.getState().lang.lang;
      //     const mutateResponse: Products[] = response?.map(
      //       (product: Products) => ({
      //         ...product,
      //         title:
      //           product.otherLanguageTitle[lang] ??
      //           product.otherLanguageTitle.default,
      //         description:
      //           product.otherLanguageDescription[lang] ??
      //           product.otherLanguageDescription.default,
      //       })
      //     );
      //     return mutateResponse;
      //   },
    }),
    getProductById: build.query({
      query: ({ id }: { id: string }) => `products/${id}`,
      providesTags: ["getProductById"],
    }),
    getProductsByCategory: build.query({
      query: (categories: string) => `products/${categories}`,
      providesTags: ["getProductsByCategory"],
    }),
  }),
});
// Define a service using a base URL and expected endpoints
export const productsApiAdmin = createApi({
  reducerPath: "AdminProducts",
  baseQuery: baseQueryWithUserForProduct,
  tagTypes: [
    "getUploadAssetsUrl",
    "getAllProductsAdmin",
    "addProduct",
    "deleteProduct",
  ],
  endpoints: (build: any) => ({
    getUploadAssetsUrl: build.query({
      query: () => `/foradmin/uploadasset`,
      providesTags: ["getUploadAssetsUrl"],
    }),
    getAllProductsAdmin: build.query({
      query: () => `/foradmin`,
      providesTags: ["getAllProductsAdmin"],
    }),
    addProduct: build.mutation({
      query: (product: Products) => ({
        url: `/foradmin`,
        method: "POST",
        body: product,
      }),
      invalidatesTags: ["getAllProducts", "getProductById"],
    }),
    deleteProduct: build.mutation({
      query: (id: string) => ({
        url: `/foradmin/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["getAllProducts", "getProductById"],
    }),
    updateProduct: build.mutation({
      query: ({
        productId,
        productData,
      }: {
        productId: string;
        productData: Products;
      }) => ({
        url: `/foradmin/${productId}`,
        method: "PUT",
        body: productData,
      }),
      invalidatesTags: ["getAllProducts", "getProductById"],
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
  useGetAllProductsQuery,
  useGetProductByIdQuery,
  useGetProductsByCategoryQuery,
} = productsApi;

export const {
  useGetAllProductsAdminQuery,
  useGetUploadAssetsUrlQuery,
  useAddProductMutation,
  useDeleteProductMutation,
  useUpdateProductMutation,
} = productsApiAdmin;


