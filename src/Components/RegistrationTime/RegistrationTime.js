import React from 'react';
import RegistrationCountDownTime from './RegistrationCountDownTime/RegistrationCountDownTime';

const RegistrationTime = () => {
    return (
<<<<<<< HEAD
        <div className=" shadow-lg">
         <div className="md:flex justify-around items-center">
         <div className=" ">
             <h1 className="text-[28px]">Please Complete Registration <strong className="text-[#ffbe30]">Within 12:00 Hours.</strong> </h1>
             <p className="text-[16px] text-[#333333] mt-3">After 12:00 hours, the reservation we’re holding will be released to others.</p>
           </div>
            <RegistrationCountDownTime/>
         </div>
         <br />
         <br />
         <br />
         <br />
         <br />
         <br />
         <br />
         <br />
         <br />
         <br />
         <br />
=======
        <div className="bg-white py-12">
            <div className="md:flex justify-around items-center">
                <div className=" ">
                    <h3 className='text-2xl sm:text-3xl'>Please Complete Registration <span className='font-bold'>Within 12:00 Hours.</span></h3>
                    <p style={{ wordSpacing: "3px" }} className='mt-2'>After 12:00 hours, the reservation we’re holding will be released to others.</p>
                </div>
                <RegistrationCountDownTime />
            </div>
>>>>>>> 92a4bf865a904e99e62349ef13afc4ffe9f60283
        </div>
    );
};

export default RegistrationTime;