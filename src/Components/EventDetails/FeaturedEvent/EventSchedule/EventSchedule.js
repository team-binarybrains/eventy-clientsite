import React from 'react';
import { Link } from 'react-router-dom';
import DayOne from './DayOne/DayOne';
import Tabs from './Tab/Tab';

const EventSchedule = () => {
   return (
      <section className='container mx-auto px-4'>
         <div className="">
            <div className="">
               <h1 className='text-4xl pt-4 pl-2 font-medium text-slate-700'>Event <strong>Schedule</strong></h1>
            </div>
            {/* tab */}
            <Tabs/>
         </div>
      </section>
   );
};

export default EventSchedule;