import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendar,
  faMicrophone,
  faTicket,
} from "@fortawesome/free-solid-svg-icons";
import AllSingleeventList from "./AllSingleeventList";

const AllEventList = () => {
  const [eventLists, setEventLists] = useState([]);
  useEffect(() => {
    fetch("https://eventy-serversite-production.up.railway.app/alleventlisting")
      .then((res) => res.json())
      .then((data) => setEventLists(data));
  }, []);
  return (
    <div>
      <div className="gap-20 flex flex-col lg:flex-row lg:gap-20 parant max-w-7xl mx-auto px-12 mt-24 mb-20">
        <div className="left-eventdetail w-[300px]">
          <button
            className=" p-2  border-2 border-gray-200 h-[42px] w-[176.922px]   text-[#000000] text-[16px]"
            data-aos="fade-right"
            data-aos-duration="2000"
          >
            <FontAwesomeIcon icon={faCalendar}></FontAwesomeIcon> Add to
            Calender
          </button>

          <div
            className=" mt-20 flex justify-center  lg:mt-[100px] left-bgimage"
            data-aos="zoom-in"
            data-aos-duration="2000"
          >
            <div
              className="text-center "
              data-aos="zoom-in"
              data-aos-delay="300"
              data-aos-duration="2000"
            >
              <h1 className="mt-16 text-[18px] text-[#FFFFFF] uppercase">
                26 December,2022
              </h1>
              <h1 className="text-[25px] text-[#FFFFFF] mt-8 ">
                <span className="uppercase font-bold ">amstadram</span> <br />
                <span className="uppercase font-bold  text-[#FFBE30]">
                  php conference
                </span>
              </h1>
              <button className="button1 mt-8">Booking Ticket</button>
            </div>
          </div>
        </div>
        <div className="right-eventDetail flex flex-wrap justify-center  gap-4 lg:gap-5  ">
          {eventLists?.map((item) => (
            <AllSingleeventList item={item} key={item._id}></AllSingleeventList>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllEventList;
