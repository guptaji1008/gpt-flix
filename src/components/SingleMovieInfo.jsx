import MovieTrailer from "./MovieTrailer";
import { useGetMovieTrailerQuery } from "../utils/slices/movieApiSlice";
import { GiCrossedSabres } from "react-icons/gi";

const SingleMovieInfo = ({ movie, onCancel }) => {
  const { data: movieVideoList, isLoading: isVideoListLoading } =
    useGetMovieTrailerQuery(movie?.id);

  const trailer = (list) => {
    if (list.length) {
      let newList = list.filter((elem) => elem.type === "Trailer");
      let otherList = list.filter((elem) => elem.key);
      if (newList.length && newList[0].key) return newList[0].key;
      return otherList[0]?.key;
    }
    return null;
  };

  const handleCloseArea = (e) => {
    if (e.target.id === "modal-container") {
      onCancel();
    }
  };

  return (
    <>
      <div className="fixed inset-0 backdrop-blur-sm z-50">
        <div
          onClick={handleCloseArea}
          id="modal-container"
          className="size-full flex items-center justify-center"
        >
          {isVideoListLoading ? (
            <span class="loaderVideo"></span>
          ) : (
            <MovieInformation
              movieKey={trailer(movieVideoList.results)}
              onCancel={onCancel}
              movie={movie}
            />
          )}
        </div>
      </div>
    </>
  );
};

export default SingleMovieInfo;

const MovieInformation = ({ movieKey, onCancel, movie }) => {
  if (movieKey)
    return (
      <div className="relative lg:w-3/5 md:3/5 sm:w-4/5 w-4/5 md:w-2/3 lg:h-5/6 sm:h-4/6 h-5/6 rounded-md bg-black overflow-auto scrollbar-none">
        <div className="w-full">
          <MovieTrailer
            mute="0"
            movieTrailer={movieKey}
            className="absolute w-full lg:-top-16 md:-top-12 sm:-top-14 -top-10"
          />
        </div>
        <div className="absolute w-full z-10 lg:space-y-60 md:space-y-48 sm:space-y-32 space-y-28">
          <div className="relative mt-8 mr-3 flex items-center justify-end">
            <button
              onClick={onCancel}
              className="fixed rounded-full border-transparent border-2 p-3 hover:border-white transition border-double"
            >
              <GiCrossedSabres className="text-white text-xl" />
            </button>
          </div>
          <div className="px-6 pb-4 space-y-7">
            <p className="text-white text-5xl font-semibold">{movie?.title}</p>
            <p className="text-white text-xl">{movie?.overview}</p>
          </div>
        </div>
      </div>
    );
  return (
    <div className="lg:w-3/5 md:3/5 sm:w-4/5 w-4/5 md:w-2/3 p-5 rounded-md bg-gray-800 overflow-auto scrollbar-none space-y-3">
      <p className="text-center lg:text-4xl md:text-3xl text-2xl text-bold text-red-600 font-bold">
        **NO INFORMATION AVAILABLE**
      </p>
      <p className="lg:text-xl md:text-lg text-base text-white font-bold">
        This is a netflix clone, just for practice purpose. All the datas are
        being fetched from TMDB apis. Although there are lots of different
        varieties of movies available on that website, but some of the movie's
        data are missing. Sorry for that {":("}
      </p>
    </div>
  );
};
