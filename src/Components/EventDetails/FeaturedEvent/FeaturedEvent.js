import React from 'react';
import { MdBookmarks } from 'react-icons/md'
import style from './FeaturedEvent.module.css'

const FeaturedEvent = () => {
   return (
      <section className='container mx-auto px-2'>
         {/* <p className={`${style} text-5xl`}>this Featured Event</p> */}
         <div className="py-6">
            <div className="">
               <h1 className='flex items-center gap-4 text-2xl font-semibold'><span className='text-yellow-500'><MdBookmarks></MdBookmarks></span>Featured Event</h1>
            </div>
         </div>
      </section>
   );
};

export default FeaturedEvent;