import React from "react";
import { Link } from "react-router-dom";
import style from "./Employee.module.css";

const EmployeeBanner = () => {
  return (
    <div className="bg-black/60 banner-background text-white text-center h-full py-16 flex flex-col justify-around">
      <h5 className={`${style.openSans} text-white uppercase tracking-[8px]`}>
        Event Single
      </h5>
      <h3 className={`text-4xl text-white uppercase roboto`}>Eventy</h3>
      <h3 className={`text-4xl font-bold uppercase roboto  ${style.highlight}`}>Event Management speaker</h3>
      <div className={`flex justify-center items-center mt-8`}>
        <Link to="/">
          <button className={`${style.child}`}>Home</button>
        </Link>
        |<button className={`${style.child}`}>Events</button>
      </div>
    </div>
  );
};

export default EmployeeBanner;
