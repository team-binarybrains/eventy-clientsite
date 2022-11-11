import React, { useEffect, useState } from "react";

const useEventListing = (type) => {
  // console.log(type);
  const [eventLists, setEventLists] = useState([]);
  useEffect(() => {
    const url = `https://eventy-serversite-production.up.railway.app/eventlisting/?catagory=${type}`;
    if (type) {
      fetch(url)
        .then((res) => res.json())
        .then((data) => setEventLists(data));
    }
  }, [type]);

  return [eventLists, setEventLists];
};

export default useEventListing;
