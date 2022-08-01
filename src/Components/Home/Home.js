import React from "react";
import Blogs from "./Blog/Blogs";
import EventListing from "./EventListing/EventListing";
import UpcommingEvent from "./UpcommitngEvent/UpcommingEvent";
import Staffs from "./Staffs/Staffs";
import Venues from "./Venues/Venues";
import AboutUs from "./AboutUs/AboutUs";
import Gallery from "./Gallery/Gallery";
import PurchaseEvent from "./PurchaseEvent/PurchaseEvent";

const Home = () => {
  return (
    <div>
      <AboutUs></AboutUs>
      <Venues />
      <EventListing></EventListing>
      <Gallery></Gallery>
      <Staffs />
      <PurchaseEvent></PurchaseEvent>
      <Blogs></Blogs>
      <UpcommingEvent></UpcommingEvent>
    </div>
  );
};

export default Home;
