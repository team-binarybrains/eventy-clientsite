import React from 'react';
import { MdDateRange } from "react-icons/md";
import './DateAndCategory.css'
const DateAndCategory = () => {
    return (
        <div className="mt-4">
           <div>
           <div className="md:flex gap-3">
           <div className="flex DateAndTime rounded-md"> 
                 <span className="text-3xl inline-block bg-[#ffbe30]   text-white p-3 rounded-full"><MdDateRange className=""/> </span>
                    <p className="pl-4 text-[#333333] text-xl"><span className="block">Date</span>
                   <strong> 26 DECEMBER 2018</strong>
                   </p>
               
            </div>

           <div className="flex DateAndTime rounded-md"> 
                 <span className="text-3xl inline-block bg-[#ffbe30]   text-white p-3 rounded-full"><MdDateRange className=""/> </span>
                    <p className="pl-4 text-[#333333] text-xl"><span className="block">Date</span>
                   <strong> 26 DECEMBER 2018</strong>
                   </p>
               
            </div>
           </div>

            {/* blogs */}
           <div className="mt-7">
          <p className="text-[20px]">
          Lorem ipsum dollor site amet the best consectuer diam adipiscing elites sed diam nonummy nibh the euismod tincidunt ut laoreet dolore magna aliquam erat volutpat insignia the consectuer adipiscing elit. Lorem ipsum dollor site amet the best consectuer diam adipiscing elites sed diam nonummy nibh the euismod tincidunt ut laoreet dolore magna aliquam erat volutpat insignia the consectuer adipiscing elit. Lorem ipsum dollor site amet the best consectuer diam adipiscing elites sed diam nonummy nibh the euismod tincidunt ut laoreet dolore magna aliquam erat volutpat insignia the consectuer adipiscing elit.
          <br />
          <strong className="text-4xl">Lorem Ipsum Dolor Sit Amet, Quas, Facere.</strong>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil tenetur eveniet esse deserunt officiis itaque fugit velit accusantium praesentium! Pariatur tempore recusandae consequatur odio odit corrupti aliquam neque modi molestias. Porro nulla, sequi illo ipsum ducimus soluta nemo numquam vitae a rem labore earum inventore possimus voluptas commodi doloremque, voluptatum.

Lorem ipsum dollor site amet the best consectuer diam adipiscing elites sed diam nonummy nibh the euismod tincidunt ut laoreet dolore magna aliquam erat volutpat insignia the consectuer adipiscing elit. Lorem ipsum dollor site amet the best consectuer diam adipiscing elites sed diam nonummy nibh the euismod tincidunt ut laoreet dolore magna aliquam erat volutpat insignia the consectuer adipiscing elit. Lorem ipsum dollor site amet the best consectuer diam adipiscing elites sed diam nonummy nibh the euismod tincidunt ut laoreet dolore magna aliquam erat volutpat insignia the consectuer adipiscing elit.
<br />
          </p>
          <div>
<strong className='text-4xl '>Lorem Ipsum Dolor Sit--</strong>
<li><a className='text-3xl  text-[#ffbe30] mt-3 py-3' href="https://eventy-bb.web.app/" target="_blank">Lorem ipsum dolor sit amet.</a></li>

<li><a className='text-3xl  text-[#ffbe30] mt-3 py-3' href="https://eventy-bb.web.app/" target="_blank">Consequatur voluptatem soluta accusamus ab.</a></li>

<li><a className='text-3xl  text-[#ffbe30] mt-3 py-3' href="https://eventy-bb.web.app/" target="_blank">Eius distinctio ratione sit dignissimos!</a></li>

<li><a className='text-3xl  text-[#ffbe30] mt-3 py-3' href="https://eventy-bb.web.app/" target="_blank">Maxime, aliquam, unde! Suscipit, libero.</a></li>

<li><a className='text-3xl  text-[#ffbe30] mt-3 py-3' href="https://eventy-bb.web.app/" target="_blank">Ipsam nostrum repellendus nihil molestiae.</a></li>

<div className='mt-16 text-[20px]'>
    <p>Lorem ipsum dollor site amet the best consectuer diam adipiscing elites sed diam nonummy nibh the euismod tincidunt ut laoreet dolore magna aliquam erat volutpat insignia the consectuer adipiscing elit.</p>
</div>
          </div>
           </div>
           </div>
        </div>
    );
};

export default DateAndCategory;