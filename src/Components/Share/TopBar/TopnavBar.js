import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faLock,
  faPhone,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
const TopnavBar = () => {
  return (
    <div>
      <div className="flex flex-col p-1 lg:flex-row lg:justify-around items-center h-[54px] bg-gradient-to-r from-[#ff3e00] to-[#ffbe30]">
        <div className="left-topbar">
          <div className=" gap-2 flex  lg:gap-5">
            <div className="gap-1 flex items-center lg:gap-3">
              <FontAwesomeIcon
                className="text-white"
                icon={faEnvelope}
              ></FontAwesomeIcon>
              <h1 className="text-[14px] lg:text-[16px] text-white">
                binarybrains@gmail.com
              </h1>
            </div>
            <p className="text-white">|</p>
            <div className="gap-1  flex items-center lg:gap-3">
              <FontAwesomeIcon
                className="text-white"
                icon={faPhone}
              ></FontAwesomeIcon>
              <h1 className="text-[14px] lg:text-[16px] text-white">
                binarybrains@gmail.com
              </h1>
            </div>
          </div>
          <div></div>
        </div>
        <div className="right-topbar">
          <div className="flex gap-5">
            <div className="flex items-center gap-3">
              <FontAwesomeIcon
                className="text-white"
                icon={faUser}
              ></FontAwesomeIcon>
              <h1 className="text-[16px] text-white">Register</h1>
            </div>
            <p className="text-white">|</p>
            <div className="flex items-center gap-3">
              <FontAwesomeIcon
                className="text-white"
                icon={faLock}
              ></FontAwesomeIcon>
              <h1 className="text-[16px] text-white">Login</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopnavBar;
