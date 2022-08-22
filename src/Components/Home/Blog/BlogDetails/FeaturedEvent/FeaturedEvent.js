import React, { useState } from "react";
import "./FeaturedEvent.css";
import { BsBookmarkFill } from "react-icons/bs";
import DateAndCategory from "./DateAndCategory/DateAndCategory";
const FeaturedEvent = ({ blog }) => {
  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);
  const [show3, setShow3] = useState(false);
  const [show4, setShow4] = useState(false);
  return (
    <div>
      <div className=" 2xl:container 2xl:mx-auto md:py-12 lg:px-20 md:px-6 py-9 px-4">
        <h2 className=" font-semibold lg:text-4xl text-3xl lg:leading-9 md:leading-7 leading-9 text-gray-800"
          data-aos="fade-right"
          data-aos-duration="2000"
        >
          {" "}
          <span className=" text-[#ffbe30]"
            data-aos="fade-right"
            data-aos-delay="400"
            data-aos-duration="2500"
          >
            <BsBookmarkFill className="inline-block" />
          </span>{" "}
          Featured Event
        </h2>
        <div className="mt-4 flex md:justify-between md:items-start md:flex-row flex-col justify-start items-start">
          <div className=" ">
            {/* <p className=" font-normal text-base leading-6 text-gray-600 lg:w-8/12 md:w-9/12 ">Here are few of the most frequently asked questions by our valueable customers</p> */}
            <h1 className="resent-post-section-title"
              data-aos="zoom-in"
              data-aos-duration="2000"
            >
              <strong>{blog?.tittle}</strong>{" "}
            </h1>
          </div>

          <div className=" border-gray-200 pb-2 flex justify-center items-center md:mt-0 mt-10 md:w-auto w-full ">
            <h1 className="resent-post-section-title pr-52 -mb-[48px]"
              data-aos="fade-left"
              data-aos-duration="2000"
            >
              Recent <span className="font-bold"> Post</span>
            </h1>
          </div>
        </div>
        <div className=" flex md:flex-row flex-col md:space-x-8 md:mt-16 mt-8">
          <div className=" md:w-7/12 lg:w-8/12 w-full ">
            <img
              src="https://i.ibb.co/XFgcQmg/event-details-1-1.jpg"
              alt="Img of Glass bottle"
              className="w-full md:block hidden"
              data-aos="flip-up"
              data-aos-duration="2000"
            />

            <DateAndCategory blog={blog}></DateAndCategory>
          </div>
          <div className=" md:w-5/12 lg:w-4/12 w-full md:mt-0 sm:mt-14 mt-10">
            {/* <!-- Shipping Section --> */}
            <div>
              <div className="py-7 px-3 -none flex justify-between items-center cursor-pointer hover:text-[#ffbe30] bg-[#f7f7f7] mt-3 rounded-md"
                data-aos="fade-left"
                data-aos-duration="2500"
              >
                <h3 className=" font-extrabold  text-[18px] leading-5 hover:text-[#ffbe30]  ">
                  How to join this event?
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

            {/* <hr className=" my-7 bg-gray-200" /> */}

            {/* <!-- Returns Section --> */}

            <div>
              <div className="py-7 px-3  flex justify-between items-center cursor-pointer hover:text-[#ffbe30] bg-[#f7f7f7] mt-3 rounded-md "
                data-aos="fade-left"
                data-aos-duration="2500"
              >
                <h3 className=" font-extrabold  text-[18px] leading-5 hover:text-[#ffbe30] ">
                  How to make new event?
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

            {/* <hr className=" my-7 bg-gray-200" /> */}

            {/* <!-- Exchange Section --> */}

            <div>
              <div className="py-7 px-3 -none flex justify-between items-center cursor-pointer hover:text-[#ffbe30] bg-[#f7f7f7] mt-3 rounded-md"
                data-aos="fade-left"
                data-aos-delay="500"
                data-aos-duration="2500"
              >
                <h3 className=" font-extrabold  text-[18px] leading-5 hover:text-[#ffbe30] ">
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

            {/* <hr className=" my-7 bg-gray-200" /> */}

            {/* Tracking Section */}

            <div>
              <div className="py-7 px-3 -none flex justify-between items-center cursor-pointer hover:text-[#ffbe30] bg-[#f7f7f7] mt-3 rounded-md"
                data-aos="fade-left"
                data-aos-delay="800"
                data-aos-duration="2500"
              >
                <h3 className=" font-extrabold  text-[18px] leading-5 hover:text-[#ffbe30] ">
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

            {/* <hr className=" my-7 bg-gray-200" /> */}
            <div className="sitebanner flex  justify-center mt-32 "
            data-aos="zoom-in"
            data-aos-duration="2500"
            >
              <div className="text-center"
              data-aos="zoom-in"
              data-aos-delay="500"
              data-aos-duration="2500"
              >
                <h1 className="text-white text-[17px] mt-16">
                  26 DECEMBER 2018
                </h1>
                <h1 className="text-[30px] text-white mt-10">
                  AMSTERDAM
                  <br />
                  <strong className="text-[#ffbe30]">PHP CONFERENCE</strong>
                </h1>
                <button className="custom-btn px-10 py-3 rounded-full text-white font-extrabold mt-10">
                  {" "}
                  Booking Ticket
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedEvent;
