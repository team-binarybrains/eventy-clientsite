import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faMicrophone,
  faMicrophoneAlt,
  faCakeCandles,
  faMusic,
  faSquareCheck,
  faClock,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { BsPlusLg } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import Singleblog from "./SingleBlog/Singleblog";
import useBlogs from "../../Hooks/useBlogs";
const Blogs = () => {
  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);
  const [show3, setShow3] = useState(false);
  const [show4, setShow4] = useState(false);
  const navigate = useNavigate();
  const [blogs] = useBlogs();
  return (
    <div className=" flex flex-col lg:max-w-7xl lg:mx-auto lg:p-12    lg:flex-row lg:ml-56  mt-10 mb-20">
      <div className="  2xl:mx-auto  px-4 lg:px-20  md:px-6 ">
        <div className="mx-auto lg:mx-0 h-[3px] w-[70px] bg-[#ffbe30] mb-5 pr-5"></div>
        <h2 className=" font-semibold lg:text-[18px] text-3xl lg:ml-5 lg:leading-9 md:leading-7 leading-9 text-[#878787]">
          FIND YOUR ANSWER
        </h2>
        <h2 className="mt-5 font-semibold lg:text-[48px] text-3xl lg:ml-5 lg:leading-9 md:leading-7 leading-9 text-gray-800">
          Ask & Questions
        </h2>
        <div className="mt-4 flex md:justify-between md:items-start md:flex-row flex-col justify-start items-start"></div>
        <div className=" flex justify-center md:flex-row flex-col md:space-x-8 md:mt-16 mt-8">
          <div className=" md:w-7/12 lg:w-6/12 w-full md:mt-0 sm:mt-14 mt-10">
            {/* <!-- Shipping Section --> */}
            <div className="lg:w-[550px]">
              <div className=" flex justify-between items-center cursor-pointer">
                <h3 className=" font-semibold text-xl leading-5 text-gray-800">
                  How to join Eventy Event Management?
                </h3>
                <button
                  aria-label="too"
                  className="cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800"
                  onClick={() => setShow(!show)}
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      className={show ? "hidden" : "block"}
                      d="M10 4.1665V15.8332"
                      stroke="#1F2937"
                      strokeWidth="1.25"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M4.16602 10H15.8327"
                      stroke="#1F2937"
                      strokeWidth="1.25"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>

              <p
                className={
                  "font-normal text-base leading-6 text-gray-600 mt-4 w-11/12 " +
                  (show ? "block" : "hidden")
                }
              >
                <span className="font-bold text-[20px] text-[#ffbe30]">
                  Answer:
                </span>{" "}
                <br />
                Bring people together, or turn your passion into a business.
                Harmoni gives you everything you need to host your best event
                yet. lorem ipsum diamet.
              </p>
            </div>

            <hr className=" my-7 bg-gray-200 lg:w-[550px]" />

            {/* <!-- Returns Section --> */}

            <div className="lg:w-[550px]">
              <div className="  flex justify-between items-center cursor-pointer">
                <h3 className=" font-semibold text-xl leading-5 text-gray-800">
                  How to make my own event?
                </h3>
                <button
                  aria-label="too"
                  className=" cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800"
                  onClick={() => setShow2(!show2)}
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      className={show2 ? "hidden" : "block"}
                      d="M10 4.1665V15.8332"
                      stroke="#1F2937"
                      strokeWidth="1.25"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M4.16602 10H15.8327"
                      stroke="#1F2937"
                      strokeWidth="1.25"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>
              <p
                className={
                  "font-normal text-base leading-6 text-gray-600 mt-4 w-11/12 " +
                  (show2 ? "block" : "hidden")
                }
              >
                <span className="font-bold text-[20px] text-[#ffbe30]">
                  Answer:
                </span>{" "}
                <br />
                Bring people together, or turn your passion into a business.
                Harmoni gives you everything you need to host your best event
                yet. lorem ipsum diamet.
              </p>
            </div>

            <hr className=" my-7 bg-gray-200 lg:w-[550px]" />

            {/* <!-- Exchange Section --> */}

            <div className="lg:w-[550px]">
              <div className=" flex justify-between items-center cursor-pointer">
                <h3 className=" font-semibold text-xl leading-5 text-gray-800">
                  About the price to make new event?
                </h3>
                <button
                  aria-label="too"
                  className=" cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800"
                  onClick={() => setShow3(!show3)}
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      className={show3 ? "hidden" : "block"}
                      d="M10 4.1665V15.8332"
                      stroke="#1F2937"
                      strokeWidth="1.25"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M4.16602 10H15.8327"
                      stroke="#1F2937"
                      strokeWidth="1.25"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>
              <p
                className={
                  "font-normal text-base leading-6 text-gray-600 mt-4 w-11/12 " +
                  (show3 ? "block" : "hidden")
                }
              >
                <span className="font-bold text-[20px] text-[#ffbe30]">
                  Answer:
                </span>{" "}
                <br />
                Bring people together, or turn your passion into a business.
                Harmoni gives you everything you need to host your best event
                yet. lorem ipsum diamet.
              </p>
            </div>

            <hr className=" my-7 bg-gray-200 lg:w-[550px]" />

            {/* Tracking Section */}

            <div className="lg:w-[550px]">
              <div className=" flex justify-between items-center cursor-pointer">
                <h3 className=" font-semibold text-xl leading-5 text-gray-800">
                  About the price to make new event?
                </h3>
                <button
                  aria-label="too"
                  className="  cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800"
                  onClick={() => setShow4(!show4)}
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      className={show4 ? "hidden" : "block"}
                      d="M10 4.1665V15.8332"
                      stroke="#1F2937"
                      strokeWidth="1.25"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M4.16602 10H15.8327"
                      stroke="#1F2937"
                      strokeWidth="1.25"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>
              <p
                className={
                  "font-normal text-base leading-6 text-gray-600 mt-4 w-11/12 " +
                  (show4 ? "blcok" : "hidden")
                }
              >
                <span className="font-bold text-[20px] text-[#ffbe30]">
                  Answer:
                </span>{" "}
                <br />
                Bring people together, or turn your passion into a business.
                Harmoni gives you everything you need to host your best event
                yet. lorem ipsum diamet.
              </p>
            </div>

            <hr className=" my-7 bg-gray-200 lg:w-[550px]" />
          </div>
        </div>
      </div>
      <div className=" md:w-5/12 lg:w-1/2 w-full lg:ml-20">
        <div>
          <div className="mx-auto lg:mx-0 h-[3px] w-[70px] bg-[#ffbe30] mb-5 lg:mr-[-6px]"></div>
          <h2 className="text-center lg:text-start lg:ml-5 font-semibold lg:text-[18px] text-3xl lg:leading-9 md:leading-7 leading-9 text-[#878787]">
            OUR BLOG
          </h2>
          <h2 className="text-center mt-5 font-semibold lg:ml-5 lg:text-start lg:text-[48px] text-3xl lg:leading-9 md:leading-7 leading-9 text-gray-800">
            Latest News
          </h2>
        </div>
        <div className="lg:mt-16  mt-5">
          {blogs?.slice(0, 2)?.map((item) => (
            <Singleblog item={item} key={item._id}></Singleblog>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blogs;
