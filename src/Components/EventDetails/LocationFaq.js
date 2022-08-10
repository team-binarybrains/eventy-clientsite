/* eslint-disable no-unused-vars */
import React from "react";
import style from "./EventDetails.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleArrowRight,
  faLocationDot,
  faLink,
} from "@fortawesome/free-solid-svg-icons";
import { BsTwitter } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { HiLink,HiLocationMarker } from "react-icons/hi";
import { MapContainer, TileLayer } from "react-leaflet";
import { Link, useNavigate } from "react-router-dom";

const LocationFaq = ({eventDetailsData}) => {
  const {address,venue,date,endDate,day,description,starttime,endtime,image,img,ticketprice,title,type,_id} = eventDetailsData;
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate("/contact-us");
  };

  // console.log(title.split(' '));
  return (
    <section className="flex flex-wrap justify-center sm:justify-start items-center px-3">
      {/* event location map */}
      <div
        className={`py-5 px-2 border-2 h-[26rem] min-w-[12rem] w-full max-w-[22rem] grow`}
      >
        <h2 className="text-3xl roboto">
          Event <span className="font-bold">Location</span>
        </h2>
        <div className="mt-2">
          <MapContainer
            style={{ width: 280, height: 340 ,zIndex:100}}
            center={[51.505, -0.09]}
            zoom={7}
            scrollWheelZoom={true}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
          </MapContainer>
        </div>
      </div>

      {/* event location info */}
      <div
        className={`pt-5 bg-slate-500/10 border h-[26rem] min-w-[12rem] w-full max-w-[22rem] grow`}
      >
        <div className="h-[6rem] px-5 border-b-2 flex gap-2">
          <HiLocationMarker
            className="text-xl text-white h-12 w-12 p-2 rounded-full bg-amber-500"
          />
          <div>
            <h6 className="text-gray-600/70 text-sm font-bold openSans">
              event location
            </h6>
            <h4 className="text-slate-900/95 text-xl uppercase font-semibold openSans">
              {venue}
            </h4>
          </div>
        </div>
        <article className="py-5 px-5 h-[calc(100%-6rem)] space-y-3">
          <span
            className={`inline-block px-5 py-3 mb-2 bg-white rounded-sm text-amber-500 font-bold tracking-wider`}
          >
            {title?.split(' ')[0]}
          </span>
          <p className="text-sm font-light ">
            <FontAwesomeIcon
              icon={faCircleArrowRight}
              className="text-amber-500"
            />{' '+address?.split(',').slice(0,2)}
          </p>
          <p className="text-sm font-light ">
            <FontAwesomeIcon
              icon={faCircleArrowRight}
              className="text-amber-500"
            />{' '+address?.split(',').slice(2)}
          </p>
          <p className="text-sm font-light ">
            <FontAwesomeIcon
              icon={faCircleArrowRight}
              className="text-amber-500"
            />{' '+date?.split(',')?.join(' ')}
          </p>
          <p className="text-sm font-light ">
            <FontAwesomeIcon
              icon={faCircleArrowRight}
              className="text-amber-500"
            />{" "}
            From <b className="font-semibold">{starttime}</b> to{" "}
            <b className="font-semibold">{endtime}</b> (EST)
          </p>
          <button
            className={`bg-gradient-to-r from-orange-500 to-amber-400 px-6 py-3 rounded-full text-white font-bold uppercase`}
          >
            add to my calendar
          </button>
        </article>
      </div>

      {/* contact info */}
      <div
        className={`py-5 bg-slate-500/10 border h-[26rem] min-w-[12rem] w-full max-w-[22rem] grow`}
      >
        <div className="h-[6rem] px-5 border-b-2 flex gap-2">
          <HiLink
            className="text-xl text-white h-12 w-12 p-2 rounded-full bg-amber-500"
          />
          <div>
            <h6 className="text-gray-600/70 text-sm font-bold openSans">
              contact information
            </h6>
            <h4 className="text-slate-900/95 text-xl uppercase font-semibold openSans">
              Eventy Staff
            </h4>
          </div>
        </div>
        <article className="py-5 px-5 h-[calc(100%-6rem)] space-y-2">
          <p className="text-gray-900/70 text-sm font-light openSans tracking-wide">
            Fusce pellentesque velvitae tincidunt egestas. Pellentesque
            habitant. Proin gravida nibh vel velit auctor aliquet. sollicitudin,
            lorem quis
          </p>
          <button className="text-gray-900/90 text-sm font-bold openSans">
            <FaFacebookF className="text-white bg-amber-500 h-7 w-7 rounded-full p-2 inline-block mr-2" />{" "}
            facebook.com/eventy
          </button>
          <button className="text-gray-900/90 text-sm font-bold openSans">
            <BsTwitter className="text-white bg-amber-500 h-7 w-7 rounded-full p-2 inline-block mr-2" />{" "}
            twitter.com@eventy
          </button>
          <button className="text-gray-900/90 text-sm font-bold openSans">
            <HiLink className="text-white bg-amber-500 h-7 w-7 rounded-full p-2 inline-block mr-2" />{" "}
            https://eventy-bb.web.app
          </button>

          <button
            onClick={handleNavigate}
            className={`bg-gradient-to-r from-orange-500 to-amber-400 px-6 py-3 rounded-full text-white font-bold uppercase`}
          >
            contact with us
          </button>
        </article>
      </div>

      {/* ticket ad */}
      <div className={`pt-2 h-[26rem] min-w-[12rem] w-full max-w-[22rem] grow`}>
        <div className={`flex justify-center ${style.leftBgimage} p-10`}>
          <div className="text-center ">
            <h1 className="text-[18px] text-[#FFFFFF] uppercase">
              26 December,2022
            </h1>
            <h1 className="text-[25px] text-[#FFFFFF] mt-8 ">
              <span className="uppercase font-bold ">amstadram</span> <br />
              <span className="uppercase font-bold  text-[#FFBE30]">
                php conference
              </span>
            </h1>
            <button
              className={`bg-gradient-to-r from-orange-500 to-amber-400 px-6 py-3 rounded-full text-white font-bold`}
            >
              Booking Ticket
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationFaq;
