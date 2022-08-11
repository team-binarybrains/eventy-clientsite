import axios from 'axios'
import React, { useState } from 'react'

function AllBookings() {

    const [allBooking, setAllBooking] = useState([])

    axios.get('http://localhost:5000/get-all-booking-info')
    .then(res=>{
        const {data} = res
        setAllBooking(data)
        console.log(data);
    })

    return (
        <div>
            
        </div>
    )
}

export default AllBookings
