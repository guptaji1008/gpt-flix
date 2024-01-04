import { LOGO } from "../utils/constants";
import { CiSearch } from "react-icons/ci";
import { FaRegBell } from "react-icons/fa";
import { useSelector } from "react-redux";
import { FaCaretDown } from "react-icons/fa";
import { useRef, useState } from "react";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firbase";

const Header = ({ className }) => {
  const [isRotate, setIsRotate] = useState(false);
  const searchBox = useRef();

  const user = useSelector((state) => state.user);

  const handleSearchClick = () => {
    searchBox.current.focus();
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    console.log(searchBox.current.value);
  };

  const handleLogOut = async () => {
    await signOut(auth)
  };

  const handleProfileButton = () => {};

  return (
    <div className={className + " flex justify-between items-center py-3 bg-gradient-to-b from-black"}>
      <img className="w-32 ml-8" src={LOGO} alt="" />
      <div className="flex items-center space-x-3 mr-10">
        <form onSubmit={handleSearchSubmit} className="flex relative">
          <input
            ref={searchBox}
            className="rounded bg-transparent w-80 px-3 py-2 outline-none focus:bg-gray-400 focus:bg-opacity-30 transition"
            type="text"
          />
          <CiSearch
            onClick={handleSearchClick}
            className="absolute right-0 top-2 text-white w-14 h-6 cursor-pointer"
          />
        </form>
        <button>
          <FaRegBell className="text-white w-14 h-5" />
        </button>
        <div className="relative">
          <button
            onMouseEnter={() => setIsRotate(true)}
            onMouseLeave={() => setIsRotate(false)}
            onClick={handleProfileButton}
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
                  " absolute top-13 bg-black text-white bg-opacity-70 p-3 space-y-2 rounded"
            }
          >
            <button>Profile</button>
            <button>Help</button>
            <hr />
            <button onClick={handleLogOut}>Sign Out</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
