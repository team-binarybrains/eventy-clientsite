import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const allUpcomingEvent = createApi({
  reducerPath: "allUpcomingEvent",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://eventy-serversite-production.up.railway.app/",
  }),
  endpoints: (builder) => ({
    getUpcomingEvent: builder.query({
      query: () => `alleventlisting`,
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetUpcomingEventQuery } = allUpcomingEvent;
