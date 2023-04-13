// Need to use the React-specific entry point to import createApi
import { createApi } from "@reduxjs/toolkit/query/react";
import { Report } from "app/types/core";
import { baseQueryWitParamsAndhUser } from "util/functions";

// Define a service using a base URL and expected endpoints
export const contactUsApi = createApi({
  reducerPath: "contactUs",
  tagTypes: ["contactUs"],
  baseQuery: baseQueryWitParamsAndhUser("contact"),
  endpoints: (build: any) => ({
    report: build.mutation({
      query: (reportData: Report): any => ({
        url: `/report`,
        method: "POST",
        body: reportData,
      }),
    }),
    contactUs: build.mutation({
      query: (contactUsData: any): any => ({
        url: `/contact-us`,
        method: "POST",
        body: contactUsData,
      }),
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useReportMutation, useContactUsMutation } = contactUsApi;
