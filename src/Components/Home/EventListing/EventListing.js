import React, { useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./EventListing.css";
import {
  faMicrophone,
  faMicrophoneAlt,
  faCakeCandles,
  faMusic,
  faSquareCheck,
  faShirt,
} from "@fortawesome/free-solid-svg-icons";
import ConferenceEvent from "./ConferenceEvent";
import MusicEvent from "./MusicEvent";
import { FaTshirt } from "react-icons/fa";
import FashionEvent from "./FashionEvent";

const EventListing = () => {
  return (
    <div className="mt-20">
      <div className=" mx-auto h-1 w-24 bg-[#FD1D1D]  lg:ml-[320px] lg:mb-6"></div>
      <div className=" text-center lg:text-start lg:ml-96 ">
        <h1 className="text-[20px] text-[#878787] uppercase">Eventy</h1>
        <h1 className="text-[48px]">
          <span className="font-bold">Event</span> Listing
        </h1>
      </div>
      <div className="mt-5  lg:flex lg:justify-center  lg:text-center">
        <Tabs className=" border-none ">
          <TabList className=" border-none">
            <Tab>
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
            <Tab>
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
            <Tab>
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
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <MusicEvent></MusicEvent>
            </div>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default EventListing;
