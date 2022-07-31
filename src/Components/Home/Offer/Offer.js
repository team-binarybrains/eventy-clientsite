import React from 'react';
import './Offer.css'
const Offer = () => {
    return (
        <div className="backgroundImage">
          <div className="flex justify-around py-24">
            <div>
                <h1 className=""><span className="text-7xl font-bold text-[#fd1d1d]">30%</span> <span className="text-4xl text-white">Off In June~July</span> <span className="text-4xl font-bold text-white">For Birthday Events</span></h1>
                <p className="py-5 text[#333333] text-lg">Contact us now and we will make your event unique & unforgettabl</p>
            </div>
           <button className=" font-bold bg-white  hover:text-white hover:bg-[#fd1d1d] px-16 rounded-lg">make an event now</button>
          </div>
        </div>
    );
};

export default Offer;