import React from "react";
import useEventListing from "../../Hooks/useEventListing";
import SingleFashion from "./SingleFashion";

const FashionEvent = () => {
  const type = "fashion";
  const [eventLists] = useEventListing(type);
  return (
    <div className="flex justify-center  w-screen">
      <div className="grid grid-cols-1  lg:grid-cols-2 gap-6">
        {eventLists?.map((item) => (
          <SingleFashion item={item} key={item._id}></SingleFashion>
        ))}
      </div>
    </div>
  );
};

export default FashionEvent;
