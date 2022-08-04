/* eslint-disable no-unused-vars */
import React from 'react';
import CountDown from '../CountDown/CountDown';
import { AiOutlineClockCircle } from "react-icons/ai";
import { GoLocation } from "react-icons/go";
import "./upcommingevent.css";
import { useNavigate } from 'react-router-dom';

const Event = ({event, idx, imageIndex}) => {
    const navigate = useNavigate();
    const {address, date, starttime, endtime, ticketprice, title, type, image} = event;
    const [day,month,year] = date.split(',');

    return (
        <div>
            <div className={`slide ${idx === imageIndex ? "activeSlide mt-10" : "mt-16"}`}>

                {
                    idx === imageIndex ?
                        <div className="scale-50 2xl:scale-100 flex justify-center min-w-[20rem] h-32">
                            <CountDown></CountDown>
                        </div> :
                        <div className="scale-50 2xl:scale-100 flex justify-center min-w-[20rem] h-32">

                        </div>
                }

                <div className="relative">
                    <img className="h-60" src={image} alt={title} />


                    {
                        idx === imageIndex &&
                        <div className='bg-white w-[200px] sm:w-[250px] rounded sdw p-2 sm:px-5 absolute -bottom-20 right-[10%]'>
                            <div className='space-y-2'>
                                <h1 className="title-inline pb-2">{title}</h1>
                                <p className="text-[#ffbe30] font-bold">Ticket from ${ticketprice}</p>
                                <p className="text-[#878787] text-sm">
                                    <span className="bg-[#f7f7f7] p-1 text-center rounded-full">
                                        <AiOutlineClockCircle className='inline-block text-xl -mt-1 text-[#ffbe30] rounded-t-full' />
                                    </span>
                                    {starttime} - {endtime}</p>
                                <p className="text-[#878787] text-sm flex">
                                    <span className=" bg-[#f7f7f7] p-1 text-center rounded-full">
                                        <GoLocation className='inline-block text-xl -mt-1 text-[#ffbe30] ' />
                                    </span>
                                    {address}</p>
                                <button className="custom-btn px-5 font-bold py-2 rounded-full text-white " onClick={()=> navigate(`/event-details/${event._id}`)}>Tickets & details</button>
                            </div>
                        </div>
                    }

                    {
                        idx === imageIndex &&
                        <h1 className="text-3xl font-black text-white text-center uppercase px-3 py-3 rounded absolute -top-2 left-[10%] sm:left-[5%] upcomingbg " >
                            {day}
                            <br />
                            {month.slice(0,3)}
                        </h1>
                    }
                </div>
            </div>
        </div>
    );
};

export default Event;