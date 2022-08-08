import React from 'react'
import { Link } from 'react-router-dom'
import useFetch from '../../Home/OurServices/Hook/useFetch'

function Audiovisual() {

    const visual = useFetch('http://localhost:5000/get-audiovisual')

    return (
        <div className='route'>
            <div className=" p-3 bg-image lg:h-[340px] h-[200px] banner-background">
                <div className="flex justify-center items-center h-full lg:-mt-8">
                    <div className="text-white text-center">
                        <p className="tracking-[8px]">ALL YOU NEED TO KNOW</p>
                        <p className="text-4xl text-center font-bold my-3">
                            <span className="text-[#ffbe30] mr-2">AUDIOVISUAL</span>
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


            <div className='lg:py-20 bg-gray-100 '>
                <div className='grid lg:flex justify-center gap-x-6'>

                    <div className='lg:w-4/12 flex justify-center items-center'>
                        <img src="https://i.ibb.co/HBjW6BD/adv.jpg" alt="" className='h-80' />
                    </div>

                    <div className='lg:w-4/12 px-3 lg:px-0 py-10 lg:py-0'>
                        <p className='uppercase text-3xl font-semibold'> <span className='text-amber-400 tracking-widest'>eventy</span> AUDIOVISUAL</p>
                        <p className='py-8'>
                            Through our Public Relations partner, we manage speeches, delivery, audiovisual, presentations for small and large meetings. We support: PowerPoint presentations, Webinars, Skype, Digital and Social Media. We have managed events from conceptualization to completion for several historical and highly publicized events. Our event planning logistics and registration services can meet the needs of any size conference, convention or meeting. We also handle logistics for social events, fundraisers and political events.
                        </p>
                        <div className='flex justify-end'>
                            <img src="https://i.ibb.co/MRXgQwx/eventy-signature.png" alt="" className='' />
                        </div>
                    </div>
                </div>
            </div>


        </div >
    )
}

export default Audiovisual
