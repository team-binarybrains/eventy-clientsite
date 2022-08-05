import React, { useEffect, useState } from "react";

const useEventListing = (type) => {
  console.log(type);
  const [eventLists, setEventLists] = useState([]);
  useEffect(() => {
    const url = `http://localhost:5000/eventlisting/?catagory=${type}`;
    if (type) {
      fetch(url)
        .then((res) => res.json())
        .then((data) => setEventLists(data));
    }
  }, []);

  return [eventLists, setEventLists];
};

export default useEventListing;
