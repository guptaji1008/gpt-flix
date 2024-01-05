import apiSlice from "./apiSlice";

const movieApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getMovies: builder.query({
      query: () => "/now_playing?page=1",
    }),
    getMovieTrailer: builder.query({
      query: (movie_id) => `/${movie_id}/videos`,
    }),
    getPopularMovies: builder.query({
      query: () => "/popular",
    }),
    getTopRatedMovies: builder.query({
      query: () => "/top_rated",
    }),
    getUpcomingMovies: builder.query({
      query: () => "/upcoming",
    }),
  }),
});

export const {
  useGetMoviesQuery,
  useGetMovieTrailerQuery,
  useGetPopularMoviesQuery,
  useGetTopRatedMoviesQuery,
  useGetUpcomingMoviesQuery
} = movieApiSlice;
