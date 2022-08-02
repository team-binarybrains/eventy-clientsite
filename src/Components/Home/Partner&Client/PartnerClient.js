import React from 'react';
import sponser from "../../../asset/Client/image1.png";
import "./PartnerClient.css";
import Slider from "react-slick";

const PartnerClient = () => {

    const sponserCount = [0, 1, 2];
    const testimonial = [0, 1, 2]
    const settings = {
        dots: true,
        arrows: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 5000,
        autoplaySpeed: 5000,
    };

    const settings1 = {
        dots: true,
        arrows: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
    };

    return (
        <div className='mb-20 2xl:max-w-7xl mx-auto'>
            <div className='px-5 sm:px-56 text-center pt-20 pb-14'>
                <h5 style={{ wordSpacing: "4px", letterSpacing: "5px" }} className='text-base sm:text-lg text-gray-500 mb-4'>WE ARE EVENTY</h5>
                <h1 className='text-3xl sm:text-5xl mb-5 sm:mb-7'>We Have <span className='font-bold'>Best Partners & Clients</span></h1>
                <p className='text-gray-600'>
                    Lorem ipsum dollor site amet the best consectuer adipiscing elites sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat insignia the consectuer adipiscing elit.
                </p>
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-8 mx-3 sm:mx-20'>
                <div className='relative pl-12'>
                    <span className='sponser-title'>HARMONI <span className='font-semibold ml-1 text-amber-400'>EVENTY</span></span>

                    <Slider {...settings} >
                        {sponserCount.map((sc) => <div className='grid grid-cols-1'>
                            <div className='flex'>
                                <div className='px-8  py-10  border backgroundSet'>
                                    <img className='w-52  h-14 ' src={sponser} alt="" />
                                </div>
                                <div className='px-8  py-10  border backgroundSet'>
                                    <img className='w-52  h-14 ' src={sponser} alt="" />
                                </div>
                            </div>
                            <div className='flex'>
                                <div className='px-8  py-10  border backgroundSet'>
                                    <img className='w-52  h-14 ' src={sponser} alt="" />
                                </div>
                                <div className='px-8  py-10  border backgroundSet'>
                                    <img className='w-52  h-14 ' src={sponser} alt="" />
                                </div>
                            </div>
                            <div className='flex'>
                                <div className='px-8  py-10  border backgroundSet'>
                                    <img className='w-52  h-14 ' src={sponser} alt="" />
                                </div>
                                <div className='px-8  py-10  border backgroundSet'>
                                    <img className='w-52  h-14 ' src={sponser} alt="" />
                                </div>
                            </div>
                        </div>)}
                    </Slider>

                </div>
                <div className="myclass">
                    <h4 style={{ letterSpacing: "4px" }} className='mt-10 mb-4 text-lg text-amber-400 text-center'>TESTIMONIAL</h4>
                    <h1 className='text-center text-5xl text-white'>Client <span className='font-bold'>Says</span></h1>
                    <Slider {...settings1}>
                        {testimonial.map((t) =>
                            <div className='mt-16'>
                                <p className='px-10 text-center text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime error quos modi quas voluptatibus. Necessitatibus, ipsa! Laborum facilis sed porro temporibus.</p>
                                <h2 className='text-center mt-7 text-amber-400 font-semibold text-lg'>Jenni Harnandas</h2>
                                <h3 className='text-center mt-2 text-gray-300 mb-10 sm:mb-0 '>Graphic Designer</h3>
                            </div>
                        )}
                    </Slider>
                </div>
            </div>
        </div>
    );
};

export default PartnerClient;