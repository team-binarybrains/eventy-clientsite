/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import usePayment from './PaymentInfoHook/usePayment';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../Firebase/firebase.init';

function DisplayMyBooking({ booking, handleBookingCancle }) {

    const [user] = useAuthState(auth);
    const { email, uid } = user;

    const { _id, date, code, eventName, eventPrice, image, img, venueName, seats, price, location, totalPrice } = booking

    const navigate = useNavigate()

    return (
        <div class=" bg-no-repeat bg-center bg-cover rounded-lg overflow-hidden"
            style={{ backgroundImage: `url(${image})` }}
            data-aos="zoom-in"
            data-aos-duration="2000"
        >


            <div className='bg-black/60 shadow-xl  flex items-center justify-around flex-col sm:flex-row py-8 px-5 sm:px-0  relative overflow-hidden'
                data-aos="flip-up"
                data-aos-duration="2000"
            >
                <div className='z-10 text-white '>
                    <p>{date}</p>
                    <p class=" text-2xl openSans text-amber-500">{eventName}</p>
                    <p class="text-2xl openSans text-amber-500">Venue : {venueName}</p>
                    <p>{location}</p>
                </div>


                <div className='space-y-3 z-10'>

                    <h2 className='text-2xl border-b border-gray-400 text-white font-medium openSans'>Cost & Capacity</h2>
                    <div className='space-y-2 border-b border-gray-400 text-white pb-2'>
                        <p>Event Cost : ${eventPrice}</p>
                        <p>Venue Cost : ${price}</p>
                        <p>Venue code : {code}</p>
                        <p>Capacity : {seats} Seats</p>
                    </div>


                    <p className='uppercase text-lg text-white font-semibold'>Total Amount = ${totalPrice} </p>

                    {/* <div class="card-actions justify-end ">
                        <button onClick={() => handleBookingCancle(_id)} class="btn btn-error text-white">Cancle</button>

                        <Link to={`/dashboard/payment/${_id}`} class="btn btn-success">Pay</Link>
                    </div> */}

                    <div class="flex justify-end gap-5 px-5 pt-5">

                        {
                            booking?.transactionId ?
                                <p className='text-white pb-5 text-lg'> <span className='text-amber-500'>Transaction Id:</span> {booking?.transactionId}</p>
                                :
                                <>
                                    <button onClick={() => handleBookingCancle(_id)} class={`border-4 border-red-500 inline-block w-28 h-12 openSans uppercase tracking-wider transition-all text-red-500 font-extrabold hover:shadow-[0_0_35px_rgb(236,68,68)] hover:bg-red-500 hover:text-gray-900 text-lg duration-300`}>Cancel</button>
                                    <button onClick={() => navigate(`/dashboard/payment/${_id}`)} class={`border-4 border-sky-500 inline-block w-28 h-12 openSans uppercase tracking-wider transition-all text-sky-500 font-extrabold hover:shadow-[0_0_35px_rgb(14,165,233)] hover:bg-sky-500 hover:text-gray-900 text-lg duration-300`}>Pay</button>
                                </>
                        }

                    </div>

                </div>

            </div>


        </div>

    )
}

export default DisplayMyBooking
