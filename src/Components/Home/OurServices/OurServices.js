/* eslint-disable no-unused-vars */
import React from "react";
import { BiLeftArrow, BiRightArrow } from "react-icons/bi";
import { BsPlusLg } from "react-icons/bs";
import Slider from "react-slick";
import "./OurServices.css";
import { useNavigate } from "react-router-dom";
import useFetch from "./Hook/useFetch";

export default function OurServices() {
  const serviceInfo = useFetch("https://eventy-server.vercel.app/services-get");

  const navigate = useNavigate();
  const navigateToDetails = (id) => {
    navigate(`/service-details/${id}`);
  };

  const NextArrow = ({ onClick }) => {
    return (
      <div className="myArrow right" onClick={onClick}>
        <BiRightArrow className="text-4xl" />
      </div>
    );
  };

  const PrevArrow = ({ onClick }) => {
    return (
      <div className="myArrow left" onClick={onClick}>
        <BiLeftArrow className="text-4xl" />
      </div>
    );
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows: true,
    autoplay: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 644,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        },
      },
    ],
  };

  return (
    <div className="lg:px-[270px] pt-20 pb-32 bg-gray-100">
      <div className="mt-6 mb-14">
        <h1
          className="text-center uppercase my-5 text-gray-400 text-[18px] tracking-[10px]"
          data-aos="fade-right"
          data-aos-duration="3000"
        >
          our services
        </h1>
        <p
          className="text-4xl tracking-wider text-center"
          data-aos="fade-left"
          data-aos-duration="3000"
        >
          Eventy <span className="font-bold">Expertise</span>
        </p>
      </div>

      <div>
        <Slider {...settings} className="lg:h-[500px]">
          {serviceInfo.map((service, index) => (
            <div key={service.index} className="relative hvr ">
              <div className="cursor-pointer">
                <div
                  className="flex justify-center relative"
                  data-aos="flip-right"
                  data-aos-duration="2500"
                >
                  <img src={service.image} alt="" className="" />
                  <div className="absolute top-0 left-[1.8rem] right-[1.8rem] bottom-0 bg-transparent cld ">
                    <BsPlusLg
                      onClick={() => navigateToDetails(service?._id)}
                      className="text-8xl text-white absolute top-[calc(50%-48px)] left-[calc(50%-48px)] pls "
                    />
                  </div>
                </div>

                <div
                  className="flex justify-center absolute left-[calc(50%-9rem)] -bottom-3"
                  data-aos="fade-up"
                  data-aos-duration="2700"
                >
                  <div className="bg-white w-72 h-28 grid items-center justify-center">
                    <div className="text-center">
                      <p className="font-bold">{service.eventName}</p>
                    </div>
                    <p className="-mt-10 text-sm">
                      <span className="tracking-wider">Start From</span>
                      <span className="font-bold tracking-wide">
                        $ {service.eventPrice}
                      </span>
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <p className="left-position uppercase text-gray-400 font-bold hover:text-[#ffbe30] tracking-[5px] cld2">
                  eventy party events
                </p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
