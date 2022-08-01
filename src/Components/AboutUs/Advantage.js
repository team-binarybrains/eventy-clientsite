import React from 'react'
import { GiShakingHands } from 'react-icons/gi';
import { GiBalloons } from 'react-icons/gi';
import { FaGlassCheers } from 'react-icons/fa';
import { FiFilm } from 'react-icons/fi';
import { FiPhoneCall } from 'react-icons/fi';
import { HiLightBulb } from 'react-icons/hi';

function Advantage() {
    return (
        <div className='bg-gray-100'>
            <div className='grid justify-center py-20'>

                <div className='lg:flex'>
                    <div className='h-[280px] w-[320px] border grid items-center justify-center'>
                        <p className={`flex justify-center`}><GiShakingHands className={`text-5xl text-[#ffbe30] `} /></p>
                        <div className='-mt-16 px-3'>
                            <p className={`text-center text-lg font-bold`}>Friendly Team</p>
                            <p className='text-center text-sm text-gray-500'>More than 200 teams</p>
                        </div>
                    </div>
                    <div className='h-[280px] w-[320px] border grid items-center justify-center'>
                        <p className='flex justify-center'><GiBalloons className='text-5xl text-[#ffbe30]' /></p>
                        <div className='-mt-16 px-3'>
                            <p className='text-center text-lg font-bold'>Perfact Vanues</p>
                            <p className='text-center text-sm text-gray-500'>Perfact Vanues</p>
                        </div>
                    </div>
                    <div className='h-[280px] w-[320px] border grid items-center justify-center'>
                        <p className='flex justify-center'><FaGlassCheers className='text-5xl text-[#ffbe30]' /></p>
                        <div className='-mt-16 px-3'>
                            <p className='text-center text-lg font-bold'>Unique Scenario</p>
                            <p className='text-center text-sm text-gray-500'>We thinking out of the box</p>
                        </div>
                    </div>
                </div>

                <div className='lg:flex'>
                    <div className='h-[280px] w-[320px] border grid items-center justify-center'>
                        <p className='flex justify-center'><FiFilm className='text-5xl text-[#ffbe30]' /></p>
                        <div className='-mt-16 px-3'>
                            <p className='text-center text-lg font-bold'>Unforgettable Time</p>
                            <p className='text-center text-sm text-gray-500'>We make you perfect event</p>
                        </div>
                    </div>
                    <div className='h-[280px] w-[320px] border grid items-center justify-center'>
                        <p className=' flex justify-center'><FiPhoneCall className='text-5xl text-[#ffbe30]' /></p>
                        <div className='-mt-16 px-3'>
                            <p className='text-center text-lg font-bold'>24/7 Hours Support</p>
                            <p className='text-center text-sm text-gray-500'>Anytime anywhere</p>
                        </div>
                    </div>
                    <div className='h-[280px] w-[320px] border grid items-center justify-center'>
                        <p className='flex justify-center'><HiLightBulb className='text-5xl text-[#ffbe30]' /></p>
                        <div className='-mt-16 px-3'>
                            <p className='text-center text-lg font-bold'>Briliant Idea</p>
                            <p className='text-center text-sm text-gray-500'>We have million idea</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Advantage
