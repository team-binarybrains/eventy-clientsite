import React from "react";
import { BsPlusLg } from "react-icons/bs";
import { Link } from "react-router-dom";
import useFetch from "../../Home/OurServices/Hook/useFetch";

function Logistics() {
  const logisticServices = useFetch(
    `https://eventy-serversite-production.up.railway.app/get-sub-services/logistic`
  );

  const promotionServices = useFetch(
    `https://eventy-serversite-production.up.railway.app/get-sub-services/promotion`
  );

  return (
    <div className="route">
      <div className=" p-3 bg-image lg:h-[340px] h-[200px] banner-background">
        <div className="flex justify-center items-center h-full lg:-mt-8">
          <div className="text-white text-center">
            <p className="tracking-[8px]">ALL YOU NEED TO KNOW</p>
            <p className="text-4xl text-center font-bold my-3">
              <span className="text-[#ffbe30] mr-2">
                LOGISTICS AND REGISTRATION
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
              src="https://i.ibb.co/BBskSqc/world-tour-2017-highlights.jpg"
              alt=""
              className="h-96"
            />
          </div>

          <div className="lg:w-4/12 px-3 lg:px-0 py-10 lg:py-0">
            <p className="uppercase text-3xl font-semibold">
              EVENTY EVENT PLANNING <br />
              <span className="text-amber-400 tracking-widest mr-2">
                LOGISTICS
              </span>
              AND
              <span className="text-amber-400 tracking-widest ml-2">
                REGISTRATION
              </span>
            </p>

            <p className="py-8">
              We plan events in Washington, and nationally in Atlanta, New York,
              Los Angeles, Miami, Atlanta and Chicago. We manage transportation,
              venue negotiation, logistics, registration, destination
              management, hotel rooms, security and offer a customized
              experience for your organization. Our event planning logistics and
              registration services can meet the needs of any size conference,
              convention or meeting. We also handle logistics for social events,
              fundraisers and political events.
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

      {/* ----------------------- */}
      <div className="lg:pt-20">
        <div className="flex justify-center lg:-mb-5">
          <p className="text-3xl font-bold ">
            EVENTY
            <span className="text-amber-400 tracking-widest mx-2">
              REGISTRATION{" "}
            </span>
            CAPABILITIES
          </p>
        </div>

        <div className="grid lg:grid-cols-3 grid-cols-1 gap-y-20 lg:py-20 py-6 lg:mx-40">
          {logisticServices.map((service, index) => (
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

      {/* ------------------ */}
      <div className="bg-gray-100 py-20">
        <div className="grid justify-center ">
          <p className="text-3xl font-bold text-center">
            <span className="text-amber-400 tracking-widest mx-2">
              {" "}
              PROMOTING YOUR BRAND{" "}
            </span>
            IS OUR BUSINESS
          </p>
          <p className="py-2 text-gray-500 lg:w-6/12 text-center mx-auto">
            At EVENTY, we understand the power of branding, messaging and
            winning your target audience. The process is not as simple as
            distributing business cards or giving away corporate swag, We switch
            things up a bit. We use the capabilities of a full service marketing
            and public relations firm to ensure that we get it right…. the FIRST
            TIME. Branding is incorporated in everything we do and rest assured
            each client is well represented.
          </p>
        </div>
      </div>

      {/* ------------- */}

      <div>
        <div className="grid lg:grid-cols-4 grid-cols-1 gap-y-20 lg:py-10 py-6 lg:mx-40">
          {promotionServices.map((service, index) => (
            <div
              key={index}
              className="flex justify-center items-center relative hvr"
            >
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

      {/* confession */}
      <div className="lg:py-20 bg-gray-100">
        <div className="flex justify-center lg:mb-7">
          <p className="text-3xl font-bold ">
            FULL SERVICE
            <span className="text-amber-400 tracking-widest mx-2">
              MARKETING
            </span>
            AND
            <span className="text-amber-400 tracking-widest ml-2">
              PUBLIC RELATIONS
            </span>
          </p>
        </div>

        <div className="lg:flex justify-center items-center gap-x-7 lg:h-80">
          <div className="lg:w-4/12 px-3 lg:px-0">
            <p className="lg:tracking-[5px] font-semibold">
              MARKETING AND PUBLIC RELATIONS SOLUTIONS
            </p>
            <p className="mt-5">
              Through our partner, The Communications Agency (TCA PR), we can
              provide global branding solutions to marketing communications and
              public relations. TCA is an award winning, full-service consulting
              firm delivering Public relations, Specialized Marketing
              Communications, Business Development and International Relations
              for Corporations, Governments, Food and Beverage, Healthcare,
              Energy, Policy / Advocacy, and Consumers. We partner with TCA to
              deliver marketing solutions that grow client’s business and solve
              their most complicated needs. TCA public relations and marketing
              services are designed specifically to help nongovernmental
              organizations (NGO), nonprofits and small businesses at a
              reasonable market-competitive prices.
            </p>
          </div>
          <div className="grid gap-y-3 lg:w-4/12 mt-6 lg:mt-0 px-3 lg:px-0">
            <p className="bg-amber-400 p-2 text-gray-600">
              PRINTED PROMOTIONAL PRODUCTS (i.e. Giveaways)
            </p>
            <p className="bg-amber-400 p-2 text-gray-600">
              LARGE FORMAT SIGNAGE (i.e. BANNERS, POSTERS, SIGNAGE)
            </p>
            <p className="bg-amber-400 p-2 text-gray-600">
              LITERATURE, PAMPHLET & BROCHURE DESIGN
            </p>
            <p className="bg-amber-400 p-2 text-gray-600">
              CUSTOM BRANDED GIFTS BAGS AND APPAREL
            </p>
            <p className="bg-amber-400 p-2 text-gray-600">
              ADVERTISING ONLINE AND IN PRINT
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Logistics;
