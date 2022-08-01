import React from "react";
import Blogs from "./Blog/Blogs";
import EventListing from "./EventListing/EventListing";
import Staffs from "./Staffs/Staffs";
import Venues from "./Venues/Venues";
import AboutUs from "./AboutUs/AboutUs";
import Gallery from "./Gallery/Gallery";
import PurchaseEvent from "./PurchaseEvent/PurchaseEvent";
import Navbar from "../Share/Navbar/Navbar";
import Banner from "./Banner/Banner";
import Footer from "../Share/Footer/Footer";

const Home = () => {
  return (
    <div>
      
      <Navbar></Navbar>
      <Banner></Banner>
      <AboutUs></AboutUs>
      <Venues />
      <EventListing></EventListing>
      <Gallery></Gallery>
      <Staffs />
      <PurchaseEvent></PurchaseEvent>
      <Blogs></Blogs>
      <Footer></Footer>
    </div>
  );
};

export default Home;
