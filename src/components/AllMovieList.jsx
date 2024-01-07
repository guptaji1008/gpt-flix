import { useDispatch, useSelector } from "react-redux";
import SingleMovieList from "./SingleMovieList";
import {
  useGetPopularMoviesQuery,
  useGetTopRatedMoviesQuery,
  useGetUpcomingMoviesQuery,
} from "../utils/slices/movieApiSlice";
import { useEffect } from "react";
import { addPopularMovie, addTopRatedMovie, addUniqueMovie, addUpcomingMovie } from "../utils/slices/movieSlice";
import uniqueMoviesFunc from "../utils/uniqueMovieFunc";

const AllMovieList = () => {

  const dispatch = useDispatch()
  const nowPlayingMovies = useSelector((state) => state.movie.nowPlayingMovies);

  const { data: popularMovies, isLoading: isLoadingPopularMovies } =
    useGetPopularMoviesQuery();
  const { data: topRatedMovies, isLoading: isLoadingTopRatedMovies } =
    useGetTopRatedMoviesQuery();
  const { data: upcomingMovies, isLoading: isLoadingUpcomingMovies } =
    useGetUpcomingMoviesQuery();

  useEffect(() => {
    if (
      nowPlayingMovies &&
      !isLoadingPopularMovies &&
      !isLoadingTopRatedMovies &&
      !isLoadingUpcomingMovies
    ) {
      const uniqueMovies = uniqueMoviesFunc(
        nowPlayingMovies,
        popularMovies?.results,
        topRatedMovies?.results,
        upcomingMovies?.results
      );
      dispatch(addPopularMovie(popularMovies?.results))
      dispatch(addTopRatedMovie(topRatedMovies?.results))
      dispatch(addUpcomingMovie(upcomingMovies?.results))
      dispatch(addUniqueMovie(uniqueMovies))
    }
  }, [nowPlayingMovies, popularMovies, topRatedMovies, upcomingMovies]);

  return (
    <div className="space-y-3 mt-12 pl-5 pr-2 pb-5">
      {nowPlayingMovies && (
        <SingleMovieList
          typeOfMovies="Now Playing Movies"
          list={nowPlayingMovies}
        />
      )}
      {!isLoadingPopularMovies && (
        <SingleMovieList
          typeOfMovies="Popular Movies"
          list={popularMovies?.results}
        />
      )}
      {!isLoadingTopRatedMovies && (
        <SingleMovieList
          typeOfMovies="Top Rated Movies"
          list={topRatedMovies?.results}
        />
      )}
      {!isLoadingUpcomingMovies && (
        <SingleMovieList
          typeOfMovies="Upcoming Movies"
          list={upcomingMovies?.results}
        />
      )}
    </div>
  );
};

export default AllMovieList;
