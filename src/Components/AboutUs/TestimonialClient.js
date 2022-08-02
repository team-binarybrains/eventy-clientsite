import React from 'react'
import { FaQuoteRight } from 'react-icons/fa';
import Slider from "react-slick";

import '../Home/Partner&Client/PartnerClient.css'

function TestimonialClient() {

    const testimonial = [0, 1, 2]

    const settings1 = {
        dots: false,
        arrows: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
    };


    return (
        <div>
            <div className='mb-40 flex justify-center'>
            <Slider {...settings1} className='w-[1200px] py-10 px-20'>
                {testimonial.map((t) =>
                    <div className='mt-16 '>
                        <div className='flex justify-center pb-12 '>
                            <p className='text-6xl '><FaQuoteRight className='text-color'/></p>
                        </div>
                        <p className='px-10 text-center text-gray-600 font-semibold text-xl'>“Bring people together, or turn your passion into a business. Harmoni gives you everything you need to host your best event yet. lorem ipsum diamet. Bring people together, or turn your passion into a business. Harmoni gives you everything you need to host your best event yet.”
                        </p>
                        <h2 className='text-center mt-7 text-amber-400 font-semibold text-lg'>Jenni Harnandas</h2>
                        <h3 className='text-center mt-2 text-gray-300 mb-10 sm:mb-0 '>Graphic Designer</h3>
                    </div>
                )}
            </Slider>
        </div>
        </div>
    )
}

export default TestimonialClient
