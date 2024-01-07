import MovieCard from "./MovieCard";

const SingleMovieList = ({ list, className, typeOfMovies }) => {
  return (
    <div>
        <p className="text-white font-semibold text-3xl pb-3 pl-3">{typeOfMovies}:</p>
      <div
        className={
          className +
          " flex flex-row space-x-2 overflow-x-auto scrollbar-thin scrollbar-thumb-black scrollbar-track-black"
        }
      >
        {list?.map((movie) => (
          <MovieCard
          key={movie.title}
            className="flex-none "
            imageKey={movie.poster_path}
            alt={movie.title}
          />
        ))}
      </div>
    </div>
  );
};

export default SingleMovieList;
