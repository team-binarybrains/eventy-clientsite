import React from "react";
import Blogs from "./Blog/Blogs";
import EventListing from "./EventListing/EventListing";
import UpcommingEvent from "./UpcommitngEvent/UpcommingEvent";
import Staffs from "./Staffs/Staffs";
import Venues from "./Venues/Venues";
import AboutUs from "./AboutUs/AboutUs";
import Gallery from "./Gallery/Gallery";
import PurchaseEvent from "./PurchaseEvent/PurchaseEvent";
import Offer from "./Offer/Offer";
import PartnerClient from "./Partner&Client/PartnerClient";
import Navbar from "../Share/Navbar/Navbar";
import Banner from "./Banner/Banner";
import OurServices from "./OurServices/OurServices.module";
import RegistrationTime from "../RegistrationTime/RegistrationTime";

const Home = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Banner></Banner>
      <UpcommingEvent></UpcommingEvent>
      <AboutUs></AboutUs>
      <Venues />
      <Offer></Offer>
      <EventListing></EventListing>
      <Gallery></Gallery>
      <OurServices></OurServices>
      <Staffs />
      <PartnerClient></PartnerClient>
      <Blogs></Blogs>
      <RegistrationTime/>
    </div>
  );
};

export default Home;
