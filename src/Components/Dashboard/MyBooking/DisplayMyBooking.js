import React from 'react'

function DisplayMyBooking({ booking, handleBookingCancle }) {

    const {_id, user_name, user_email, phone, address, message, code, eventName, eventPrice, image } = booking

    return (
        <div>
            <div class="card card-side bg-base-100 shadow-xl">
                <figure><img src={image} alt="" className='h-80' /></figure>
                <div class="card-body">
                    <h2 class="card-title text-2xl">{eventName}</h2>
                    <p className=''>
                        <span>Venue code : {code}</span> <br />
                        <span>Address : {address}</span> <br />
                        <span>Phone : {phone}</span> <br />
                        <span>Amount : {eventPrice}</span>
                    </p>
                    <div class="card-actions justify-end">
                    <button onClick={()=>handleBookingCancle(_id)} class="btn btn-primary">Cancle</button>
                        <button class="btn btn-primary">Pay</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DisplayMyBooking
