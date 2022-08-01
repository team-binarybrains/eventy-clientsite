import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import astronaut from "./Image/banner-1.jpg";
import celebrating from "./Image/banner-2.jpg";
import education from "./Image/banner-3.jpg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import "./upcommingevent.css";
import CountDown from "../CountDown/CountDown";

const UpcommingEvent = () => {
  // const images = [astronaut, celebrating, education];
const [images, setImages] = useState([])
  const NextArrow = ({ onClick }) => {
    return (
      <div className="arrow next" onClick={onClick}>
        <FaArrowRight />
      </div>
    );
  };

  const PrevArrow = ({ onClick }) => {
    return (
      <div className="arrow prev" onClick={onClick}>
        <FaArrowLeft />
      </div>
    );
  };

  const [imageIndex, setImageIndex] = useState(0);

  useEffect(() => {
    fetch('upcomingevent.json')
    .then(res=>res.json())
    .then(data =>setImages(data))
  },[])
 

  const settings = {
    infinite: true,
    lazyLoad: true,
    speed: 300,
    slidesToShow: 2,
    centerMode: true,
    centerPadding: 150,
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
           <div className='relative '>
           <CountDown></CountDown>
            <img className="h-64" src={img.img} alt={img} />
            <h1 className="text-3xl font-black text-white text-center uppercase px-3 py-3 rounded bg-red-800 absolute top-[150px] left-10 upcomingbg" >20
            <br />
            Agh
            </h1>
            <div className='bg-white h-60 w-60 shadow-lg z-50  absolute top-[164px] left-[208px] right-0 flex justify-center  text-red-500'>
              <h1 className="text-4xl">{images.data}</h1>
            </div>
           </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default UpcommingEvent;
