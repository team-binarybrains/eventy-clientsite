import React from 'react';
import "./OrderSummary.css";
import TicketInfo from './TicketInfo';


const OrderSummary = () => {
    return (
        <div className='grid grid-cols-12 gap-8'>
            <div className='col-span-12 sm:col-span-8'>
                <h3 className='text-3xl'
                    data-aos="fade-right"
                    data-aos-duration="2000"
                >Order <span className='font-bold'>Summary</span></h3>

                <div class="overflow-x-auto p-8 bg-white mt-8 mb-12">
                    <table class="table w-full font-bold text-center">
                        <tbody>
                            <tr
                                data-aos="flip-down"
                                data-aos-duration="2000"
                            >
                                <td style={{ borderTopLeftRadius: "0px" }} className='orderTableHeading'>TICKET TYPE</td>
                                <td className='orderTableHeading'>PRICE</td>
                                <td className='orderTableHeading'>FEE</td>
                                <td className='orderTableHeading'>QUANTITY</td>
                                <td style={{ borderTopRightRadius: "0px" }} className='orderTableHeading'>SUBTOTAL</td>
                            </tr>
                            <tr
                                data-aos="flip-down"
                                data-aos-duration="2500"
                            >
                                <td className='bg-slate-100'>Eventy Package 1</td>
                                <td className='bg-slate-100'>$120.00</td>
                                <td className='bg-slate-100'>$5.00</td>
                                <td className='bg-slate-100'> <input className='w-12 text-center focus:outline-none bg-slate-100' type="text" defaultValue="5" /> </td>
                                <td className='bg-slate-100'>$675.00</td>
                            </tr>
                            <tr
                                data-aos="flip-down"
                                data-aos-duration="2500"
                            >
                                <td>Eventy Package 2</td>
                                <td>$120.00</td>
                                <td>$5.00</td>
                                <td> <input className='w-12 text-center focus:outline-none' type="text" defaultValue="5" /> </td>
                                <td>$675.00</td>
                            </tr>
                            <tr
                                data-aos="flip-down"
                                data-aos-duration="2500"
                            >
                                <td style={{ letterSpacing: "1px", borderBottomLeftRadius: "0px" }} className='pl-8 text-left bg-amber-500' colSpan={4}>ORDER TOTAL</td>
                                <td style={{ borderBottomRightRadius: "0px" }} className='bg-amber-500'>$2575.00</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <h3 className='text-3xl mb-7'
                    data-aos="fade-right"
                    data-aos-duration="2000"
                >Registration <span className='font-bold'>Information</span></h3>

                <div className='grid grid-cols-1 sm:grid-cols-12 gap-10 mb-12'>
                    <div className='col-span-6'>
                        <h4 className='text-2xl font-bold mb-4'
                            data-aos="fade-right"
                            data-aos-duration="2000"
                        >TICKET BUYER</h4>
                        <div className='flex flex-col gap-2'>
                            <input type="text" placeholder="First Name" class="input input-bordered inputDegine"
                                data-aos="flip-down"
                                data-aos-duration="2500"
                            />
                            <input type="text" placeholder="Last Name" class="input input-bordered inputDegine"
                                data-aos="flip-down"
                                data-aos-duration="2500"
                            />
                            <input type="text" placeholder="Email Address" class="input input-bordered inputDegine"
                                data-aos="flip-down"
                                data-aos-duration="2500"
                            />
                            <input type="text" placeholder="Confirm Email Address" class="input input-bordered inputDegine"
                                data-aos="flip-down"
                                data-aos-duration="2500"
                            />
                        </div>
                    </div>
                    <div className='col-span-6'>
                        <h4 className='text-2xl font-bold mb-4'
                            data-aos="fade-left"
                            data-aos-duration="2000"
                        >PAYMENT</h4>
                        <select class="select inputDegine font-semibold mb-2"
                            data-aos="flip-down"
                            data-aos-duration="2500"
                        >
                            <option selected>Select Credit Card</option>
                            <option>Option 1</option>
                            <option>Option 2</option>
                            <option>Option 3</option>
                            <option>Option 4</option>
                            <option>Option 5</option>
                        </select>
                        <input type="text" placeholder="Card Numbers" class="input input-bordered inputDegine"
                            data-aos="flip-down"
                            data-aos-duration="2500"
                        />
                        <h5 style={{ margin: "18px 0px" }} className='text-lg font-bold'
                        data-aos="fade-left"
                        data-aos-duration="2500"
                        >Expired Date</h5>
                        <div className='grid grid-cols-1 sm:grid-cols-3 gap-2'>
                            <select class="select rounded-none border-slate-200  focus:outline-none focus:border-amber-500 inputFontSize font-semibold mb-2"
                                data-aos="flip-down"
                                data-aos-duration="2500"
                            >
                                <option>Month</option>
                                <option>January</option>
                                <option>February</option>
                                <option>March</option>
                                <option>April</option>
                                <option>May</option>
                                <option>June</option>
                                <option>July</option>
                                <option>August</option>
                                <option>September</option>
                                <option>October</option>
                                <option>November</option>
                                <option>December</option>
                            </select>
                            <select class="select rounded-none border-slate-200  focus:outline-none focus:border-amber-500 inputFontSize font-semibold mb-2"
                                data-aos="flip-down"
                                data-aos-duration="2500"
                            >
                                <option>Year</option>
                                <option>2022</option>
                                <option>2021</option>
                                <option>2020</option>
                                <option>2019</option>
                                <option>2018</option>
                            </select>
                            <input type="text" placeholder="CSC" class="input input-bordered inputDegine"
                                data-aos="flip-down"
                                data-aos-duration="2500"
                            />
                        </div>
                    </div>
                </div>

                <div className='mb-12'>
                    <h3 className='text-3xl mb-7'
                    data-aos="fade-right"
                    data-aos-duration="2500"
                    >Billing <span className='font-bold'>Information</span></h3>
                    <div className='flex flex-col gap-2'>
                        <select class="select inputDegine font-semibold"
                            data-aos="flip-down"
                            data-aos-duration="2500"
                        >
                            <option>Select Country</option>
                            <option>Bangladesh</option>
                            <option>China</option>
                            <option>India</option>
                            <option>England</option>
                            <option>Pakistan</option>
                        </select>
                        <input type="text" placeholder="Address" class="input input-bordered inputDegine"
                            data-aos="flip-down"
                            data-aos-duration="2500"
                        />
                        <input type="text" placeholder="Alternative Address" class="input input-bordered inputDegine"
                            data-aos="flip-down"
                            data-aos-duration="2500"
                        />
                        <div className='grid grid-cols-1 sm:grid-cols-3 gap-2'>
                            <input type="text" placeholder="City" class="input input-bordered inputDegine"
                                data-aos="flip-down"
                                data-aos-duration="2500"
                            />
                            <select class="select w-full sm:w-64 rounded-none border-slate-200  focus:outline-none focus:border-amber-500 inputFontSize font-semibold"
                                data-aos="flip-down"
                                data-aos-duration="2500"
                            >
                                <option>States</option>
                                <option>Option 1</option>
                                <option>Option 2</option>
                                <option>Option 3</option>
                                <option>Option 4</option>
                                <option>Option 5</option>
                            </select>
                            <input type="text" placeholder="Zip Code" class="input input-bordered inputDegine"
                                data-aos="flip-down"
                                data-aos-duration="2500"
                            />
                        </div>
                    </div>
                </div>

                <div className='text-center'>
                    <button className='py-4 px-9 custom-btn rounded-full uppercase font-semibold text-white'
                    data-aos="zoom-in"
                    data-aos-duration="2500"
                    >Pay Now</button>
                </div>

            </div>
            <div className='col-span-12 sm:col-span-4 mt-8 sm:mt-0'>
                <h3 className='text-3xl'>Ticket <span className='font-bold'>Info</span></h3>
                <div>
                    <TicketInfo></TicketInfo>
                </div>
            </div>
        </div>
    );
};

export default OrderSummary;