import React from 'react'
import { BsPlusLg } from 'react-icons/bs';
import { Link } from 'react-router-dom'
import useFetch from '../../Home/OurServices/Hook/useFetch'
import '../Services.css'

function Catering() {

    const catering = useFetch('http://localhost:5000/get-catering')
    console.log(catering);


    return (
        <div className='route'>
            {/* catering banner */}
            <div className=" p-3 bg-image lg:h-[340px] h-[200px] banner-background">
                <div className="flex justify-center items-center h-full lg:-mt-8">
                    <div className="text-white text-center">
                        <p className="tracking-[8px]">ALL YOU NEED TO KNOW</p>
                        <p className="text-4xl text-center font-bold my-3">
                            <span className="text-[#ffbe30] mr-2">CATERING</span>
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

            {/* catering services */}
            <div className='grid lg:grid-cols-4 grid-cols-1 gap-y-20 lg:py-20 py-6 lg:mx-40'>
                {catering.map((service, index) => <div key={index} className='flex justify-center relative hvr'>

                    <div class="w-72 max-w-full bg-white cursor-pointer">
                        <div class="w-full h-48">
                            <img src={service.img} class="w-full  object-cover" alt='' />
                        </div>
                        <div class="-mt-5">
                            <h5 class="text-lg font-medium text-amber-500">{service.name}</h5>
                            <div className='text-gray-500'>
                                <p class="mt-2">● {service.details.a}</p>
                                <p class="mt-2">● {service.details.b}</p>
                                <p class="mt-2">● {service.details.c}</p>
                                {service.details?.d &&
                                    <p class="mt-2">● {service.details?.d}</p>
                                }
                            </div>

                            <div className="absolute top-0 left-[3.4rem] right-[3.4rem] bottom-0 bg-transparent cld">
                                <BsPlusLg className="text-8xl text-white absolute top-[calc(50%-48px)] left-[calc(50%-48px)] pls" />
                            </div>
                        </div>
                    </div>

                    {/* <div className="mt-8">
                        <p className="left-position uppercase text-gray-400 font-bold hover:text-[#ffbe30] tracking-[5px] cld2">
                            eventy catering
                        </p>
                    </div> */}

                </div>
                )}
            </div>

            {/* catering speciality */}
            <div className='py-20 bg-gray-100 '>

                <div className='flex justify-center gap-x-6'>

                    <div className='w-4/12 flex justify-center items-center'>
                        <img src="https://i.ibb.co/kmPhM6S/ct.jpg" alt="" className='h-80' />
                    </div>

                    <div className='w-4/12 '>
                        <p className='uppercase text-3xl font-semibold'> <span className='text-amber-400'>eventy</span> SPECIALTY CATERING</p>
                        <p className='py-8'>
                            We use Fine China, Specialty Linens,  and other expertise to deliver a top notch event catering. Passed Hors D’oeuvres, plated dinners and buffets are one of many options we offer our clients. We incorporate client branding throughout the catered cuisine. Our caterers use only the freshest ingredients and offerings include Vegetarian Catering, Vegan Catering and other specialty catering services. CBD menus can also be customized to accommodate international, indigenous cuisine.
                        </p>
                       <div className='flex justify-end'>
                       <img src="https://i.ibb.co/MRXgQwx/eventy-signature.png" alt="" className=''/>
                       </div>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Catering
