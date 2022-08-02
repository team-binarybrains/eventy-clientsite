/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import astronaut from "./Image/banner-1.jpg";
import celebrating from "./Image/banner-2.jpg";
import education from "./Image/banner-3.jpg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import { AiOutlineClockCircle } from "react-icons/ai";
import { GoLocation } from "react-icons/go";
import "./upcommingevent.css";
import CountDown from "../CountDown/CountDown";

const UpcommingEvent = () => {
  // const images = [astronaut, celebrating, education];
  const [images, setImages] = useState([])
  const NextArrow = ({ onClick }) => {
    return (
      <div className="arrow next" onClick={onClick}>
        <FaArrowRight className="text-4xl" />
      </div>
    );
  };

  const PrevArrow = ({ onClick }) => {
    return (
      <div className="arrow prev" onClick={onClick}>
        <FaArrowLeft className="text-4xl" />
      </div>
    );
  };

  const [imageIndex, setImageIndex] = useState(0);

  useEffect(() => {
    fetch('upcomingevent.json')
      .then(res => res.json())
      .then(data => setImages(data))
  }, [])


  const upComingSettings = {
    className:"center",
    infinite: true,
    lazyLoad: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "0",
    responsive: [
      /* {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      }, */
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    beforeChange: (current, next) => setImageIndex(next),
  };

  return (
    <div className="container mx-auto px-10 pt-16">

      <div className="space-y-3">
        <h1 className="text-center uppercase text-gray-400 text-[18px] tracking-[10px]">UPCOMMING EVENTS</h1>
        <p className="text-5xl tracking-wider text-center">Latest <span className="font-bold">Awesome Events</span></p>
      </div>

      <div className="app">
        <Slider {...upComingSettings} className='py-10 px-5 overflow-visible'>
          {images.map((img, idx) => (

            <div className={`slide ${idx === imageIndex ? "activeSlide" : ""}`}>
              
              {
                idx === imageIndex ?
                <div className="scale-50 2xl:scale-100 flex justify-center min-w-[20rem] h-32">
                  <CountDown></CountDown>
                </div> :
                <div className="scale-50 2xl:scale-100 flex justify-center min-w-[20rem] h-32">
                
              </div>
              }
              
              <div className="relative">
                <img className="h-60" src={img.img} alt={img} />


                {
                  idx === imageIndex &&
                  <div className='bg-white w-[200px] sm:w-[250px] rounded sdw p-2 sm:px-5 absolute -bottom-20 right-[10%]'>
                    <div className='space-y-2'>
                      <h1 className="title-inline pb-2">{img.title_line}</h1>
                      <p className="text-[#ffbe30] font-bold">{img.Tickets}</p>
                      <p className="text-[#878787] text-sm">
                        <span className="bg-[#f7f7f7] p-1 text-center rounded-full">
                          <AiOutlineClockCircle className='inline-block text-xl -mt-1 text-[#ffbe30] rounded-t-full' />
                        </span>
                        {img.Start}</p>
                      <p className="text-[#878787] text-sm">
                        <span className=" bg-[#f7f7f7] p-1 text-center rounded-full">
                          <GoLocation className='inline-block text-xl -mt-1 text-[#ffbe30] ' />
                        </span>
                        {img.location}</p>
                      <button className="custom-btn px-5 font-bold py-2 rounded-full text-white ">Tickets & details</button>
                    </div>
                  </div>
                }

                {
                  idx === imageIndex &&
                  <h1 className="text-3xl font-black text-white text-center uppercase px-3 py-3 rounded absolute -top-2 left-[5%] upcomingbg " >
                    {img.date}
                    <br />
                    {img.month}
                  </h1>
                }
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default UpcommingEvent;
