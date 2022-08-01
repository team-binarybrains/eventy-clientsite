import React from 'react'
import { Link } from 'react-router-dom'
import Staffs from '../Home/Staffs/Staffs'
import Address from './Address'
import Advantage from './Advantage'
import Awade from './Awade'
import Special from './Special'

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


            <div className=' grid lg:grid-cols-3 grid-cols-1 justify-around py-20 bg-gray-100 pl-36'>
            
                    <div className='lg:-mr-96 grid items-center lg:w-96 px-10 lg:px-0'>
                        <div className=''>
                            <div className='border-t-2 w-[60px] lg:-ml-7 -ml-4 border-[#fd1d1d] '><p className=''></p></div>
                            <h1 className='uppercase my-5 text-gray-400 text-[20px] tracking-[10px]'>we are eventy</h1>
                            <h1 className='text-4xl font-bold my-4'>A Great <br /> Events Management</h1>
                            <p className='text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint iste fugiat, repudiandae facere asperiores veniam, hic, deserunt in assumenda dignissimos nostrum excepturi incidunt quibusdam perferendis voluptatem facilis officia earum sed?</p>

                            <div className='flex justify-center mt-10 mb-8 lg:mb-0'>
                                <Link to="/about" className='uppercase bg-gradient-to-r from-rose-600 to-pink-600 px-6 py-3 rounded-full text-white font-semibold tracking-widest'>about eventy</Link>
                            </div>
                        </div>
                    </div>
                

                <div className='ml-16'>
                    <div className='w-96 mt-10'>
                        <div className='flex items-baseline'>
                        <p className='text-3xl font-bold'>Our Mission</p>
                        <div className='border-b-4 w-12 ml-1 border-[#ffbe30]'></div>
                        </div>
                        <p className='my-10'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem debitis consequuntur animi totam aliquam nisi magnam mollitia, non placeat ad voluptatum eos similique modi fugit maxime porro tempora praesentium sit!</p>

                        <p className='font-bold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo fugiat magni eos odit id placeat soluta quae sed eius accusamus.</p>
                    </div>
                </div>

                <div className='ml-16'>
                    <div className='w-96 mt-10'>
                       <div className='flex items-baseline'>
                       <p className='text-3xl font-bold'>Our Vission </p>
                        <div className='border-b-4 w-12 ml-1 border-[#ffbe30]'></div>
                       </div>
                        <p className='my-10'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem debitis consequuntur animi totam aliquam nisi magnam mollitia, non placeat ad voluptatum eos similique modi fugit maxime porro tempora praesentium sit!</p>

                        <p className='font-bold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo fugiat magni eos odit id placeat soluta quae sed eius accusamus.</p>
                    </div>
                </div>

            </div>


        <Awade></Awade>
        <Advantage></Advantage>
        <Staffs></Staffs>
        <Special></Special>
        <Address></Address>

        </div>
    )
}

export default AboutUs