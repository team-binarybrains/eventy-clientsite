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


  const settings = {
    infinite: true,
    lazyLoad: true,
    speed: 300,
    slidesToShow: 2,
    centerMode: true,
    centerPadding: 270,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
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
    <div className="app">
      <Slider {...settings}>
        {images.map((img, idx) => (

          <div className={idx === imageIndex ? "slide activeSlide" : "slide"}>
            <div className='h-full w-full'>

              <div className="flex justify-center w-[600px]">
                <CountDown></CountDown>
              </div>

              <div>
                <div className="h-[405px] w-[600px]">
                  <img className="h-80 w-[]" src={img.img} alt={img} />
                </div>

                <div className="w-full flex justify-end mb-14">
                  <div className='bg-white px-5 w-[300px] sdw -mr-16 -mt-[350px]'>
                    <div className=''>
                      <h1 className="title-inline py-5">{img.title_line}</h1>
                      <p className="text-[#ffbe30] text-xl ">{img.Tickets}</p>
                      <p className="text-[#878787] text-xl py-3">
                        <span className="bg-[#f7f7f7] p-1 text-center rounded-full">
                          <AiOutlineClockCircle className='inline-block text-2xl -mt-1 text-[#ffbe30] rounded-t-full' />
                        </span>

                        {img.Start}</p>
                      <p className="text-[#878787] text-xl py-3">
                        <span className=" bg-[#f7f7f7] p-1 text-center rounded-full">
                          <GoLocation className='inline-block text-2xl -mt-1 text-[#ffbe30] ' />
                        </span>
                        {img.location}</p>
                      <button className="custom-btn px-16 font-bold  py-4 mb-10 rounded-full text-white ">Tickets & details</button>
                    </div>
                  </div>
                </div>
              </div>

              <h1 className="text-3xl font-black text-white text-center uppercase px-3 py-3 rounded b absolute top-[140px] left-10 upcomingbg" >
                {img.date}
                <br />
                {img.month}
              </h1>


            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default UpcommingEvent;
