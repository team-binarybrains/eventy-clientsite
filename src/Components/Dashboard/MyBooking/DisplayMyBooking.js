import React from 'react'
import { Link } from 'react-router-dom'

function DisplayMyBooking({ booking, handleBookingCancle }) {

    const { _id, user_name, user_email, phone, address, message, code, eventName, eventPrice, image, img, venueName, seats, price, location } = booking

    return (
        <div>
            <div class="card card-side bg-base-100 shadow-xl">
                {/* <figure><img src={image} alt="" className='h-80' /></figure> */}
                <div class="card-body">
                    <div className='grid lg:flex justify-around gap-y-6'>
                        <div className='flex lg:flex-col flex-col-reverse'>
                            <div className='mt-4 lg:mt-0'>
                                <h2 class=" text-2xl"> Event : {eventName}</h2>
                                <span>Price : ${eventPrice}</span>
                            </div>
                            <div>
                                <p className='lg:mt-3 text-xl font-semibold'>User Information</p>
                                <p className='grid'>
                                <span>Name : {user_name}</span>
                                <span>Phone : {phone}</span> 
                                <span>Email : {user_email}</span>
                                <span>Address : {address}</span>
                            </p>
                            </div>
                        </div>

                        <div className=''>
                            <h2 class="text-2xl">Venue : {venueName}</h2>
                            <p className=''>
                                <span>Price : ${price}</span> <br />
                                <span>Venue code : {code}</span> <br />
                                <span>Capacity : {seats} Seats</span> <br />
                                <span>Location : {location}</span><br />
                            </p>
                        </div>
                    </div>

                    <div className='text-center'>
                        <p className='uppercase text-lg font-semibold'>Total Amount = ${parseInt(eventPrice) + parseInt(price)} </p>
                    </div>

                    <div class="card-actions justify-center lg:my-4">
                            <button onClick={() => handleBookingCancle(_id)} class="px-6 py-2 rounded-full bg bg-amber-400">Cancle</button>
                            <Link to='/dashboard/payment/${_id}' class="px-6 py-2 rounded-full bg bg-amber-400">Pay</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DisplayMyBooking
