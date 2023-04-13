// Need to use the React-specific entry point to import createApi
import { createApi } from "@reduxjs/toolkit/query/react";
import { PaymantData, PaymentSuccessParams } from "app/types/core";
import { baseQueryWitParamsAndhUser } from "util/functions";

// Define a service using a base URL and expected endpoints
export const payApi = createApi({
  reducerPath: "paymantApi",
  tagTypes: ["pay"],
  baseQuery: baseQueryWitParamsAndhUser(),
  endpoints: (build: any) => ({
    pay: build.mutation({
      query: (paymantData: PaymantData): any => ({
        url: `/hyp`,
        method: "POST",
        body: paymantData,
      }),
    }),
    paymantSucess: build.mutation({
      query: (paymantData: any): any => ({
        url: `/hyp/success`,
        method: "POST",
        body: paymantData,
      }),
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { usePayMutation, usePaymantSucessMutation } = payApi;
