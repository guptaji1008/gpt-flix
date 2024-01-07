import { useSelector } from "react-redux";
import MovieInfoAndList from "./MovieInfoAndList";
import MovieTrailer from "./MovieTrailer";
import { useState } from "react";

const Home = () => {

  const movieTrailer = useSelector(state => state.movie.topRatedMovieTrailerKey)

  const [mute, setMute] = useState("1")

  return (
    <div>
      {movieTrailer !== "" && <MovieTrailer mute={mute} movieTrailer={movieTrailer} className="absolute lg:-top-24 md:-top-16 sm:-top-20 -top-16 w-full -z-10"/>}
      <MovieInfoAndList className="w-full" mute={mute} muteControl={() => mute === "0" ? setMute("1") : setMute("0")}/>
    </div>
  );
};

export default Home;
