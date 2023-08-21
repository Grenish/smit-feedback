import React, { useState } from "react";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import CloseIcon from "@mui/icons-material/Close";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { feedbackFav, faculty } from "../assets";

const Sidebar = () => {
  const [isClose, setisClose] = useState(false);
  const [isShown, setisShown] = useState(false);

  const clicked = () => {
    setisClose(!isClose);
  };

  const toggleShown = () => {
    setisShown(!isShown);
  }
  return (
    <>
      <div
        className={`${
          isClose ? "w-2/4 sm:w-1/6" : "w-[4.5rem]"
        } w-1/6 h-screen bg-seaSalt p-4 relative transition-all duration-300 ease-in-out`}
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
            className={`${isClose ? "w-9" : "w-9"}`}
          />
          <span
            className={`text-xl font-semibold transition ${
              isClose ? "" : "scale-0"
            } duration-150`}
          >
            Feedback
          </span>
        </div>

        <div className="my-12 relative flex items-center space-x-2">
        <img
            src={faculty}
            alt="logo"
            className={`${isClose ? "w-9" : "w-9"}`}
          />
          <span
            className={` font-semibold transition ${
              isClose ? "" : "scale-0"
            } duration-150`}
          >
            Faculty
          </span>
          <div className={`${isClose ? "" : "scale-0"}`} onClick={toggleShown}>
            <ExpandMoreIcon className="text-bitBrown absolute top top-[10px] right-0" />
          </div>
        </div>
        
      </div>
    </>
  );
};

export default Sidebar;
