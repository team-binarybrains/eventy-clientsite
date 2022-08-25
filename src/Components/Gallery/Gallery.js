import React from 'react'
import { Link } from 'react-router-dom'
import Address from '../AboutUs/Address'
import Offer from '../Home/Offer/Offer'
import Footer from '../Share/Footer/Footer'
import Merories from './Merories'
import SpecialOffer from './SpecialOffer'

function Gallery() {
    return (
        <div className='route'>
            <div className=" p-3 bg-image lg:h-[340px] h-[200px] banner-background">

                <div className='flex justify-center items-center h-full lg:-mt-8'>
                    <div className='text-white text-center '
                      data-aos="zoom-in"
                      data-aos-duration="2000"
                    >
                        <p className='tracking-[8px] uppercase'>Eventy gallery</p>
                        <p className='text-4xl text-center font-bold my-3'>
                            <span className='font-normal tracking-wide mr-2'>EVENTY</span>
                            <span className=' text-[#ffbe30]'>GALLERY</span>
                        </p>
                    </div>
                </div>

                <div className='flex justify-center items-center gap-x-3 lg:-mt-16 -mt-10 text-white '>
                    <Link to='/' className='text-lg' 
                    data-aos="fade-right"
                    data-aos-duration="2000"
                    >Home</Link>
                    <span>|</span>
                    <p className='text-lg'
                    data-aos="fade-left"
                    data-aos-duration="2000"
                    >Eventy Gallery</p>
                </div>

            </div>
            <Merories></Merories>
            <SpecialOffer></SpecialOffer>
            <Offer></Offer>
            <Address></Address>
        </div>
    )
}

export default Gallery
