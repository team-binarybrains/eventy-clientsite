import React, { useState } from "react";
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
const Blogs = () => {
  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);
  const [show3, setShow3] = useState(false);
  const [show4, setShow4] = useState(false);
  return (
    <div className="flex flex-col   lg:flex-row lg:ml-56  mt-10 mb-20">
      <div className="  2xl:mx-auto  px-4 lg:px-20  md:px-6 ">
        <h2 className=" font-semibold lg:text-[18px] text-3xl lg:leading-9 md:leading-7 leading-9 text-[#878787]">
          FIND YOUR ANSWER
        </h2>
        <h2 className="mt-5 font-semibold lg:text-[48px] text-3xl lg:leading-9 md:leading-7 leading-9 text-gray-800">
          Ask & Questions
        </h2>
        <div className="mt-4 flex md:justify-between md:items-start md:flex-row flex-col justify-start items-start">
          {/* <div className=" ">
            <p className=" font-normal text-base leading-6 text-gray-600 lg:w-8/12 md:w-9/12 ">
              Here are few of the most frequently asked questions by our
              valueable customers
            </p>
          </div> */}
        </div>
        <div className=" flex justify-center md:flex-row flex-col md:space-x-8 md:mt-16 mt-8">
          <div className=" md:w-7/12 lg:w-6/12 w-full md:mt-0 sm:mt-14 mt-10">
            {/* <!-- Shipping Section --> */}
            <div className="lg:w-[550px]">
              <div className=" flex justify-between items-center cursor-pointer">
                <h3 className=" font-semibold text-xl leading-5 text-gray-800">
                  Shipping
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
                We are covering every major country worldwide. The shipment
                leaves from US as it is our headquarter. Some extra information
                you probably need to add here so that the customer is clear of
                their wanted expectations.
              </p>
            </div>

            <hr className=" my-7 bg-gray-200 lg:w-[550px]" />

            {/* <!-- Returns Section --> */}

            <div className="lg:w-[550px]">
              <div className="  flex justify-between items-center cursor-pointer">
                <h3 className=" font-semibold text-xl leading-5 text-gray-800">
                  Returns
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
                We are covering every major country worldwide. The shipment
                leaves from US as it is our headquarter. Some extra information
                you probably need to add here so that the customer is clear of
                their wanted expectations.
              </p>
            </div>

            <hr className=" my-7 bg-gray-200 lg:w-[550px]" />

            {/* <!-- Exchange Section --> */}

            <div className="lg:w-[550px]">
              <div className=" flex justify-between items-center cursor-pointer">
                <h3 className=" font-semibold text-xl leading-5 text-gray-800">
                  Exchange
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
                We are covering every major country worldwide. The shipment
                leaves from US as it is our headquarter. Some extra information
                you probably need to add here so that the customer is clear of
                their wanted expectations.
              </p>
            </div>

            <hr className=" my-7 bg-gray-200 lg:w-[550px]" />

            {/* Tracking Section */}

            <div className="lg:w-[550px]">
              <div className=" flex justify-between items-center cursor-pointer">
                <h3 className=" font-semibold text-xl leading-5 text-gray-800">
                  Tracking
                </h3>
                <button
                  aria-label="too"
                  className=" cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800"
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
                We are covering every major country worldwide. The shipment
                leaves from US as it is our headquarter. Some extra information
                you probably need to add here so that the customer is clear of
                their wanted expectations.
              </p>
            </div>

            <hr className=" my-7 bg-gray-200 lg:w-[550px]" />
          </div>
        </div>
      </div>
      <div className=" md:w-5/12 lg:w-1/2 w-full lg:ml-20">
        <div>
          <h2 className="text-center lg:text-start font-semibold lg:text-[18px] text-3xl lg:leading-9 md:leading-7 leading-9 text-[#878787]">
            OUR BLOG
          </h2>
          <h2 className="text-center mt-5 font-semibold lg:text-start lg:text-[48px] text-3xl lg:leading-9 md:leading-7 leading-9 text-gray-800">
            Latest News
          </h2>
        </div>
        <div className="flex flex-col items-center  mt-5 lg:flex-row lg:mt-16">
          <div className="blog-image ">
            <img src="https://i.ibb.co/tPtrjMm/event-1.jpg" alt="" />
          </div>
          <div className="p-8 blog-details w-full lg:ml-5">
            <h1 className="text-center  text-[20px] font-bold lg:text-start lg:mx-0 lg:w-[310px]">
              Barcelona Friday Food Truck Festival 26 Mei 2019
            </h1>
            <h1 className="text-center text-[18px] lg:text-start text-red-400 mt-2 font-bold">
              26 June 2018
            </h1>
            <p className="mt-5 text-center text-[17px] lg:text-start lg:text-[18px] lg:mx-0 text-[#333333] lg:w-[350px] lg:mt-7">
              Harmoni gives you everything you need to host your best event yet.
              lorem ipsum diamet.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;