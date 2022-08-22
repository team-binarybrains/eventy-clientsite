import React from "react";
import { MdDateRange } from "react-icons/md";
import { GoLocation } from "react-icons/go";
import "./DateAndCategory.css";
const DateAndCategory = ({ blog }) => {
  return (
    <div className="mt-4">
      <div>
        <div className="md:flex  gap-3 items-center">
          <div className="flex DateAndTime rounded-md"
          data-aos="zoom-in"
          data-aos-duration="2000"
          >
            <span className="text-2xl inline-block bg-[#ffbe30]   text-white p-3 rounded-full">
              <MdDateRange className="" />{" "}
            </span>
            <p className="pl-4 text-[#333333] text-[17px]">
              <span className="block">Date</span>
              <strong> {blog.date}</strong>
            </p>
          </div>

          <div className="flex DateAndTime rounded-md "
          data-aos="zoom-in"
          data-aos-duration="2000"
          >
            <span className="text-2xl inline-block bg-[#ffbe30]   text-white p-3 rounded-full">
              <GoLocation className="" />{" "}
            </span>
            <p className="pl-4 text-[#333333] text-[17px]">
              <span className="block">Location</span>
              <strong>{blog.address}</strong>
            </p>
          </div>
        </div>

        {/* blogs */}
        <div className="mt-7"
        data-aos="flip-right"
        data-aos-duration="2000"
        >
          <p className="text-[16px]">
            {blog.details?.slice(0, 200)}
            <br />

            {blog.details?.slice(110, 500)}
            <br />
            {blog.details?.slice(500, 1300)}
            <br />
            {blog.details?.slice(1300, 2700)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default DateAndCategory;
