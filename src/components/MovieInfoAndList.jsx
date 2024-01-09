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
import { FaPlay } from "react-icons/fa";
import { IoMdInformationCircleOutline } from "react-icons/io";
import AllMovieList from "./AllMovieList";
import { IoMdVolumeOff } from "react-icons/io";
import { IoVolumeHigh } from "react-icons/io5";
import highestRating from "../utils/highestVoteAvg";
import SingleMovieInfo from "./SingleMovieInfo";

const MovieInfoAndList = ({ className, muteControl, mute }) => {
  const dispatch = useDispatch();
  const [highMovie, setHighMovie] = useState(null);
  const [id, setId] = useState("");
  const [moreInfo, setMoreInfo] = useState(false)

  const { data, isLoading } = useGetMoviesQuery();
  const { data: movieVideoList, isLoading: isVideoListLoading } =
    useGetMovieTrailerQuery(id);

  const trailer = (list) => {
    let newList = list.filter((elem) => elem.type === "Trailer");
    return newList[0].key;
  };

  useEffect(() => {
    if (!isLoading) {
      dispatch(addNowPlayingMovie(data.results));
      setHighMovie(highestRating(data.results));
      setId(highestRating(data.results).id);
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
          <div className="w-2/3 p-5 ml-7 lg:mt-72 md:mt-52 sm:mt-32 mt-20 space-y-3">
            <p className="lg:text-6xl md:text-5xl sm:text-3xl text-2xl font-bold text-white">{highMovie?.title}</p>
            <p className="font-semibold text-white lg:text-base md:text-base sm:text-sm text-xs">{charCounter(highMovie?.overview)}</p>
          </div>
          <div className="flex items-center justify-between">
            <div className="lg:ml-12 md:ml-12 sm:ml-10 ml-8 flex items-center space-x-4">
              <button onClick={() => setMoreInfo(true)} className="flex items-center space-x-2 text-white px-6 py-[6.5px] bg-gray-800 bg-opacity-40 hover:bg-opacity-70 transition font-semibold rounded">
                <IoMdInformationCircleOutline className="lg:text-3xl md:text-3xl text-2xl" />
                <p className="lg:text-base md:text-base text-sm">More Info</p>
              </button>
            </div>
            <div className="flex items-center space-x-9">
              <button onClick={muteControl}>{mute === "0" ? <IoMdVolumeOff className="text-white text-3xl" /> : <IoVolumeHigh className="text-white text-3xl" />}</button>
            <div className="py-2 px-3 border-l-2 border-white text-gray-200 bg-black bg-opacity-30">
              <p className="mr-5">U/A 16+</p>
            </div>
            </div>
            {moreInfo && <SingleMovieInfo movie={highMovie} onCancel={() => setMoreInfo(false)}/>}
          </div>
          <AllMovieList className="mt-5" />
    </div>
  );
};

export default MovieInfoAndList;
