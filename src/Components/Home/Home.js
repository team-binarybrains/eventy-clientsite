import React from "react";
import Blogs from "./Blog/Blogs";
import EventListing from "./EventListing/EventListing";
import UpcommingEvent from "./UpcommitngEvent/UpcommingEvent";

const Home = () => {
  return (
    <div>
      <EventListing></EventListing>
      <Blogs></Blogs>
      <UpcommingEvent></UpcommingEvent>
    </div>
  );
};

export default Home;
