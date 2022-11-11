/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import Loading from "../../../Share/Loading/Loading";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";
import axios from "axios";
import useRefetch from "../../../Hooks/useRefetch";

const stripePromise = loadStripe(
  "pk_test_51L0gDbJT4xjXTU74z66wNjkphxp6HCRQGImcS5i8j0Jko2BGa7ePawEKH8M1jWNXs6zW0XC9RMikXsHHteZoUs2k0048prUI1F"
);

const Payment = () => {
  const { Id } = useParams();

  const [ticket, loading, refetch] = useRefetch(
    `https://eventy-serversite-production.up.railway.app/ticket-booking/${Id}`,
    {}
  );

  const { data: product, isLoading } = useQuery(["payment", Id], () =>
    fetch(`https://eventy-serversite-production.up.railway.app/payment/${Id}`, {
      method: "GET",
      // headers: {
      //   'authorization': `bearer ${localStorage.getItem('accessToken')}`
      // }
    }).then((res) => res.json())
  );

  console.log(ticket);

  return (
    <div className="w-full mt-20">
      {product && (
        <div className="hero w-full">
          <div className="grid gap-y-5 mx-2">
            {/* <div className="card shadow-2xl bg-transparent">
            <div className="card-body ">
              <h2 className="card-title">Please pay for : {product?.eventName}</h2>
              <p> Please Pay : ${product.totalPrice}</p>
              <p> Delivery Address : {product.address}</p>
            </div>
          </div> */}

            <div
              className="lg:h-60 lg:w-[500px] rounded-lg shadow-2xl bg-amber-400 "
              data-aos="zoom-in"
              data-aos-duration="1500"
            >
              <div className="card-body">
                <Elements stripe={stripePromise}>
                  <CheckoutForm product={product} />
                </Elements>
              </div>
            </div>
          </div>
        </div>
      )}

      {ticket?.bookingId && (
        <div className="hero w-full">
          <div className="grid gap-y-5 mx-2">
            {/* <div className="card shadow-2xl bg-transparent">
              <div className="card-body ">
                <h2 className="card-title">Please pay for : {ticket?.eventName}</h2>
                <p> Please Pay : ${ticket?.total}</p>
              </div>
            </div> */}

            <div
              className="lg:h-60 lg:w-[500px] rounded-lg shadow-2xl bg-amber-400 "
              data-aos="zoom-in"
              data-aos-duration="1500"
            >
              <div className="card-body">
                <Elements stripe={stripePromise}>
                  <CheckoutForm product={ticket} />
                </Elements>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Payment;
