/* eslint-disable no-unused-vars */
import React from 'react';
import { MdBookmarks } from 'react-icons/md'
import style from './FeaturedEvent.module.css'
import FeaturedEventSlider from './FeaturedEventSlider';

const FeaturedEvent = ({eventDetailsData}) => {
   return (
      <section className='px-2 '>
         {/* <p className={`${style} text-5xl`}>this Featured Event</p> */}
         <div className="py-6">
            <div className=" ">
               <h1 className='flex items-center gap-4 text-2xl font-semibold'><span className='text-yellow-500'><MdBookmarks></MdBookmarks></span>Featured Event</h1>
               <h2 className='text-4xl pt-4 pl-2 font-medium text-slate-700'>{eventDetailsData?.title }</h2>
            </div>
            <div className="">
               {/*  */}
               <FeaturedEventSlider eventDetailsData={eventDetailsData}/>
            </div>
         </div>
      </section>
   );
};

export default FeaturedEvent;