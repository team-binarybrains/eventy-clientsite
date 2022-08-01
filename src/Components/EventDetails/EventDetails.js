import React from 'react';
import style from './EventDetails.module.css'

const EventDetails = () => {
    return (
        <div>
            <section className='flex h-screen flex-wrap'>

                {/* 1st row */}
                <div className='border-4 border-yellow-600 basis-full'>

                </div>

                {/* 2nd row : 1st column */}
                <div className='border-4 border-red-600 basis-[70%] grow'>

                </div>

                {/* 2nd row : 2nd column */}
                <div className='border-4 border-purple-600 basis-[30%] min-w-[340px] grow'>

                </div>

                {/* 3r row */}
                <div className='border-4 border-black basis-full'>

                </div>
            </section>
        </div>
    );
};

export default EventDetails;