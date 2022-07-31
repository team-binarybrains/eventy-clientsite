import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faLocationDot } from "@fortawesome/free-solid-svg-icons";
const ConferenceEvent = () => {
  return (
    <div>
      <div className="mt-10 ">
        <div className="flex flex-col justify-center lg:flex lg:flex-row ">
          <div className="image ">
            <div className="bg-gradient-to-r from-purple-500 to-pink-500 w-[70px] h-[70px] text-center font-extrabold z-10 absolute ">
              {" "}
              <h1 className="text-white">
                <span className="text-[24px]"> 26</span>
                <br />
                <span className="text-[18px]">June</span>
              </h1>
            </div>
            <img
              className="h-[250px] w-[250px]"
              src="https://i.ibb.co/tPtrjMm/event-1.jpg"
              alt=""
            />
          </div>
          <div className="details ml-8 ">
            <h1 className="text-[18px] font-bold">
              Barcelona Food Truck <br /> Festival 2018
            </h1>
            <h1 className="text-[17px] text-[#FD1D1D] ">Tickets from $52</h1>
            <h1 className="text-[14px] text-[#878787] mt-5">
              <span className="mr-2 bg-[#F7F7F7] p-1 rounded-full text-[#FD1D1D]   ">
                <FontAwesomeIcon icon={faClock} />
              </span>{" "}
              Start 20:00pm - 22:00pm
            </h1>
            <h1 className="text-[14px] text-[#878787] mt-4">
              <span className="mr-2 bg-[#F7F7F7] p-1 rounded-full text-[#FD1D1D]   ">
                <FontAwesomeIcon icon={faLocationDot} />
              </span>{" "}
              Manhattan, New York
            </h1>
            <div className="mx-auto">
              <button className="w-48 h-[50px] font-bold text-[#878787] mt-5 bg-[#F7F7F7] rounded-xl border-none hover:bg-gradient-to-r from-[#fd1d1d] to-[#833ab4] hover:text-white transition ease-in-out">
                TICKETS & DETAILS
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConferenceEvent;
