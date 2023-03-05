import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQueryWithUser } from "util/functions";
import { User } from "app/types/core";
export const usersApi = createApi({
  reducerPath: "UsersProfile",
  baseQuery: baseQueryWithUser,
  endpoints: (build: any): any => ({
    getUser: build.query({
      query: () => ``,
      providesTags: ["Users"],
    }),
  }),
});

export const { useGetUserQuery } = usersApi;
