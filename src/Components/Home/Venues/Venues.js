import axios from 'axios';
import React, { useEffect, useState } from 'react';
import styles from './venue.module.css';

const Venues = () => {
    const [select,setSelect] = useState({});
    const [venues,setVenues] = useState([]);
    useEffect(()=> {
        axios.get('venues.json')
        .then(res => {
            setVenues(res.data);
            setSelect(res.data[0]);
        })
    },[])

    const selection = (venue)=> {
        setSelect(venue);
    }

    return (
        <div className='bg-[#333333] py-[100px] flex sm:flex-row flex-col sm:items-end sm:justify-center gap-5'>
            <div className='grow basis-[50%] shrink px-3 sm:px-0'>
                <div className='max-w-[530px] ml-auto text-center sm:text-left'>
                    <div className='h-[3px] w-[70px] bg-gradient-to-r from-red-500 to-pink-500 mx-auto sm:mx-0 mb-2' />
                    <h4 className={`${styles.openSans} text-white uppercase tracking-[5px] mb-4`}>Harmoni Venues</h4>
                    <h2 className={`${styles.roboto} text-4xl text-white`}>Conference <span className='font-bold'>Rooms & Hotels</span></h2>
                </div>
                <div className={`h-[424px] max-w-[500px] overflow-y-scroll mt-10 ${styles.section} ml-auto`}>

                    {
                        venues.map((venue)=> {
                            return <div className={`h-[141px] max-w-[424.4px] mr-[30px] p-[30px] flex items-start gap-[10%] text-white whitespace-pre cursor-pointer ${venue.id===select.id && styles.selected}`} key={venue.id} onClick={() => selection(venue)}>
                                <img className='h-[80px] max-w-[80px] object-cover overflow-hidden' src={venue?.img} alt="" />
                                <div className='space-y-1 shrink'>
                                    <h5 className=''><span className='text-red-600 font-bold'>{`${venue?.star} ⭐ ${venue?.venueName}`}</span> Hotel</h5>
                                    <h6 className='text-xs'>{`Party Room ${venue?.seats} seats`}</h6>
                                    <h6 className='text-red-600 font-bold text-xs'>{`Price from $${venue?.price}/night`}</h6>
                                </div>
                            </div>
                        })
                    }

                </div>
            </div>
            <div className={`h-[424px] sm:min-w-[500px] grow basis-[50%] shrink relative ${styles.highlight}`}>
                <img src={select.img} alt="" className={`w-full h-[200px] sm:h-[424px] object-cover ${styles.child} opacity-80`}/>
                <div className={`absolute top-0 left-0 ${styles.batch} flex justify-end pr-6`}>
                    <p className='font-bold text-lg text-center rotate-90'>{select.star} ⭐ <br /> Hotel</p>
                </div>
                <button className={`absolute bg-gradient-to-r from-red-500 to-pink-500 top-[48%] right-[41%] px-5 py-2 pt-3 rounded-full text-white font-bold uppercase z-10 hover:scale-105 transition-transform active:scale-100`}>Book Now</button>
            </div>
        </div>
    );
};

export default Venues;