import React from 'react'

function PurchaseEvent() {
    return (
        <div className=" p-3 bg-image"
            style={{ backgroundImage: "url('https://i.ibb.co/DLQD5bZ/special-offer-bg.png')", backgroundSize: 'cover' }} >

            <div className='my-10'
             data-aos="fade-up"
             data-aos-duration="2000"
            >
                <div className='text-center -mt-8'>
                    <p className='lg:text-3xl text-xl text-white uppercase'>
                        <span>Are You Ready To Make</span>
                        <span className='font-bold pl-2'>Your Own Special Events <span className='lg:text-7xl'>?</span></span>
                    </p>
                    <p className='my-2'>“Get started now, Harmoni event management PSD template.”</p>
                </div>

                <div className='flex justify-center lg:mt-12 mt-5 lg:-mb-7 -mb-9'>
                    <button className='bg-white text-rose-600 lg:px-8 px-4 lg:py-4 py-3 uppercase font-bold rounded-full tracking-wide'>purchase now!</button>
                </div>
            </div>

        </div>
    )
}

export default PurchaseEvent
