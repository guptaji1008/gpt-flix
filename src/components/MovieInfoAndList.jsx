import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import {
  useGetMoviesQuery,
  useGetMovieTrailerQuery,
} from "../utils/slices/movieApiSlice";
import {
  addNowPlayingMovie,
  updateTrailerKey,
} from "../utils/slices/movieSlice";
import Header from "./Header";
import { FaPlay } from "react-icons/fa";
import { IoMdInformationCircleOutline } from "react-icons/io";
import AllMovieList from "./AllMovieList";

const MovieInfoAndList = ({ className }) => {
  const dispatch = useDispatch();
  const [highMovie, setHighMovie] = useState(null);
  const [id, setId] = useState("");

  const { data, isLoading } = useGetMoviesQuery();
  const { data: movieVideoList, isLoading: isVideoListLoading } =
    useGetMovieTrailerQuery(id);

  const highestRating = (list) => {
    let rating = 0;
    let index = 0;
    for (let i in list) {
      if (list[i].vote_average > rating) {
        rating = list[i].vote_average;
        index = i;
      }
    }
    return list[index];
  };

  const trailer = (list) => {
    let newList = list.filter((elem) => elem.type === "Trailer");
    return newList[0].key;
  };

  useEffect(() => {
    if (!isLoading) {
      dispatch(addNowPlayingMovie(data.results));
      setHighMovie(highestRating(data.results));
      setId(highestRating(data.results).id);
      console.log(highestRating(data.results))
    }
  }, [data]);

  useEffect(() => {
    if (!isVideoListLoading && !isLoading && movieVideoList) {
      dispatch(updateTrailerKey(trailer(movieVideoList.results)));
    }
  }, [id, movieVideoList, data]);

  const charCounter = (sentence) => {
    if (sentence?.length <= 100) return sentence;
    return sentence?.substring(0, 101) + "..."
  }

  return (
    <div className={className}>
      <Header className="fixed top-0 right-0 left-0" />
          <div className="w-2/3 p-5 ml-7 lg:mt-96 md:mt-72 sm:mt-32 mt-24">
            <p className="lg:text-6xl md:text-5xl sm:text-3xl text-2xl font-bold text-white">{highMovie?.title}</p>
            <p className="font-semibold text-white lg:text-base md:text-base sm:text-sm text-xs">{charCounter(highMovie?.overview)}</p>
          </div>
          <div className="flex items-center justify-between">
            <div className="lg:ml-12 md:ml-12 sm:ml-10 ml-8 flex items-center space-x-4">
              <button className="flex items-center space-x-2 px-8 py-2 bg-gray-200 hover:bg-gray-300 transition lg:text-lg md:text-lg text-base font-semibold rounded">
                <FaPlay />
                <p>Play</p>
              </button>
              <button className="flex items-center space-x-2 text-white px-6 py-[6.5px] bg-black bg-opacity-40 hover:bg-opacity-50 transition font-semibold rounded">
                <IoMdInformationCircleOutline className="lg:text-3xl md:text-3xl text-2xl" />
                <p className="lg:text-base md:text-base text-sm">More Info</p>
              </button>
            </div>
            <div className="py-2 px-3 border-l-2 border-white text-gray-200 bg-black bg-opacity-30">
              <p className="mr-5">U/A 16+</p>
            </div>
          </div>
          <AllMovieList className="mt-5" />
    </div>
  );
};

export default MovieInfoAndList;
