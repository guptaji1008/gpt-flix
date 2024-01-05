import { useSelector } from "react-redux";
import SingleMovieList from "./SingleMovieList"
import { useGetPopularMoviesQuery, useGetTopRatedMoviesQuery, useGetUpcomingMoviesQuery } from "../utils/slices/movieApiSlice";

const AllMovieList = () => {

  const movieList = useSelector(state => state.movie.nowPlayingMovies);

  const { data: popularMovies, isLoading: isLoadingPopularMovies } = useGetPopularMoviesQuery();
  const { data: topRatedMovies, isLoading: isLoadingTopRatedMovies } = useGetTopRatedMoviesQuery();
  const { data: upcomingMovies, isLoading: isLoadingUpcomingMovies } = useGetUpcomingMoviesQuery();

  return (
    <div className="space-y-3 mt-12 pl-5 pr-2 pb-5">
      {movieList && <SingleMovieList typeOfMovies="Now Playing Movies" list={movieList} />}
      {!isLoadingPopularMovies && <SingleMovieList typeOfMovies="Popular Movies" list={popularMovies?.results} />}
      {!isLoadingTopRatedMovies && <SingleMovieList typeOfMovies="Top Rated Movies" list={topRatedMovies?.results} />}
      {!isLoadingUpcomingMovies && <SingleMovieList typeOfMovies="Upcoming Movies" list={upcomingMovies?.results} />}
    </div>
  )
}

export default AllMovieList
