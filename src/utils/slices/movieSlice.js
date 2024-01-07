import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movie",
  initialState: {
    nowPlayingMovies: null,
    popularMovies: null,
    topRatedMovies: null,
    upcomingMovies: null,
    uniqueMovies: null,
    topRatedMovieTrailerKey: "",
    selectedForMoreInfoMovie: {},
    searchedMovie: ""
  },
  reducers: {
    addNowPlayingMovie: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addPopularMovie: (state, action) => {
      state.popularMovies = action.payload;
    },
    addTopRatedMovie: (state, action) => {
      state.topRatedMovies = action.payload;
    },
    addUpcomingMovie: (state, action) => {
      state.upcomingMovies = action.payload;
    },
    addUniqueMovie: (state, action) => {
      state.uniqueMovies = action.payload;
    },
    selectedMovie: (state, action) => {
      state.selectedForMoreInfoMovie = action.payload
    },
    onChangeSearchMovie: (state, action) => {
      state.searchedMovie = action.payload
    },
    updateTrailerKey: (state, action) => {
      state.topRatedMovieTrailerKey = action.payload;
    },
  },
});

export const {
  addNowPlayingMovie,
  updateTrailerKey,
  addPopularMovie,
  addTopRatedMovie,
  addUpcomingMovie,
  addUniqueMovie,
  selectedMovie,
  onChangeSearchMovie
} = movieSlice.actions;
export default movieSlice.reducer;
