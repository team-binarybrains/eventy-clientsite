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
                    <div className='col-span-2 flex flex-col justify-center'>
                        <AiFillEnvironment className='text-5xl bg-amber-400 p-3 text-white rounded-full' />
                    </div>
                    <div className='col-span-9 pl-5'>
                        <h4 style={{ color: "#333333" }} className='font-semibold'>event location</h4>
                        <h3 className='text-lg font-bold'>VANILA HOTEL</h3>
                    </div>
                    <div className='col-span-1 flex items-center'>
                        <FontAwesomeIcon className='text-xs bg-gray-400 p-1 text-white rounded-full' icon={faChevronUp}></FontAwesomeIcon>
                    </div>
                </div>
            </div>

            <div className='p-8 border-b'>
                <span className='bg-slate-100 px-8 py-3 inline-block font-bold text-amber-400'>Istanbul Turkey</span>
                <ul className='flex flex-col gap-3 mt-8 text-sm pb-8'>
                    <li className='flex items-center'> <FontAwesomeIcon className='text-amber-400 text-lg mr-2' icon={faCircleArrowRight}></FontAwesomeIcon> Bayezid II Mosque and Beyazid Square</li>
                    <li className='flex items-center'> <FontAwesomeIcon className='text-amber-400 text-lg mr-2' icon={faCircleArrowRight}></FontAwesomeIcon> Istanbul, IS 240012</li>
                    <li className='flex items-center'> <FontAwesomeIcon className='text-amber-400 text-lg mr-2' icon={faCircleArrowRight}></FontAwesomeIcon> Thursday, December 26, 2018</li>
                    <li className='flex items-center'> <FontAwesomeIcon className='text-amber-400 text-lg mr-2' icon={faCircleArrowRight}></FontAwesomeIcon> From <b className='mx-1'>15.00 PM</b> to <b className='mx-1'>20.00 PM</b> (EST)</li>
                </ul>
                <button className='py-4 px-9 custom-btn rounded-full uppercase font-semibold text-white'>Add To My Calender</button>
            </div>

            <div className='p-8 border-b'>
                <div className='grid grid-cols-12'>
                    <div className='col-span-2 flex flex-col justify-center'>
                        <FaLink className='text-5xl bg-amber-400 p-3 text-white rounded-full' />
                    </div>
                    <div className='col-span-9 pl-5'>
                        <h4 style={{ color: "#333333" }} className='font-semibold'>contact information</h4>
                        <h3 className='text-lg font-bold'>HARMONI STAFF</h3>
                    </div>
                    <div className='col-span-1 flex items-center'>
                        <FontAwesomeIcon className='text-xs bg-gray-400 p-1 text-white rounded-full' icon={faChevronUp}></FontAwesomeIcon>
                    </div>
                </div>
            </div>

            <div className='p-8 border-b'>
                <p className='mb-8'>Fusce pellentesque velvitae tincidunt egestas. Pellentesque habitant. Proin gravida nibh vel velit auctor aliquet. sollicitudin, lorem quis more...</p>
                <div className='flex flex-col gap-2'>
                    <div className='flex items-center'>
                        <div>
                            <FaFacebookF className='text-4xl bg-amber-400 p-2 text-white rounded-full' />
                        </div>
                        <div className='pl-5'>
                            <h3 className='text-base font-bold'>facebook.com/harmoni</h3>
                        </div>
                    </div>
                    <div className='flex items-center'>
                        <div>
                            <FaTwitter className='text-4xl bg-amber-400 p-2 text-white rounded-full' />
                        </div>
                        <div className='pl-5'>
                            <h3 className='text-base font-bold'> twitter.com@harmoni</h3>
                        </div>
                    </div>
                    <div className='flex items-center'>
                        <div>
                            <FaLink className='text-4xl bg-amber-400 p-2 text-white rounded-full' />
                        </div>
                        <div className='pl-5'>
                            <h3 className='text-base font-bold'>http://www.harmoni.com</h3>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default TicketInfo;