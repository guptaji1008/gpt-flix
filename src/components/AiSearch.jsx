import { useState } from "react";
import openai from "../utils/openai";
import { RxCross1 } from "react-icons/rx";
import fetchAiSearchedMovies from "../utils/fetchAiSearchedMovie";
import highestRating from "../utils/highestVoteAvg";
import MovieCard from "./MovieCard";

const AiSearch = () => {
  const [isPending, setIsPending] = useState(false);
  const [searchedText, setSearchedText] = useState("");
  const [movieList, setMovieList] = useState([]);

  const searchMovies = async (list) => {
    const newList = list.map((m) =>
      m
        .split("")
        .filter((letter) => letter !== `'` && letter !== `"` && letter !== `.`)
        .join("")
    );
    const promiseArray = newList.map((m) => fetchAiSearchedMovies(m));
    const resolvedPromise = await Promise.all(promiseArray);
    setMovieList(resolvedPromise.map((m) => highestRating(m.results)));
    setIsPending(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (searchedText) {
      setIsPending(true);
      const query =
        "Act as a movie recommendation system and suggest some movies for the query: " +
        searchedText +
        ". Just give 5 (OR NUMBER MENTIONED IN THE QUERY) 'MOVIE NAME' with comma separated like example : 'Sholay, Gadar, Janzir, Ashique, Naam'. '**PLEASE SEND INFORMATION AS GIVEN IN EXAMPLE, NOTHING ELSE**'.";
      const chatCompletion = await openai.chat.completions.create({
        messages: [{ role: "user", content: query }],
        model: "gpt-3.5-turbo",
      });
      console.log(chatCompletion.choices[0].message.content);
      searchMovies([...chatCompletion.choices[0].message.content.split(", ")]);
    }
  };

  return (
    <div className="pt-24 space-y-10">
      <p className="text-4xl text-center font-bold text-white">
        Search your type of Movies
      </p>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col justify-center items-center space-y-6"
      >
        <div className="lg:w-5/12 md:w-6/12 sm:w-7/12 w-8/12 flex relative">
          <input
            value={searchedText}
            onChange={(e) => setSearchedText(e.target.value)}
            className="w-full outline-none py-3 pl-4 pr-10 rounded"
            type="text"
            placeholder="Search genres.."
          />
          {searchedText && (
            <div className="absolute w-10 h-full right-0 flex items-center justify-center">
              <button type="button" onClick={() => setSearchedText("")}>
                <RxCross1 className="text-gray-800 font-semibold text-lg" />
              </button>
            </div>
          )}
        </div>
        <button
          type="submit"
          disabled={isPending}
          className={
            "transition py-2 px-4 text-white rounded font-semibold text-xl " +
            (!isPending
              ? " bg-violet-700 hover:bg-violet-900"
              : " bg-violet-900")
          }
        >
          {!isPending ? (
            "Search"
          ) : (
            <div className="py-[0.35rem] px-[0.85rem]">
              <div className="loader"></div>
            </div>
          )}
        </button>
      </form>
      <div className="pb-10 lg:px-28 md:px-16 sm:px-14 px-10 grid lg:grid-cols-5 md:grid-cols-5 sm:grid-cols-4 grid-cols-2 lg:gap-7 md:gap-5 sm:gap-4 gap-3">
        {movieList.length &&
          movieList.map((movie) => {
            console.log(movie);
            return (
              <MovieCard
                aiMovie={movie}
                className="w-full"
                imageKey={movie.poster_path}
                alt={movie.title}
              />
            );
          })}
      </div>
    </div>
  );
};

export default AiSearch;
