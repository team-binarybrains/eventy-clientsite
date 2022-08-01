import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendar,
  faMicrophone,
  faTicket,
} from "@fortawesome/free-solid-svg-icons";

const AllEventList = () => {
  return (
    <div>
      <div className="gap-20 flex flex-col lg:flex-row lg:gap-20 parant max-w-7xl mx-auto px-12 mt-24 mb-20">
        <div className="left-eventdetail w-[300px]">
          <button className=" p-2  border-2 border-gray-200 h-[42px] w-[176.922px]   text-[#000000] text-[16px]">
            <FontAwesomeIcon icon={faCalendar}></FontAwesomeIcon> Add to
            Calender
          </button>
          <div className="mt-20  flex justify-center  lg:mt-[400px] left-bgimage">
            <div className="text-center ">
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
        <div className="right-eventDetail flex flex-wrap justify-center  gap-4 lg:gap-0  ">
          <div
            className="  border-[1px] p-2 border-white transition-all lg:h-[282px] shadow-md hover:border-orange-400 flex flex-col  lg:flex-row lg:justify-center
          lg:items-center lg:p-5 lg:gap-6  "
          >
            <div className="event-image flex justify-center">
              <div className="image relative lg:h-[270px] lg:w-[270px]">
                <div className=" bg-gradient-to-r from-purple-500 to-pink-500 w-[70px] h-[70px] text-center font-extrabold absolute ">
                  {" "}
                  <h1 className="text-white">
                    <span className="text-[24px]"> 26</span>
                    <br />
                    <span className="text-[18px]">June</span>
                  </h1>
                </div>
                <img
                  className=" w-[100vw]  lg:h-[270px] lg:w-[270px] "
                  src="https://i.ibb.co/tPtrjMm/event-1.jpg"
                  alt=""
                />
              </div>
            </div>
            <div className="event-details ">
              <h1 className="text-start w-[305px] text-[22px] lg:text-[25px]">
                Barcelona{" "}
                <span className="font-bold">Food Truck Festival 2018</span>
              </h1>
              <h1 className="text-[18px] text-red-400"> Tickets from $52</h1>
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
                <button className="button1 lg:mt-5">Booking Ticket</button>
              </div>
            </div>
          </div>
          <div
            className="  border-[1px] p-2 border-white transition-all lg:h-[282px] shadow-md hover:border-orange-400 flex flex-col  lg:flex-row lg:justify-center
          lg:items-center lg:p-5 lg:gap-6  "
          >
            <div className="event-image flex justify-center">
              <div className="image relative lg:h-[270px] lg:w-[270px]">
                <div className=" bg-gradient-to-r from-purple-500 to-pink-500 w-[70px] h-[70px] text-center font-extrabold absolute ">
                  {" "}
                  <h1 className="text-white">
                    <span className="text-[24px]"> 26</span>
                    <br />
                    <span className="text-[18px]">June</span>
                  </h1>
                </div>
                <img
                  className="w-[100vw]  lg:h-[270px] lg:w-[270px]"
                  src="https://i.ibb.co/tPtrjMm/event-1.jpg"
                  alt=""
                />
              </div>
            </div>
            <div className="event-details ">
              <h1 className="text-start w-[305px] text-[22px] lg:text-[25px]">
                Barcelona{" "}
                <span className="font-bold">Food Truck Festival 2018</span>
              </h1>
              <h1 className="text-[18px] text-red-400"> Tickets from $52</h1>
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
                <button className="button1 lg:mt-5">Booking Ticket</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllEventList;
