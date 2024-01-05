import { useSelector } from "react-redux";
import MovieInfoAndList from "./MovieInfoAndList";
import MovieTrailer from "./MovieTrailer";
// import AllMovieList from "./AllMovieList";

const Home = () => {

  const movieTrailer = useSelector(state => state.movie.topRatedMovieTrailerKey)

  return (
    <div className="flex">
      {movieTrailer !== "" && <MovieTrailer className="absolute w-full -z-10"/>}
      <MovieInfoAndList className="w-full"/>
        {/* <AllMovieList /> */}
    </div>
  );
};

export default Home;
