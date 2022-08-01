import React from "react";
import Blogs from "./Blog/Blogs";
import EventListing from "./EventListing/EventListing";
import Staffs from "./Staffs/Staffs";
import Venues from "./Venues/Venues";
import AboutUs from "./AboutUs/AboutUs";
import Gallery from "./Gallery/Gallery";
import PurchaseEvent from "./PurchaseEvent/PurchaseEvent";
import Offer from "./Offer/Offer";
import PartnerClient from "./Partner&Client/PartnerClient";
import Navbar from "../Share/Navbar/Navbar";
import Banner from "./Banner/Banner";

const Home = () => {
  return (
    <div>
      
      <Navbar></Navbar>
      <Banner></Banner>
      <AboutUs></AboutUs>
      <Venues />
      <Offer></Offer>
      <EventListing></EventListing>
      <Gallery></Gallery>
      <Staffs />
      <PurchaseEvent></PurchaseEvent>
      <PartnerClient></PartnerClient>
      <Blogs></Blogs>
    </div>
  );
};

export default Home;
