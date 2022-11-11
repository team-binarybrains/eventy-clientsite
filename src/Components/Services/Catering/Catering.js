import React from "react";
import { BsPlusLg } from "react-icons/bs";
import { Link } from "react-router-dom";
import useFetch from "../../Home/OurServices/Hook/useFetch";
import "../Services.css";

function Catering() {
  const catering = useFetch(
    `https://eventy-serversite-production.up.railway.app/get-sub-services/catering`
  );
  console.log(catering);

  return (
    <div className="route">
      {/* catering banner */}
      <div className=" p-3 bg-image lg:h-[340px] h-[200px] banner-background">
        <div className="flex justify-center items-center h-full lg:-mt-8">
          <div
            className="text-white text-center"
            data-aos="zoom-in"
            data-aos-duration="2500"
          >
            <p className="tracking-[8px]">ALL YOU NEED TO KNOW</p>
            <p className="text-4xl text-center font-bold my-3">
              <span className="text-[#ffbe30] mr-2">CATERING</span>
              <span className="font-normal tracking-wide">SERVICES</span>
            </p>
          </div>
        </div>

        <div className="flex justify-center items-center gap-x-3 lg:-mt-16 -mt-10 text-white ">
          <Link
            to="/"
            className="text-lg"
            data-aos="fade-right"
            data-aos-duration="2500"
          >
            Home
          </Link>
          <span>|</span>
          <Link
            to="/contact-us"
            className="text-lg"
            data-aos="fade-left"
            data-aos-duration="2500"
          >
            Contact Us
          </Link>
        </div>
      </div>

      {/* catering services */}
      <div className="grid lg:grid-cols-4 grid-cols-1 lg:gap-y-5 gap-y-2  lg:py-20 py-6 lg:mx-40">
        {catering.map((service, index) => (
          <div
            key={index}
            className=" relative hvr"
            data-aos="flip-right"
            data-aos-duration="2000"
          >
            <div className="flex justify-center">
              <div class="w-72 max-w-full bg-white cursor-pointer">
                <div class="w-full h-48">
                  <img
                    src={service.img}
                    class="w-full hover:scale-110 duration-500"
                    alt=""
                  />
                </div>
                <div class="-mt-5">
                  <h5 class="text-lg font-medium text-amber-500">
                    {service.name}
                  </h5>
                  <div className="text-gray-500">
                    <p class="mt-2">● {service.details.a}</p>
                    <p class="mt-2">● {service.details.b}</p>
                    <p class="mt-2">● {service.details.c}</p>
                    {service.details?.d && (
                      <p class="mt-2">● {service.details?.d}</p>
                    )}
                  </div>
                  {/* 
                                    <div className="absolute top-0 left-[2rem] right-[2rem] bottom-0 bg-transparent cld">
                                            <BsPlusLg className="text-8xl text-white absolute top-[calc(50%-48px)] left-[calc(50%-48px)] pls" />
                                        </div> */}
                </div>
              </div>
            </div>

            {/* <div className="mt-8">
                        <p className="left-position uppercase text-gray-400 font-bold hover:text-[#ffbe30] tracking-[5px] cld2">
                            eventy catering
                        </p>
                    </div> */}
          </div>
        ))}
      </div>

      {/* catering speciality */}
      <div className="lg:py-20 bg-gray-100 ">
        <div className="grid lg:flex justify-center gap-x-6">
          <div className="lg:w-4/12 flex justify-center items-center">
            <img
              src="https://i.ibb.co/kmPhM6S/ct.jpg"
              alt=""
              className="h-80"
              data-aos="flip-down"
              data-aos-duration="2000"
            />
          </div>

          <div className="lg:w-4/12 px-3 lg:px-0 py-10 lg:py-0">
            <p
              className="uppercase text-3xl font-semibold"
              data-aos="fade-left"
              data-aos-duration="2000"
            >
              {" "}
              <span className="text-amber-400 tracking-widest">
                eventy
              </span>{" "}
              SPECIALTY CATERING
            </p>
            <p
              className="py-8"
              data-aos="fade-left"
              data-aos-delay="200"
              data-aos-duration="2000"
            >
              We use Fine China, Specialty Linens, and other expertise to
              deliver a top notch event catering. Passed Hors D’oeuvres, plated
              dinners and buffets are one of many options we offer our clients.
              We incorporate client branding throughout the catered cuisine. Our
              caterers use only the freshest ingredients and offerings include
              Vegetarian Catering, Vegan Catering and other specialty catering
              services. CBD menus can also be customized to accommodate
              international, indigenous cuisine.
            </p>
            <div className="flex justify-end">
              <img
                src="https://i.ibb.co/MRXgQwx/eventy-signature.png"
                alt=""
                className=""
                data-aos="flip-down"
                data-aos-duration="2000"
              />
            </div>
          </div>
        </div>
      </div>

      {/* confession */}
      <div className="py-10 lg:pt-24">
        <div className="flex justify-center lg:-mb-5">
          <p
            className="lg:text-3xl font-bold px-2 text-center"
            data-aos="zoom-in"
            data-aos-duration="2000"
          >
            <span className="text-amber-400 tracking-widest mr-2">HEALTHY</span>
            EATING AND
            <span className="text-amber-400 tracking-widest mr-2">
              {" "}
              VEGETARIAN
            </span>
            OPTIONS
          </p>
        </div>

        <div className="lg:flex justify-center items-center gap-x-7 lg:h-80 pt-5 lg:pt-0">
          <div className="lg:w-4/12 px-3 lg:px-0">
            <p
              className="lg:tracking-[5px] font-semibold"
              data-aos="zoom-in"
              data-aos-duration="2000"
            >
              VEGETARIAN AND VEGAN MEAL PREPARATION
            </p>
            <p className="mt-5" data-aos="zoom-in" data-aos-duration="2000">
              Sometimes it is difficult to be at a swanky event and the only
              meal available to vegetarians and vegans are steamed veggies. We
              can prepare flavorful vegetarian meals with 3 – 4 options. We can
              even provide certified organic ingredients for a nominal fee.
            </p>
          </div>
          <div className="grid gap-y-3 lg:w-4/12 mt-6 lg:mt-0 px-3 lg:px-0">
            <p
              className="bg-amber-400 p-2 text-gray-600"
              data-aos="flip-down"
              data-aos-duration="2000"
            >
              Vegan Menus (No Animal Flesh, Milk, Wheat or Eggs)
            </p>
            <p
              className="bg-amber-400 p-2 text-gray-600"
              data-aos="flip-down"
              data-aos-duration="2000"
            >
              Vegetarian (No Meat, Vegetables, Eggs, Milk, Wheat or Soy)
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Catering;
