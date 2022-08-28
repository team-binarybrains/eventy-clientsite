import axios from 'axios'
import React, { useEffect, useState } from 'react'

function DisplayAllBookings({ booking, handleBookingCancle }) {

    const { _id, user_name, user_email, phone, address, message, code, eventName, eventPrice, image, img, venueName, seats, price, location, totalPrice } = booking

    const [paymentInfo, setPaymentInfo] = useState({})

    useEffect(() => {
        axios.get('http://localhost:5000/get-payment')
            .then(res => {
                const { data } = res
                console.log(data);
                setPaymentInfo(data)
            })
    }, [])

    return (
        <div>
            <div class="card card-side bg-base-100 shadow-xl"
                data-aos="flip-down"
                data-aos-duration="2500"
            >
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
                        <p className='uppercase text-lg font-semibold'>Total Amount = {totalPrice} </p>

                        {
                            paymentInfo[0]?.productId == _id &&
                            <div>
                                <p className='uppercase text-lg font-semibold'>Paid Amount: {paymentInfo[0]?.paidAmount}</p>
                                <p className='text-black pb-5 text-lg'> <span className='text-amber-500'>Transaction Id:</span> {paymentInfo[0]?.transactionId}</p>
                            </div>
                        }
                    </div>

                    <div class="card-actions justify-center lg:my-4">
                        <button
                            onClick={() => handleBookingCancle(_id)}
                            class="px-6 py-2 rounded-full bg bg-amber-400">Cancle</button>
                        {/* <button class="px-6 py-2 rounded-full bg bg-amber-400">Confirm</button> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DisplayAllBookings
