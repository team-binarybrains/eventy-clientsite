import React from 'react'
import { Link } from 'react-router-dom'
import useFetch from '../../Home/OurServices/Hook/useFetch'

function Logistics() {

    const logisticServices = useFetch('http://localhost:5000/get-logistic')

    return (
        <div className='route'>
            <div className=" p-3 bg-image lg:h-[340px] h-[200px] banner-background">
                <div className="flex justify-center items-center h-full lg:-mt-8">
                    <div className="text-white text-center">
                        <p className="tracking-[8px]">ALL YOU NEED TO KNOW</p>
                        <p className="text-4xl text-center font-bold my-3">
                            <span className="text-[#ffbe30] mr-2">LOGISTICS AND REGISTRATION</span>
                            <span className="font-normal tracking-wide">SERVICES</span>
                        </p>
                    </div>
                </div>

                <div className="flex justify-center items-center gap-x-3 lg:-mt-16 -mt-10 text-white ">
                    <Link to="/" className="text-lg">
                        Home
                    </Link>
                    <span>|</span>
                    <Link to="/contact-us" className="text-lg">
                        Contact Us
                    </Link>
                </div>
            </div>

            {/* -------------- */}

            <div className='lg:py-20 bg-gray-100 '>
                <div className='grid lg:flex justify-center gap-x-6'>

                    <div className='lg:w-4/12 flex justify-center items-center'>
                        <img src="https://i.ibb.co/BBskSqc/world-tour-2017-highlights.jpg" alt="" className='h-96' />
                    </div>

                    <div className='lg:w-4/12 px-3 lg:px-0 py-10 lg:py-0'>
                        <p className='uppercase text-3xl font-semibold'>EVENTY EVENT PLANNING <br />
                        <span className='text-amber-400 tracking-widest mr-2'>LOGISTICS</span>
                        AND
                        <span className='text-amber-400 tracking-widest ml-2'>REGISTRATION</span>
                        </p>

                        <p className='py-8'>
                        We plan events in Washington, and nationally in Atlanta, New York, Los Angeles, Miami, Atlanta and Chicago. We manage transportation, venue negotiation, logistics, registration, destination management, hotel rooms, security and offer a customized experience for your organization. Our event planning logistics and registration services can meet the needs of any size conference, convention or meeting. We also handle logistics for social events, fundraisers and political events.
                        </p>
                        <div className='flex justify-end'>
                            <img src="https://i.ibb.co/MRXgQwx/eventy-signature.png" alt="" className='' />
                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default Logistics
