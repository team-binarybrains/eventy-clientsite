/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import Loading from "../../../Share/Loading/Loading";
import { useId } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../../Firebase/firebase.init";
import axios from "axios";

const CheckoutForm = ({ product }) => {
  const [user] = useAuthState(auth);
  const { email, uid } = user;

  console.log(product);

  const stripe = useStripe();
  const elements = useElements();
  const [cardError, setCardError] = useState("");
  const [success, setSuccess] = useState("");
  const [processing, setProcessing] = useState(false);
  const [transactionId, setTransactionId] = useState("");
  const [clientSecret, setClientSecret] = useState("");

  const {
    _id,
    user_email,
    user_name,
    phone,
    address,
    code,
    eventName,
    eventPrice,
    name,
    price,
    totalPrice,
    venueName,
    total,
    bookingId,
    seats,
    location,
    message,
    date,
    image,
    star,
  } = product;
  console.log(name);

  useEffect(() => {
    fetch(
      "https://eventy-serversite-production.up.railway.app/create-payment-intent",
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
          // 'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        },
        body: JSON.stringify({ totalPrice: totalPrice || total }),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data?.clientSecret) {
          setClientSecret(data.clientSecret);
        }
      });
  }, [totalPrice, total]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setProcessing(true);
    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);

    if (card === null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });
    setCardError(error?.message || "");
    setSuccess("");
    if (error) {
      setProcessing(false);
    }

    // card payment confirmation
    const { paymentIntent, error: intentError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            name: name,
            email: email,
          },
        },
      });

    // if (processing) {
    //     return <Loading></Loading>
    // }

    if (intentError) {
      setCardError(intentError?.message);
      // setProcessing(false);
    } else {
      setCardError("");
      setTransactionId(paymentIntent.id);
      console.log(paymentIntent);
      setSuccess("Congrats! Payment is done.");

      // store payment info in database
      const payment = {
        uniqueId: uid + ":" + _id,
        uid: uid,
        productId: _id,
        transactionId: paymentIntent.id,
        user_name: user_name,
        email: user_email,
        eventName: eventName,
        eventPrice: eventPrice,
        productName: eventName,
        venueName: venueName,
        code: code,
        seats: seats,
        price: price,
        star: star,
        location: location,
        image: image,
        date: date,
        phone: phone,
        address: address,
        message: message,
        totalPrice: totalPrice,
        paidAmount: totalPrice,
      };
      await axios
        .post(
          "https://eventy-serversite-production.up.railway.app/payment-info",
          payment
        )
        .then((res) => {
          const { data } = res;
          console.log(data);
        });

      await axios
        .delete(
          `https://eventy-serversite-production.up.railway.app/delete-booking/${_id}`
        )
        .then((res) => {
          const { data } = res;
          console.log(data);
          setProcessing(false);
        });
    }
  };

  console.log(transactionId);
  return (
    <>
      <form
        onSubmit={handleSubmit}
        className=" flex flex-col justify-between lg:h-48"
        data-aos="flip-down"
        data-aos-duration="2500"
      >
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "18px",
                color: "#322d27",
                "::placeholder": {
                  color: "#52d27",
                },
              },
              invalid: {
                color: "#322d27",
              },
            },
          }}
        />

        <div>
          <div>
            <h2 className="card-title">
              Please pay for : {product?.eventName}
            </h2>
            <p className="text-lg">
              {" "}
              Amount : ${product?.totalPrice || product?.total}
            </p>
          </div>

          <div className="grid lg:flex lg:justify-between lg:items-end">
            <div className="">
              {cardError && <p className="text-red-500">{cardError}</p>}
              {success && (
                <div className="text-stone-800 ">
                  <p className="text-green-800">{success} </p>
                  <p className="text-lg ">
                    Transaction Id :{" "}
                    <span className="font-bold">{transactionId}</span>{" "}
                  </p>
                </div>
              )}
            </div>

            {processing ? (
              <div className="flex justify-end mt-5">
                <button className="btn loading px-8 rounded-full hover:bg-transparent bg-black transition-all duration-700">
                  Loading
                </button>
              </div>
            ) : (
              <div className="flex justify-end mt-5">
                {!transactionId && (
                  <button
                    type="submit"
                    disabled={!stripe || !clientSecret}
                    className="btn btn-outline px-16 rounded-full hover:bg-transparent hover:bg-black hover:text-white transition-all duration-700"
                  >
                    {" "}
                    PAY{" "}
                  </button>
                )}
              </div>
            )}
          </div>
        </div>
      </form>
    </>
  );
};

export default CheckoutForm;
