import React from 'react';
import { Link } from 'react-scroll';
import './RegisterEvent.css'
import paymentCards from '../img/payment-cards.png'
const RegisterEvent = () => {
   return (
      <section className='container mx-auto px-2 my-10'>
         <div class="">
            <div class=""><h1 class="text-4xl  font-medium text-slate-700 ">Register <strong>Now</strong></h1></div>
            <div class="border my-10">
               <ul>
                  <li class="bg-gradient-to-r from-[#FF5308] to-[#FFB02A] rounded-t p-2">
                     <div class="text-white text-base md:text-lg grid md:flex gap-2">
                        <h1 className='text-slate-200'>SUN, <strong className='text-slate-100'>DEC 26, 2018,</strong> 15:00 PM – THU,</h1>
                        <h2 className='text-slate-200'><strong className='text-slate-100'>DEC 28, 2018,</strong> 10:00 PM</h2>
                     </div>
                     <span class="text-white pt-3">Sales end on December 31</span>
                  </li>
                  <li class="px-2">
                     <div class="flex py-2 border-b items-center justify-between ">
                        <div class="">
                           <h3 class="ticket-title text-xl md:text-2xl font-semibold text-slate-600">Harmoni Package 1</h3>
                           <h4 class="ticket-price text-slate-500 text-base font-semibold">$120.00 + FEE $5.00</h4>
                        </div>
                        <div class="">
                           <div class="ticket-select">
                              <select className='bg-[#00000017] text-slate-500 font-semibold text-base md:text-lg rounded p-2 mr-3 outline-yellow-500 cursor-pointer' id="ticket-select1">
                                 <option className='text-slate-500 font-semibold text-sm md:text-base' selected="">0 TICKET</option>
                                 <option className='text-slate-500 font-semibold text-sm md:text-base' value="1">1 TICKET</option>
                                 <option className='text-slate-500 font-semibold text-sm md:text-base' value="2">2 TICKET</option>
                                 <option className='text-slate-500 font-semibold text-sm md:text-base' value="3">3 TICKET</option>
                              </select>
                           </div>
                        </div>
                     </div>

                     <div class="flex py-2 border-b items-center justify-between">
                        <div class="">
                           <h3 class="ticket-title text-xl md:text-2xl font-semibold text-slate-600">Harmoni Package 2</h3>
                           <h4 class="ticket-price text-slate-500 font-semibold">$120.00 + FEE $5.00</h4>
                        </div>
                        <div class="">
                           <div class="ticket-select">
                              <select className='bg-[#00000017] text-slate-500 font-semibold text-base md:text-lg rounded p-2 mr-3 outline-yellow-500 cursor-pointer' id="ticket-select2">
                                 <option className='text-slate-500 font-semibold text-sm md:text-base' selected="">0 TICKET</option>
                                 <option className='text-slate-500 font-semibold text-sm md:text-base' value="1">1 TICKET</option>
                                 <option className='text-slate-500 font-semibold text-sm md:text-base' value="2">2 TICKET</option>
                                 <option className='text-slate-500 font-semibold text-sm md:text-base' value="3">3 TICKET</option>
                              </select>
                           </div>
                        </div>
                     </div>

                     <div class="flex py-2 border-b items-center justify-between">
                        <div class="">
                           <h3 class="ticket-title text-xl md:text-2xl font-semibold text-slate-600">Harmoni Package 3</h3>
                           <h4 class="ticket-price text-slate-500 font-semibold">$120.00 + FEE $5.00</h4>
                        </div>
                        <div class="">
                           <div class="ticket-select">
                              <select className='bg-[#00000017] text-slate-500 font-semibold text-sm md:text-lg rounded p-2 mr-3 outline-yellow-500 cursor-pointer' id="ticket-select3">
                                 <option className='text-slate-500 font-semibold text-sm md:text-base' selected="">0 TICKET</option>
                                 <option className='text-slate-500 font-semibold text-sm md:text-base' value="1">1 TICKET</option>
                                 <option className='text-slate-500 font-semibold text-sm md:text-base' value="2">2 TICKET</option>
                                 <option className='text-slate-500 font-semibold text-sm md:text-base' value="3">3 TICKET</option>
                              </select>
                           </div>
                        </div>
                     </div>
                  </li>
                  <li class="grid md:flex gap-4 items-center justify-between px-4 py-6">
                     <div class=" grid sm:flex gap-4">
                        <span class="payment-card">
                           <img src={paymentCards} alt="payment Cards Not Found" />
                        </span>
                        <span class="total-price text-slate-600 font-medium">TOTAL PRICE :  $570.00</span>
                     </div>
                     <div class="">
                        <Link to="#!" class="custom-btn text-base w-full md:text-lg px-6 uppercase cursor-pointer text-white rounded py-2 ">order now</Link>
                     </div>
                  </li>
               </ul>
            </div>

         </div>
      </section>
   );
};

export default RegisterEvent;