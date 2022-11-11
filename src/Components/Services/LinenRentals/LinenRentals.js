import React from "react";
import { BsPlusLg } from "react-icons/bs";
import { Link } from "react-router-dom";
import useFetch from "../../Home/OurServices/Hook/useFetch";

function LinenRentals() {
  const linen = useFetch(
    `https://eventy-serversite-production.up.railway.app/get-sub-services/linen`
  );

  return (
    <div className="route">
      <div className=" p-3 bg-image lg:h-[340px] h-[200px] banner-background">
        <div className="flex justify-center items-center h-full lg:-mt-8">
          <div
            className="text-white text-center"
            data-aos="zoom-in"
            data-aos-duration="2500"
          >
            <p className="tracking-[8px]">ALL YOU NEED TO KNOW</p>
            <p className="text-4xl text-center font-bold my-3">
              <span className="text-[#ffbe30] mr-2">EVENT LINEN RENTALS</span>
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

      {/* -------------- */}

      <div className="lg:py-20 bg-gray-100 ">
        <div className="grid lg:flex justify-center gap-x-6">
          <div className="lg:w-4/12 flex justify-center items-center">
            <img
              src="https://i.ibb.co/X3p2bgj/reserved-186321-1920-500x550.jpg"
              alt=""
              className="h-96"
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
              EVENT{" "}
              <span className="text-amber-400 tracking-widest">
                LINENS AND TABLEWARE
              </span>
            </p>
            <p
              className="py-8"
              data-aos="fade-left"
              data-aos-delay="200"
              data-aos-duration="2000"
            >
              We have a wide variety of linens available to suit any event. Our
              basic linen stock is extensive in both size and color. We also
              carry a good range of specialty linens to suit different tastes.
              In addition to linens, we offer some basic items of glassware,
              chargers and plates for rental. We do not hold a large stock of
              these table items so we are more suited to catering for small
              events. We have party linens, tablecloths, chair covers, standard
              fabrics, deluxe fabrics, silks, satin, cotton and more. Select
              Your Linens for your Next Event. Rentals as low as $25.00. You can
              purchase linens in our online store Gifted Chocolate along with
              other event decor, tableware, gifts and party favors.
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

      {/* ---------------- */}

      <div className="lg:py-20">
        <div className="grid justify-center lg:-mb-5">
          <p className="text-3xl font-bold text-center">
            <span className="text-amber-400 tracking-widest mx-2">EVENT</span>
            LINENS
          </p>
          <p className="py-2 text-gray-500">
            Rental Linens for Special Events, Weddings and Meetings
          </p>
        </div>

        <div className="grid lg:grid-cols-3 grid-cols-1 gap-y-20 lg:py-20 py-6 lg:mx-40">
          {linen.map((service, index) => (
            <div key={index} className="flex justify-center relative hvr">
              <div class="w-72 max-w-full bg-white cursor-pointer">
                <div class="w-full h-48">
                  <img
                    src={service.img}
                    class="w-full h-40 object-cover hover:scale-110 duration-500"
                    alt=""
                  />
                </div>
                <div class="-mt-5">
                  <h5 class="text-lg font-medium text-amber-500">
                    {service.name}
                  </h5>
                  {/* <div className='text-gray-500'>
                                        <p class="mt-2">● {service.details.a}</p>
                                        <p class="mt-2">● {service.details.b}</p>
                                        <p class="mt-2">● {service.details.c}</p>
                                        {service.details?.d &&
                                            <p class="mt-2">● {service.details?.d}</p>
                                        }
                                    </div> */}

                  {/* <div className="absolute top-0 left-[5.6rem] right-[5.6rem] bottom-0 bg-transparent cld">
                                            <BsPlusLg className="text-8xl text-white absolute top-[calc(50%-48px)] left-[calc(50%-48px)] pls" />
                                        </div> */}
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
      </div>
    </div>
  );
}

export default LinenRentals;
