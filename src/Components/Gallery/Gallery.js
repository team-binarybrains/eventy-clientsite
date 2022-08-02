import React from 'react'
import { Link } from 'react-router-dom'
import Address from '../AboutUs/Address'
import Footer from '../Share/Footer/Footer'
import Merories from './Merories'

function Gallery() {
    return (
        <div>
            <div className=" p-3 bg-image lg:h-[340px] h-[200px]"
                style={{ backgroundImage: "url('https://i.ibb.co/LQr53RB/1-testimonial-bg-edited.jpg')", backgroundSize: 'cover' }} >

                <div className='flex justify-center items-center h-full lg:-mt-8'>
                    <div className='text-white text-center '>
                        <p className='tracking-[8px] uppercase'>Eventy gallery</p>
                        <p className='text-4xl text-center font-bold my-3'>
                            <span className='font-normal tracking-wide mr-2'>EVENTY</span>
                            <span className=' text-[#ffbe30]'>GALLERY</span>
                        </p>
                    </div>
                </div>

                <div className='flex justify-center items-center gap-x-3 lg:-mt-16 -mt-10 text-white '>
                    <Link to='/' className='text-lg' >Home</Link>
                    <span>|</span>
                    <p className='text-lg'>Eventy Gallery</p>
                </div>

            </div>
            <Merories></Merories>
            <Address></Address>
            <Footer></Footer>
        </div>
    )
}

export default Gallery
