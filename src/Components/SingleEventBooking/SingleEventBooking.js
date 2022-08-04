import React from 'react';
import { useParams } from 'react-router-dom';
import useFetch from '../Home/OurServices/Hook/useFetch';

const SingleEventBooking = () => {
    const {id} = useParams();
    
    const event = useFetch(`http://localhost:5000/venue/${id}`,{});

    return (
        <div className='route'>
            <img src={event?.img} alt="" className='h-[80vh] w-screen object-cover' />
        </div>
    );
};

export default SingleEventBooking;