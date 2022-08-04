import React from 'react';
import { FaMicrophone,FaTicketAlt,FaRegClock } from 'react-icons/fa';
import dayOne from '../../img/1.hall.png'


const DayOne = () => {
   return (
      <div className="flex flex-wrap-reverse gap-2 route">
         <div className='basis-[320px] grow '>
            <div className="">
               <h1 className='text-2xl text-slate-700 '>01. Greeting <strong>Welcome</strong></h1>
               <p className='text-slate-700 py-4'>Lorem ipsum dollor site amet the best consectuer diam nerd adipiscing elites sed diam nonummy nibh the ebest uismod tincidunt ut laoreet dolore magna aliquam erat volutpat guild insignia the consectuer adipiscing elit.</p>
            </div>
            <div className="">
               <div className="grid md:flex gap-4">
                  <div className="flex items-center gap-2">
                     <FaMicrophone  className='text-5xl p-3 rounded-full bg-yellow-400'/>
                     <div className="">
                        <h1 className='text-base text-slate-600 font-semibold'>Speaker</h1>
                        <h1 className='text-lg font-semibold text-slate-700'>JENNY JUIS</h1>
                     </div>
                  </div>
                  <div className="flex items-center  gap-2">
                     <FaTicketAlt className='text-5xl p-3 rounded-full bg-yellow-400'/>
                     <div className="">
                        <h1 className='text-base text-slate-600 font-semibold'>Speaker</h1>
                        <h1>JENNY JUIS</h1>
                     </div>
                  </div>
                  <div className="flex items-center  gap-2">
                     <FaRegClock className='text-5xl p-3 rounded-full bg-yellow-400'/>
                     <div className="">
                        <h1 className='text-base text-slate-600 font-semibold'>Speaker</h1>
                        <h1 className='text-lg font-semibold text-slate-700'>JENNY JUIS</h1>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         <div className="md:grow-0 grow basis-[250px]">
            <img src={dayOne} className='h-auto max-w-md w-full mx-auto' alt="" />
         </div>
      </div>
   );
};

export default DayOne;