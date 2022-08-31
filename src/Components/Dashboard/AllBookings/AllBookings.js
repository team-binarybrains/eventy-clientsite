import axios from 'axios'
import React, { useEffect, useState } from 'react'
import DisplayAllBookings from './DisplayAllBookings'

function AllBookings() {

    const [allBooking, setAllBooking] = useState([])

    useEffect(() => {

        axios.get('http://localhost:5000/get-all-booking-info')
            .then(res => {
                const { data } = res
                setAllBooking(data)
                console.log(data);
            })

    }, [])


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
                    const remaining = allBooking.filter(
                        (bookingItems) => bookingItems._id !== id
                    )
                    setAllBooking(remaining);
                })
        }
    }

    return (
        <div className='grid lg:grid-cols-1 grid-rows-none grid-cols-none gap-y-5 gap-x-20 lg:p-20'>

            <div className='flex justify-center border-b-2 lg:mb-5'>
                <p className='text-3xl font-bold '
                    data-aos="zoom-in"
                    data-aos-duration="2500"
                >
                    ALL
                    <span className='text-amber-400 tracking-widest mx-2'>BOOKING</span>
                    INFORMATION

                </p>

            </div>

     
                {
                    [...allBooking].reverse().map(booking => <DisplayAllBookings
                        key={booking._id}
                        booking={booking}
                        handleBookingCancle={handleBookingCancle}
                    />)
                }
        
        </div>
    )
}

export default AllBookings
