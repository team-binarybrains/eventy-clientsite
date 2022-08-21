import React from 'react';

const Offer = () => {
    return (
        <div className="bg-[url('/src/asset/special-offer-bg.png')] bg-cover">
            <div className='2xl:max-w-7xl mx-auto'
                data-aos="fade-up"
                data-aos-duration="2000"
                >
                <div className="grid grid-cols-12 py-14 sm:p-16">
                    <div className='col-start-1 col-end-13 sm:col-start-1 sm:col-end-9 sm:px-4'>
                        <h1 className='text-3xl sm:text-4xl text-white px-10 sm:px-0 text-center sm:text-left'><span className='text-4xl sm:text-6xl text-amber-400 font-semibold'>30%</span> Off In June~July For <span className='font-semibold sm:font-bold'>Birthday Events</span></h1>
                        <p style={{ wordSpacing: "4px" }} className='mt-3 text-stone-700 px-4 sm:px-0 text-center sm:text-left mb-5 sm:mb-0'>Contact us now and we will make your event unique & unforgettable</p>
                    </div>
                    <div className='col-start-1 col-end-13 sm:col-start-9 sm:col-end-13 text-center sm:text-right px-5'>
                        <button style={{ wordSpacing: "4px", boxShadow: "0 5px 60px 5px rgb(0 0 0 / 20%)" }} className='text-sm space-x-10 px-11 py-4 bg-white hover:bg-amber-400 rounded-full text-amber-400 hover:text-white uppercase font-bold mt-6 transition-all duration-500'>Make An Event now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Offer;