import React from 'react'
import { Link } from 'react-router-dom'

function DisplayMyBooking({ booking, handleBookingCancle }) {

    const { _id, user_name, user_email, phone, address, message, code, eventName, eventPrice, image, img, venueName, seats, price, location, totalPrice } = booking

    return (
        <div>
            <div class="card card-side bg-base-100 shadow-xl">
                {/* <figure><img src={image} alt="" className='h-80' /></figure> */}
                <div class="card-body">
                    <div className=''>
                        <div className=''>

                            {/* <div>
                                <p className=' text-2xl openSans'>User Information</p>
                                <div className=''>
                                    <p>Name : {user_name}</p>
                                    <p>Phone : {phone}</p>
                                    <p>Email : {user_email}</p>
                                    <p>Address : {address}</p>
                                </div>
                            </div> */}

                            <div className='mt-y lg:my-5'>
                                <p class=" text-2xl openSans"> Event : {eventName}</p>
                                <p>Price : ${eventPrice}</p>
                            </div>

                        </div>

                        <div className=''>
                            <p class="text-2xl openSans">Venue : {venueName}</p>
                                <p>Price : ${price}</p>
                                <p>Venue code : {code}</p> 
                                <p>Capacity : {seats} Seats</p> 
                                <p>Location : {location}</p>
                        </div>
                    </div>

                    <hr />

                    <div className='text-start'>
                        <p className='uppercase text-lg font-semibold'>Total Amount = ${totalPrice} </p>
                    </div>

                    <div class="card-actions justify-end ">
                        <button onClick={() => handleBookingCancle(_id)} class="btn btn-error text-white">Cancle</button>
                        <Link to={`/dashboard/payment/${_id}`} class="btn btn-success">Pay</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DisplayMyBooking
