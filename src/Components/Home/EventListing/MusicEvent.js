import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import useEventListing from "../../Hooks/useEventListing";
import SingleMusicEvent from "./SingleMusicEvent";
const MusicEvent = () => {
  const type = "music";
  const [eventLists] = useEventListing(type);

  return (
    <div className="flex justify-center  w-screen">
      <div className="grid grid-cols-1  lg:grid-cols-2 gap-6">
        {eventLists?.map((item) => (
          <SingleMusicEvent item={item} key={item._id}></SingleMusicEvent>
        ))}
      </div>
    </div>
  );
};

export default MusicEvent;
