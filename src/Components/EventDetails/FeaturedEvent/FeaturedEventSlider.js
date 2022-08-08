/* eslint-disable no-unused-vars */
import React from "react";
import Slider from "react-slick";
import { AiOutlineArrowRight } from 'react-icons/ai';


function SampleNextArrow(props) {
   const { className, onClick } = props;
   return (
      <div
         className={`${className}`}
         style={{ 
            position: "absolute", 
            top: "5%", 
            right: "2%", 
            fontSize: "2rem" ,
            
         }}
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
         style={{ 
            position: "absolute", 
            top: "5%", 
            left: "85%", 
            fontSize: "2rem", 
            zIndex: "11" 
         }}
         onClick={onClick}
      />
   );
}

const FeaturedEventSlider = ({eventDetailsData}) => {

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
      <div className="py-6 w-80 m-auto sm:w-11/12 md:w-full">
         {/* <h2> Single Item</h2> */}
         <Slider {...settings} className='relative max-w-2xl'>
            {
               eventDetailsData?.img?.map((img,index)=>
               <div key={index} className="">
               <div className="">
                  <div className="">
                     <img className="object-cover object-top rounded w-full" src={img} style={{ height: '400px' }} alt="" />
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