import React from 'react'
import { Link } from 'react-router-dom'

function Gallery() {
    return (
        <div>
            <section className="overflow-hidden text-gray-700 w-full">
                <div className=" py-2 mx-auto ">
                    <div className='mt-12 mb-14'>
                        <h1 className='text-center uppercase my-5 text-gray-400 text-[20px] tracking-[10px]'
                            data-aos="fade-right"
                            data-aos-duration="3000"
                        >Eventy gallery</h1>
                        <h1 className='text-4xl uppercase text-center title_line'
                            data-aos="fade-left"
                            data-aos-duration="2500"
                        >Beautiful & <span className='font-bold'>Unforgettable Times</span></h1>
                    </div>

                    <div className="flex flex-wrap -m-1 md:-m-2">
                        <div className="flex flex-wrap w-1/2">

                            <div className="w-1/2 overflow-hidden cursor-pointer"
                                data-aos="zoom-out-right"
                                data-aos-duration="1500"
                            >
                                <img alt="gallery" className="block object-cover object-center w-full h-full hover:scale-110 transition-all " src="https://i.ibb.co/k9Y7gPF/7.jpg" />
                            </div>

                            <div className="w-1/2 overflow-hidden cursor-pointer"
                                data-aos="fade-down"
                                data-aos-duration="1500"
                            >
                                <img alt="gallery" className="block object-cover object-center w-full h-full hover:scale-110 transition-all"
                                    src="https://i.ibb.co/rbYNcgz/8.jpg" />
                            </div>

                            <div className="w-full h-[360px] overflow-hidden cursor-pointer"
                            data-aos="fade-right"
                            data-aos-duration="1500"
                            >
                                <img alt="gallery" className="block object-cover object-center w-full h-full hover:scale-110 transition-all "
                                    src="https://i.ibb.co/5j9cdzD/5.jpg" />
                            </div>

                        </div>

                        <div className="flex flex-wrap w-1/2">

                            <div className="w-full h-[360px] overflow-hidden cursor-pointer"
                            data-aos="fade-left"
                            data-aos-duration="1500"
                            >
                                <img alt="gallery" className="block object-cover object-center w-full h-full hover:scale-110 transition-all "
                                    src="https://i.ibb.co/ync0N3k/3.jpg" />
                            </div>

                            <div className="w-1/2 overflow-hidden cursor-pointer"
                                data-aos="fade-up"
                                data-aos-duration="1500"
                            >
                                <img alt="gallery" className="block object-cover object-center w-full h-full hover:scale-110 transition-all "
                                    src="https://i.ibb.co/HDKyXYR/4.jpg" />
                            </div>

                            <div className="w-1/2 overflow-hidden cursor-pointer"
                                data-aos="zoom-out-left"
                                data-aos-duration="1500"
                            >
                                <img alt="gallery" className="block object-cover object-center w-full h-full hover:scale-110 transition-all"
                                    src="https://i.ibb.co/6tMqJ4v/1.jpg" />
                            </div>

                        </div>

                    </div>
                </div>
            </section>

            <div className='flex justify-center py-20'
             data-aos="zoom-in"
             data-aos-duration="2500"
            >
                <Link to='/gallery' className='uppercase bg-gradient-to-r from-rose-600 to-pink-600 px-8 py-4 text-white font-semibold tracking-wider rounded-full'>view all gallery</Link>
            </div>
        </div>
    )
}

export default Gallery
