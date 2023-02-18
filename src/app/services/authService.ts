// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASEURL } from "util/const";

// Define a service using a base URL and expected endpoints
export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({ baseUrl: BASEURL }),
  endpoints: (build) => ({
    signup: build.mutation({
      query: ({ user, authType }) => ({
        url: `/auth/${authType}`,
        method: "POST",
        body: user,
      }),
    }),
    signin: build.mutation({
      query: (user) => ({
        url: `/auth/signin`,
        method: "POST",
        body: user,
      }),
    }),
    socialsignin: build.mutation({
      query: (user) => ({
        url: `/auth/socialsignin`,
        method: "POST",
        body: user,
      }),
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useSigninMutation, useSignupMutation, useSocialsigninMutation } =
  authApi;
