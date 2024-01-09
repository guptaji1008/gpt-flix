import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const apiSlice = createApi({
    baseQuery: fetchBaseQuery({
        baseUrl: import.meta.env.VITE_BASE_URL,
        prepareHeaders: (headers) => {
          headers.set('Accept', 'application/json');
          headers.set('Authorization', `Bearer ${import.meta.env.VITE_TOKEN}`);
          return headers;
        },
      }),
      endpoints: (builder) => ({})
})

export default apiSlice;