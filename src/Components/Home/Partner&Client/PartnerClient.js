import React from 'react';
import sponser from "../../../assets/Client/image1.png";
import "./PartnerClient.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";


const PartnerClient = () => {

    const sponserCount = [0, 1, 2, 3, 4, 5];
    const testimonial = [0, 1, 2]

    return (
        <div className='mb-20'>
            <div className='px-5 sm:px-56 text-center pt-20 pb-14'>
                <h5 style={{ wordSpacing: "4px", letterSpacing: "5px" }} className='text-base sm:text-lg text-gray-500 mb-4'>WE ARE EVENTY</h5>
                <h1 className='text-3xl sm:text-5xl mb-5 sm:mb-7'>We Have <span className='font-bold'>Best Partners & Clients</span></h1>
                <p className='text-gray-600'>
                    Lorem ipsum dollor site amet the best consectuer adipiscing elites sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat insignia the consectuer adipiscing elit.
                </p>
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-10 mx-3 sm:mx-20'>
                <div className='relative pl-12'>
                    <span className='sponser-title'>HARMONI <span className='font-semibold ml-1'>EVENTY</span></span>
                    <Swiper
                        spaceBetween={30}
                        centeredSlides={true}
                        autoplay={{
                            delay: 4000,
                            disableOnInteraction: false,
                        }}
                        navigation={true}
                        modules={[Navigation,Autoplay]}
                    >
                        {sponserCount.map((spc) => <SwiperSlide>
                            <div className='grid grid-cols-1 sm:grid-cols-2'>
                                {sponserCount.map((sc, i) => <div className='px-7 py-12 border backgroundSet'>
                                    <img width="202px" height="56px" src={sponser} alt="" />
                                </div>)}
                            </div>
                        </SwiperSlide>)}
                    </Swiper>
                </div>
                <div className="bg-[url('/src/assets/Client/1.testimonial-bg.jpg')] bg-repeat-round">
                    <h4 style={{ letterSpacing: "4px" }} className='mt-10 mb-4 text-lg text-amber-400 text-center'>TESTIMONIAL</h4>
                    <h1 className='text-center text-5xl text-white'>Client <span className='font-bold'>Says</span></h1>
                    <Swiper
                        spaceBetween={30}
                        centeredSlides={true}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                        modules={[Navigation, Pagination, Autoplay]}
                        pagination={{ clickable: true }}
                    >
                        {testimonial.map((t) => <SwiperSlide>
                            <div className='mt-16'>
                                <p className='px-10 text-center text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime error quos modi quas voluptatibus. Necessitatibus, ipsa! Laborum facilis sed porro temporibus.</p>
                                <h2 className='text-center mt-7 text-amber-400 font-semibold text-lg'>Jenni Harnandas</h2>
                                <h3 className='text-center mt-2 text-gray-300'>Graphic Designer</h3>
                            </div>
                        </SwiperSlide>)}
                        <div className='w-full h-14 none'>
                        </div>
                    </Swiper>
                </div>
            </div>
        </div>
    );
};

export default PartnerClient;