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
        <div className='grid lg:grid-cols-2 grid-rows-none grid-cols-none gap-x-20 lg:p-20'>
            {
                myBookingServices.map(booking => <DisplayMyBooking
                    key={booking._id}
                    booking={booking}
                    handleBookingCancle={handleBookingCancle}
                />)
            }
        </div>
    )
}

export default MyBooking
