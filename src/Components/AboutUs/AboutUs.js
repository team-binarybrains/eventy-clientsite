import React from "react";
import { Link } from "react-router-dom";
import Staffs from "../Home/Staffs/Staffs";
import Address from "./Address";
import Advantage from "./Advantage";
import Awade from "./Awade";
import Special from "./Special";
import TestimonialClient from "./TestimonialClient";

function AboutUs() {
  return (
    <div className="route">
      <div className=" p-3 bg-image lg:h-[340px] h-[200px] banner-background">
        <div className="flex justify-center items-center h-full lg:-mt-8">
          <div className="text-white"
            data-aos="zoom-in"
            data-aos-duration="2000"
          >
            <p className="tracking-[8px]">ALL YOU NEED TO KNOW</p>
            <p className="text-4xl text-center font-bold my-3">
              <span className="text-[#ffbe30] mr-2">ABOUT</span>
              <span className="font-normal tracking-wide">EVENTY</span>
            </p>
          </div>
        </div>

        <div className="flex justify-center items-center gap-x-3 lg:-mt-16 -mt-10 text-white ">
          <Link to="/" className="text-lg"
            data-aos="fade-right"
            data-aos-duration="2000"
          >
            Home
          </Link>
          <span>|</span>
          <p className="text-lg"
            data-aos="fade-left"
            data-aos-duration="2000"
          >About Us</p>
        </div>
      </div>

      <div className=" grid lg:grid-cols-3 grid-cols-1 justify-around py-20 bg-gray-100 lg:pl-36">
        <div className="lg:-mr-96 grid items-center lg:w-96 px-10 lg:px-0">
          <div className="">
            <div className="border-t-2 w-[60px] lg:-ml-7 -ml-4 border-[#fd1d1d] "
             data-aos="fade-left"
             data-aos-duration="2000"
            >
              <p className=""></p>
            </div>
            <h1 className="uppercase my-5 text-gray-400 text-[20px] tracking-[10px]"
              data-aos="fade-left"
              data-aos-duration="2000"
            >
              we are eventy
            </h1>
            <h1 className="text-4xl font-bold my-4"
              data-aos="zoom-in"
              data-aos-duration="2000"
            >
              A Great <br /> Events Management
            </h1>
            <p className="text-lg"
              data-aos="zoom-in"
              data-aos-duration="2000"
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint iste
              fugiat, repudiandae facere asperiores veniam, hic, deserunt in
              assumenda dignissimos nostrum excepturi incidunt quibusdam
              perferendis voluptatem facilis officia earum sed?
            </p>

          </div>
        </div>

        <div className="lg:ml-16 px-5 lg:px-0">
          <div className="lg:w-96 mt-10">
            <div className="flex items-baseline">
              <p className="text-3xl font-bold"
                data-aos="fade-right"
                data-aos-duration="2000"
              >Our Mission</p>
              <div className="border-b-4 w-12 ml-1 border-[#ffbe30]"
               data-aos="fade-left"
               data-aos-duration="2000"
              ></div>
            </div>
            <div
              data-aos="zoom-out"
              data-aos-duration="2000"
            >
              <p className="lg:my-10 my-4">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem
                debitis consequuntur animi totam aliquam nisi magnam mollitia, non
                placeat ad voluptatum eos similique modi fugit maxime porro
                tempora praesentium sit!
              </p>

              <p className="font-bold">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
                fugiat magni eos odit id placeat soluta quae sed eius accusamus.
              </p>
            </div>
          </div>
        </div>

        <div className="lg:ml-16 px-5 lg:px-0">
          <div className="lg:w-96 mt-10">
            <div className="flex items-baseline">
              <p className="text-3xl font-bold"
               data-aos="fade-right"
               data-aos-duration="2000"
              >Our Vission </p>
              <div className="border-b-4 w-12 ml-1 border-[#ffbe30]"
               data-aos="fade-left"
               data-aos-duration="2000"
              ></div>
            </div>
            <div
              data-aos="zoom-in"
              data-aos-duration="2000"
            >
              <p className="lg:my-10 my-4">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem
                debitis consequuntur animi totam aliquam nisi magnam mollitia, non
                placeat ad voluptatum eos similique modi fugit maxime porro
                tempora praesentium sit!
              </p>

              <p className="font-bold">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
                fugiat magni eos odit id placeat soluta quae sed eius accusamus.
              </p>
            </div>
          </div>
        </div>

        <div className="flex justify-end mt-10 lg:mt-20 lg:mb-0">
          <img src="https://i.ibb.co/MRXgQwx/eventy-signature.png" alt="" 
           data-aos="flip-up"
           data-aos-duration="2000"
          />
        </div>
      </div>

      <Awade></Awade>
      <Advantage></Advantage>
      <TestimonialClient></TestimonialClient>
      <Staffs></Staffs>
      <Special></Special>
      <Address></Address>
    </div>
  );
}

export default AboutUs;
