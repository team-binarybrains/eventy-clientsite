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
      responsive: [
         {
            breakpoint: 1024,
            settings: {
               slidesToShow: 1,
               slidesToScroll: 1,
               infinite: true,
               dots: true
            }
         },
         {
            breakpoint: 600,
            settings: {
               slidesToShow: 1,
               slidesToScroll: 1,
               initialSlide: 1
            }
         },
         {
            breakpoint: 480,
            settings: {
               slidesToShow: 1,
               slidesToScroll: 1
            }
         }
      ],
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,

   };
   return (
      <div className="py-6">
         {/* <h2> Single Item</h2> */}
         <Slider {...settings} className='relative'>
            {
               photos.map(slide =>
                  <div>
                     <div className="">
                        <div className="">
                           <img className="w-full object-cover object-top rounded" src={slide.img} style={{ height: '385px' }} alt="" />
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