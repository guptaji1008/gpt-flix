import apiSlice from "./apiSlice";

const movieApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getMovies: builder.query({
            query: () => "/now_playing?page=1"
        }),
        getMovieTrailer: builder.query({
            query: (movie_id) => `/${movie_id}/videos`
        })
    })
});

export const { useGetMoviesQuery, useGetMovieTrailerQuery } = movieApiSlice