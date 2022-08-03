import React from 'react';
import { Link } from 'react-router-dom';
import FrequentlyMainBlogs from './FrequentlyMainBlogs/FrequentlyMainBlogs';
const MainBlogs = () => {
    return (
        <div className='route'>
          <div>

          <div className="banner-background">
             <div className='flex justify-center items-center py-20'>
                <div className='text-center'>
                <h1 className='breadcrumb-section font-bold'>OUR BLOGS</h1>
                <h1 className='big-title'>Eventy 
                <br />
                <strong className='text-[#ffbe30]'>LATEST BLOGS</strong>
                </h1>
                <div className='mt-3'>
                    <Link to='/' className='text-[16px] font-bold hover:text-[#ffbe30] text-white border-r-4 pr-3'>Home</Link>
                    <p className='text-[16px] font-bold text-white inline-block  pl-2'>Our Blogs</p>
                </div>
                </div>
             </div>
            </div>
            <FrequentlyMainBlogs/>
          </div>
        </div>
    );
};

export default MainBlogs;