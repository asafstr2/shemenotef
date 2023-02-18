// // Need to use the React-specific entry point to import createApi
import { createApi } from "@reduxjs/toolkit/query/react";
// import { baseQuery } from "util/functions";

// // Define a service using a base URL and expected endpoints
// export const checkoutApi = createApi({
//   reducerPath: "checkoutService",
//   baseQuery: baseQuery,
//   endpoints: (build: any) => ({
//     postPayment: build.mutation({
//       query: ({ id, ...cart }) => ({
//         url: `/users/${id}/pay`,
//         method: "POST",
//         body: cart,
//       }),
//     }),
//   }),
// });

// // Export hooks for usage in functional components, which are
// // auto-generated based on the defined endpoints
// export const { usePostPaymentMutation } = checkoutApi;
