import React from 'react'
import { Link } from 'react-router-dom'

function DisplayMyBooking({ booking, handleBookingCancle }) {

    const { _id, user_name, user_email, phone, address, message, code, eventName, eventPrice, image, img, venueName, seats, price, location, totalPrice } = booking

    return (
        <div>
            <div class=" bg-slate-200 shadow-xl">
    
                <div class="p-5 ">
                    <div className=''>
                        
                            <div className='lg:my-5 flex items-center justify-around'>
                                <p class=" text-2xl openSans"> Event : {eventName}</p>
                                <p>Price : ${eventPrice}</p>
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

    //     <div class={`shadow-xl py-10 px-3 rounded-md bg-slate-200 basis-[43rem] gap-x-3 gap-y-3 shrink flex flex-wrap items-center justify-center `}>

    //     <div className='h-32 space-y-2 basis-[20rem] shrink'>
    //         <span className='font-medium text-gray-500'>{}</span> <br />
    //         <h3 class=" text-2xl openSans">{} <br />{}</h3>
    //         <p className='font-medium text-gray-500'>{} <br /> {}</p><br />
    //     </div>

    //     <div className='space-y-2 basis-[20rem] shrink'>
    //         <p class="text-xl openSans font-bold text-gray-700 mb-2">Ticket & Type</p>
    //         <div className='grid grid-cols-3 gap-2'>
    //             <span className='font-bold'>Type</span>
    //             <span className='font-bold justify-self-center'>Ticket</span>
    //             <span className='font-bold justify-self-center'>Price</span>

    //             <span>Enterprise</span>
    //             <span className='justify-self-center'>{}</span>
    //             <span className='justify-self-center'>${}</span>

    //             <span>Professional</span>
    //             <span className='justify-self-center'>{}</span>
    //             <span className='justify-self-center'>${}</span>

    //             <span>Standard</span>
    //             <span className='justify-self-center'>{}</span>
    //             <span className='justify-self-center'>${}</span>

    //             <hr className='col-span-full ' />
    //             <span className='uppercase text-lg font-semibold col-span-2'>Total Amount =</span>
    //             <span className='uppercase text-lg font-semibold justify-self-center'>${}</span>
    //         </div>

    //         <div class="flex justify-end gap-5 px-5 pt-5">
    //             <button onClick={() => handleBookingCancle()} class="btn btn-error text-white">Cancle</button>
    //             <Link to=' ' class="btn btn-success text-white">Pay</Link>
    //         </div>
    //     </div>
    // </div>
    )
}

export default DisplayMyBooking
