import React, { useState } from 'react';
import sponser from "../../../asset/Client/image1.png";
import "./PartnerClient.css";
import Slider from "react-slick";
import { useGetTestimonialQuery } from '../../../Features/AllTestimonialApi';
import Loading from '../../Share/Loading/Loading';

const PartnerClient = () => {

    const singleSponser = [0, 1, 2, 3, 4, 5]
    const sponserCount = [0, 1, 2];
    const [current, setCurrent] = useState([]);

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
        speed: 500,
        autoplaySpeed: 3000,
        beforeChange: (a, e) => {
            setCurrent(e);
        }
    };

    const { data, error, isLoading, isSuccess, isError } = useGetTestimonialQuery();

    return (
        <div id='partner-client' className='mb-20 2xl:max-w-7xl mx-auto'>
            <div className='px-5 sm:px-56 text-center pt-20 pb-14'>
                <h5 style={{ wordSpacing: "4px", letterSpacing: "5px" }} className='text-base sm:text-lg text-gray-500 mb-4'
                    data-aos="fade-right"
                    data-aos-duration="3000"
                >WE ARE EVENTY</h5>
                <h1 className='text-3xl sm:text-5xl mb-5 sm:mb-7'
                    data-aos="fade-left"
                    data-aos-duration="3000"
                >We Have <span className='font-bold'>Best Partners & Clients</span></h1>
                <p className='text-gray-600'
                    data-aos="zoom-in"
                    data-aos-duration="3000"
                >
                    Lorem ipsum dollor site amet the best consectuer adipiscing elites sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat insignia the consectuer adipiscing elit.
                </p>
            </div>

            <div className='grid grid-cols-1 sm:grid-cols-2 gap-8 mx-3 sm:mx-20'>
                <div className='relative pl-12 pb-16 sm:pb-0'
                    data-aos="flip-up"
                    data-aos-duration="2700"
                >
                    <span className='sponser-title'><span className='font-semibold ml-1 text-amber-400'>EVENTY</span> REVIEW </span>

                    <Slider {...settings}>
                        {sponserCount.map((sc) => <div className='grid grid-cols-1'>
                            <div className='grid grid-cols-1 sm:grid-cols-2'>
                                {singleSponser.map(h => <div className='px-8  py-10  border backgroundSet'>
                                    <img className='w-52  h-14 ' src={sponser} alt="" />
                                </div>)}
                            </div>
                        </div>)}
                    </Slider>

                </div>
                <div className="myclass"
                    data-aos="flip-down"
                    data-aos-duration="2700"
                >
                    <h4 style={{ letterSpacing: "4px" }} className='mt-9 mb-4 text-lg text-amber-400 text-center'>TESTIMONIAL</h4>
                    <h1 className='text-center text-5xl text-white'>Client <span className='font-bold'>Says</span></h1>
                    {isLoading && <Loading></Loading>}
                    {isError && error.message}
                    {isSuccess &&
                        <Slider {...settings1}>
                            {data.map((t, i) =>
                                <div className={`mt-16 ${current === i ? 'noSkew' : 'skew'}`}>
                                    <p className='px-10 text-center text-white'>{t.description.slice(0, 180) + "..."}</p>
                                    <h2 className='text-center mt-7 text-amber-400 font-semibold text-lg'>{t.name}</h2>
                                    <h3 className='text-center mt-2 text-gray-300 mb-10 sm:mb-0 '>{t.profession}</h3>
                                </div>
                            )}
                        </Slider>
                    }
                </div>
            </div>
        </div>
    );
};

export default PartnerClient;