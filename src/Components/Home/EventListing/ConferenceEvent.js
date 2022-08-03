import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import useEventListing from "../../Hooks/useEventListing";
import SingleConferenceEventList from "./SingleConferenceEventList";
const ConferenceEvent = () => {
  const type = "conference";
  const [eventLists] = useEventListing(type);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {eventLists?.map((item) => (
        <SingleConferenceEventList
          item={item}
          key={item._id}
        ></SingleConferenceEventList>
      ))}
    </div>
  );
};

export default ConferenceEvent;
