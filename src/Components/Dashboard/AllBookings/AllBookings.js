import axios from "axios";
import React, { useEffect, useState } from "react";
import useRefetch from "../../Hooks/useRefetch";
import DisplayAllBookings from "./DisplayAllBookings";

function AllBookings() {
  // const [allBooking, setAllBooking] = useState([])

  const [allBooking, loading, refetch] = useRefetch(
    "https://eventy-serversite-production.up.railway.app/get-all-booking-info",
    []
  );
  console.log(allBooking);

  const [allPaidBooking, paidLoading, paidRefetch] = useRefetch(
    "https://eventy-serversite-production.up.railway.app/get-payment",
    []
  );
  console.log(allPaidBooking);

  const handleBookingDelete = (id) => {
    const confirmation = window.confirm("Are you sure to cancel the booking ?");

    if (confirmation) {
      axios
        .delete(
          `https://eventy-serversite-production.up.railway.app/delete-booking/${id}`
        )
        .then((res) => {
          console.log(res?.data);
          refetch();
        });
    } else {
      return;
    }
  };

  const handlePaidBookingDelete = (id) => {
    const confirmation = window.confirm("Are you sure to cancel the booking ?");

    if (confirmation) {
      axios
        .delete(
          `https://eventy-serversite-production.up.railway.app/delete-payment-info/${id}`
        )
        .then((res) => {
          console.log(res?.data);
          paidRefetch();
        });
    } else {
      return;
    }
  };

  return (
    <div className="grid lg:grid-cols-1 grid-rows-none grid-cols-none gap-y-5 gap-x-20 lg:p-20">
      <div className="flex justify-center border-b-2 lg:mb-5">
        <p
          className="text-3xl font-bold "
          data-aos="zoom-in"
          data-aos-duration="2500"
        >
          ALL
          <span
            className="text-amber-400 tracking-widest mx-2"
            data-testid="booking"
          >
            BOOKING
          </span>
          INFORMATION
        </p>
      </div>

      {[...allBooking].reverse().map((booking) => (
        <DisplayAllBookings
          key={booking._id}
          booking={booking}
          handleBookingDelete={handleBookingDelete}
        />
      ))}

      {[...allPaidBooking].reverse().map((booking) => (
        <DisplayAllBookings
          key={booking._id}
          booking={booking}
          handlePaidBookingDelete={handlePaidBookingDelete}
        />
      ))}
    </div>
  );
}

export default AllBookings;
