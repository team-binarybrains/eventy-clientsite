import React from 'react';

const Loading = () => {
    return (
        <div className='fixed top-0 bottom-0 right-0 left-0 flex justify-center h-[98vh] items-center backdrop-blur-sm z-[99999]'>
            <div className='h-16 w-16 border-8 border-black rounded-full border-l-0 border-r-0 animate-spin'></div>
        </div>
    );
};

export default Loading;