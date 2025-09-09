import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { AuthDto, Deal } from "../types/types";
import type { BaseQueryFn, FetchArgs } from "@reduxjs/toolkit/query";

interface ErrorHandler {
  data: { message: string };
}
const baseUrl = import.meta.env.VITE_API_BASE_URL;

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: baseUrl,
  }) as BaseQueryFn<string | FetchArgs, unknown, ErrorHandler>,
  endpoints: (builder) => ({
    register: builder.mutation<{ message: string }, AuthDto>({
      query: (credentials) => ({
        url: "/auth/register",
        method: "POST",
        body: credentials,
      }),
    }),
    login: builder.mutation<{ accessToken: string }, AuthDto>({
      query: (credentials) => ({
        url: "/auth/login",
        method: "POST",
        body: credentials,
      }),
    }),
    getDeals: builder.query<Deal[], void>({
      query: () => "/deals",
    }),
  }),
});

export const { useRegisterMutation, useLoginMutation, useGetDealsQuery } =
  apiSlice;
