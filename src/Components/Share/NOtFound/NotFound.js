import React from "react";
import Error404 from './error.gif'

const NotFound = () => {
  return (
    <div className='flex justify-center items-center backdrop-blur-3xl h-[calc(100vh-126px)] route'>
            <section className=''>
                <img className='mx-auto max-w-[500px] w-full' src={Error404} alt="" />
                <h3 className='text-red-600 animate-pulse text-center font-bold text-4xl'>Page not Found</h3>
            </section>
        </div>
  );
};

export default NotFound;