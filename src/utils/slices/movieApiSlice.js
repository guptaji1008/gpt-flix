import apiSlice from "./apiSlice";

const movieApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getMovies: builder.query({
      query: () => "/movie/now_playing?page=1",
    }),
    getMovieTrailer: builder.query({
      query: (movie_id) => `/movie/${movie_id}/videos`,
    }),
    getPopularMovies: builder.query({
      query: () => "/movie/popular",
    }),
    getTopRatedMovies: builder.query({
      query: () => "/movie/top_rated",
    }),
    getUpcomingMovies: builder.query({
      query: () => "/movie/upcoming",
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