import React from 'react'

function PurchaseEvent() {
    return (
        <div className=" p-3 bg-image"
            style={{ backgroundImage: "url('https://i.ibb.co/DLQD5bZ/special-offer-bg.png')", backgroundSize: 'cover' }} >

            <div>
                <div className='text-center'>
                    <p className='text-3xl text-white uppercase'>
                        <span>Are You Ready To Make</span>
                        <span className='font-bold pl-2'>Your Own Special Events?</span>
                    </p>
                    <p>“Get started now, Harmoni event management PSD template.”</p>
                </div>

                <div className='flex justify-center'>
                    <button>purchase now</button>
                </div>
            </div>

        </div>
    )
}

export default PurchaseEvent
