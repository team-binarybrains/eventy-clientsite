import axios from "axios";
import React, { useState } from "react";
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
  // console.log(id);
  const [eventDetailsData, setEventDetailsData] = useState({});
  axios.get(`https://fathomless-hamlet-59180.herokuapp.com/event-details/${id}`)
    .then((data) => setEventDetailsData(data.data));
  // const eventDetailsData = useFetch(`https://fathomless-hamlet-59180.herokuapp.com/event-details/${id}`,{})
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
            <FeaturedEvent
              eventDetailsData={eventDetailsData}
              key={eventDetailsData?._id}
            ></FeaturedEvent>
            <FeaturedEventDetails
              eventDetailsData={eventDetailsData}
              key={eventDetailsData?._id}
            />
            <EventSchedule
              eventDetailsData={eventDetailsData}
              key={eventDetailsData?._id}
            />
            <Pricing />
            <RegisterEvent
              eventDetailsData={eventDetailsData}
              key={eventDetailsData?._id}
            />
          </div>

          {/* 2nd row : 2nd column */}
          <div className="basis-[300px] grow shrink max-w-[59rem]">
            <LocationFaq></LocationFaq>
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
