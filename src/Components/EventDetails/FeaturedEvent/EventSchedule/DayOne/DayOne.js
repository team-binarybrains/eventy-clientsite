import React from 'react';
import { FaMicrophone,FaTicketAlt,FaRegClock } from 'react-icons/fa';


const DayOne = () => {
   return (
      <div className="flex flex-wrap-reverse gap-2 items-start">
         <div className='basis-[320px] grow '>
            <div className="">
               <h1 className='text-2xl text-slate-700 '>01. Greeting <strong>Welcome</strong></h1>
               <p className='text-slate-700 py-4'>Lorem ipsum dollor site amet the best consectuer diam nerd adipiscing elites sed diam nonummy nibh the ebest uismod tincidunt ut laoreet dolore magna aliquam erat volutpat guild insignia the consectuer adipiscing elit.</p>
            </div>
            <div className="">
               <div className="flex  gap-2">
                  <div className="flex items-center gap-2">
                     <FaMicrophone  className='text-5xl p-3 rounded-full bg-yellow-400'/>
                     <div className="">
                        <h1 className='text-sm'>Speaker</h1>
                        <h1 className='text-sm'>JENNY JUIS</h1>
                     </div>
                  </div>
                  <div className="flex items-center  gap-2">
                     <FaTicketAlt />
                     <div className="">
                        <h1>Speaker</h1>
                        <h1>JENNY JUIS</h1>
                     </div>
                  </div>
                  <div className="flex items-center  gap-2">
                     <FaRegClock />
                     <div className="">
                        <h1>Speaker</h1>
                        <h1>JENNY JUIS</h1>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         <div className="grow-0 basis-[200px]">
            <img src="" className='h-96 max-w-sm w-full mx-auto' alt="" />
         </div>
      </div>
   );
};

export default DayOne;