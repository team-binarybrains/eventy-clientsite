import React from "react";
import { BsPlusLg } from "react-icons/bs";
import { Link } from "react-router-dom";
import useFetch from "../../Home/OurServices/Hook/useFetch";

function Destination() {
  const destinationServics = useFetch(
    `https://eventy-serversite-production.up.railway.app/get-sub-services/destination`
  );

  return (
    <div className="route">
      <div className=" p-3 bg-image lg:h-[340px] h-[200px] banner-background">
        <div className="flex justify-center items-center h-full lg:-mt-8">
          <div className="text-white text-center">
            <p className="tracking-[8px]">ALL YOU NEED TO KNOW</p>
            <p className="text-4xl text-center font-bold my-3">
              <span className="text-[#ffbe30] mr-2">
                DESTINATION MANAGEMENT
              </span>
              <span className="font-normal tracking-wide">SERVICES</span>
            </p>
          </div>
        </div>

        <div className="flex justify-center items-center gap-x-3 lg:-mt-16 -mt-10 text-white ">
          <Link to="/" className="text-lg">
            Home
          </Link>
          <span>|</span>
          <Link to="/contact-us" className="text-lg">
            Contact Us
          </Link>
        </div>
      </div>

      {/* -------------- */}

      <div className="lg:py-20 bg-gray-100 ">
        <div className="grid lg:flex justify-center gap-x-6">
          <div className="lg:w-4/12 flex justify-center items-center">
            <img
              src="https://i.ibb.co/W6x98Gs/bdes.jpg"
              alt=""
              className="h-96"
            />
          </div>

          <div className="lg:w-4/12 px-3 lg:px-0 py-10 lg:py-0">
            <p className="uppercase text-3xl font-semibold">
              {" "}
              <span className="text-amber-400 tracking-widest mr-2">
                DESTINATION
              </span>
              MANAGEMENT SERVICES
            </p>
            <p className="py-8">
              Eventy destination Management services include: tourism planning,
              transportation, PRIVATE security details, hotel accommodation,
              restaurants, activities, excursions, conference venues, themed
              events, gala dinners and logistics, meetings, incentive schemes as
              well as helping with overcoming language barriers. We utilize a
              structured tour model or a small group luxury tour model that is
              personal and catered to our corporate executives and dignitaries.
              All of our tours include welcome gifts and some of the most
              beloved souvenirs from the venues. To provide unparalleled event
              management solutions while providing our valued clients with a
              unique, customized experience that fully captures the essence of
              Wine Country. We also offer destination design services in the
              greater San Francisco-Bay Area upon request.
            </p>
            <div className="flex justify-end">
              <img
                src="https://i.ibb.co/MRXgQwx/eventy-signature.png"
                alt=""
                className=""
              />
            </div>
          </div>
        </div>
      </div>

      {/* --------------- */}
      <div className="lg:py-20">
        <div className="grid justify-center lg:-mb-5 ">
          <p className="text-3xl font-bold text-center">
            THE EVENTY EXPERIENCE:
            <span className="text-amber-400 tracking-widest mx-2">
              {" "}
              DESTINATION DC
            </span>
          </p>
          <p className="py-2 text-gray-500 lg:w-6/12 text-center mx-auto">
            Every key player in the world has or is planning to visit
            Washington, DC. Home to the United States’ most prized artifacts,
            Washington’s most popular attractions include: The Washington
            Monument, Lincoln Memorial, The National Archives (Home of the
            Constitution and Declaration of Independence), the Smithsonian
            collection of Museums, and most importantly our Veteran Memorials,
            the US Capitol, House of Representatives and our beloved White
            House. In addition, Washington and the Metropolitan area boast
            numerous historic hotels, entertainment venues, parks and more.
          </p>
        </div>

        {/* ----------------------- */}

        <div className="grid lg:grid-cols-3 grid-cols-1 gap-y-20 lg:py-20 py-6 lg:mx-40">
          {destinationServics.map((service, index) => (
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
                  <div className="text-gray-500">
                    <p class="mt-2">● {service.details.a}</p>
                    <p class="mt-2">● {service.details.b}</p>
                    <p class="mt-2">● {service.details.c}</p>
                    {service.details?.d && (
                      <p class="mt-2">● {service.details?.d}</p>
                    )}
                  </div>

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

export default Destination;
