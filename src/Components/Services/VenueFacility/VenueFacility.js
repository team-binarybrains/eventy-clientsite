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

            <div className='lg:py-20 bg-gray-100'>
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

            {/* ---------- */}
            <Venues></Venues>

            {/* confession */}
            <div className='lg:pt-14 lg:pb-20 py-6'>

                <div className='grid justify-center lg:mb-10'>
                    <p className='text-3xl font-bold text-center'>
                        <span className='text-amber-400 tracking-widest mx-2'>EVENTY</span>
                        PREFERRED VENUES
                    </p>
                </div>

                <div className='grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 lg:gap-y-7 gap-y-3 gap-x-10 lg:w-9/12 mt-6 lg:mt-0 px-3 lg:px-0 mx-auto'>
                    <p className='bg-amber-400 p-2 text-gray-600'>CONCIERGE SERVICE</p>
                    <p className='bg-amber-400 p-2 text-gray-600'>LUXURY IS OUR BUSINESS</p>
                    <p className='bg-amber-400 p-2 text-gray-600'>THE CLIENT EXPERIENCE</p>
                    <p className='bg-amber-400 p-2 text-gray-600'>EXECUTIVE ACCOMMODATIONS</p>
                    <p className='bg-amber-400 p-2 text-gray-600'>NOTHING IS "TOO MUCH" TO ASK</p>
                    <p className='bg-amber-400 p-2 text-gray-600'>EXCEPTIONAL PERSONALIZED SERVICE</p>
                </div>
            </div>

            {/* some of out event venues */}
            <div className='bg-gray-100 lg:py-20 py-6'>

                <div>
                    <div className='grid justify-center '>
                        <p className='text-3xl font-bold text-center'>
                            THE
                            <span className='text-amber-400 tracking-widest mx-2'>WILLARD INTERCONTINENTAL</span>
                        </p>

                        <div className='mx-auto my-10'>
                            <img src="https://i.ibb.co/VB6CDn7/wedding-ballroom-willard.jpg" alt="" />
                        </div>

                        <p className='py-2 text-gray-500 lg:w-6/12 text-center mx-auto'>
                            Often called the Crown Jewel of Pennsylvania Avenue, The Willard InterContinental is conveniently located just one block from the White House. Internationally known as one of the best hotels in Washington D.C., The Willard’s unique blend of contemporary luxury, historic charm and sustainable hospitality subtly reflects the spirit of the city. Insiders and newcomers alike will delight in their stay at The Willard.
                        </p>

                    </div>

                    <div className='lg:py-20 py-6 lg:mx-40 flex justify-center'>
                        <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 '>

                            <div class="w-72 max-w-full cursor-pointer">
                                <div className='text-center'>
                                    <h5 class="text-lg font-medium text-amber-500">CREATIVE CATERING</h5>
                                    <div className='text-gray-500'>
                                        <p class="mt-2">● Creative Catering Services</p>
                                        <p class="mt-2">● Expert Special Event Support </p>
                                    </div>
                                </div>
                            </div>

                            <div className="w-72 max-w-fullcursor-pointer">
                                <div className='text-center'>
                                    <h5 class="text-lg font-medium text-amber-500">BUSINESS SERVICES</h5>
                                    <div className='text-gray-500'>
                                        <p class="mt-2">● Full-service business center</p>
                                        <p class="mt-2">● 2,859 square feet of elegant conference and banquet space</p>
                                    </div>
                                </div>
                            </div>

                            <div class="w-72 max-w-full cursor-pointer">
                                <div className='text-center'>
                                    <h5 class="text-lg font-medium text-amber-500">MEETING SUPPORT</h5>
                                    <div className='text-gray-500'>
                                        <p class="mt-2">● Latest Technology</p>
                                        <p class="mt-2">● Budget-friendly meeting packages</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='border-b-2 border-gray-300 lg:mx-52'></div>
                </div>



                <div className='lg:mt-20 '>
                    <div className='grid justify-center '>
                        <p className='text-3xl font-bold text-center'>
                            THE
                            <span className='text-amber-400 tracking-widest mx-2'>RITZ CARLTON</span>
                        </p>

                        <div className='mx-auto my-10'>
                            <img src="https://i.ibb.co/NmF3cmC/RCWASHI-00115-1280x720-980x380.jpg" alt="" />
                        </div>

                        <p className='py-2 text-gray-500 lg:w-6/12 text-center mx-auto'>
                        Surrounded by the tree-lined streets of the West End neighborhood, The Ritz-Carlton, Washington, D.C. is one of the city’s most majestic luxury hotels. From the moment of arrival, you will be whisked into a warm and inviting atmosphere where rich mahogany paneled walls, supple leather furnishings, and traditional accents invite you to linger a moment in an environment that is truly reflective of our nation’s capital. As one of the premier locations for meetings, The Ritz-Carlton, Washington, D.C. specializes in blending exceptional amenities with impeccable attention to detail.
                        </p>

                    </div>

                    <div className='lg:py-20 py-6 lg:mx-40 flex justify-center'>
                        <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 '>

                            <div className="w-72 max-w-fullcursor-pointer">
                                <div className='text-center'>
                                    <h5 class="text-lg font-medium text-amber-500">TECHNOLOGY FOCUS</h5>
                                    <div className='text-gray-500'>
                                        <p class="mt-2">● Five breakout rooms. </p>
                                        <p class="mt-2">● State-of-the-art technology. </p>
                                    </div>
                                </div>
                            </div>

                            <div class="w-72 max-w-full cursor-pointer">
                                <div className='text-center'>
                                    <h5 class="text-lg font-medium text-amber-500">LUXURY BALLROOM</h5>
                                    <div className='text-gray-500'>
                                        <p class="mt-2">● Largest luxury ballroom in D.C. </p>
                                        <p class="mt-2">● Bonus 2,300 square foot Plaza Ballroom. </p>
                                    </div>
                                </div>
                            </div>

                            <div class="w-72 max-w-full cursor-pointer">
                                <div className='text-center'>
                                    <h5 class="text-lg font-medium text-amber-500">BUSINESS SERVICES</h5>
                                    <div className='text-gray-500'>
                                        <p class="mt-2">● Individual technology pods.</p>
                                        <p class="mt-2">● Complimentary internet and printing.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='border-b-2 border-gray-300 lg:mx-52'></div>
                </div>



                <div className='lg:mt-20 '>
                    <div className='grid justify-center '>
                        <p className='text-3xl font-bold text-center'>
                            THE
                            <span className='text-amber-400 tracking-widest mx-2'>MANDARIN ORIENTAL</span>
                        </p>

                        <div className='mx-auto my-10'>
                            <img src="https://i.ibb.co/m0LM6Nj/washington-suite-presidential-suite-dining-room-01-1024x329.jpg" alt="" />
                        </div>

                        <p className='py-2 text-gray-500 lg:w-6/12 text-center mx-auto'>
                        Mandarin Oriental Hotel Group is the award winning owner and operator of some of the most luxurious hotels, resorts and residences located in prime destinations around the world. Increasingly recognized for creating some of the world’s most sought-after properties, the Group provides 21st century luxury with oriental charm. Above all, Mandarin Oriental is renowned for creating unique hotels through distinctive design and a strong sense of place, luxury hotels right  for their time and place. The Group regularly receives international recognition and awards for quality management and legendary service hospitality.
                        </p>

                    </div>

                    <div className='lg:py-20 py-6 lg:mx-40 flex justify-center'>
                        <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 '>

                            <div className="w-72 max-w-fullcursor-pointer">
                                <div className='text-center'>
                                    <h5 class="text-lg font-medium text-amber-500">MEETINGS AND EVENTS</h5>
                                    <div className='text-gray-500'>
                                        <p class="mt-2">● Access to a ‘green room’.</p>
                                        <p class="mt-2">● Dedicated secretarial services. </p>
                                    </div>
                                </div>
                            </div>

                            <div class="w-72 max-w-full cursor-pointer">
                                <div className='text-center'>
                                    <h5 class="text-lg font-medium text-amber-500">FACILITIES</h5>
                                    <div className='text-gray-500'>
                                        <p class="mt-2">● Oriental Ballroom.</p>
                                        <p class="mt-2">● The Grand Ballroom.</p>
                                    </div>
                                </div>
                            </div>

                            <div class="w-72 max-w-full cursor-pointer">
                                <div className='text-center'>
                                    <h5 class="text-lg font-medium text-amber-500">WEDDINGS AND SOCIALS</h5>
                                    <div className='text-gray-500'>
                                        <p class="mt-2">● Imaginative Proposals. </p>
                                        <p class="mt-2">● Catering & Culinary team. </p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className='border-b-2 border-gray-300 lg:mx-52'></div>
                </div>


            </div>

        </div>
    )
}

export default VenueFacility
