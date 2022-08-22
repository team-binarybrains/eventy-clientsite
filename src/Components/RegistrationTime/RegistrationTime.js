import React from "react";
import RegistrationCountDownTime from "./RegistrationCountDownTime/RegistrationCountDownTime";

const RegistrationTime = () => {
    return (
      <div className="bg-white py-12">
        <div className="md:flex justify-around items-center">
          <div className=" "
          data-aos="flip-up"
          data-aos-duration="2000"
          >
            <h3 className='text-2xl sm:text-3xl'>Please Complete Registration <span className='font-bold'>Within 12:00 Hours.</span></h3>
            <p style={{ wordSpacing: "3px" }} className='mt-2'>After 12:00 hours, the reservation we’re holding will be released to others.</p>
          </div>
          <RegistrationCountDownTime />
        </div>
      </div>
  );
};

export default RegistrationTime;
