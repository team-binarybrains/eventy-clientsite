import React from 'react';
import RegistrationTime from '../RegistrationTime/RegistrationTime';
import OrderSummary from './OrderSummary';

const EventBooking = () => {
    return (
        <div className='route'>
            <div className="py-20 bg-[url('/src/asset/12tmag-switzerland-slide-E5KB-superJumbo.jpg')] bg-fixed bg-no-repeat bg-cover text-center">
                <h4 style={{ wordSpacing: "4px", letterSpacing: "5px" }} className='font-semibold text-lg text-white'
                data-aos="zoom-in"
                data-aos-duration="2000"
                >TICKET BOOKING</h4>

                <h2 className='text-5xl font-semibold mt-5 text-white'
                data-aos="zoom-in"
                data-aos-duration="2000"
                >EVENTY <span className='font-bold text-amber-400'>BOOKING</span></h2>

                <p className='text-white mt-12 font-bold'><span className='pr-8 border-r-2'
                data-aos="fade-right"
                data-aos-duration="2000"
                >Home</span>
                <span className='pl-8'
                data-aos="fade-left"
                data-aos-duration="2000"
                >Booking</span></p>
            </div>
            <div className='2xl:max-w-7xl mx-auto'>
                <RegistrationTime />
            </div>
            <div style={{ background: "#f7f7f7" }} className='px-5 sm:px-20 py-16 sm:py-24 pb-52'>
                <div className='2xl:max-w-7xl mx-auto'>
                    <OrderSummary></OrderSummary>
                </div>
            </div>
        </div>
    );
};

export default EventBooking;