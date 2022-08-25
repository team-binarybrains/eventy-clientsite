import React from "react";
import { GiShakingHands } from "react-icons/gi";
import { GiBalloons } from "react-icons/gi";
import { FaGlassCheers, FaUserFriends } from "react-icons/fa";
import { FiFilm } from "react-icons/fi";
import { FiPhoneCall } from "react-icons/fi";
import { HiLightBulb } from "react-icons/hi";
import { BsLayoutTextWindowReverse } from "react-icons/bs";
import { Link } from "react-router-dom";

function Advantage() {
  return (
    <div className="bg-gray-100 pb-28">
      <div className="pt-20">
        <div className="flex lg:justify-around justify-center">
          <div className="border-t-4 w-[60px] lg:-ml-56  border-[#ffbe30] ">
            <p className=""></p>
          </div>
          <div></div>
        </div>

        <div className="lg:-mt-12 lg:flex lg:justify-around">
          <div className="mt-12 lg:-ml-28 text-center lg:text-start">
            <h1 className=" uppercase my-5 text-gray-400 lg:text-[20px] text-[15px] tracking-[10px]"
            data-aos="fade-right"
            data-aos-duration="2000"
            >
              WHY CHOOSE US
            </h1>
            <h1 className="lg:text-4xl text-2xl  uppercase title_line"
            data-aos="fade-right"
            data-aos-duration="2000"
            >
              <span className="mr-4">Eventy</span>{" "}
              <span className="font-bold -ml-2">Advantages</span>
            </h1>
          </div>

          <div className="flex items-end justify-center lg:-mr-28 ">
            <Link to="/ourteam">
              {" "}
              <div className=""
              data-aos="fade-left"
              data-aos-duration="2000"
              >
                <button className="uppercase bg-gradient-to-r from-[#ffbe30] to-amber-600 px-6 py-3 text-white font-semibold tracking-wider rounded-full lg:-ml-40 mt-10 lg:mt-0 mb-5 lg:mb-0">
                  meet my team
                </button>
              </div>
            </Link>
          </div>
        </div>
      </div>

      <div className="grid justify-center pb-10 lg:py-20 lg:-mt-14">
        <div className="lg:flex">

          <div className="h-[280px] w-[320px] border grid items-center justify-center bg-white hover:bg-gradient-to-r from-[#ffbe30] to-[#ff3e00] hover:text-white"
          data-aos="flip-right"
          data-aos-duration="2000"
          >
            <p className={`flex justify-center`}>
              <GiShakingHands
                className={`text-5xl text-[#ffbe30] hover:text-white `}
              />
            </p>
            <div className="-mt-16 px-3">
              <p className={`text-center text-lg font-bold`}>Friendly Team</p>
              <p className="text-center text-sm text-gray-500 hover:text-white">
                More than 200 teams
              </p>
            </div>
          </div>

          <div className="h-[280px] w-[320px] border grid items-center justify-center bg-white hover:bg-gradient-to-r from-[#ffbe30] to-[#ff3e00] hover:text-white"
          data-aos="flip-right"
          data-aos-duration="2000"
          >
            <p className="flex justify-center">
              <GiBalloons className="text-5xl text-[#ffbe30]" />
            </p>
            <div className="-mt-16 px-3 ">
              <p className="text-center text-lg font-bold">Perfact Vanues</p>
              <p className="text-center text-sm text-gray-500 hover:text-white">
                Perfact Vanues
              </p>
            </div>
          </div>

          <div className="h-[280px] w-[320px] border grid items-center justify-center bg-white hover:bg-gradient-to-r from-[#ffbe30] to-[#ff3e00] hover:text-white"
          data-aos="flip-right"
          data-aos-duration="2000"
          >
            <p className="flex justify-center">
              <FaGlassCheers className="text-5xl text-[#ffbe30]" />
            </p>
            <div className="-mt-16 px-3">
              <p className="text-center text-lg font-bold">Unique Scenario</p>
              <p className="text-center text-sm text-gray-500 hover:text-white">
                We thinking out of the box
              </p>
            </div>
          </div>

          <div className="h-[280px] w-[320px] border grid items-center justify-center bg-white hover:bg-gradient-to-r from-[#ffbe30] to-[#ff3e00] hover:text-white"
          data-aos="flip-right"
          data-aos-duration="2000"
          >
            <p className="flex justify-center">
              <BsLayoutTextWindowReverse className="text-5xl text-[#ffbe30]" />
            </p>
            <div className="-mt-16 px-3">
              <p className="text-center text-lg font-bold">Planing Support</p>
              <p className="text-center text-sm text-gray-500 hover:text-white">
                Get event planing support
              </p>
            </div>
          </div>
        </div>

        <div className="lg:flex">
          <div className="h-[280px] w-[320px] border grid items-center justify-center bg-white hover:bg-gradient-to-r from-[#ffbe30] to-[#ff3e00] hover:text-white"
          data-aos="flip-right"
          data-aos-duration="2000"
          >
            <p className="flex justify-center">
              <FiFilm className="text-5xl text-[#ffbe30] hover:text-white" />
            </p>
            <div className="-mt-16 px-3">
              <p className="text-center text-lg font-bold">
                Unforgettable Time
              </p>
              <p className="text-center text-sm text-gray-500 hover:text-white">
                We make you perfect event
              </p>
            </div>
          </div>

          <div className="h-[280px] w-[320px] border grid items-center justify-center bg-white hover:bg-gradient-to-r from-[#ffbe30] to-[#ff3e00] hover:text-white"
          data-aos="flip-right"
          data-aos-duration="2000"
          >
            <p className=" flex justify-center">
              <FiPhoneCall className="text-5xl text-[#ffbe30] hover:text-white" />
            </p>
            <div className="-mt-16 px-3">
              <p className="text-center text-lg font-bold">
                24/7 Hours Support
              </p>
              <p className="text-center text-sm text-gray-500 hover:text-white">
                Anytime anywhere
              </p>
            </div>
          </div>

          <div className="h-[280px] w-[320px] border grid items-center justify-center bg-white hover:bg-gradient-to-r from-[#ffbe30] to-[#ff3e00] hover:text-white"
          data-aos="flip-right"
          data-aos-duration="2000"
          >
            <p className="flex justify-center">
              <HiLightBulb className="text-5xl text-[#ffbe30] hover:text-white" />
            </p>
            <div className="-mt-16 px-3">
              <p className="text-center text-lg font-bold">Briliant Idea</p>
              <p className="text-center text-sm text-gray-500 hover:text-white">
                We have million idea
              </p>
            </div>
          </div>

          <div className="h-[280px] w-[320px] border grid items-center justify-center bg-white hover:bg-gradient-to-r from-[#ffbe30] to-[#ff3e00] hover:text-white"
          data-aos="flip-right"
          data-aos-duration="2000"
          >
            <p className="flex justify-center">
              <FaUserFriends className="text-5xl text-[#ffbe30]" />
            </p>
            <div className="-mt-16 px-3">
              <p className="text-center text-lg font-bold">Best Management</p>
              <p className="text-center text-sm text-gray-500 hover:text-white">
                anytime anywhere
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Advantage;
