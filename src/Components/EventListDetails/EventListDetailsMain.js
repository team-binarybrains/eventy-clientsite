import React, { useEffect, useState } from "react";
import AllEventList from "./AllEventList";
import EventListSearchhead from "./EventListSearchhead";
import style from "../../Components/EventDetails/EventDetails.module.css";
import TopBanner from "../EventDetails/TopBanner";

const EventListDetailsMain = () => {
  return (
    <div className="route ">
      <TopBanner></TopBanner>
      <EventListSearchhead></EventListSearchhead>
      <AllEventList></AllEventList>
    </div>
  );
};

export default EventListDetailsMain;
