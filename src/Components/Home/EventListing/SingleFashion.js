import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
const SingleFashion = ({ item }) => {
  const {
    _id,
    title,
    type,
    image,
    date,
    ticketprice,
    starttime,
    endtime,
    address,
  } = item;
  const [date2, month, year] = date?.split(",");
  return (
    <div className=" mt-10 flex flex-col mx-auto justify-center lg:justify-center lg:flex-row gap-5 ">
      <div className="w-[90vw] p-[15px] lg:w-[570px] flex flex-col items-center mx-auto   lg:flex lg:flex-row lg:justify-center lg:text-start  border-[1px] border-base-100 shadow-md hover:border-[1px] hover:border-orange-400 transition-all lg:p-[10px]">
        <div className="image ">
          <div className="bg-gradient-to-r from-purple-500 to-pink-500 w-[70px] h-[70px] text-center  z-10 absolute ">
            {" "}
            <h1 className="text-white">
              <span className="text-[24px] font-extrabold"> {date2}</span>
              <br />
              <span className="text-[14px] ">{month}</span>
            </h1>
          </div>
          <img className="h-[250px] w-[250px]" src={image} alt="" />
        </div>
        <div className="details flex flex-col  self-start mt-5 lg:ml-5 text-start">
          <h1 className="text-[18px] font-bold">{title}</h1>
          <h1 className="text-[17px] text-[#FD1D1D] ">
            Tickets from ${ticketprice}
          </h1>
          <h1 className="text-[14px] text-[#878787] mt-5">
            <span className="mr-2 bg-[#F7F7F7] p-1 rounded-full text-[#FD1D1D]   ">
              <FontAwesomeIcon icon={faClock} />
            </span>{" "}
            Start {starttime} - {endtime}
          </h1>
          <h1 className="text-[14px]  text-[#878787] mt-4 leading-8">
            <span className=" mr-2 bg-[#F7F7F7] p-1 rounded-full text-[#FD1D1D]   ">
              <FontAwesomeIcon className="" icon={faLocationDot} />
            </span>
            <span className="text-center line"> {address}</span>
          </h1>
          <div className="flex justify-center w-full ">
            <Link to={`/event-details/${_id}`} className=" p-4  font-bold text-[#878787] mt-5 bg-[#F7F7F7] rounded-xl border-none hover:bg-gradient-to-r from-[#fd1d1d] to-[#833ab4] hover:text-white hover:transitionease-in-out">
              TICKETS & DETAILS
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleFashion;
