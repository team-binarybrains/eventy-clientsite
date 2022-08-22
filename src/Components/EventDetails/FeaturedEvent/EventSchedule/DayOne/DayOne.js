/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { FaMicrophone, FaTicketAlt, FaRegClock } from 'react-icons/fa';
import payment from '../../img/1.hall.png'


const DayOne = ({ data }) => {
   const [showMore, setShowMore] = useState(false);

   return (
      <div className="flex flex-wrap-reverse gap-2 route">
         <div className='basis-[320px] grow '>
            <div className="">
               <h1 className='text-2xl text-slate-700 capitalize'>{data?.title}</h1>
               <p className='text-slate-700 py-4'></p>
            </div>
            <div className="">
               <div className="grid md:flex gap-4">
                  <div className="flex items-center gap-2">
                     <FaMicrophone className='text-5xl p-3 rounded-full bg-yellow-400 text-white' />
                     <div className="">
                        <h1 className='text-sm text-slate-600 font-semibold'>Speaker</h1>
                        <h1 className='text-base font-semibold text-slate-700'>{data?.speaker}</h1>
                     </div>
                  </div>
                  <div className="flex items-center  gap-2">
                     <FaTicketAlt className='text-5xl p-3 rounded-full bg-yellow-400 text-white' />
                     <div className="">
                        <h1 className='text-sm text-slate-600 font-semibold'>Max Seats</h1>
                        <h1 className='text-base font-semibold text-slate-700'>{data?.maxSeats}</h1>
                     </div>
                  </div>
                  <div className="flex items-center  gap-2">
                     <FaRegClock className='text-5xl p-3 rounded-full bg-yellow-400 text-white' />
                     <div className="">
                        <h1 className='text-sm text-slate-600 font-semibold'>Event Time</h1>
                        <h1 className='text-base font-semibold text-slate-700'>{data?.eventStartTime} ~ {data?.eventEndTime}</h1>
                     </div>
                  </div>
               </div>
               {/* <p className='py-6 text-slate-700 text-base' >{data?.description.slice(0,300)}</p> */}
               <p className='py-6 text-slate-700 text-base' >{showMore ? data?.description : data?.description?.slice(0, 200)} <button onClick={()=>setShowMore((previous) => !previous)} className='text-black font-semibold underline'>{showMore ? 'see less' : 'see more'}</button></p>
            </div>
         </div>
         <div className="md:grow-0 grow basis-[250px]">
            <img src={data?.image} className='h-auto max-w-md w-full mx-auto' alt="" />
         </div>

      </div>
   );
};

export default DayOne;