import React from "react";
import TopnavBar from "../Share/TopBar/TopnavBar";
import AllEventList from "./AllEventList";
import EventListSearchhead from "./EventListSearchhead";

const EventListDetailsMain = () => {
  return (
    <div>
      <TopnavBar></TopnavBar>
      <EventListSearchhead></EventListSearchhead>
      <AllEventList></AllEventList>
    </div>
  );
};

export default EventListDetailsMain;
