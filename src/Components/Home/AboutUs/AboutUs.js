import React from 'react'
import { GiShakingHands } from 'react-icons/gi';
import { GiBalloons } from 'react-icons/gi';
import { FaGlassCheers } from 'react-icons/fa';
import { FiFilm } from 'react-icons/fi';
import { FiPhoneCall } from 'react-icons/fi';
import { HiLightBulb } from 'react-icons/hi';
import style from './AboutUs.module.css'

function AboutUs() {
    return (
        <div className='flex justify-around py-20 bg-gray-100'>
            <div className='-mr-96 grid items-center w-96'>
                <div>
                    <div className='border-t-2 w-[60px] -ml-7 border-[#fd1d1d] '><p className=''></p></div>
                    <h1 className='uppercase my-5 text-gray-400 text-[20px] tracking-[10px]'>we are eventy</h1>
                    <h1 className='text-4xl font-bold my-4'>A Great <br /> Events Management</h1>
                    <p className='text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint iste fugiat, repudiandae facere asperiores veniam, hic, deserunt in assumenda dignissimos nostrum excepturi incidunt quibusdam perferendis voluptatem facilis officia earum sed?</p>

                    <div className='flex justify-center mt-10'>
                        <button className='uppercase bg-gradient-to-r from-rose-600 to-pink-600 px-6 py-3 rounded-full text-white font-semibold tracking-widest'>about eventy</button>
                    </div>
                </div>
            </div>

            <div className='grid justify-center w-[800px]'>

                <div className='flex'>
                    <div className='h-[230px] w-[230px] border grid items-center justify-center'>
                        <p className={`flex justify-center`}><GiShakingHands className={`text-5xl text-rose-600 `} /></p>
                        <div className='-mt-16 px-3'>
                            <p className={`text-center text-lg font-bold`}>Friendly Team</p>
                            <p className='text-center text-sm text-gray-500'>More than 200 teams</p>
                        </div>
                    </div>
                    <div className='h-[230px] w-[230px] border grid items-center justify-center'>
                        <p className='flex justify-center'><GiBalloons className='text-5xl text-rose-600' /></p>
                        <div className='-mt-16 px-3'>
                            <p className='text-center text-lg font-bold'>Perfact Vanues</p>
                            <p className='text-center text-sm text-gray-500'>Perfact Vanues</p>
                        </div>
                    </div>
                    <div className='h-[230px] w-[230px] border grid items-center justify-center'>
                        <p className='flex justify-center'><FaGlassCheers className='text-5xl text-rose-600' /></p>
                        <div className='-mt-16 px-3'>
                            <p className='text-center text-lg font-bold'>Unique Scenario</p>
                            <p className='text-center text-sm text-gray-500'>We thinking out of the box</p>
                        </div>
                    </div>
                </div>

                <div className='flex'>
                    <div className='h-[230px] w-[230px] border grid items-center justify-center'>
                        <p className='flex justify-center'><FiFilm className='text-5xl text-rose-600' /></p>
                        <div className='-mt-16 px-3'>
                            <p className='text-center text-lg font-bold'>Unforgettable Time</p>
                            <p className='text-center text-sm text-gray-500'>We make you perfect event</p>
                        </div>
                    </div>
                    <div className='h-[230px] w-[230px] border grid items-center justify-center'>
                        <p className=' flex justify-center'><FiPhoneCall className='text-5xl text-rose-600' /></p>
                        <div className='-mt-16 px-3'>
                            <p className='text-center text-lg font-bold'>24/7 Hours Support</p>
                            <p className='text-center text-sm text-gray-500'>Anytime anywhere</p>
                        </div>
                    </div>
                    <div className='h-[230px] w-[230px] border grid items-center justify-center'>
                        <p className='flex justify-center'><HiLightBulb className='text-5xl text-rose-600' /></p>
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

export default AboutUs
