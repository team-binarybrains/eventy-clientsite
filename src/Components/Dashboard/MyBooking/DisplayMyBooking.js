import React from 'react'
import { Link } from 'react-router-dom'

function DisplayMyBooking({ booking, handleBookingCancle }) {

    const { _id, user_name, user_email, phone, address, message, code, eventName, eventPrice, image, img, venueName, seats, price, location } = booking

    return (
        <div>
            <div class="card card-side bg-base-100 shadow-xl">
                {/* <figure><img src={image} alt="" className='h-80' /></figure> */}
                <div class="card-body">
                    <div className='grid gap-y-6'>
                        <div className='flex lg:flex-col flex-col-reverse'>

                            <div>
                                <p className=' text-2xl operator italic'>User Information</p>
                                <p className='grid'>
                                    <span>Name : {user_name}</span>
                                    {/* <span>Phone : {phone}</span> */}
                                    <span>Email : {user_email}</span>
                                    {/* <span>Address : {address}</span> */}
                                </p>
                            </div>

                            <div className='mt-4 lg:mt-3'>
                                <p class=" text-2xl operator italic"> Event : {eventName}</p>
                                <span>Price : ${eventPrice}</span>
                            </div>

                        </div>

                        <div className=''>
                            <p class="text-2xl operator italic">Venue : {venueName}</p>
                            <p className=''>
                                <span>Price : ${price}</span> <br />
                                <span>Venue code : {code}</span> <br />
                                <span>Capacity : {seats} Seats</span> <br />
                                <span>Location : {location}</span><br />
                            </p>
                        </div>
                    </div>

<hr />

                    <div className='text-start'>
                        <p className='uppercase text-lg font-semibold'>Total Amount = ${parseInt(eventPrice) + parseInt(price)} </p>
                    </div>

                    <div class="card-actions justify-end ">
                        <button onClick={() => handleBookingCancle(_id)} class="px-6 py-2 rounded-full bg bg-amber-400">Cancle</button>
                        <Link to='/dashboard/payment/${_id}' class="px-6 py-2 rounded-full bg bg-amber-400">Pay</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DisplayMyBooking
