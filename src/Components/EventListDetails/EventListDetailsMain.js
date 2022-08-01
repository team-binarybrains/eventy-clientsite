import React from "react";
import AllEventList from "./AllEventList";
import EventListSearchhead from "./EventListSearchhead";

const EventListDetailsMain = () => {
  return (
    <div>
      <EventListSearchhead></EventListSearchhead>
      <AllEventList></AllEventList>
    </div>
  );
};

export default EventListDetailsMain;
