import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { useGetMoviesQuery, useGetMovieTrailerQuery } from "../utils/slices/movieApiSlice";
import { addNowPlayingMovie, updateTrailerKey } from "../utils/slices/movieSlice";
import Header from "./Header";
import { FaPlay } from "react-icons/fa";
import { IoMdInformationCircleOutline } from "react-icons/io";

const MovieInfoAndList = ({ className }) => {

  const dispatch = useDispatch();
  const [highMovie, setHighMovie] = useState(null);
  const [id, setId] = useState("")
  
  const { data, isLoading } = useGetMoviesQuery();
  const { data: movieVideoList, isLoading: isVideoListLoading } = useGetMovieTrailerQuery(id)
  
  const highestRating = (list) => {
    let rating = 0;
    let index = 0;
    for (let i in list) {
      if (list[i].vote_average > rating) {
        rating = list[i].vote_average;
        index = i
      }
    }
    return list[index];
  }

  const trailer = (list) => {
    let newList = list.filter((elem) => elem.type === "Trailer")
    return newList[0].key;
  }

  useEffect(() => {
    if (!isLoading) {
      dispatch(addNowPlayingMovie(data.results));
      setHighMovie(highestRating(data.results));
      setId(highestRating(data.results).id);
    }
  }, [data]);

  useEffect(() => {
    if (!isVideoListLoading && !isLoading && movieVideoList) {
      dispatch(updateTrailerKey(trailer(movieVideoList.results)))
    }
  }, [id, movieVideoList, data])

  return (
    <div className={className}>
      <Header className="fixed top-0 right-0 left-0"/>
      <div className="w-2/3 p-5 ml-7 mt-96">
        <p className="text-6xl font-bold text-white">{highMovie?.title}</p>
        <p className="font-semibold text-white">{highMovie?.overview}</p>
      </div>
      <div className="flex items-center justify-between">
        <div className="ml-12 flex items-center space-x-4">
          <button className="flex items-center space-x-2 px-8 py-2 bg-gray-200 hover:bg-gray-300 transition text-lg font-semibold rounded">
            <FaPlay />
            <p>Play</p>
          </button>
          <button className="flex items-center space-x-2 text-white px-6 py-[6.5px] bg-black bg-opacity-40 hover:bg-opacity-50 transition font-semibold rounded">
            <IoMdInformationCircleOutline className="text-3xl" />
            <p>More Info</p>
          </button>
        </div>
        <div className="py-2 px-3 border-l-2 border-white text-gray-200 bg-black bg-opacity-30">
          <p className="mr-5">U/A 16+</p>
        </div>
      </div>
    </div>
  );
};

export default MovieInfoAndList;
