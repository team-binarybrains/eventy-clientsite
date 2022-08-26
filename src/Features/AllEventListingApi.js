import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


// Define a service using a base URL and expected endpoints
export const allEventListingApi = createApi({
  reducerPath: 'allEventListingApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://fathomless-hamlet-59180.herokuapp.com/' }),
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: () => `alleventlisting`,
    }),
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetUsersQuery } = allEventListingApi