import React from 'react'

function AboutUs() {
    return (
        <div className='flex justify-around py-20 bg-gray-100'>
            <div>
                <h1 className='uppercase my-5 text-gray-400 text-[20px] tracking-[10px]'>we are eventy</h1>
                <h1 className='text-4xl font-bold my-4'>A Great <br /> Events Management</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Sint iste fugiat, repudiandae facere asperiores veniam, <br /> hic, deserunt in assumenda dignissimos nostrum excepturi incidunt <br /> quibusdam perferendis voluptatem facilis officia earum sed?</p>
            </div>

            <div className='grid justify-center w-[800px]'>

                <div className='flex'>
                    <div className='h-[200px] w-[200px] border border-black'>
                        <p>Friendly Team</p>
                        <p>More than 200 teams</p>
                    </div>
                    <div className='h-[200px] w-[200px] border border-black'>
                        <p>Perfact Vanues</p>
                        <p>Perfact Vanues</p>
                    </div>
                    <div className='h-[200px] w-[200px] border border-black'>
                        <p>Unique Scenario</p>
                        <p>We thinking out of the box</p>
                    </div>
                </div>

                <div className='flex'>
                    <div className='h-[200px] w-[200px] border border-black'>
                        <p>Unforgettable Time</p>
                        <p>We make you perfect event</p>
                    </div>
                    <div className='h-[200px] w-[200px] border border-black'>
                        <p>24/7 Hours Support</p>
                        <p>Anytime anywhere</p>
                    </div>
                    <div className='h-[200px] w-[200px] border border-black'>
                        <p>Briliant Idea</p>
                        <p>We have million idea</p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default AboutUs
