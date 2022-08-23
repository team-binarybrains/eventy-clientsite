import React from "react";
import "./EventListDetails.css";
const EventListSearchhead = () => {
  return (
    <div className="">
      <div className="p-7 lg:h-[255.594px]  search-bar flex flex-col lg:flex-row lg:justify-center lg:items-center lg:gap-20">

        <div className="left-side text-center lg:text-start"
        data-aos="flip-up"
        data-aos-duration="2000"
        >
          <h1 className="text-[16px]  lg:text-[16px]  text-white">
            FIND BEST EVENT ON EVENTY
          </h1>
          <h1 className="text-[24px]  lg:text-[48px] text-white">
            <span className=""> Event</span>
            <span className="font-extrabold"> Search</span>
          </h1>
        </div>

        <div className="right-side mt-5">
          <div className="flex flex-col w-full lg:flex-row gap-4 lg:justify-center lg:items-center">
            <div
            data-aos="fade-left"
            data-aos-duration="2000"
            >
              <h1 className="text-[14px] text-white">EVENT KEYWORD</h1>
              <input
                className="h-[50px] w-full  lg:h-[50px] lg:w-[253.141px] rounded-sm mt-3 focus:outline-0 p-5 font-semibold"
                placeholder="Event name,Location,etc"
                type="text"
              />
            </div>

            <div
            data-aos="fade-left"
            data-aos-delay="400"
            data-aos-duration="2000"
            >
              <h1 className="text-[14px] text-white">EVENT CATEGORY</h1>

              <select class="select w-full h-[50px] lg:w-[253.141px] rounded-sm mt-3  text-black focus:outline-0">
                <option>Conference</option>
                <option>Greedo</option>
              </select>
            </div>

            <button className="mt-4 h-[50px] lg:w-[253.141px] text-white text-[19px] lg:mt-9 rounded-sm  focus:outline-0  font-semibold bg-[#333333]"
            data-aos="fade-left"
            data-aos-delay="800"
            data-aos-duration="2000"
            >
              Search Event Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventListSearchhead;
