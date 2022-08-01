import React from 'react'
import { AiTwotoneStar } from 'react-icons/ai'
import { FaStarHalfAlt } from 'react-icons/fa'
import { GiDirectionSign } from 'react-icons/gi'
import { MdCellWifi } from 'react-icons/md'

function Address() {
    return (
        <div className='py-20'>
            <div className='bg-gradient-to-r from-[#ffbe30] to-[#ff3e00] w-[500px]'>
                <div>
                    <div className='flex justify-between'>
                        <div>
                            <p>Eventy Event Management</p>
                            <p>Apple Store, 112 Prince St New York, <br /> NY 10012, United States 80361, <br /> United States</p>
                        </div>

                        <div className='flex'>
                            <div className='bg-[#ffbe30] bg-opacity-40 h-20 w-20 text-white grid justify-center items-center'>
                                <p className='text-4xl'><GiDirectionSign /></p>
                                <p className='-mt-6'>Direction</p>
                            </div>

                            <div className='bg-[#ffbe30] bg-opacity-40 h-20 w-20 text-white grid justify-center items-center'>
                                <p className='text-4xl'><MdCellWifi /></p>
                                <p className='-mt-6'>save</p>
                            </div>
                        </div>

                    </div>

                    <div className='flex justify-between'>
                        <div>
                            <p className='flex items-center text-lg font-semibold text-white'>4.5 <span className='flex text-xl'>
                                <AiTwotoneStar className='' />
                                <AiTwotoneStar className='' />
                                <AiTwotoneStar className='' />
                                <AiTwotoneStar className='' />
                                <span className='text-lg'><FaStarHalfAlt className='' /></span>
                            </span></p>
                            <p className='text-gray-600 text-sm'>150 Reviews</p>
                        </div>

                        <div>
                            <button className='bg-white px-5 py-3 rounded-full text-[#ffbe30] tracking-wide font-semibold'>view larger map</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Address
