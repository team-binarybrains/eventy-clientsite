import React from "react";
import { BsPlusLg } from "react-icons/bs";
import { Link } from "react-router-dom";
import useFetch from "../../Home/OurServices/Hook/useFetch";

function Audiovisual() {
  const visual = useFetch(
    `https://eventy-serversite-production.up.railway.app/get-sub-services/audiovisual`
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
              <span className="text-[#ffbe30] mr-2">AUDIOVISUAL</span>
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

      <div className="lg:py-20 bg-gray-100 ">
        <div className="grid lg:flex justify-center gap-x-6">
          <div className="lg:w-4/12 flex justify-center items-center">
            <img
              src="https://i.ibb.co/HBjW6BD/adv.jpg"
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
              AUDIOVISUAL
            </p>
            <p
              className="py-8"
              data-aos="fade-left"
              data-aos-delay="200"
              data-aos-duration="2000"
            >
              Through our Public Relations partner, we manage speeches,
              delivery, audiovisual, presentations for small and large meetings.
              We support: PowerPoint presentations, Webinars, Skype, Digital and
              Social Media. We have managed events from conceptualization to
              completion for several historical and highly publicized events.
              Our event planning logistics and registration services can meet
              the needs of any size conference, convention or meeting. We also
              handle logistics for social events, fundraisers and political
              events.
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

      <div className="lg:py-20">
        <div className="flex justify-center lg:-mb-5">
          <p
            className="text-3xl font-bold "
            data-aos="zoom-in"
            data-aos-duration="2000"
          >
            <span className="text-amber-400 tracking-widest mr-2">EVENTY</span>
            AUDIOVISUAL SERVICES
          </p>
        </div>

        <div className="grid lg:grid-cols-3 grid-cols-1 gap-y-5 py-20 lg:mx-40">
          {visual.map((service, index) => (
            <div
              key={index}
              className="flex justify-center relative hvr"
              data-aos="flip-right"
              data-aos-duration="2000"
            >
              {service.type === "audiovisual" && (
                <div class="w-72 max-w-full bg-white cursor-pointer">
                  <div class="w-full h-48">
                    <img
                      src={service.img}
                      class="w-full h-40 object-cover hover:scale-110 duration-500"
                      alt=""
                    />
                  </div>
                  <div class="-mt-5">
                    {/* <h5 class="text-lg font-medium text-amber-500">{service.name}</h5> */}
                    <div className="text-gray-500">
                      <p class="mt-2">● {service.details.a}</p>
                      <p class="mt-2">● {service.details.b}</p>
                      <p class="mt-2">● {service.details.c}</p>
                      <p class="mt-2">● {service.details?.d}</p>
                    </div>

                    {/* <div className="absolute top-0 left-[5.6rem] right-[5.6rem] bottom-0 bg-transparent cld">
                                            <BsPlusLg className="text-8xl text-white absolute top-[calc(50%-48px)] left-[calc(50%-48px)] pls" />
                                        </div> */}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Audiovisual;
