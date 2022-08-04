import React from 'react';
import { useParams } from 'react-router-dom';
import useFetch from '../Home/OurServices/Hook/useFetch';
import { FiMail } from 'react-icons/fi';
import { toast } from 'react-toastify';
import axios from 'axios';
import { MapContainer, TileLayer } from 'react-leaflet';

const SingleEventBooking = () => {

    const { id } = useParams();

    const event = useFetch(`http://localhost:5000/venue/${id}`, {});
    console.log(event);

    const { venueName, seats, price, code, star, img, location } = event

    const name = venueName?.split(' ');
    console.log(name);


    const submission = (e) => {
        e.preventDefault();

        const bookingInfo = {
            user_name: e.target.user_name.value,
            user_email: e.target.user_email.value,
            phone: e.target.phone.value,
            address: e.target.address.value,
            message: e.target.message.value,
            location: e.target.location.value,
            image: img,
            eventName: venueName,
            eventPrice: price
        }
        console.log(bookingInfo);

        axios.post('http://localhost:5000/venue-booking', bookingInfo)
            .then(res => {
                const { data } = res
                console.log(data);
                if (data.insertedId) {
                    toast.success('Your order placed successfully. Check it up in your dashboard.')
                }
                else {
                    toast.error('Faild to prossed booking. Please try again.')
                }
            })

        e.target.reset();
    };


    return (
        <div className='route'>
            <div className=" p-3 bg-image lg:h-[340px] h-[200px] banner-background">
                <div className="flex justify-center items-center h-full lg:-mt-8">
                    <div className="text-white">
                        <p className="tracking-[8px] uppercase">ALL YOU NEED TO KNOW About this venue</p>
                        <p className="text-6xl text-center font-bold my-3">
                            <span className="text-[#ffbe30] mr-4 uppercase">{name && name[0]}</span>
                            <span className="font-normal tracking-wide uppercase">{name && name[1]}</span>
                        </p>
                    </div>
                </div>
            </div>
            {/* <img src={event?.img} alt="" className='h-[80vh] w-screen object-cover' /> */}
            <div className='bg-gray-200'>
                <div class="lg:flex justify-around max-w-7xl mx-auto py-14 lg:flex-row-reverse">

                    <div className='flex justify-center w-full relative'>
                        <img src={img} class=" shadow-2xl" alt='' />
                        <div className={`absolute top-0 left-0 batch flex justify-end pr-6`}>
                            <p className='font-bold text-lg text-center rotate-90'>{star} ⭐ <br /> Hotel</p>
                        </div>
                    </div>
                    <div className='grid justify-center items-center w-full'>
                        <div class="text-xl w-[600px]">
                            <p className='text-3xl font-semibold'>Price: ${price}</p>
                            <p className='text-2xl font-semibold'>Capacity: {seats} seats</p>
                            <p className='text-2xl font-semibold'>Venue code: {code}</p>
                            {/* <p className='flex items-center text-xl font-semibold'>Reating: {star} <span><AiFillStar className='text-yellow-500' /></span></p> */}

                            <div className='mt-6'>
                                <p className='text-xl font-semibold '>Location: {location}</p>
                                <MapContainer center={[51.505, -0.09]} zoom={7} scrollWheelZoom={true} style={{ height: 256, width: 570 }}>
                                    <TileLayer
                                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                    />
                                </MapContainer>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <div className='bg-gray-100'>
                    <section className="py-10 px-5 main" id="contact">
                        <div className="container mx-auto">
                            <div data-aos="zoom-out-down" className="space-y-5 mb-8 text-center">
                                <h2 className="text-2xl uppercase">Place your booking here</h2>
                                <p className="text-base text-gray-600 text-paragraph max-w-lg mx-auto"></p>
                            </div>
                            <div className="flex flex-row justify-between sm:justify-center gap-x-10 gap-y-5 flex-wrap items-start ">
                                <div className="flex flex-col lg:flex-row gap-x-3 gap-y-1.5 shadow-lg rounded-md px-3 pb-3 bg-white">
                                    <div className="text-[#ffbe30] rounded-sm text-2xl bounce mt-0.5">
                                        <FiMail />
                                    </div>
                                    <div className="space-y-1  pt-3">
                                        <h4 className="font-body text-xl">For more information.</h4>
                                        <p className="text-paragraph"></p>
                                        <p className=" font-normal"> Contuct Us</p>
                                        <p className=" font-semibold text-yellow-500">Email: biarybrains777@gmail.com </p>
                                    </div>
                                </div>
                                <form
                                    onSubmit={submission}
                                    className="space-y-8 w-full max-w-[780px] mt-5"
                                >
                                    <div className="flex gap-8">
                                        <input
                                            required
                                            className="border border-gray-900/30 text-paragraph h-[60px] outline-none pl-6 w-full font-body text-[15px] rounded-md focus:outline focus:outline-1 focus:outline-accent placeholder:text-gray-900/50"
                                            type="text"
                                            placeholder="Your name"
                                            name="user_name"
                                        />
                                        <input
                                            required
                                            className="border border-gray-900/30 text-paragraph h-[60px] outline-none pl-6 w-full font-body text-[15px] rounded-md focus:outline focus:outline-1 focus:outline-accent placeholder:text-gray-900/50"
                                            type="email"
                                            placeholder="Your email"
                                            name="user_email"
                                        />
                                    </div>

                                    <div className="flex gap-8">
                                        <input
                                            required
                                            className="border border-gray-900/30 text-paragraph h-[60px] outline-none pl-6 w-full font-body text-[15px] rounded-md focus:outline focus:outline-1 focus:outline-accent placeholder:text-gray-900/50"
                                            type="text"
                                            placeholder="Phone Number"
                                            name="phone"
                                        />
                                    </div>


                                    <textarea
                                        required
                                        className="border border-gray-900/30 resize-none w-full outline-none p-6 rounded-md h-[70px] focus:outline focus:outline-1 focus:outline-accent placeholder:text-gray-900/50"
                                        placeholder="Your Address"
                                        name="address"
                                    ></textarea>
                                    <textarea
                                        required
                                        className="border border-gray-900/30 resize-none w-full outline-none p-6 rounded-md h-[100px] focus:outline focus:outline-1 focus:outline-accent placeholder:text-gray-900/50"
                                        placeholder="Your message"
                                        name="message"
                                    ></textarea>


                                    <input
                                        required
                                        className="hidden"
                                        type="text"
                                        value={img}
                                        name="image"
                                    />

                                    <input
                                        required
                                        className="hidden"
                                        type="text"
                                        value={venueName}
                                        name="eventName"
                                    />

                                    <input
                                        required
                                        className="hidden"
                                        type="text"
                                        value={price}
                                        name="eventPrice"
                                    />

                                    <input
                                        required
                                        className="hidden"
                                        type="text"
                                        value={location}
                                        name="location"
                                    />


                                    <input
                                        type="submit"
                                        className='text-sm space-x-10 px-11 py-4 bg-amber-400 hover:bg-amber-500 rounded-full text-white uppercase font-bold mt-6 transition-all duration-500'
                                        value="PLACE YOUR ORDER"
                                    ></input>
                                </form>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default SingleEventBooking;