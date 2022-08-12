import axios from 'axios';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../Firebase/firebase.init';
import useRefetch from '../../Hooks/useRefetch';

const DisplayMyTickets = ({ticket,refetch}) => {
    const [user] = useAuthState(auth);
    const { _id, enterprise, eventId, professional, standard, total, userId, bookingId} = ticket;

    const [event] = useRefetch(`http://localhost:5000/event-details/${ticket?.eventId}`,{})
    // cancle order
    const handleBookingCancle = id => {
        console.log(id);

        const proceed = window.confirm("Are you sure?");

        if (proceed) {
            axios.delete(`http://localhost:5000/delete-booked-ticket/${id}`)
                .then(({data}) => data?.acknowledged && refetch())
        }
    }

    return (
        <div class={`shadow-xl py-10 px-3 rounded-md bg-slate-200 basis-96 shrink`}>

            <div className='h-32 space-y-2'>
                <span className='font-medium text-gray-500'>{event?.date}</span> <br />
                <h3 class=" text-2xl openSans">{event?.title}</h3>
                <span className='font-medium text-gray-500'>{event?.address}</span><br />
            </div>
            <div className='space-y-2 mt-5'>
                <p class="text-xl openSans font-bold text-gray-700 mb-2">Ticket & Type</p>
                <div className='grid grid-cols-3 gap-2'>
                    <span className='font-bold'>Type</span>
                    <span className='font-bold justify-self-center'>Ticket</span>
                    <span className='font-bold justify-self-center'>Price</span>
                    
                    <span>Enterprise</span>
                    <span className='justify-self-center'>{enterprise?.ticket}</span>
                    <span className='justify-self-center'>${enterprise?.price}</span>

                    <span>Professional</span>
                    <span className='justify-self-center'>{professional?.ticket}</span>
                    <span className='justify-self-center'>${professional?.price}</span>

                    <span>Standard</span>
                    <span className='justify-self-center'>{standard?.ticket}</span>
                    <span className='justify-self-center'>${standard?.price}</span>

                    <hr className='col-span-full '/>
                    <span className='uppercase text-lg font-semibold col-span-2'>Total Amount =</span>
                    <span className='uppercase text-lg font-semibold justify-self-center'>${total}</span>
                </div>
            </div>

            

            <div class="flex justify-end gap-5 px-5 pt-5">
                <button onClick={() => handleBookingCancle(eventId)} class="btn btn-error text-white">Cancle</button>
                <Link to=' ' class="btn btn-success text-white">Pay</Link>
            </div>
        </div>
    )
};

export default DisplayMyTickets;