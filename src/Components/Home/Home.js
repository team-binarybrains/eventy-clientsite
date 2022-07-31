import React from "react";
import Blogs from "./Blog/Blogs";
import EventListing from "./EventListing/EventListing";
import Staffs from "./Staffs/Staffs";
import Venues from "./Venues/Venues";
import AboutUs from "./AboutUs/AboutUs";
import Gallery from "./Gallery/Gallery";
import Offer from "./Offer/Offer";

const Home = () => {
  return (
    <div>
      <Offer></Offer>

      <AboutUs></AboutUs>
      <Venues />
      <EventListing></EventListing>
      <Gallery></Gallery>
      <Staffs />
      <Blogs></Blogs>
    </div>
  );
};

export default Home;
