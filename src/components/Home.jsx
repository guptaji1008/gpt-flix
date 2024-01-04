import { useSelector } from "react-redux";
import MovieInfoAndList from "./MovieInfoAndList";
import MovieTrailer from "./MovieTrailer";

const Home = () => {

  const movieTrailer = useSelector(state => state.movie.topRatedMovieTrailerKey)

  return (
    <div className="flex">
      {movieTrailer !== "" && <MovieTrailer />}
      <MovieInfoAndList className="absolute w-full" />
    </div>
  );
};

export default Home;
