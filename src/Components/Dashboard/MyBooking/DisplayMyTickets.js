/* eslint-disable no-unused-vars */
import axios from "axios";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import auth from "../../../Firebase/firebase.init";
import useRefetch from "../../Hooks/useRefetch";

const DisplayMyTickets = ({ ticket, refetch }) => {
  const [user] = useAuthState(auth);
  const navigate = useNavigate();
  const {
    _id,
    enterprise,
    eventId,
    professional,
    standard,
    total,
    userId,
    bookingId,
  } = ticket;

  const [event] = useRefetch(
    `https://eventy-serversite-production.up.railway.app/event-details/${ticket?.eventId}`,
    {}
  );
  // cancle order
  const handleBookingCancle = (id) => {
    console.log(id);

    const proceed = window.confirm("Are you sure?");

    if (proceed) {
      axios
        .delete(
          `https://eventy-serversite-production.up.railway.app/delete-booked-ticket/${id}`
        )
        .then(({ data }) => data?.acknowledged && refetch());
    }
  };

  const addressing = (e) => {
    const address = e?.split(",");
    const length = parseInt(address?.length / 2);
    console.log([
      address?.slice(0, length + 1)?.join(" "),
      address?.slice(length + 1)?.join(" "),
    ]);
    return [
      address?.slice(0, length)?.join(" "),
      address?.slice(length)?.join(" "),
    ];
  };
  const naming = (e) => {
    const address = e?.split(" ");
    const length = parseInt(address?.length / 2);
    console.log([
      address?.slice(0, length + 1)?.join(" "),
      address?.slice(length + 1)?.join(" "),
    ]);
    return [
      address?.slice(0, length)?.join(" "),
      address?.slice(length)?.join(" "),
    ];
  };

  return (
    <div
      className={`shadow-xl rounded-md bg-slate-200 basis-[35rem] shrink relative overflow-hidden bg-no-repeat bg-center bg-cover`}
      style={{
        backgroundImage: `url(${event?.image})`,
      }}
      data-aos="zoom-in"
      data-aos-duration="2000"
    >
      <section
        className="py-5 px-3 gap-x-3 gap-y-10 flex flex-wrap items-center justify-center text-white backdrop-blur-[3px] bg-black/80"
        data-aos="flip-up"
        data-aos-duration="2000"
      >
        <div className="space-y-2 basis-[15rem] shrink flex flex-col justify-center items-center">
          <h3 className="font-medium text-white">
            {event?.date?.split(",")?.join(" ")}
          </h3>

          <h3 class=" text-2xl openSans text-amber-500">
            {naming(event?.title)[0]}
          </h3>
          <h3 class=" text-2xl openSans text-amber-500">
            {naming(event?.title)[1]}
          </h3>

          <h3 className="font-medium text-white">
            {addressing(event?.address)[0]}
          </h3>
          <h3 className="font-medium text-white">
            {addressing(event?.address)[1]}
          </h3>
        </div>

        <div className="space-y-2 basis-[15rem] shrink">
          <p class="text-xl openSans font-bold mb-2 text-amber-600">
            Ticket & Type
          </p>
          <div className="grid grid-cols-3 gap-2">
            <span className="font-bold">Type</span>
            <span className="font-bold justify-self-center">Ticket</span>
            <span className="font-bold justify-self-center">Price</span>

            <span>Enterprise</span>
            <span className="justify-self-center">{enterprise?.ticket}</span>
            <span className="justify-self-center">${enterprise?.price}</span>

            <span>Professional</span>
            <span className="justify-self-center">{professional?.ticket}</span>
            <span className="justify-self-center">${professional?.price}</span>

            <span>Standard</span>
            <span className="justify-self-center">{standard?.ticket}</span>
            <span className="justify-self-center">${standard?.price}</span>

            <hr className="col-span-full " />
            <span className="uppercase text-lg font-semibold col-span-2">
              Total Amount =
            </span>
            <span className="uppercase text-lg font-semibold justify-self-center">
              ${total}
            </span>
          </div>

          <div class="flex justify-end gap-5 px-5 pt-5">
            <button
              onClick={() => handleBookingCancle(eventId)}
              class={`border-4 border-red-500 inline-block w-28 h-12 openSans uppercase tracking-wider transition-all text-red-500 font-extrabold hover:shadow-[0_0_35px_rgb(236,68,68)] hover:bg-red-500 hover:text-gray-900 text-lg duration-300`}
            >
              Cancel
            </button>
            <button
              onClick={() => navigate(`/dashboard/payment/${bookingId}`)}
              class={`border-4 border-sky-500 inline-block w-28 h-12 openSans uppercase tracking-wider transition-all text-sky-500 font-extrabold hover:shadow-[0_0_35px_rgb(14,165,233)] hover:bg-sky-500 hover:text-gray-900 text-lg duration-300`}
            >
              Pay
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DisplayMyTickets;
