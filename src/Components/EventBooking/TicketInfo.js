import { faChevronUp, faCircleArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { AiFillEnvironment } from "react-icons/ai";
import { FaLink, FaFacebookF, FaTwitter } from "react-icons/fa";


const TicketInfo = () => {
    return (
        <div className='bg-white'>
            <div className='mt-8 p-8 border-b'>
                <div className='grid grid-cols-12'>
                    <div className='col-span-2 flex flex-col justify-center'
                        data-aos="zoom-in"
                        data-aos-delay="900"
                        data-aos-duration="2000"
                    >
                        <AiFillEnvironment className='text-5xl bg-amber-400 p-3 text-white rounded-full' />
                    </div>
                    <div className='col-span-9 pl-5'>
                        <h4 style={{ color: "#333333" }} className='font-semibold'
                            data-aos="fade-left"
                            data-aos-duration="2000"
                        >event location</h4>

                        <h3 className='text-lg font-bold'
                            data-aos="fade-right"
                            data-aos-duration="2000"
                        >VANILA HOTEL</h3>
                    </div>
                    <div className='col-span-1 flex items-center'
                        data-aos="fade-up"
                        data-aos-duration="2000"
                    >
                        <FontAwesomeIcon className='text-xs bg-gray-400 p-1 text-white rounded-full' icon={faChevronUp}></FontAwesomeIcon>
                    </div>
                </div>
            </div>

            <div className='p-8 border-b'>
                <span className='bg-slate-100 px-8 py-3 inline-block font-bold text-amber-400'
                    data-aos="zoom-in"
                    data-aos-duration="2000"
                >Istanbul Turkey</span>
                <ul className='flex flex-col gap-3 mt-8 text-sm pb-8'>

                    <li className='flex items-center'>
                        <span
                            data-aos="fade-left"
                            data-aos-duration="2000"
                        >
                            <FontAwesomeIcon className='text-amber-400 text-lg mr-2' icon={faCircleArrowRight}></FontAwesomeIcon>
                        </span>
                        <span
                            data-aos="zoom-in"
                            data-aos-delay="600"
                            data-aos-duration="2000"
                        >
                            Bayezid II Mosque and Beyazid Square
                        </span>
                    </li>

                    <li className='flex items-center'>
                        <span
                            data-aos="fade-left"
                            data-aos-duration="2000"
                        ><FontAwesomeIcon className='text-amber-400 text-lg mr-2' icon={faCircleArrowRight}></FontAwesomeIcon></span>
                        <span
                            data-aos="zoom-in"
                            data-aos-delay="600"
                            data-aos-duration="2000"
                        >Istanbul, IS 240012</span></li>

                    <li className='flex items-center'>
                        <span
                            data-aos="fade-left"
                            data-aos-duration="2000"
                        >
                            <FontAwesomeIcon className='text-amber-400 text-lg mr-2' icon={faCircleArrowRight}></FontAwesomeIcon> </span>
                        <span
                            data-aos="zoom-in"
                            data-aos-delay="600"
                            data-aos-duration="2000"
                        >
                            Thursday, December 26, 2018</span>
                    </li>

                    <li className='flex items-center'>
                        <span
                            data-aos="fade-left"
                            data-aos-duration="2000"
                        >
                            <FontAwesomeIcon className='text-amber-400 text-lg mr-2' icon={faCircleArrowRight}></FontAwesomeIcon></span>
                        <span
                            data-aos="zoom-in"
                            data-aos-delay="600"
                            data-aos-duration="2000"
                        >
                            From <b className='mx-1'>15.00 PM</b> to <b className='mx-1'>20.00 PM</b> (EST)</span>
                    </li>

                </ul>
                <button className='py-4 px-9 custom-btn rounded-full uppercase font-semibold text-white'
                data-aos="zoom-in"
                data-aos-duration="2000"
                >Add To My Calender</button>
            </div>

            <div className='p-8 border-b'>
                <div className='grid grid-cols-12'>
                    <div className='col-span-2 flex flex-col justify-center'
                    data-aos="zoom-in"
                    data-aos-delay="700"
                    data-aos-duration="2000"
                    >
                        <FaLink className='text-5xl bg-amber-400 p-3 text-white rounded-full' />
                    </div>
                    <div className='col-span-9 pl-5'>
                        <h4 style={{ color: "#333333" }} className='font-semibold'
                        data-aos="fade-left"
                        data-aos-duration="2000"
                        >contact information</h4>
                        <h3 className='text-lg font-bold'
                        data-aos="fade-right"
                        data-aos-duration="2000"
                        >HARMONI STAFF</h3>
                    </div>
                    <div className='col-span-1 flex items-center'
                    data-aos="fade-up"
                    data-aos-duration="2000"
                    >
                        <FontAwesomeIcon className='text-xs bg-gray-400 p-1 text-white rounded-full' icon={faChevronUp}></FontAwesomeIcon>
                    </div>
                </div>
            </div>

            <div className='p-8 border-b'>
                <p className='mb-8'
                data-aos="flip-down"
                data-aos-duration="2000"
                >Fusce pellentesque velvitae tincidunt egestas. Pellentesque habitant. Proin gravida nibh vel velit auctor aliquet. sollicitudin, lorem quis more...</p>
                <div className='flex flex-col gap-2'>
                    <div className='flex items-center'>
                        <div
                        data-aos="fade-left"
                        data-aos-duration="2000"
                        >
                            <FaFacebookF className='text-4xl bg-amber-400 p-2 text-white rounded-full' />
                        </div>
                        <div className='pl-5'
                        data-aos="zoom-in"
                        data-aos-delay="600"
                        data-aos-duration="2000"
                        >
                            <h3 className='text-base font-bold'>facebook.com/eventy</h3>
                        </div>
                    </div>

                    <div className='flex items-center'>
                        <div
                        data-aos="fade-left"
                        data-aos-duration="2000"
                        >
                            <FaTwitter className='text-4xl bg-amber-400 p-2 text-white rounded-full' />
                        </div>
                        <div className='pl-5'
                        data-aos="zoom-in"
                        data-aos-delay="600"
                        data-aos-duration="2000"
                        >
                            <h3 className='text-base font-bold'> twitter.com@eventy</h3>
                        </div>
                    </div>
                    <div className='flex items-center'>
                        <div
                        data-aos="fade-left"
                        data-aos-duration="2000"
                        >
                            <FaLink className='text-4xl bg-amber-400 p-2 text-white rounded-full' />
                        </div>
                        <div className='pl-5'
                        data-aos="zoom-in"
                        data-aos-delay="600"
                        data-aos-duration="2000"
                        >
                            <h3 className='text-base font-bold'>http://www.eventy.com</h3>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default TicketInfo;