import React, { useRef, useState } from "react";
import Slider from "react-slick";

import './OurServices.css'

export default function OurServices() {

    const serviceInfo = [
        { image: "https://i.ibb.co/vB6cSjx/img3.jpg", name: "Business Meeting", Sprice: 1200, ePrice: 2000 },
        { image: "https://i.ibb.co/M2W5Hm9/img1.jpg", name: "Wedding Party", Sprice: 2500, ePrice: 5000 },
        { image: "https://i.ibb.co/DDbg7n4/img2.jpg", name: "Birthday Party", Sprice: 500, ePrice: 2000 },
        { image: "https://i.ibb.co/vB6cSjx/img3.jpg", name: "Business Meeting", Sprice: 1200, ePrice: 2000 },
        { image: "https://i.ibb.co/M2W5Hm9/img1.jpg", name: "Wedding Party", Sprice: 2500, ePrice: 5000 },
        { image: "https://i.ibb.co/DDbg7n4/img2.jpg", name: "Birthday Party", Sprice: 500, ePrice: 2000 }
    ]


    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        arrows: true,
        autoplay: true,
        responsive: [
            {
                breakpoint: 644,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false
                }
            }
        ]
    };

    return (
        <div className="lg:px-80 pt-5 pb-32 bg-gray-100">


            <div className="mt-6 mb-14">
                <h1 className="text-center uppercase my-5 text-gray-400 text-[18px] tracking-[10px]">our services</h1>
                <p className="text-4xl tracking-wider text-center">Eventy <span className="font-bold">Expertise</span></p>
            </div>



            <div>
                <Slider {...settings} className='lg:h-[500px]' >
                    {
                        serviceInfo.map((service, index) => <div key={service.index} className='relative hvr'>

                            <div >

                                <div className="flex justify-center relative">
                                    <img src={service.image} alt="" className="" />
                                    <div className="absolute top-0 left-11 right-[2.6rem] bottom-0 bg-transparent cld"></div>
                                </div>

                                <div className="flex justify-center absolute left-[calc(50%-9rem)] -bottom-10">
                                    <div className="bg-white w-72 h-24 grid items-center justify-center">
                                        <div className="text-center">
                                            <p className="font-bold">{service.name}</p>
                                        </div>
                                        <p className="-mt-10 text-sm">
                                            <span className="tracking-wider">Start From</span>
                                            <span className="font-bold tracking-wide">$ {service.Sprice} - {service.ePrice}</span>
                                        </p>
                                    </div>
                                </div>
                            </div>

                                <p className="left-position uppercase text-gray-400 font-bold hover:text-[#ffbe30] tracking-[5px] cld2">eventy party events</p>
                   

                        </div>
                        )}
                </Slider>
            </div>

        </div>
    );
}
