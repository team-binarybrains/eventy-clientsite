import React from "react";
import { Link } from "react-router-dom";
import style from "./EventDetails.module.css";

const TopBanner = () => {
  return (
    <div className="bg-black/60 banner-background text-white text-center h-full py-16 flex flex-col justify-around">
      <h5 className={`${style.openSans} text-white uppercase tracking-[8px]`}
        data-aos="zoom-in"
        data-aos-duration="2000"
      >
        Event Single
      </h5>
      <h3 className={`text-4xl text-white uppercase roboto`}
        data-aos="zoom-in"
        data-aos-duration="2000"
      >Eventy</h3>
      <h3 className={`text-4xl font-bold uppercase roboto  ${style.highlight}`}
        data-aos="zoom-in"
        data-aos-duration="2000"
      >Event Details</h3>

      <div className={`flex justify-center items-center mt-8`}>
        <Link to="/"
         data-aos="fade-right"
         data-aos-duration="2000"
        >
          <button className={`${style.child}`}>Home</button>
        </Link>
        |<button className={`${style.child}`}
         data-aos="fade-left"
         data-aos-duration="2000"
        >Events</button>
      </div>
    </div>
  );
};

export default TopBanner;
