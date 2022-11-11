/* eslint-disable no-unused-vars */
/* eslint-disable eqeqeq */
import React, { useEffect, useRef, useState } from "react";
import "./RegisterEvent.css";
import paymentCards from "../img/payment-cards.png";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../../Firebase/firebase.init";
import axios from "axios";
import useRefetch from "../../../Hooks/useRefetch";
import { toast } from "react-toastify";

const RegisterEvent = ({ eventDetailsData }) => {
  const enterpriseSelection = useRef();
  const professionalSelection = useRef();
  const standardSelection = useRef();

  const [user] = useAuthState(auth);
  const [ticket, setTicket] = useState({
    standard: 0,
    professional: 0,
    enterprise: 0,
  });

  const selecting = ({ enterprise, professional, standard }) => {
    const enterOption = enterpriseSelection.current.children;
    const profOption = professionalSelection.current.children;
    const standOption = standardSelection.current.children;

    for (const option of enterOption) {
      if (option.value == (enterprise?.ticket || 0)) {
        option.selected = true;
      } else {
        option.selected = false;
      }
    }
    for (const option of profOption) {
      if (option.value == (professional?.ticket || 0)) {
        option.selected = true;
      } else {
        option.selected = false;
      }
    }
    for (const option of standOption) {
      if (option.value == (standard?.ticket || 0)) {
        option.selected = true;
      } else {
        option.selected = false;
      }
    }
  };

  /* useEffect(()=> {
      axios.get(`https://eventy-serversite-production.up.railway.app/ticket-booking/${user?.uid}`)
      .then(data=> {
         selecting(data?.data);
         setTicket({
            enterprise: (data?.data?.enterprise?.ticket || 0),
            professional: (data?.data?.professional?.ticket || 0),
            standard: (data?.data?.standard?.ticket || 0),
         });
      })
   },[fetchCount,user?.uid]); */

  const [data, loading, refetch] = useRefetch(
    `https://eventy-serversite-production.up.railway.app/ticket-booking/${
      user?.uid + ":" + eventDetailsData?._id
    }`,
    {},
    (data) => {
      selecting(data);
      setTicket({
        enterprise: data?.enterprise?.ticket || 0,
        professional: data?.professional?.ticket || 0,
        standard: data?.standard?.ticket || 0,
      });
    }
  );

  const enterprise = (e) => {
    const enterprise = parseInt(e.target.value) || 0;
    setTicket({ ...ticket, enterprise });
  };
  const professional = (e) => {
    const professional = parseInt(e.target.value) || 0;
    setTicket({ ...ticket, professional });
  };
  const standard = (e) => {
    const standard = parseInt(e.target.value) || 0;
    setTicket({ ...ticket, standard });
  };

  const bookings = () => {
    const { enterprise, professional, standard } = ticket;
    const booked = {
      bookingId: user?.uid + ":" + eventDetailsData?._id,
      userId: user?.uid,
      eventId: eventDetailsData?._id,
      eventName: eventDetailsData?.title,
      enterprise: {
        ticket: enterprise,
        price: parseInt(enterprise) * 99,
      },
      professional: {
        ticket: professional,
        price: parseInt(professional) * 59,
      },
      standard: {
        ticket: standard,
        price: parseInt(standard) * 19,
      },
      total: enterprise * 99 + professional * 59 + standard * 19,
    };

    axios
      .put(
        `https://eventy-serversite-production.up.railway.app/ticket-booking/${
          user?.uid + ":" + eventDetailsData?._id
        }`,
        {
          booking: booked,
        }
      )
      .then(({ data }) => {
        data?.success &&
          toast.success("Ticket booked successfully", { theme: "colored" });
        data?.success && refetch();
        setTicket({
          standard: 0,
          professional: 0,
          enterprise: 0,
        });
      });
  };

  // console.log(ticket);

  return (
    <section className="container mx-auto px-2 my-10">
      <div class="">
        <div class="">
          <h1 class="text-4xl  font-medium text-slate-700 ">
            Register <strong>Now</strong>
          </h1>
        </div>
        <div class="border my-10">
          <ul>
            <li class="bg-gradient-to-r from-[#FF5308] to-[#FFB02A] rounded-t p-2">
              <div class="text-white text-base md:text-lg grid md:flex gap-2 md:gap-6">
                <h1 className="text-slate-200">
                  <strong className="text-slate-100 font-semibold">
                    {eventDetailsData?.date?.split(",").join(" ")}
                  </strong>{" "}
                  [{eventDetailsData?.starttime}]
                </h1>
                <h2 className="text-slate-200">
                  <strong className="text-slate-100 font-semibold">
                    {eventDetailsData?.endDate?.split(",").join(" ")}
                  </strong>{" "}
                  [{eventDetailsData?.endtime}]
                </h2>
              </div>
              <span class="text-white pt-3">
                Sales end on {eventDetailsData?.date?.split(",")[0] - 1}{" "}
                {eventDetailsData?.date?.split(",")?.slice(1)?.join(" ")}
              </span>
            </li>
            <li class="px-2">
              <div class="flex py-2 border-b items-center justify-between ">
                <div class="">
                  <h3 class="ticket-title text-xl md:text-2xl font-semibold text-slate-600">
                    ENTERPRISE
                  </h3>
                  <h4 class="ticket-price text-slate-500 text-base font-semibold">
                    $ {ticket.enterprise * 99}
                  </h4>
                </div>
                <div class="">
                  <div class="ticket-select">
                    <select
                      ref={enterpriseSelection}
                      onClick={enterprise}
                      className="bg-[#00000017] text-slate-500 font-semibold text-base md:text-lg rounded p-2 mr-3 outline-yellow-500 cursor-pointer"
                      id="ticket-select1"
                    >
                      <option
                        className="text-slate-500 font-semibold text-sm md:text-base"
                        value="0"
                      >
                        0 TICKET
                      </option>
                      <option
                        className="text-slate-500 font-semibold text-sm md:text-base"
                        value="1"
                      >
                        1 TICKET
                      </option>
                    </select>
                  </div>
                </div>
              </div>

              <div class="flex py-2 border-b items-center justify-between">
                <div class="">
                  <h3 class="ticket-title text-xl md:text-2xl font-semibold text-slate-600">
                    PROFESSIONAL
                  </h3>
                  <h4 class="ticket-price text-slate-500 font-semibold">
                    $ {ticket.professional * 59}
                  </h4>
                </div>
                <div class="">
                  <div class="ticket-select">
                    <select
                      ref={professionalSelection}
                      name="professional"
                      onClick={professional}
                      className="bg-[#00000017] text-slate-500 font-semibold text-base md:text-lg rounded p-2 mr-3 outline-yellow-500 cursor-pointer"
                      id="ticket-select2"
                    >
                      <option
                        className="text-slate-500 font-semibold text-sm md:text-base"
                        value="0"
                      >
                        0 TICKET
                      </option>
                      <option
                        className="text-slate-500 font-semibold text-sm md:text-base"
                        value="1"
                      >
                        1 TICKET
                      </option>
                      <option
                        className="text-slate-500 font-semibold text-sm md:text-base"
                        value="2"
                      >
                        2 TICKET
                      </option>
                      <option
                        className="text-slate-500 font-semibold text-sm md:text-base"
                        value="3"
                      >
                        3 TICKET
                      </option>
                    </select>
                  </div>
                </div>
              </div>

              <div class="flex py-2 border-b items-center justify-between">
                <div class="">
                  <h3 class="ticket-title text-xl md:text-2xl font-semibold text-slate-600">
                    STANDARD
                  </h3>
                  <h4 class="ticket-price text-slate-500 font-semibold">
                    $ {ticket.standard * 19}
                  </h4>
                </div>
                <div class="">
                  <div class="ticket-select">
                    <select
                      ref={standardSelection}
                      name="standard"
                      onClick={standard}
                      className="bg-[#00000017] text-slate-500 font-semibold text-sm md:text-lg rounded p-2 mr-3 outline-yellow-500 cursor-pointer"
                      id="ticket-select3"
                    >
                      <option
                        className="text-slate-500 font-semibold text-sm md:text-base"
                        value="0"
                      >
                        0 TICKET
                      </option>
                      <option
                        className="text-slate-500 font-semibold text-sm md:text-base"
                        value="1"
                      >
                        1 TICKET
                      </option>
                      <option
                        className="text-slate-500 font-semibold text-sm md:text-base"
                        value="2"
                      >
                        2 TICKET
                      </option>
                      <option
                        className="text-slate-500 font-semibold text-sm md:text-base"
                        value="3"
                      >
                        3 TICKET
                      </option>
                      <option
                        className="text-slate-500 font-semibold text-sm md:text-base"
                        value="4"
                      >
                        4 TICKET
                      </option>
                      <option
                        className="text-slate-500 font-semibold text-sm md:text-base"
                        value="5"
                      >
                        5 TICKET
                      </option>
                    </select>
                  </div>
                </div>
              </div>
            </li>
            <li class="grid md:flex gap-4 items-center justify-between px-4 py-6">
              <div class=" grid sm:flex gap-4">
                <span class="payment-card">
                  <img src={paymentCards} alt="payment Cards Not Found" />
                </span>
                <span class="total-price text-slate-600 font-medium">
                  TOTAL PRICE : $
                  {ticket.enterprise * 99 +
                    ticket.professional * 59 +
                    ticket.standard * 19}
                </span>
              </div>
              <div class="">
                <button
                  onClick={bookings}
                  class="custom-btn text-base w-full md:text-lg px-6 uppercase cursor-pointer text-white rounded py-2 "
                >
                  order now
                </button>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default RegisterEvent;
