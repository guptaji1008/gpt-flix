import { useState } from "react";
import { IoMdInformationCircleOutline } from "react-icons/io";
import SingleMovieInfo from "./SingleMovieInfo";
import { useSelector } from "react-redux";

const MovieCard = ({ imageKey, className, alt, aiMovie }) => {

  const [selectedMovie, setSelectedMovie] = useState(null)
  const [moreInfoButton, setMoreInfoButton] = useState(false)

  const uniqueMovies = useSelector(state => state.movie.uniqueMovies)

  const handleMoreInfoButton = (title) => {
    const movie = uniqueMovies.find((m) => m.title === title)
    if (movie) {
      setSelectedMovie(movie)
    } else {
      setSelectedMovie(aiMovie)
    }
  }

  return (
    <>
      <div
      onMouseEnter={() => setMoreInfoButton(true)}
      onMouseLeave={() => setMoreInfoButton(false)}
      className={"cursor-pointer relative " + className}
    >
      {moreInfoButton && <div className="absolute inset-0 backdrop-blur-sm transition">
        <div className="flex items-center justify-center size-full">
          <button onClick={() => handleMoreInfoButton(alt)} className="flex items-center space-x-2 text-white px-4 py-[6.5px] bg-black bg-opacity-40 hover:bg-opacity-50 transition font-semibold rounded">
            <IoMdInformationCircleOutline className="lg:text-3xl md:text-3xl text-2xl" />
            <p className="lg:text-base md:text-base text-sm">More Info</p>
          </button>
        </div>
      </div>}
      <img
        className="w-full rounded"
        src={imageKey ? `https://image.tmdb.org/t/p/w500${imageKey}` : "https://i.pinimg.com/564x/16/f0/d5/16f0d56971f371019bfdc27e6a1d2984.jpg"}
        alt={alt}
      />
    </div>
      { selectedMovie && <SingleMovieInfo movie={selectedMovie} onCancel={() => setSelectedMovie(null)} />}
    </>
  );
};

export default MovieCard;
