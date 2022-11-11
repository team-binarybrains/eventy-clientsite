/* eslint-disable no-unused-vars */
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import BlogComments from "../Home/Blog/BlogDetails/BlogComments/BlogComments";
import useFetch from "../Home/OurServices/Hook/useFetch";
import style from "./EventDetails.module.css";
import EventSchedule from "./FeaturedEvent/EventSchedule/EventSchedule";
import FeaturedEvent from "./FeaturedEvent/FeaturedEvent";
import FeaturedEventDetails from "./FeaturedEvent/FeaturedEventDetails/FeaturedEventDetails";
import RegisterEvent from "./FeaturedEvent/RegisterEvent/RegisterEvent";
import LocationFaq from "./LocationFaq";
import Pricing from "./Pricing/Pricing";
import TopBanner from "./TopBanner";

const EventDetails = () => {
  const { id } = useParams();
  console.log(id);
  const [eventDetailsData, setEventDetailsData] = useState({});
  useEffect(() => {
    axios
      .get(
        `https://eventy-serversite-production.up.railway.app/event-details/${id}`
      )
      .then((data) => setEventDetailsData(data.data));
  }, [id]);
  // const eventDetailsData = useFetch(`https://eventy-serversite-production.up.railway.app/event-details/${id}`,{})
  // setEventDetailsData({name:'noName'})
  // console.log(eventDetailsData);

  return (
    <div className="route">
      <section className="min-h-screen">
        {/* 1st row */}
        <div className={`${style.topBanner} h-80`}>
          <TopBanner></TopBanner>
        </div>

        <section className="px-3 flex flex-wrap justify-center container mx-auto max-w-7xl lg:px-16 my-16">
          {/* 2nd row : 1st column (-----Rashid vai-------)*/}
          <div className=" basis-[800px] shrink grow max-w-[52rem]">
            <FeaturedEvent eventDetailsData={eventDetailsData}></FeaturedEvent>
            <FeaturedEventDetails eventDetailsData={eventDetailsData} />
            <EventSchedule eventDetailsData={eventDetailsData} />
            <Pricing />
            <RegisterEvent eventDetailsData={eventDetailsData} />
          </div>

          {/* 2nd row : 2nd column */}
          <div className="basis-[300px] grow shrink max-w-[59rem]">
            <LocationFaq eventDetailsData={eventDetailsData}></LocationFaq>
          </div>
        </section>

        {/* 3rd row */}
        <div className="basis-full container mx-auto">
          <BlogComments />
        </div>
      </section>
    </div>
  );
};

export default EventDetails;
