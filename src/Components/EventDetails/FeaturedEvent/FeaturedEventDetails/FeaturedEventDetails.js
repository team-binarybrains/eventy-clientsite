import React from 'react';
import { AiOutlineCalendar } from 'react-icons/ai';
import { MdLocationOn } from 'react-icons/md';
import { FiClock } from 'react-icons/fi';
import './FeaturedEventDetails.css'
const FeaturedEventDetails = () => {
   return (
      <section className='container m-auto px-4'>
         <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            <div className="flex items-center gap-2 bg-slate-200 justify-center py-3 rounded px-2">
               <div className="">
                  <span className='text-2xl bg-yellow-400 p-3 rounded-full block text-center text-white'><AiOutlineCalendar className='font-bold' /></span>
               </div>
               <div className="">
                  <h3 className='text-slate-500 font-semibold text-base'>Event Date</h3>
                  <h1 className='text-lg text-slate-700 font-semibold'>26 DECEMBER 2022</h1>
               </div>
            </div>
            <div className="flex items-center gap-4 bg-slate-200 py-3 rounded px-2 justify-center">
               <div className="">
                  <span className='text-2xl bg-yellow-400 p-3 rounded-full block text-center text-white'><FiClock className='font-bold' /></span>
               </div>
               <div className="">
                  <h3 className='text-slate-500 font-semibold text-base'>Event Time</h3>
                  <h1 className='text-lg text-slate-700 font-semibold'>15:00PM ~ 22:00PM</h1>
               </div>
            </div>
            <div className="flex items-center gap-4 bg-slate-200 py-3 rounded px-2 justify-center">
               <div className="">
                  <span className='text-2xl bg-yellow-400 p-3 rounded-full block text-center text-white'><MdLocationOn className='font-bold' /></span>
               </div>
               <div className="">
                  <h3 className='text-slate-500 font-semibold text-base'>Event Location</h3>
                  <h1 className='text-lg text-slate-700 font-semibold'>VANILA HOTAL</h1>
               </div>
            </div>
         </div>
         <div className="py-10 text-slate-600">
            <h2>Lorem ipsum dollor site amet the best consectuer diam adipiscing elites sed diam nonummy nibh the euismod tincidunt ut laoreet dolore magna aliquam erat volutpat insignia the consectuer adipiscing elit. Lorem ipsum dollor site amet the best consectuer diam adipiscing elites sed diam nonummy nibh the euismod tincidunt ut laoreet dolore magna aliquam erat volutpat insignia the consectuer adipiscing elit. Lorem ipsum dollor site amet the best consectuer diam adipiscing elites sed diam nonummy nibh the euismod tincidunt ut laoreet dolore magna aliquam erat volutpat insignia the consectuer adipiscing elit.</h2>
         </div>
      </section>
   );
};

export default FeaturedEventDetails;