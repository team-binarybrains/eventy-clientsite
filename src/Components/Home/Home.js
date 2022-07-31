import React from "react";
import Venues from "./Venues/Venues";
import AboutUs from "./AboutUs/AboutUs";
import Gallery from "./Gallery/Gallery";

const Home = () => {
  return (
    <div>
      <Venues/>
      <AboutUs></AboutUs>
      <Gallery></Gallery>
    </div>
  );
};

export default Home;
