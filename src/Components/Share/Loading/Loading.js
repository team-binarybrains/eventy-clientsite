import React from 'react';
import style from './loading.module.css';

const Loading = () => {
    return (
        <div className='fixed top-0 bottom-0 right-0 left-0 flex justify-center items-center backdrop-blur-lg bg-white z-[99999]'>
            {/* <div className='w-48 h-48 border-[1rem] border-black rounded-full border-l-0 border-r-0 animate-spin'></div> */}

            <div className={`${style.preloader}`}>
                <div className={`${style.preloader__square}`}></div>
                <div className={`${style.preloader__square}`}></div>
                <div className={`${style.preloader__square}`}></div>
                <div className={`${style.preloader__square}`}></div>
            </div>
        </div>
    );
};

export default Loading;