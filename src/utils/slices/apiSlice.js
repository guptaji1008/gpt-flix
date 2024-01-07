import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const BASE_URL = "https://api.themoviedb.org/3/movie"

const TOKEN = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2YmY5NGUwZDNlM2YwZDcwMTdjMTk1YmZlMDdiNzc0YSIsInN1YiI6IjY1OTRkMjJmMGU2NGFmMGViNDhjMWFjZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.32Qtj5YfBJk2LXYPYruHB0Mvp3Hcka662Awb0d-lVGc"

const apiSlice = createApi({
    baseQuery: fetchBaseQuery({
        baseUrl: BASE_URL,
        prepareHeaders: (headers) => {
          headers.set('Accept', 'application/json');
          headers.set('Authorization', `Bearer ${TOKEN}`);
          return headers;
        },
      }),
      endpoints: (builder) => ({})
})

export default apiSlice;