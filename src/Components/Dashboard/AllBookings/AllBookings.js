import axios from 'axios'
import React, { useEffect, useState } from 'react'
import useRefetch from '../../Hooks/useRefetch';
import DisplayAllBookings from './DisplayAllBookings'

function AllBookings() {

    // const [allBooking, setAllBooking] = useState([])
    
    const [allBooking, loading , refetch] = useRefetch('http://localhost:5000/get-all-booking-info', []) 
    console.log(allBooking);

    // useEffect(() => {

    //     axios.get('http://localhost:5000/get-all-booking-info')
    //         .then(res => {
    //             const { data } = res
    //             setAllBooking(data)
    //             console.log(data);
    //         })

    // }, [])


    return (
        <div className='grid lg:grid-cols-1 grid-rows-none grid-cols-none gap-y-5 gap-x-20 lg:p-20'>

            <div className='flex justify-center border-b-2 lg:mb-5'>
                <p className='text-3xl font-bold '
                    data-aos="zoom-in"
                    data-aos-duration="2500"
                >
                    ALL
                    <span className='text-amber-400 tracking-widest mx-2' data-testid="booking">BOOKING</span>
                    INFORMATION

                </p>

            </div>


            {
                [...allBooking].reverse().map(booking => <DisplayAllBookings
                    key={booking._id}
                    booking={booking}
                    // handleBookingCancle={handleBookingCancle}
                />)
            }

        </div>
    )
}

export default AllBookings
