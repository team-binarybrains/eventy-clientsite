import React from 'react'
import { BsPlusLg } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import useFetch from '../../Home/OurServices/Hook/useFetch'

function Lighting() {

    const soundLighting = useFetch('http://localhost:5000/get-sound-lighting')

    return (
        <div className='route'>
            <div className=" p-3 bg-image lg:h-[340px] h-[200px] banner-background">
                <div className="flex justify-center items-center h-full lg:-mt-8">
                    <div className="text-white text-center">
                        <p className="tracking-[8px]">ALL YOU NEED TO KNOW</p>
                        <p className="text-4xl text-center font-bold my-3">
                            <span className="text-[#ffbe30] mr-2">SOUND AND LIGHTING</span>
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


            <div className='lg:py-20'>
                <div className='flex justify-center lg:-mb-5'>
                    <p className='text-3xl font-bold '>
                        LET
                        <span className='text-amber-400 tracking-widest mx-2'>EVENTY</span>
                        PLAN YOUR THEME

                    </p>

                </div>

                <div className='grid lg:grid-cols-3 grid-cols-1 gap-y-20 lg:py-20 py-6 lg:mx-40'>
                    {
                        soundLighting.map((service, index) => <div key={index} className='flex justify-center relative hvr'>

                            <div class="w-72 max-w-full bg-white cursor-pointer">
                                <div class="w-full h-48">
                                    <img src={service.img} class="w-full h-40 object-cover" alt='' />
                                </div>
                                <div class="-mt-5">
                                    {/* <h5 class="text-lg font-medium text-amber-500">{service.name}</h5> */}
                                    <div className='text-gray-500'>
                                        <p class="mt-2">● {service.details.a}</p>
                                        <p class="mt-2">● {service.details.b}</p>
                                        <p class="mt-2">● {service.details.c}</p>
                                        {service.details?.d &&
                                            <p class="mt-2">● {service.details?.d}</p>
                                        }
                                    </div>

                                    <div className="absolute top-0 left-[7.5rem] right-[7.5rem] bottom-0 bg-transparent cld">
                                        <BsPlusLg className="text-8xl text-white absolute top-[calc(50%-48px)] left-[calc(50%-48px)] pls" />
                                    </div>
                                </div>
                            </div>

                            {/* <div className="mt-8">
                        <p className="left-position uppercase text-gray-400 font-bold hover:text-[#ffbe30] tracking-[5px] cld2">
                            eventy catering
                        </p>
                    </div> */}

                        </div>
                        )
                    }
                </div>

            </div>

            <div className='lg:py-20 bg-gray-100 '>
                <div className='grid lg:flex justify-center gap-x-6'>

                    <div className='lg:w-4/12 flex justify-center items-center'>
                        <img src="https://i.ibb.co/p3c7zJf/Sound-Lighting-System-both.jpg" alt="" className='h-80' />
                    </div>

                    <div className='lg:w-4/12 px-3 lg:px-0 py-10 lg:py-0'>
                        <p className='uppercase text-3xl font-semibold'> <span className='text-amber-400 tracking-widest'>eventy</span> SOUND AND LIGHTING</p>
                        <p className='py-8'>
                            We used many types of different lighting to deliver a top notch event. We incorporated the country flag throughout the theme. We also used stage lighting for the musical performances, dance floor and dining areas. For sound, we prepare for live music and speech delivery.
                        </p>
                        <div className='flex justify-end'>
                            <img src="https://i.ibb.co/MRXgQwx/eventy-signature.png" alt="" className='' />
                        </div>
                    </div>
                </div>
            </div>


            {/* confession */}
            <div className='py-10 lg:pt-24'>

                <div className='flex justify-center lg:-mb-5'>
                    <p className='text-3xl font-bold '>
                        <span className='text-amber-400 tracking-widest'>SPECIALTY </span>
                        <span className=''> LIGHTING</span>
                    </p>

                </div>

                <div className='lg:flex justify-center items-center gap-x-7 lg:h-80'>
                    <div className='lg:w-4/12 px-3 lg:px-0'>
                        <p className='lg:tracking-[5px] font-semibold'>SPECIAL EVENT LIGHTING SERVICES</p>
                        <p className='mt-5'>Not all lighting is the same. Our expert team is available to asses voltage requirements and when necessary, we staff a Master Electrician who can remain on-site throughout your event. Many museums and private venues in and around DC require an on-site electrician. For many large scale lighting, a permit may be required. No worries, we are well connected when it comes to getting the right permits at the last minute.</p>
                    </div>
                    <div className='grid gap-y-3 lg:w-4/12 mt-6 lg:mt-0 px-3 lg:px-0'>
                        <p className='bg-amber-400 p-2 text-gray-600'>BACKGROUNDS & FAUX SCENERY</p>
                        <p className='bg-amber-400 p-2 text-gray-600'>LIVE TICKET EVENTS LIGHTING</p>
                        <p className='bg-amber-400 p-2 text-gray-600'>SKYTRACKER SERVICES AND PERMITS</p>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default Lighting
