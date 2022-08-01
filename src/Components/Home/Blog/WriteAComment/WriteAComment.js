import React from 'react';

const WriteAComment = () => {
    return (
        <div>
            <h1 className="text-[48px]">Write A <strong>Comment</strong></h1>
            <div>
               <form >
                <div className=" md:flex gap-7 ">
                <input type="text" placeholder="Name" className="md:w-[234px] w-full h-[52px] px-5  py-9 outline-amber-300 block mt-5  bg-[#f7f7f7]"/>
                <input type="email" placeholder="Email" className="md:w-[234px] w-full h-[52px] px-5 py-9 outline-amber-300 block mt-5  bg-[#f7f7f7]"/>
                <input type="text" placeholder="YOur Phone Number" className="md:w-[234px] w-full h-[52px] px-5 py-9 outline-amber-300 block mt-5  bg-[#f7f7f7]"/>

                </div>
                <textarea className='w-full md:w-[750px] mt-5 h-[150px] outline-amber-300 bg-[#f7f7f7]'></textarea>
<br />
                <button className='custom-btn px-10 py-3 rounded-full text-white font-extrabold mt-10'> Submit Now</button>
               </form>
            </div>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
        
        </div>
    );
};

export default WriteAComment;