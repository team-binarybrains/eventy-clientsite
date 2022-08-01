import React from 'react'
import { Link } from 'react-router-dom'

function AboutUs() {
    return (
        <div>

            <div className=" p-3 bg-image h-[340px]"
                style={{ backgroundImage: "url('https://i.ibb.co/LQr53RB/1-testimonial-bg-edited.jpg')", backgroundSize: 'cover' }} >

                <div className='flex justify-center items-center h-full -mt-8'>
                    <div className='text-white'>
                    <p className='tracking-[8px]'>ALL YOU NEED TO KNOW</p>
                    <p className='text-4xl text-center font-bold my-3'>
                        <span className='text-[#ffbe30] mr-2'>ABOUT</span> 
                        <span className='font-normal tracking-wide'>EVENTY</span>
                    </p>
                    </div>
                </div>

                <div className='flex justify-center items-center gap-x-3 -mt-16 text-white '>
                    <Link to='/' className='text-lg' >Home</Link>
                    <span>|</span>
                    <p className='text-lg'>About Us</p>
                </div>

            </div>

        </div>
    )
}

export default AboutUs
