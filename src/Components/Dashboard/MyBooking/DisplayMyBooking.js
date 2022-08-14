import React from 'react'
import { Link } from 'react-router-dom'

function DisplayMyBooking({ booking, handleBookingCancle }) {

    const { _id, user_name, user_email, phone, address, message, code, eventName, eventPrice, image, img, venueName, seats, price, location, totalPrice } = booking

    return (
        <div class=" bg-slate-200 shadow-xl rounded-lg flex items-center justify-around flex-col sm:flex-row py-8 px-5 sm:px-0  relative overflow-hidden">



           
                <img src={image} alt="" className='absolute top-0 sm:top-auto lg:bottom-0 left-0 brightness-50 ' />

                <div className='z-10 text-white '>
                    <p class=" text-2xl openSans">{eventName}</p>
                    <p class="text-2xl openSans">Venue : {venueName}</p>
                    <p>{location}</p>
                </div>
            


            <div className='space-y-3 z-10'>

                <h2 className='text-2xl border-b border-gray-400 text-gray-800 font-medium openSans'>Cost & Capacity</h2>
                <div className='space-y-2 border-b border-gray-400 pb-2'>
                    <p>Event Cost : ${eventPrice}</p>
                    <p>Venue Cost : ${price}</p>
                    <p>Venue code : {code}</p>
                    <p>Capacity : {seats} Seats</p>
                </div>


                <p className='uppercase text-lg font-semibold'>Total Amount = ${totalPrice} </p>

                <div class="card-actions justify-end ">
                    <button onClick={() => handleBookingCancle(_id)} class="btn btn-error text-white">Cancle</button>
                    <Link to={`/dashboard/payment/${_id}`} class="btn btn-success">Pay</Link>
                </div>

            </div>



        </div>

    )
}

export default DisplayMyBooking
