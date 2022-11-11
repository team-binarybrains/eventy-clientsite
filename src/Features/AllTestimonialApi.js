import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const allTestimonialApi = createApi({
  reducerPath: "allTestimonialApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://eventy-serversite-production.up.railway.app/",
  }),
  endpoints: (builder) => ({
    getTestimonial: builder.query({
      query: () => `allTestimonial`,
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetTestimonialQuery } = allTestimonialApi;
