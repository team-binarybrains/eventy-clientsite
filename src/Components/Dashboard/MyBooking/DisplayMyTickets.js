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
        <div>
            <div class="card-side bg-base-100 shadow-xl ">
                {/* <figure><img src={image} alt="" className='h-80' /></figure> */}
                <div class="card-body">
                    <div className='grid gap-y-6'>
                        <div className='flex lg:flex-col flex-col-reverse'>

                            <div>
                                <p className=' text-2xl operator italic'>User Information</p>
                                <p className='grid'>
                                    <span>Name : {user?.displayName}</span>
                                    {/* <span>Phone : {phone}</span> */}
                                    <span>Email : {user?.email}</span>
                                    {/* <span>Address : {address}</span> */}
                                </p>
                            </div>

                            <div className='mt-4 lg:mt-3'>
                                <p class=" text-2xl operator italic"> Event : {event?.title}</p>
                                <span>date : {event?.date}</span> <br />
                                <span>Location : {event?.address}</span><br />
                            </div>

                        </div>

                        <div className=''>
                            <p class="text-2xl operator italic">Ticket & Type</p>
                            <p className=''>
                                <span>Enterprise({enterprise?.ticket}) : ${enterprise?.price}</span> <br />
                                <span>Professional({professional?.ticket}) : ${professional?.price}</span> <br />
                                <span>Standard({standard?.ticket}) : {standard?.price}</span> <br />
                            </p>
                        </div>
                    </div>

<hr />

                    <div className='text-start'>
                        <p className='uppercase text-lg font-semibold'>Total Amount = ${total} </p>
                    </div>

                    <div class="card-actions justify-end ">
                        <button onClick={() => handleBookingCancle(eventId)} class="px-6 py-2 rounded-full bg bg-amber-400">Cancle</button>
                        <Link to=' ' class="px-6 py-2 rounded-full bg bg-amber-400">Pay</Link>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default DisplayMyTickets;