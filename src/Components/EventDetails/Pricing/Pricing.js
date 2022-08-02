import React from 'react';
import { ImCross } from 'react-icons/im';

const Pricing = () => {
   return (
      <div className='container mx-auto px-4'>
         <div className="">
            <h1 class="text-4xl pt-4 pl-2 font-medium text-slate-700 ">Event <strong>Pricing Plans</strong></h1>
         </div>
         <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-10 items-center justify-items-center">
            <div class="shadow-lg rounded-lg w-full bg-white dark:bg-gray-100 p-4 " >
               <p class="text-gray-800  text-xl font-semibold block mb-4">
                  STANDART
               </p>
               <p class="text-gray-900 text-3xl font-bold">
                  $19
                  <span class="text-gray-500 text-sm">
                     / month
                  </span>
               </p>
               <ul class="text-sm text-gray-600  w-full mt-6 mb-6">
                  <li class="mb-3 flex items-center gap-4">
                     <span><ImCross className='bg-red-400 text-xl text-white p-1 rounded-full' /></span>
                     <h2 className='text-lg text-slate-500 '>1-4 Person</h2>
                  </li>
                  <li class="mb-3 flex items-center gap-4">
                     <span><ImCross className='bg-red-400 text-xl text-white p-1 rounded-full' /></span>
                     <h2 className='text-lg text-slate-500 '>2 Outfits</h2>

                  </li>
                  <li class="mb-3 flex items-center gap-4">
                     <span><ImCross className='bg-red-400 text-xl text-white p-1 rounded-full' /></span>
                     <h2 className='text-lg text-slate-500 '>45 Minutes</h2>
                  </li>
                  <li class="mb-3 flex items-center ">
                     <svg class="h-6 w-6 mr-2" xmlns="http://www.w3.org/2000/svg" width="6" height="6" stroke="currentColor" fill="#10b981" viewBox="0 0 1792 1792">
                        <path d="M1412 734q0-28-18-46l-91-90q-19-19-45-19t-45 19l-408 407-226-226q-19-19-45-19t-45 19l-91 90q-18 18-18 46 0 27 18 45l362 362q19 19 45 19 27 0 46-19l543-543q18-18 18-45zm252 162q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z">
                        </path>
                     </svg>
                     <h2 className='text-lg text-slate-500 '>10 Digital images</h2>
                  </li>
                  <li class="mb-3 flex items-center ">
                     <svg class="h-6 w-6 mr-2" xmlns="http://www.w3.org/2000/svg" width="6" height="6" stroke="currentColor" fill="#10b981" viewBox="0 0 1792 1792">
                        <path d="M1412 734q0-28-18-46l-91-90q-19-19-45-19t-45 19l-408 407-226-226q-19-19-45-19t-45 19l-91 90q-18 18-18 46 0 27 18 45l362 362q19 19 45 19 27 0 46-19l543-543q18-18 18-45zm252 162q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z">
                        </path>
                     </svg>
                     <h2 className='text-lg text-slate-500 '>Print Release</h2>
                  </li>
                  <li class="mb-3 flex items-center ">
                     <svg class="h-6 w-6 mr-2" xmlns="http://www.w3.org/2000/svg" width="6" height="6" stroke="currentColor" fill="#10b981" viewBox="0 0 1792 1792">
                        <path d="M1412 734q0-28-18-46l-91-90q-19-19-45-19t-45 19l-408 407-226-226q-19-19-45-19t-45 19l-91 90q-18 18-18 46 0 27 18 45l362 362q19 19 45 19 27 0 46-19l543-543q18-18 18-45zm252 162q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z">
                        </path>
                     </svg>
                     <h2 className='text-lg text-slate-500 '>Custom Album</h2>
                  </li>
               </ul>
               <button type="button" class="py-2 px-4  bg-yellow-500 hover:bg-gradient-to-r from-[#FFB02A] to-[#FF5308]  focus:none focus:none text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none rounded-full ">
                  Choose plan
               </button>
            </div>
            <div class=" rounded-lg w-full bg-white dark:bg-white p-4 shadow-2xl border" >
               <p class="text-gray-800  text-xl font-semibold block mb-4">
               PROFESSIONAL
               </p>
               <p class="text-gray-900 text-3xl font-bold">
                  $59
                  <span class="text-gray-500 text-sm">
                     / month
                  </span>
               </p>
               <ul class="text-sm text-gray-600  w-full mt-6 mb-6">
                  <li class="mb-3 flex items-center gap-4">
                     <span><ImCross className='bg-red-400 text-xl text-white p-1 rounded-full' /></span>
                     <h2 className='text-lg text-slate-500 '>1-4 Person</h2>
                  </li>
                  <li class="mb-3 flex items-center gap-4">
                     <span><ImCross className='bg-red-400 text-xl text-white p-1 rounded-full' /></span>
                     <h2 className='text-lg text-slate-500 '>2 Outfits</h2>

                  </li>
                  <li class="mb-3 flex items-center gap-4">
                     <span><ImCross className='bg-red-400 text-xl text-white p-1 rounded-full' /></span>
                     <h2 className='text-lg text-slate-500 '>45 Minutes</h2>
                  </li>
                  <li class="mb-3 flex items-center ">
                     <svg class="h-6 w-6 mr-2" xmlns="http://www.w3.org/2000/svg" width="6" height="6" stroke="currentColor" fill="#10b981" viewBox="0 0 1792 1792">
                        <path d="M1412 734q0-28-18-46l-91-90q-19-19-45-19t-45 19l-408 407-226-226q-19-19-45-19t-45 19l-91 90q-18 18-18 46 0 27 18 45l362 362q19 19 45 19 27 0 46-19l543-543q18-18 18-45zm252 162q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z">
                        </path>
                     </svg>
                     <h2 className='text-lg text-slate-500 '>10 Digital images</h2>
                  </li>
                  <li class="mb-3 flex items-center ">
                     <svg class="h-6 w-6 mr-2" xmlns="http://www.w3.org/2000/svg" width="6" height="6" stroke="currentColor" fill="#10b981" viewBox="0 0 1792 1792">
                        <path d="M1412 734q0-28-18-46l-91-90q-19-19-45-19t-45 19l-408 407-226-226q-19-19-45-19t-45 19l-91 90q-18 18-18 46 0 27 18 45l362 362q19 19 45 19 27 0 46-19l543-543q18-18 18-45zm252 162q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z">
                        </path>
                     </svg>
                     <h2 className='text-lg text-slate-500 '>Print Release</h2>
                  </li>
                  <li class="mb-3 flex items-center ">
                     <svg class="h-6 w-6 mr-2" xmlns="http://www.w3.org/2000/svg" width="6" height="6" stroke="currentColor" fill="#10b981" viewBox="0 0 1792 1792">
                        <path d="M1412 734q0-28-18-46l-91-90q-19-19-45-19t-45 19l-408 407-226-226q-19-19-45-19t-45 19l-91 90q-18 18-18 46 0 27 18 45l362 362q19 19 45 19 27 0 46-19l543-543q18-18 18-45zm252 162q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z">
                        </path>
                     </svg>
                     <h2 className='text-lg text-slate-500 '>Custom Album</h2>
                  </li>
               </ul>
               <button type="button" class="py-2 px-4  bg-gradient-to-r from-[#FF5308] to-[#FFB02A]  hover:bg-gradient-to-l from-[#FFB02A] to-[#FF5308]  focus:none focus:none text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none rounded-full ">
                  Choose plan
               </button>
            </div>
            <div class="shadow-lg rounded-lg w-full bg-white dark:bg-gray-100 p-4" >
               <p class="text-gray-800  text-xl font-semibold block mb-4">
               ENTERPRISE
               </p>
               <p class="text-gray-900 text-3xl font-bold">
                  $99
                  <span class="text-gray-500 text-sm">
                     / month
                  </span>
               </p>
               <ul class="text-sm text-gray-600  w-full mt-6 mb-6">
                  <li class="mb-3 flex items-center gap-4">
                     <svg class="h-6 w-6 mr-2" xmlns="http://www.w3.org/2000/svg" width="6" height="6" stroke="currentColor" fill="#10b981" viewBox="0 0 1792 1792">
                        <path d="M1412 734q0-28-18-46l-91-90q-19-19-45-19t-45 19l-408 407-226-226q-19-19-45-19t-45 19l-91 90q-18 18-18 46 0 27 18 45l362 362q19 19 45 19 27 0 46-19l543-543q18-18 18-45zm252 162q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z">
                        </path>
                     </svg>
                     <h2 className='text-lg text-slate-500 '>1-4 Person</h2>
                  </li>
                  <li class="mb-3 flex items-center gap-4">
                     <svg class="h-6 w-6 mr-2" xmlns="http://www.w3.org/2000/svg" width="6" height="6" stroke="currentColor" fill="#10b981" viewBox="0 0 1792 1792">
                        <path d="M1412 734q0-28-18-46l-91-90q-19-19-45-19t-45 19l-408 407-226-226q-19-19-45-19t-45 19l-91 90q-18 18-18 46 0 27 18 45l362 362q19 19 45 19 27 0 46-19l543-543q18-18 18-45zm252 162q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z">
                        </path>
                     </svg>
                     <h2 className='text-lg text-slate-500 '>2 Outfits</h2>

                  </li>
                  <li class="mb-3 flex items-center gap-4">
                     <svg class="h-6 w-6 mr-2" xmlns="http://www.w3.org/2000/svg" width="6" height="6" stroke="currentColor" fill="#10b981" viewBox="0 0 1792 1792">
                        <path d="M1412 734q0-28-18-46l-91-90q-19-19-45-19t-45 19l-408 407-226-226q-19-19-45-19t-45 19l-91 90q-18 18-18 46 0 27 18 45l362 362q19 19 45 19 27 0 46-19l543-543q18-18 18-45zm252 162q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z">
                        </path>
                     </svg>
                     <h2 className='text-lg text-slate-500 '>45 Minutes</h2>
                  </li>
                  <li class="mb-3 flex items-center gap-4">
                     <span><ImCross className='bg-red-400 text-xl text-white p-1 rounded-full' /></span>
                     <h2 className='text-lg text-slate-500 '>10 Digital images</h2>
                  </li>
                  <li class="mb-3 flex items-center gap-4">
                     <span><ImCross className='bg-red-400 text-xl text-white p-1 rounded-full' /></span>
                     <h2 className='text-lg text-slate-500 '>Print Release</h2>
                  </li>
                  <li class="mb-3 flex items-center gap-4">
                     <span><ImCross className='bg-red-400 text-xl text-white p-1 rounded-full' /></span>
                     <h2 className='text-lg text-slate-500 '>Custom Album</h2>
                  </li>
               </ul>
               <button type="button" class="py-2 px-4  bg-yellow-500 hover:bg-gradient-to-r from-[#FFB02A] to-[#FF5308]  focus:none focus:none text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none rounded-full ">
                  Choose plan
               </button>
            </div>
         </div>
      </div>
   );
};

export default Pricing;