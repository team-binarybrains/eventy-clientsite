import React from 'react'
import { Link } from 'react-router-dom'
import Venues from '../../Home/Venues/Venues'

function VenueFacility() {
    return (
        <div className='route'>
            <div className=" p-3 bg-image lg:h-[340px] h-[200px] banner-background">
                <div className="flex justify-center items-center h-full lg:-mt-8">
                    <div className="text-white text-center">
                        <p className="tracking-[8px]">ALL YOU NEED TO KNOW</p>
                        <p className="text-4xl text-center font-bold my-3">
                            <span className="text-[#ffbe30] mr-2">VENUE & FACILITY NEGOTIATION</span>
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
                        <img src="https://i.ibb.co/nb9pD6G/venues-slide-2.jpg" alt="" className='h-96' />
                    </div>

                    <div className='lg:w-4/12 px-3 lg:px-0 py-10 lg:py-0'>
                        <p className='uppercase text-3xl font-semibold'>EVENT <span className='text-amber-400 tracking-widest'>VENUE & FACILITY</span></p>
                        <p className='py-8'>
                            At EVENTY, we are snoots when it comes to our venues. We deal in luxury and our venues are no different. Although we work with many venues around the world, we must admit, we have favorites. Look at our very best venues in Washington below. Venues are ranked based on our 120 pts of customer services. We believe each client should be treated with respect, dignity and greeted with impeccable hospitality. We select our venues based on a number of factors, but most importantly, our top concern is hospitality. We use several museums and private venues.
                        </p>
                        <div className='flex justify-end'>
                            <img src="https://i.ibb.co/MRXgQwx/eventy-signature.png" alt="" className='' />
                        </div>
                    </div>
                </div>
            </div>

            <div className='lg:py-20 py-6 lg:mx-40 flex justify-center'>
                <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 '>

                    <div className="w-72 max-w-full bg-white cursor-pointer">
                        <div>
                            <h5 class="text-lg font-medium text-amber-500">VENUE SELECTION</h5>
                            <div className='text-gray-500'>
                                <p class="mt-2">● Venue Pricing</p>
                                <p class="mt-2">● Venue Location</p>
                                <p class="mt-2">● Amenities Review</p>
                                <p class="mt-2">● Floor Plan Packages</p>
                            </div>
                        </div>
                    </div>

                    <div class="w-72 max-w-full bg-white cursor-pointer">
                        <div>
                            <h5 class="text-lg font-medium text-amber-500">LOGISTICS</h5>
                            <div className='text-gray-500'>
                                <p class="mt-2">● Decor</p>
                                <p class="mt-2">● Venue Setup</p>
                                <p class="mt-2">● Run of Show</p>
                                <p class="mt-2">● Audiovisual and Sound Setup</p>
                            </div>
                        </div>
                    </div>

                    <div class="w-72 max-w-full bg-white cursor-pointer">
                        <div>
                            <h5 class="text-lg font-medium text-amber-500">VENDOR FACILITATION</h5>
                            <div className='text-gray-500'>
                                <p class="mt-2">● Financing</p>
                                <p class="mt-2">● Process Planning</p>
                                <p class="mt-2">● Venue Management</p>
                                <p class="mt-2">● Proposal Development</p>
                            </div>
                        </div>
                    </div>

                    <div class="w-72 max-w-full bg-white cursor-pointer">
                        <div>
                            <h5 class="text-lg font-medium text-amber-500">CONTRACTING</h5>
                            <div className='text-gray-500'>
                                <p class="mt-2">● Cost Analysis</p>
                                <p class="mt-2">● Negotiate Fees</p>
                                <p class="mt-2">● Contract Reviews</p>
                                <p class="mt-2">● Contract Management</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            
                <Venues></Venues>

        </div>
    )
}

export default VenueFacility
