import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../Firebase/firebase.init';
import DisplayMyBooking from './DisplayMyBooking';

function MyBooking() {

    const [user] = useAuthState(auth);
    const [myBookingServices, setMyBookingServices] = useState([])

    useEffect(() => {
        const email = user.email;

        axios.get(`http://localhost:5000/booking-info/${email}`, {
            headers: {
                authorization: ` Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => {
                const { data } = res
                console.log(data);
                setMyBookingServices(data)
            })

    }, [user])


    // cancle order
    const handleBookingCancle = id => {
        console.log(id);

        const proceed = window.confirm("Are you sure?");

        if (proceed) {
            fetch(`http://localhost:5000/delete-booking/${id}`, {
                method: "DELETE",
            })
                .then((res) => res.json())
                .then((data) => {
                    const remaining = myBookingServices.filter(
                        (bookingItems) => bookingItems._id !== id
                    )
                    setMyBookingServices(remaining);
                })
        }
    }


    return (
        <div>

            <div className='flex justify-center border-b-2 lg:mb-5 lg:mt-10 mt-5'>
                <p className='text-3xl font-bold '>
                    YOUR
                    <span className='text-amber-400 tracking-widest mx-2'>BOOKING</span>
                    INFORMATION

                </p>

            </div>

            <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-y-5 gap-x-10 lg:p-10'>

                {
                    [...myBookingServices].reverse().map(booking => <DisplayMyBooking
                        key={booking._id}
                        booking={booking}
                        handleBookingCancle={handleBookingCancle}
                    />)
                }
            </div>
        </div>
    )
}

export default MyBooking
