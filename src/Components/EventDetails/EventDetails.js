import React from 'react';
import style from './EventDetails.module.css'
import FeaturedEvent from './FeaturedEvent/FeaturedEvent';
import LocationFaq from './LocationFaq';
import TopBanner from './TopBanner';

const EventDetails = () => {
    return (
        <div>
            <section className='min-h-screen'>

                {/* 1st row */}
                <div className={`${style.topBanner} h-80`}>
                    <TopBanner></TopBanner>
                </div>

                <section className='px-3 flex flex-wrap justify-center container mx-auto max-w-7xl lg:px-16'>
                    {/* 2nd row : 1st column (-----Rashid vai-------)*/}
                    <div className='border-4 border-red-600 basis-[800px] shrink max-w-[52rem]'>
                        <FeaturedEvent></FeaturedEvent>
                    </div>

                    {/* 2nd row : 2nd column */}
                    <div className='basis-[350px] grow shrink max-w-[59rem]'>
                        <LocationFaq></LocationFaq>
                    </div>
                </section>

                {/* 3rd row */}
                <div className='border-4 border-black basis-full container mx-auto min-h-[200px]'>

                </div>
            </section>
        </div>
    );
};

export default EventDetails;