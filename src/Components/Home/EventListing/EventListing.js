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
      <div className=" ">
        <div className=" mx-auto h-1 w-24 bg-[#FD1D1D]  lg:ml-[430px] lg:mb-6"></div>
        <div className=" lg:flex lg:justify-center">
          <div className="mt-2  text-center lg:mt-0 lg:text-start">
            <h1 className="text-[20px] text-[#878787] uppercase">Eventy</h1>
            <h1 className="text-[48px]">
              <span className="font-bold">Event</span> Listing
            </h1>
          </div>
          <Tabs className=" mt-14 ml-20">
            <TabList className=" border-none">
              <Tab>
                <h1 className="text-[18px] ">
                  {" "}
                  <span className="font-bold w-32 ">
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
                  <span className="font-bold w-32 ">
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
                  <span className="font-bold w-32 ">
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
              <ConferenceEvent></ConferenceEvent>{" "}
            </TabPanel>

            <TabPanel>
              {" "}
              <ConferenceEvent></ConferenceEvent>{" "}
            </TabPanel>

            <TabPanel>
              {" "}
              <ConferenceEvent></ConferenceEvent>{" "}
            </TabPanel>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default EventListing;
