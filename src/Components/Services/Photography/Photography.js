import React from 'react'
import { BiRightArrowAlt } from 'react-icons/bi'
import { Link } from 'react-router-dom'

function Photography() {
    return (
        <div className='route'>
            <div className=" p-3 bg-image lg:h-[340px] h-[200px] banner-background">
                <div className="flex justify-center items-center h-full lg:-mt-8">
                    <div className="text-white text-center">
                        <p className="tracking-[8px]">ALL YOU NEED TO KNOW</p>
                        <p className="text-4xl text-center font-bold my-3">
                            <span className="text-[#ffbe30] mr-2">VIDEOGRAPHY & PHOTOGRAPHY</span>
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


            {/* -------------- */}

            <div className='lg:py-20'>
                <div className='grid lg:flex justify-center gap-x-6'>

                    <div className='lg:w-4/12 flex justify-center items-center'>
                        <img src="https://i.ibb.co/mGzXhHZ/pV3.jpg" alt="" className='h-96' />
                    </div>

                    <div className='lg:w-4/12 px-3 lg:px-0 py-10 lg:py-0'>
                        <p className='uppercase text-3xl font-semibold'>EVENTY <span className='text-amber-400 tracking-widest'>PHOTOGRAPHY, VIDEOGRAPHY & DIGITAL </span>
                            SERVICES
                        </p>
                        <p className='py-8'>
                            Your event is captured through imagery. Our photography and videography team, in addition to, our outside vendors have photographed events with: Presidents Bush, Clinton and Obama, Diplomats, Heads of State and in more than 30 countries throughout the world. Eventy works with Chief videographer, Marshall Levy to produce high definition videos of your event. Video formats are available for resell, online and other digital formats. For more information on our videography services,
                        </p>
                        <div className='flex justify-end'>
                            <img src="https://i.ibb.co/MRXgQwx/eventy-signature.png" alt="" className='' />
                        </div>
                    </div>
                </div>
            </div>

            {/* ---------- */}
            <div className='bg-gray-100 py-24 text-[#cd9f7a] font-serif text-xl tracking-wide'>
                <div className='lg:mx-40 text-center'>
                    <p>
                        <i>
                            "Photography is unique. We don't use Fashion Photographers for Events or Event Photographers for Fashion. <br /> Each photographer chosen to shoot your event is a professional in his/her class."
                        </i>
                    </p>
                </div>
            </div>

            {/* --------- */}
            <div className='py-10'>
                <div className='grid lg:flex lg:justify-around justify-center lg:mx-40'>
                    <div className=''>
                        <div>
                            <p className='text-3xl font-semibold'>
                                EVENTY <br />
                                <span className='text-amber-400 tracking-wider'>PHOTOGRAPHY </span>
                                SERVICES
                            </p>
                        </div>
                        <div className='lg:mt-12'>
                            <p className='text-xl uppercase py-2'>Weeding photography</p>
                            <img src="https://i.ibb.co/4f91vHS/ph.webp" alt="" className='w-80 h-48 hover:scale-110 duration-300 transition-all shadow-xl' />
                        </div>
                    </div>

                    <div>
                        <div className='lg:mt-16'>
                            <p className='text-xl uppercase py-2'>Birthday photography</p>
                            <img src="https://i.ibb.co/GC1DFJP/ph-4.jpg" alt="" className='w-80 h-48 hover:scale-110 duration-300 transition-all shadow-xl' />
                        </div>
                    </div>

                    <div>
                        <div className='lg:mt-2'>
                            <p className='text-xl uppercase py-2'>Music photography</p>
                            <div>
                                <img src="https://i.ibb.co/d550RXv/ph-1.jpg" alt="" className='w-80 h-48 hover:scale-110 duration-300 transition-all shadow-xl' />
                            </div>
                        </div>
                    </div>

                </div>
                <div className='flex justify-end lg:mx-40 lg:pt-6'>
                    <Link to="/gallery" className='flex items-center hover:text-amber-400 duration-300'> <i>Checkout More</i> <BiRightArrowAlt className='text-xl' /> </Link>
                </div>
            </div>


            {/* ------------ */}

            <div>
                <div className='bg-gray-100'>
                    <div className='lg:py-20'>

                        <div className='flex justify-around'>
                            <div className='lg:-ml-28'>
                                <div className='border-t-2 w-[60px] lg:-ml-7 -ml-4 border-[#fd1d1d] '><p className=''></p></div>
                                <h1 className='uppercase my-5 text-gray-400 text-[28px] tracking-wide'>MEET THE CHIEF PLANNER</h1>
                            </div>
                            <div></div>
                        </div>

                        <div className='grid lg:flex justify-center gap-x-6'>
                            <div className='lg:w-4/12 flex justify-center'>
                                <img src="https://i.ibb.co/Qp43MBz/ivy-pendleton-291x250.jpg" alt="" className='h-72' />
                            </div>

                            <div className='lg:w-4/12 px-3 lg:px-0 py-10 lg:py-0'>
                                <p className='uppercase text-3xl font-semibold'> <span className='text-amber-400 tracking-wider mr-2'>IVY K PENDLETON,</span>
                                    CHIEF PLANNER
                                </p>
                                <p className='py-8'>
                                    Ivy has planned events for many high profile people in the diplomatic and political communities and for International governments, many celebrities, nonprofit organizations and private corporations. She is a proud member of Destination DC, Washington Women in Public Relations and was recently highlighted in the member spotlight. She has been interviewed on Voice of America, MSNBC, NBC Nightly News, the BBC just to name a few. She resides in the Washington, DC metropolitan area. She speaks French, moderate Swahili and will begin her studies in Spanish, Dec 2011. Her hobbies include: Horseback Riding, Crafting and Running.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>


                <div className=''>
                    <div className='lg:py-20'>

                        <div className='flex justify-around'>
                            <div className='lg:-ml-28'>
                                <div className='border-t-2 w-[60px] lg:-ml-7 -ml-4 border-[#fd1d1d] '><p className=''></p></div>
                                <h1 className='uppercase my-5 text-gray-400 text-[28px] tracking-wide'>MEET THE CHIEF PHOTOGRAPHER</h1>
                            </div>
                            <div></div>
                        </div>

                        <div className='grid lg:flex justify-center gap-x-6'>
                            <div className='lg:w-4/12 flex justify-center'>
                                <img src="https://i.ibb.co/G3CJmhR/Gregory-Blakey-400x250.jpg" alt="" className='h-72' />
                            </div>

                            <div className='lg:w-4/12 px-3 lg:px-0 py-10 lg:py-0'>
                                <p className='uppercase text-3xl font-semibold'> <span className='text-amber-400 tracking-wider mr-2'>FRITZ BLAKEY,</span>
                                    CHIEF PHOTOGRAPHER
                                </p>
                                <p className='py-8'>
                                    Fritz Blakey is a top photographer in the Washington, DC Metropolitan area. He has photographed our events with First Lady Michelle Obama, Hillary Clinton, Nancy Pelosi, Cicely Tyson, The Africa Finance Corporation, and the Central Bank of Nigeria. Principal at Fritz Photographics, he works collaboratively with the Chief Planner to provide award worthy photography services to CBD. As the CBD agency photographer, he captures the momentum of each event and the each memorable detail. As an event photographer, he has the expertise to deliver photography products in several formats.
                                </p>
                            </div>
                        </div>

                        <div className='lg:flex justify-center items-center gap-x-7 lg:mt-32'>
                            <div className='lg:w-4/12 px-3 lg:px-0'>
                                <p className='lg:tracking-[5px] font-semibold'>EVENTY SPECIAL OFFER</p>
                                <p className='mt-5'>EVENTY offers a full variety of photography options to capture your message and your brand. Images are taken to memorialize the energy and purpose of your event.  Our branding, marketing and public relations efforts are spearheaded by Ivy K. Pendleton and managed by our team of Marketing experts who hold degrees in Marketing, Communications, Public Relations and Business Administration</p>
                            </div>
                            <div className='grid gap-y-3 lg:w-4/12 mt-6 lg:mt-0 px-3 lg:px-0'>
                                <p className='bg-amber-400 p-2 text-gray-600'>PHOTOGRAPHY CD's</p>
                                <p className='bg-amber-400 p-2 text-gray-600'>DIGITAL PHOTOBOOKS</p>
                                <p className='bg-amber-400 p-2 text-gray-600'>MARKETING PHOTOGRAPHY</p>
                                <p className='bg-amber-400 p-2 text-gray-600'>PHOTOBOOKS, DIGITAL PHOTO GALLERY, ONLINE PHOTOS</p>
                            </div>
                        </div>
                    </div>
                </div>


                <div className='bg-gray-100'>
                    <div className='lg:py-20'>

                        <div className='flex justify-around'>
                            <div className='lg:-ml-28'>
                                <div className='border-t-2 w-[60px] lg:-ml-7 -ml-4 border-[#fd1d1d] '><p className=''></p></div>
                                <h1 className='uppercase my-5 text-gray-400 text-[28px] tracking-wide'>MEET THE CHIEF VIDEOGRAPHER</h1>
                            </div>
                            <div></div>
                        </div>

                        <div className='grid lg:flex justify-center gap-x-6'>
                            <div className='lg:w-4/12 flex justify-center'>
                                <img src="https://i.ibb.co/BLP6Tnj/marshall-levy1-291x250.jpg" alt="" className='h-72' />
                            </div>

                            <div className='lg:w-5/12 px-3 lg:px-0 py-10 lg:py-0'>
                                <p className='uppercase text-3xl font-semibold'> <span className='text-amber-400 tracking-wider mr-2'> MARSHALL LEVY,</span>
                                    CHIEF VIDEOGRAPHER
                                </p>
                                <p className='lg:py-8 lg:pr-10'>
                                    We work exclusively with Award Winning Cinematographer Marshall Levy to produce the visual aspects of our major events. He produces video presentations for our events with First Lady Mrs. Michelle Obama, Secretary of State Hillary Clinton and House Speaker John Boehner in Washington, DC, for our international Diplomatic Delegations among other projects. Our videos are all professionally rendered in multiple formats to allow for digital conversion across multiple Platforms. Some of our videos can be found on our YouTube Channel.
                                </p>
                            </div>
                        </div>

                        <div className='lg:flex justify-center items-center gap-x-7 lg:mt-32'>
                            <div className='lg:w-4/12 px-3 lg:px-0'>
                                <p className='lg:tracking-[5px] font-semibold'>VIDEOGRAPHY AND FILMED ASSETS</p>
                                <p className='mt-5'>At EVENTY, we understand that in an information age where a photo says a 100 words, then a video must speak one million. There is such an impact to your market when your event is captured via video. When your event is filmed, you have opened your brand to many options such as sharing, posting, viewing and clicking, especially if you upload your videos to your company website or personal website.</p>
                            </div>
                            <div className='grid gap-y-3 lg:w-4/12 mt-6 lg:mt-0 px-3 lg:px-0'>
                                <p className='bg-amber-400 p-2 text-gray-600'>VIDEO IN HIGH DEFINITION</p>
                                <p className='bg-amber-400 p-2 text-gray-600'>PACKAGED DVD FOR RESELL</p>
                                <p className='bg-amber-400 p-2 text-gray-600'>VIDEO FOR YOUTUBE AND UPLOAD</p>
                                <p className='bg-amber-400 p-2 text-gray-600'>TRAINING VIDEOS FOR INTERNAL USE</p>
                            </div>
                        </div>
                    </div>
                </div>


            </div>

        </div>
    )
}

export default Photography
