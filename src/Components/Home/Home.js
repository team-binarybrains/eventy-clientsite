import React from "react";
import Blogs from "./Blog/Blogs";
import EventListing from "./EventListing/EventListing";
import Staffs from "./Staffs/Staffs";
import Venues from "./Venues/Venues";
import AboutUs from "./AboutUs/AboutUs";
import Gallery from "./Gallery/Gallery";

const Home = () => {
  return (
    <div>
      <EventListing></EventListing>
      <Blogs></Blogs>
      <Staffs/>
      <Venues/>
      <AboutUs></AboutUs>
      <Gallery></Gallery>
    </div>
  );
};

export default Home;
