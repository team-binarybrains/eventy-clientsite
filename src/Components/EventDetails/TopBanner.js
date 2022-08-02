import React from 'react';
import style from './EventDetails.module.css'

const TopBanner = () => {

    
    return (
        <div className='bg-black/60 text-white text-center h-full py-16 flex flex-col justify-around'>
            <h5 className={`${style.openSans} text-white uppercase tracking-[8px]`}>Event Single</h5>
            <h3 className={`text-4xl`}>Harmoni</h3>
            <h3 className={`text-4xl font-bold ${style.highlight}`}>Event Details</h3>
            <div className={`flex justify-center items-center mt-8`}>
                <button className={`${style.child}`} >Home</button>
                <button className={`${style.child}`} >Events</button>
                <p className={`${style.child}`}>Istanbul Wine Party 2018</p>
            </div>
        </div>
    );
};

export default TopBanner;