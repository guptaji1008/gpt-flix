import { LOGO } from "../utils/constants";
import { CiSearch } from "react-icons/ci";
import { FaRegBell } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { FaCaretDown } from "react-icons/fa";
import { useEffect, useRef, useState } from "react";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firbase";
import { onChangeSearchMovie } from "../utils/slices/movieSlice";
import { useNavigate } from "react-router-dom";
import searchMovieLogic from "../utils/searchMovieLogic";

const Header = ({ className }) => {
  const [isRotate, setIsRotate] = useState(false);
  const [focus, setFocus] = useState(false);
  const searchBox = useRef();

  const user = useSelector((state) => state.user);
  const searchChar = useSelector(state => state.movie.searchedMovie)
  const movies = useSelector(state => state.movie.uniqueMovies)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleSearchClick = () => {
    searchBox.current.focus();
  };

  const handleOnChange = (e) => {
    dispatch(onChangeSearchMovie(e.target.value))
    if (e.target.value) {
      let results = searchMovieLogic(e.target.value, movies)
      if (results) {
        console.log(results)
      }
    }
  };

  const handleLogOut = async () => {
    await signOut(auth)
  };

  useEffect(() => {
    if (searchChar !== "") navigate("/search")
  }, [searchChar])

  return (
    <div className={className + " flex justify-between items-center py-3 bg-gradient-to-b from-black"}>
      <img className="lg:w-32 md:w-32 sm:w-28 w-24 lg:ml-8 md:ml-8 sm:ml-5 ml-3" src={LOGO} alt="" />
      <div className="flex items-center lg:space-x-3 md:space-x-3 sm:space-x-2 space-x-1 lg:mr-10 md:mr-8 sm:mr-5 mr-3">
        <div className="flex relative">
          <input
            ref={searchBox}
            onFocus={() => setFocus(true)}
            onBlur={() => setFocus(false)}
            className="rounded bg-transparent lg:w-80 md:w-72 sm:w-60 w-48 pl-3 pr-12 text-white py-2 outline-none focus:bg-gray-400 focus:bg-opacity-30 transition"
            type="text"
            placeholder={focus ? "Search.." : ""}
            onChange={handleOnChange}
          />
          <CiSearch
            onClick={handleSearchClick}
            className="absolute right-0 top-2 text-white w-14 h-6 cursor-pointer"
          />
        </div>
        <button>
          <FaRegBell className="text-white w-14 h-5" />
        </button>
        <div className="relative">
          <button
            onMouseEnter={() => setIsRotate(true)}
            onMouseLeave={() => setIsRotate(false)}
            className="rounded flex items-center space-x-2 py-2 px-4 bg-gray-400 bg-opacity-10 text-white hover:bg-opacity-50 transition"
          >
            <p>{user?.name}</p>
            <FaCaretDown className={isRotate ? "spinner1" : "spinner2"} />
          </button>
          <div
            onMouseEnter={() => setIsRotate(true)}
            onMouseLeave={() => setIsRotate(false)}
            className={
              !isRotate
                ? "hidden"
                : "" +
                  " absolute top-13 right-0 left-0 bg-black text-white bg-opacity-70 p-3 space-y-2 rounded"
            }
          >
            <div className="text-center"><button>Profile</button></div>
            <div className="text-center"><button>Help</button></div>
            <hr />
            <div className="text-center"><button onClick={handleLogOut}>Sign Out</button></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
