import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendar,
  faMicrophone,
  faTicket,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const AllSingleeventList = ({ item }) => {

  console.log(item);

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
    <div
      className="  border-[1px] p-2 border-white transition-all lg:h-[282px] shadow-md hover:border-orange-400 flex flex-col  lg:flex-row lg:justify-center
      lg:items-center lg:p-5 lg:gap-6 "

      data-aos="flip-down"
      data-aos-duration="2000"
    >
      <div className="event-image flex justify-center">
        <div className="image relative lg:h-[270px] lg:w-[270px]">
          <div className=" bg-gradient-to-r from-purple-500 to-pink-500 w-[70px] h-[70px] text-center  absolute ">
            {" "}
            <h1 className="text-white">
              <span className="text-[24px] font-extrabold"> {date2}</span>
              <br />
              <span className="text-[14px] ">{month}</span>
            </h1>
          </div>
          <img
            className=" w-[100vw]  lg:h-[270px] lg:w-[270px] "
            src={image}
            alt=""
          />
        </div>
      </div>
      <div className="event-details ">
        <h1 className="text-start w-[305px] lg:w-full text-[22px] lg:text-[25px]">
          <span className="font-bold">{title}</span>
        </h1>
        <h1 className="text-[18px] text-red-400">
          {" "}
          Tickets from ${ticketprice}
        </h1>
        <p className="w-[86vw] lg:w-[558px] h-[72px] mt-5">
          Lorem ipsum dollor site amet the best consectuer diam nerdistin
          adipiscing elites sed diam nonummy nibh the ebest uismod delgas
          tincidunt ut laoreet dolore magna...
        </p>
        <div className="flex flex-col w-full justify-center items-center lg:flex-row gap-7">
          <div className="flex justify-center   lg:gap-4 lg:flex-row ">
            {" "}
            <div className="mr-10 mt-10 flex items-center gap-3 lg:mt-5">
              <div className="h-[25px] w-[25px] flex justify-center items-center lg:h-[40px] lg:w-[40px] bg-[#ffbe30] rounded-full text-white  ">
                <FontAwesomeIcon icon={faMicrophone}></FontAwesomeIcon>
              </div>
              <div className="">
                <h1 className="text-[14px] lg:text-[15px] text-[#878787] font-bold">
                  Speaker
                </h1>
                <h1 className="text-[17px] lg:text-[19px] font-bold">
                  Jenny Juis
                </h1>
              </div>
            </div>
            <div className="mt-8 flex items-center gap-3 lg:mt-5">
              <div className=" h-[25px] w-[25px] flex justify-center items-center lg:h-[40px] lg:w-[40px] bg-[#ffbe30] rounded-full text-white  ">
                <FontAwesomeIcon icon={faTicket}></FontAwesomeIcon>
              </div>
              <div className="">
                <h1 className="text-[14px] lg:text-[15px] text-[#878787] font-bold">
                  Max Seats
                </h1>
                <h1 className="text-[17px] lg:text-[19px] font-bold">
                  2,250 Seats
                </h1>
              </div>
            </div>
          </div>
          <Link to={`/event-details/${_id}`} className="button1 lg:mt-5">Booking Ticket</Link>
        </div>
      </div>
    </div>
  );
};

export default AllSingleeventList;
