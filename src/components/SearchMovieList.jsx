import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import MovieCard from "./MovieCard";

const SearchMovieList = () => {
  const [movieList, setMovieList] = useState(null);

  const searchChar = useSelector((state) => state.movie.searchedMovie);
  const searchedMovieList = useSelector(
    (state) => state.movie.searchedMovieList
  );
  const navigate = useNavigate();

  useEffect(() => {
    if (searchChar === "") navigate("/");
    setMovieList(searchedMovieList);
  }, [searchChar, searchedMovieList, movieList]);

  if (movieList === null) return;

  if (!movieList.length)
    return (
      <div className="py-28">
        <p className="text-white text-4xl text-center font-semibold">
          No Movie Found
        </p>
      </div>
    );

  return (
    <div className="py-28 lg:px-28 md:px-16 sm:px-14 px-10 grid lg:grid-cols-5 md:grid-cols-5 sm:grid-cols-4 grid-cols-2 lg:gap-7 md:gap-5 sm:gap-4 gap-3">
      {movieList.map((movie) => {
        return <MovieCard className="w-full" imageKey={movie.poster_path} alt={movie.title} />;
      })}
    </div>
  );
};

export default SearchMovieList;
