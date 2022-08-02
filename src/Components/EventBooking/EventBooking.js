import React from 'react';
import OrderSummary from './OrderSummary';

const EventBooking = () => {
    return (
        <>
            <div className="py-20 bg-[url('/src/asset/12tmag-switzerland-slide-E5KB-superJumbo.jpg')] bg-fixed bg-no-repeat bg-cover text-center">
                <h4 style={{ wordSpacing: "4px", letterSpacing: "5px" }} className='font-semibold text-lg text-white'>TICKET BOOKING</h4>
                <h2 className='text-5xl font-semibold mt-5 text-white'>HARMONI <span className='font-bold text-amber-400'>BOOKING</span></h2>
                <p className='text-white mt-12 font-bold'><span className='pr-8 border-r-2'>Home</span><span className='pl-8'>Booking</span></p>
            </div>
            <div className='2xl:max-w-7xl mx-auto'>

                <div className='grid grid-cols-1 sm:grid-cols-12 py-16 sm:py-20 px-8 sm:px-20'>
                    <div className='col-span-8'>
                        <h3 className='text-2xl sm:text-3xl'>Please Complete Registration <span className='font-bold'>Within 12:00 Hours.</span></h3>
                        <p style={{ wordSpacing: "3px" }} className='mt-2 text-lg'>After 12:00 hours, the reservation we’re holding will be released to others.</p>
                    </div>
                    <div className='col-span-4'>

                    </div>
                </div>
            </div>
            <div style={{ background: "#f7f7f7" }} className='px-5 sm:px-20 py-16 sm:py-24 pb-52'>
                <div className='2xl:max-w-7xl mx-auto'>
                    <OrderSummary></OrderSummary>
                </div>
            </div>
        </>
    );
};

export default EventBooking;