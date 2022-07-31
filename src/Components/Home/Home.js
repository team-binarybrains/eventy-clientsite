import React from "react";
import Blogs from "./Blog/Blogs";
import EventListing from "./EventListing/EventListing";

const Home = () => {
  return (
    <div>
      <EventListing></EventListing>
      <Blogs></Blogs>
    </div>
  );
};

export default Home;
