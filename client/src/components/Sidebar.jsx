import React, { useState } from "react";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { feedbackFav, faculty } from "../assets";

const Sidebar = () => {
  const [isClose, setisClose] = useState(false);
  const [isShown, setisShown] = useState(false);

  const clicked = () => {
    setisClose(!isClose);
  };

  const toggleShown = () => {
    setisShown(!isShown);
  };
  return (
    <>
      <div
        className={`${
          isClose ? "w-2/4 sm:w-1/6" : "w-[4.5rem]"
        } w-1/6 h-screen bg-seaSalt p-4 fixed transition-all duration-300 ease-in-out`}
      >
        <div
          onClick={clicked}
          className="cursor-pointer transition-all duration-500 ease-in-out"
        >
          {isClose ? (
            <ArrowCircleLeftIcon className="text-bitBrown absolute right-[-10px] top-[21px]" />
          ) : (
            <ArrowCircleRightIcon className="text-bitBrown absolute right-[-10px] top-[21px]" />
          )}
        </div>
        <div className="flex items-center space-x-2">
          <img
            src={feedbackFav}
            alt="logo"
            className={`${
              isClose ? "w-9" : "w-9 rotate-180"
            } transition duration-500  bg-bitBrown rounded-full p-2`}
          />
          <span
            className={`text-xl font-semibold transition ${
              isClose ? "" : "scale-0"
            } duration-150`}
          >
            Feedback
          </span>
        </div>

        <div className="my-12 relative flex items-center hover:bg-timberWolf cursor-pointer p-1 rounded-xl space-x-2" onClick={toggleShown}>
          <img
            src={faculty}
            alt="logo"
            className={`${
              isClose ? "w-9" : "w-9"
            } bg-bitBrown rounded-full p-1`}
            onClick={clicked}
          />
          <span
            className={` font-semibold transition ${
              isClose ? "" : "scale-0"
            } duration-150`}
          >
            Faculty
          </span>
          <div className={`${isClose ? "" : "scale-0"}`} >
            <div className="text-bitBrown absolute top top-[10px] right-0">
              {isShown ? <ExpandLessIcon /> : <ExpandMoreIcon />}
            </div>
          </div>
          {isShown && (
            <ul className="absolute top-[40px] left-0 bg-white p-2 rounded shadow mt-2">
              <li>Adam</li>
              <li>Eve</li>
              <li>James</li>
            </ul>
          )}
        </div>
        
      </div>
    </>
  );
};

export default Sidebar;
