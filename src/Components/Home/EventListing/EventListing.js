import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./EventListing.css";
import {
  faMicrophone,
  // faMicrophoneAlt,
  // faCakeCandles,
  faMusic,
  // faSquareCheck,
  faShirt,
} from "@fortawesome/free-solid-svg-icons";
import ConferenceEvent from "./ConferenceEvent";
import MusicEvent from "./MusicEvent";
import FashionEvent from "./FashionEvent";
import { useNavigate } from "react-router-dom";
// import TopBanner from "../../EventDetails/TopBanner";
const EventListing = () => {
  const navigate = useNavigate();
  const handleEventListing = () => {
    navigate("/eventlist");
  };
  return (
    <section id="event-listing" className="mt-20 min-h-[50vh] bg-[#fff]">
      <div className=" mx-auto h-1 w-24 bg-[#FD1D1D]  lg:ml-[320px] lg:mb-6"></div>
      <div className=" text-center lg:text-start lg:ml-96 ">

        <h1 className="text-[20px] text-[#878787] uppercase"
          data-aos="fade-left"
          data-aos-duration="3000"
        >Eventy</h1>

        <h1 className="text-[48px]" 
        data-aos="zoom-in" 
        data-aos-duration="3000"
        >
          <span className="font-bold">Event</span> Listing
        </h1>
      </div>

      <div className="mt-5  lg:flex lg:justify-center  lg:text-center">
        <Tabs className=" border-none" >
          <TabList className=" border-none">
            <Tab 
            // data-aos="zoom-out-up"
            // data-aos-duration="2000"
            >
              <h1 className="text-[18px] ">
                {" "}
                <span className="font-bold  ">
                  <FontAwesomeIcon
                    className="text-orange-500 mr-2"
                    icon={faMicrophone}
                  />
                  Conference
                </span>{" "}
                <span className="text-gray-700 ">Event</span>
              </h1>
            </Tab>
            <Tab 
            // data-aos="zoom-out-up"
            // data-aos-duration="2000"
            >
              <h1 className="text-[18px] ">
                {" "}
                <span className="font-bold  ">
                  <FontAwesomeIcon
                    className="text-orange-500 mr-2"
                    icon={faShirt}
                  />
                  Fashion
                </span>{" "}
                <span className="text-gray-700 ">Event</span>
              </h1>
            </Tab>
            <Tab 
            // data-aos="zoom-out-up"
            // data-aos-duration="2000"
            >
              <h1 className="text-[18px] ">
                {" "}
                <span className="font-bold ">
                  <FontAwesomeIcon
                    className="text-orange-500 mr-2 "
                    icon={faMusic}
                  />
                  Music
                </span>{" "}
                <span className="text-gray-700 ">Event</span>
              </h1>
            </Tab>
          </TabList>

          <TabPanel>
            <div>
              <ConferenceEvent></ConferenceEvent>
            </div>
          </TabPanel>

          <TabPanel>
            <FashionEvent></FashionEvent>
          </TabPanel>

          <TabPanel>
            <MusicEvent></MusicEvent>
          </TabPanel>
        </Tabs>
      </div>
      <div className="flex justify-center mt-10">
        <button
          onClick={handleEventListing}
          className="custom-btn px-10 font-bold py-3 rounded-full text-white "
          data-aos="zoom-in"
          data-aos-duration="2500"  
        >
          See More
        </button>
      </div>
    </section>
  );
};

export default EventListing;
