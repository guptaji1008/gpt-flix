import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name: "movie",
    initialState: {
        nowPlayingMovies: null,
        topRatedMovieTrailerKey: "" 
    },
    reducers: {
        addNowPlayingMovie: (state, action) => {
            state.nowPlayingMovies = action.payload;
        },
        updateTrailerKey: (state, action) => {
            state.topRatedMovieTrailerKey = action.payload;
        }
    }
});

export const { addNowPlayingMovie, updateTrailerKey } = movieSlice.actions;
export default movieSlice.reducer;