import React from 'react';
import { MdBookmarks } from 'react-icons/md'
import style from './FeaturedEvent.module.css'
import FeaturedEventSlider from './FeaturedEventSlider';

const FeaturedEvent = () => {
   return (
      <section className='container mx-auto px-2'>
         {/* <p className={`${style} text-5xl`}>this Featured Event</p> */}
         <div className="py-6">
            <div className="">
               <h1 className='flex items-center gap-4 text-2xl font-semibold'><span className='text-yellow-500'><MdBookmarks></MdBookmarks></span>Featured Event</h1>
               <h2 className='text-4xl pt-4 pl-2 font-medium text-slate-700'>Istanbul <strong>Wine Party 2018</strong></h2>
            </div>
            <div className="">
               {/*  */}
               <FeaturedEventSlider/>
            </div>
         </div>
      </section>
   );
};

export default FeaturedEvent;