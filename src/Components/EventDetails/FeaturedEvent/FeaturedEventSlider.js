/* eslint-disable no-unused-vars */
import React from "react";
import Slider from "react-slick";
import { AiOutlineArrowRight } from 'react-icons/ai';


import img1 from './img/event-details-1.jpg'
import img2 from './img/event-details-2.jpg'
import img3 from './img/event-details-3.jpg'

function SampleNextArrow(props) {
   const { className, onClick } = props;
   return (
      <div
         className={`${className}`}
         style={{ position: "absolute", top: "5%", right: "2%", fontSize: "2rem" }}
         onClick={onClick}
      >
         {/* <AiOutlineArrowRight></AiOutlineArrowRight> */}
      </div>
   );
}

function SamplePrevArrow(props) {
   const { className, onClick } = props;
   return (
      <div
         className={className}
         style={{ position: "absolute", top: "5%", left: "90%", fontSize: "2rem", zIndex: "11" }}
         onClick={onClick}
      />
   );
}

const FeaturedEventSlider = () => {
   const photos = [
      { img: img1 },
      { img: img2 },
      { img: img3 },
   ]
   const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
   };
   return (
      <div className="py-6 w-80 md:w-full">
         {/* <h2> Single Item</h2> */}
         <Slider {...settings} className='relative max-w-2xl'>
            {
               photos.map((slide,index) =>
                  <div key={index} className="">
                     <div className="">
                        <div className="">
                           <img className="object-cover object-top rounded" src={slide.img} style={{ height: '400px' }} alt="" />
                        </div>
                     </div>
                  </div>
               )
            }

         </Slider>
      </div>
   );
}


export default FeaturedEventSlider;