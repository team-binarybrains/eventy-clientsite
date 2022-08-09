import React from 'react'
import { Link } from 'react-router-dom'

function Destination() {
    return (
        <div className='route'>
            <div className=" p-3 bg-image lg:h-[340px] h-[200px] banner-background">
                <div className="flex justify-center items-center h-full lg:-mt-8">
                    <div className="text-white text-center">
                        <p className="tracking-[8px]">ALL YOU NEED TO KNOW</p>
                        <p className="text-4xl text-center font-bold my-3">
                            <span className="text-[#ffbe30] mr-2">DESTINATION MANAGEMENT</span>
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
                        <img src="https://i.ibb.co/W6x98Gs/bdes.jpg" alt="" className='h-96' />
                    </div>

                    <div className='lg:w-4/12 px-3 lg:px-0 py-10 lg:py-0'>
                        <p className='uppercase text-3xl font-semibold'> <span className='text-amber-400 tracking-widest mr-2'>DESTINATION</span>
                         MANAGEMENT SERVICES
                        </p>
                        <p className='py-8'>
                        Eventy destination Management services include: tourism planning, transportation, PRIVATE security details, hotel accommodation, restaurants, activities, excursions, conference venues, themed events, gala dinners and logistics, meetings, incentive schemes as well as helping with overcoming language barriers. We utilize a structured tour model or a small group luxury tour model that is personal and catered to our corporate executives and dignitaries. All of our tours include welcome gifts and some of the most beloved souvenirs from the venues. To provide unparalleled event management solutions while providing our valued clients with a unique, customized experience that fully captures the essence of Wine Country. We also offer destination design services in the greater San Francisco-Bay Area upon request.
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

export default Destination
