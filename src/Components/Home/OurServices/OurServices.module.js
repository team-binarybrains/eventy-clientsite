import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import style from "./OurServices.module.css";

// import required modules
import { Autoplay, FreeMode, Pagination } from "swiper";

export default function OurServices() {

    const serviceInfo = [
        { image: "https://i.ibb.co/vB6cSjx/img3.jpg", name: "Business Meeting", Sprice: 1200, ePrice: 2000 },
        { image: "https://i.ibb.co/M2W5Hm9/img1.jpg", name: "Wedding Party", Sprice: 2500, ePrice: 5000 },
        { image: "https://i.ibb.co/DDbg7n4/img2.jpg", name: "Birthday Party", Sprice: 500, ePrice: 2000 },
        { image: "https://i.ibb.co/vB6cSjx/img3.jpg", name: "Business Meeting", Sprice: 1200, ePrice: 2000 },
        { image: "https://i.ibb.co/M2W5Hm9/img1.jpg", name: "Wedding Party", Sprice: 2500, ePrice: 5000 },
        { image: "https://i.ibb.co/DDbg7n4/img2.jpg", name: "Birthday Party", Sprice: 500, ePrice: 2000 }
    ]

    return (
        <div className={`px-80 pt-7 bg-gray-100`}>

            <div className="mt-6 mb-14">
                <h1 className="text-center uppercase my-5 text-gray-400 text-[18px] tracking-[10px]">our services</h1>
                <p className="text-4xl tracking-wider text-center">Eventy <span className="font-bold">Expertise</span></p>
            </div>

            <Swiper
                slidesPerView={3}
                spaceBetween={30}
                freeMode={true}
                // pagination={{
                //     clickable: true,
                // }}
                modules={[Autoplay, FreeMode, Pagination]}
                className={`mySwiper`}>

                {
                    serviceInfo.map((service, index) => <SwiperSlide key={index} className={style.hit} >

                        <div>
                            <div className="">
                                <img src={service.image} alt="" className="" />
                            </div>

                            <div className="flex justify-center -mt-16">
                                <div className="bg-white w-72 h-28 grid items-center">
                                    <p className="font-bold">{service.name}</p>
                                    <p className="-mt-10 text-sm">
                                        <span className="tracking-wider">Start From</span>
                                        <span className="font-bold tracking-wide">$ {service.Sprice} - {service.ePrice}</span>
                                    </p>
                                </div>
                            </div>
                        </div>

                    </SwiperSlide>)
                }

            </Swiper>
        </div>
    );
}
