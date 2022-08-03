import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function SingleService() {

    const { id } = useParams()
    const [serviceDetails, setServiceDetails] = useState({})
    console.log(serviceDetails);

    useEffect(() => {

        axios.get(`http://localhost:5000/single-service/${id}`)
            .then(res => {
                const { data } = res
                setServiceDetails(data)
            })
    }, [id])

    return (
        <div>
            <p className=''>{serviceDetails.eventName}</p>
        </div>
    )
}

export default SingleService
