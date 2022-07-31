import React from 'react';
import './Offer.css'
const Offer = () => {
    return (
        <div className="backgroundImage">
          <div className="md:flex justify-around items-center py-10">
            <div>
                <h1 className=" tracking-widest"><span className="text-7xl font-black px-1 text-[#fd1d1d]">30%</span> <span className="text-4xl text-white">Off In June~July</span> <span className="text-4xl  text-white font-black">For Birthday Events</span></h1>
                <p className="py-5 text[#333333] text-lg tracking-widest font-bold">Contact us now and we will make your event unique & unforgettabl</p>
            </div>
           <button className=" font-bold bg-white  hover:text-white hover:bg-[#fd1d1d] px-16 rounded-full py-5 text-lg">make an event now</button>
          </div>
        </div>
    );
};

export default Offer;