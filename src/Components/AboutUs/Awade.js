import React from 'react'
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io'

function Awade() {
    return (
        <div className=''>
            <div className='-mt-4'>
                <div className='flex justify-center gap-x-14 my-40'>
                    <div>
                        <img src="https://i.ibb.co/zFHhCR5/login-modal-bg.jpg" alt="" className='h-[620px] w-[570px]' />
                        <img src="https://i.ibb.co/YfrRjpY/company-banner.png" alt="" className='ml-[90px] -mt-[530px]' />
                    </div>

                    <div>
                        <div className='lg:-mt-12'>
                            <div className='mt-12 mb-14'>
                                <h1 className=' uppercase my-5 text-gray-400 text-[20px] tracking-[10px]'>Eventy AWAED</h1>
                                <h1 className='text-4xl uppercase  title_line'>Our<span className='mx-4'>Winning</span> <span className='font-bold -ml-2'>Awards</span></h1>
                            </div>
                        </div>

                        <div>
                            <div className='flex'>
                                <div>
                                    <p><IoIosArrowUp className='text-3xl bg-gray-300 text-white rounded-full'></IoIosArrowUp></p>
                                    <div className='flex justify-center w-7'>
                                        <div className='border-l-[3px] h-[410px]'></div>
                                    </div>
                                    <p><IoIosArrowDown className='text-3xl bg-gray-300 text-white rounded-full'></IoIosArrowDown></p>
                                </div>


                                <div className='grid mt-20 -ml-4'>
                                    <div className='flex items-center -mt-20'>
                                        <p className='text-8xl text-[#ffbe30] -mt-8 -ml-3'>.</p>
                                        <div>
                                            <p className='border-b-2 w-[100px] pl-5 -ml-2 font-semibold text-[#ffbe30]'>AUG 2022</p>
                                        </div>
                                    </div>

                                    <div className='flex items-center -mt-16'>
                                        <p className='text-8xl text-[#ffbe30] -mt-8 -ml-3'>.</p>
                                        <div>
                                            <p className='border-b-2 w-[100px] pl-5 -ml-2 font-semibold text-[#ffbe30]'>AUG 2022</p>
                                        </div>
                                    </div>

                                    <div className='flex items-center -mt-14'>
                                        <p className='text-8xl text-[#ffbe30] -mt-8 -ml-3'>.</p>
                                        <div>
                                            <p className='border-b-2 w-[100px] pl-5 -ml-2 font-semibold text-[#ffbe30]'>AUG 2022</p>
                                        </div>
                                    </div>
                                </div>

                                <div className='grid items-center mt-14 ml-5'>
                                    <div className='w-[430px]'>
                                        <p className='text[#333333] text-2xl font-bold my-3'>1st Place For Unique Events 2018</p>
                                        <p className='text[#333333]'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit diam sed diam nonummy nibh euismod tincidunt.</p>
                                    </div>

                                    <div className='w-[430px]'>
                                        <p className='text[#333333] text-2xl font-bold my-3'>1st Winner Best New Years Events</p>
                                        <p className='text[#333333]'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit diam sed diam nonummy nibh euismod tincidunt.</p>
                                    </div>

                                    
                                    <div className='w-[430px]'>
                                        <p className='text[#333333] text-2xl font-bold my-3'>1st Place International Events Awards</p>
                                        <p className='text[#333333]'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit diam sed diam nonummy nibh euismod tincidunt.</p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Awade
