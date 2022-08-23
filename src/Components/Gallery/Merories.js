import React from 'react'

function Merories() {
    return (
        <div className='lg:py-52 lg:px-96 py-20'>
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
    )
}

export default Merories
