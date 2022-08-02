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
                <div className={`basis-full ${style.topBanner} h-80`}>
                    <TopBanner></TopBanner>
                </div>

                {/* 2nd row : 1st column */}
                <div className='border-4 border-red-600 basis-[70%] grow'>
                    <FeaturedEvent></FeaturedEvent>
                </div>
                <section className='px-3 flex flex-wrap justify-center'>
                    {/* 2nd row : 1st column (-----Rashid vai-------)*/}
                    <div className='border-4 border-red-600 basis-[70%] grow min-w-[900px] min-h-[200px] shrink'>

                    </div>

                    {/* 2nd row : 2nd column */}
                    <div className='basis-[30%] grow min-w-[360px] min-h-[200px] shrink'>
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