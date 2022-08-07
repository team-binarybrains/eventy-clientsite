import React from 'react'
import { Link } from 'react-router-dom'

function Audiovisual() {
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




        </div>
    )
}

export default Audiovisual
