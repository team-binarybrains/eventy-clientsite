import React from "react";
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
} from "@fortawesome/free-solid-svg-icons";
import ConferenceEvent from "./ConferenceEvent";

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
        <Tabs className="  ">
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
                    icon={faCakeCandles}
                  />
                  Play Ground
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
                    icon={faSquareCheck}
                  />
                  Conference
                </span>{" "}
                <span className="text-gray-700 ">Event</span>
              </h1>
            </Tab>
          </TabList>

          <TabPanel>
            <ConferenceEvent></ConferenceEvent>
          </TabPanel>

          <TabPanel></TabPanel>

          <TabPanel></TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default EventListing;
