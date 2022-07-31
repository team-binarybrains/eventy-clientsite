import React from 'react'

function Gallery() {
    return (
        <div>
              <section className="overflow-hidden text-gray-700 w-full">
                <div className=" py-2 mx-auto lg:pt-24">
                    <div className='mt-12 mb-14'>
                        <h1 className='text-center uppercase my-5 text-gray-400 text-[20px] tracking-[10px]'>Eventy gallery</h1>
                        <h1 className='text-4xl uppercase text-center title_line'>Beautiful & <span className='font-bold'>Unforgettable Times</span></h1>
                    </div>
                    <div className="flex flex-wrap -m-1 md:-m-2">
                        <div className="flex flex-wrap w-1/2">

                            <div className="w-1/2 overflow-hidden cursor-pointer">
                                <img alt="gallery" className="block object-cover object-center w-full h-full hover:scale-110 transition-all " src="https://i.ibb.co/k9Y7gPF/7.jpg" />
                            </div>

                            <div className="w-1/2 overflow-hidden cursor-pointer">
                                <img alt="gallery" className="block object-cover object-center w-full h-full hover:scale-110 transition-all"
                                    src="https://i.ibb.co/rbYNcgz/8.jpg" />
                            </div>

                            <div className="w-full h-[360px] overflow-hidden cursor-pointer">
                                <img alt="gallery" className="block object-cover object-center w-full h-full hover:scale-110 transition-all "
                                    src="https://i.ibb.co/5j9cdzD/5.jpg" />
                            </div>

                        </div>

                        <div className="flex flex-wrap w-1/2">

                            <div className="w-full h-[360px] overflow-hidden cursor-pointer">
                                <img alt="gallery" className="block object-cover object-center w-full h-full hover:scale-110 transition-all "
                                    src="https://i.ibb.co/ync0N3k/3.jpg" />
                            </div>

                            <div className="w-1/2 overflow-hidden cursor-pointer">
                                <img alt="gallery" className="block object-cover object-center w-full h-full hover:scale-110 transition-all "
                                    src="https://i.ibb.co/HDKyXYR/4.jpg" />
                            </div>

                            <div className="w-1/2 overflow-hidden cursor-pointer">
                                <img alt="gallery" className="block object-cover object-center w-full h-full hover:scale-110 transition-all"
                                    src="https://i.ibb.co/6tMqJ4v/1.jpg" />
                            </div>

                        </div>

                    </div>
                </div>
            </section>
        </div>
    )
}

export default Gallery
