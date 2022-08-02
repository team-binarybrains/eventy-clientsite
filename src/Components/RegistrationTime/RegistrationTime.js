import React from 'react';
import RegistrationCountDownTime from './RegistrationCountDownTime/RegistrationCountDownTime';

const RegistrationTime = () => {
    return (
        <div className="bg-white">
         <div className="md:flex justify-around items-center">
         <div className=" ">
             <h1 className="text-[28px]">Please Complete Registration <strong className="text-[#ffbe30]">Within 12:00 Hours.</strong> </h1>
             <p className="text-[16px] text-[#333333] mt-3">After 12:00 hours, the reservation we’re holding will be released to others.</p>
           </div>
            <RegistrationCountDownTime/>
         </div>
        </div>
    );
};

export default RegistrationTime;