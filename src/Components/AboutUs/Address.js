import React from 'react'
import { AiTwotoneStar } from 'react-icons/ai'
import { FaStarHalfAlt } from 'react-icons/fa'
import { GiDirectionSign } from 'react-icons/gi'
import { MdCellWifi } from 'react-icons/md'
import { useNavigate } from 'react-router-dom'

function Address() {

    const navigate = useNavigate();

    return (
        <div className='lg:py-20 lg:flex justify-around lg:-ml-72'>
            <div className='bg-gradient-to-r from-[#ffbe30] to-[#ff3e00] lg:w-[550px] px-10 py-10 shadow-xl'
                data-aos="flip-up"
                data-aos-duration="2000"
            >
                <div>
                    <div className='lg:flex justify-between'>
                        <div>
                            <p className='text-2xl font-semibold text-white'>Eventy Event Management</p>
                            <p className='text-gray-600'>Apple Store, 112 Prince St New York, <br /> NY 10012, United States 80361, <br /> United States</p>
                        </div>

                        <div className='flex justify-end gap-x-3'>
                            <div className='bg-[#ffbe30] bg-opacity-40 h-20 w-20 text-white grid justify-center items-center'
                                data-aos="fade-left"
                                data-aos-duration="2000"
                            >
                                <p className='text-4xl'><GiDirectionSign /></p>
                                <p className='-mt-6'>Direction</p>
                            </div>

                            <div className='bg-[#ffbe30] bg-opacity-40 h-20 w-20 text-white grid justify-center items-center'
                                data-aos="fade-left"
                                data-aos-delay="100"
                                data-aos-duration="2000"
                            >
                                <p className='text-4xl'><MdCellWifi /></p>
                                <p className='-mt-6'>save</p>
                            </div>
                        </div>

                    </div>

                    <div className='flex justify-between mt-6'>
                        <div>
                            <p className='flex items-center text-lg font-semibold text-white'
                            data-aos="fade-right"
                            data-aos-delay="300"
                            data-aos-duration="2000"
                            >4.5 <span className='flex text-xl'>
                                <AiTwotoneStar className='' 
                                data-aos="fade-right"
                                data-aos-delay="100"
                                data-aos-duration="2000"
                                />
                                <AiTwotoneStar className='' 
                                data-aos="fade-right"
                                data-aos-delay="140"
                                data-aos-duration="2000"
                                />
                                <AiTwotoneStar className='' 
                                data-aos="fade-right"
                                data-aos-delay="180"
                                data-aos-duration="2000"
                                />
                                <AiTwotoneStar className='' 
                                data-aos="fade-right"
                                data-aos-delay="220"
                                data-aos-duration="2000"
                                />
                                <span className='text-lg'><FaStarHalfAlt className='' 
                                data-aos="fade-right"
                                data-aos-delay="260"
                                data-aos-duration="2000"
                                /></span>
                            </span></p>
                            <p className='text-gray-600 text-sm'
                            data-aos="fade-right"
                            data-aos-delay="50"
                            data-aos-duration="2000"
                            >150 Reviews</p>
                        </div>

                        <div>
                            <button onClick={() => navigate("/map")} className='bg-white px-5 py-3 rounded-full text-[#ffbe30] tracking-wide font-semibold'>view larger map</button>
                        </div>
                    </div>
                </div>
            </div>
            <div></div>
        </div>
    )
}

export default Address
