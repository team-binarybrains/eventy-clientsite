import { useParams } from 'react-router-dom'
import Venues from '../Venues/Venues'
import useFetch from './Hook/useFetch'
import { FiMail } from "react-icons/fi";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import axios, { Axios } from 'axios';
import { useEffect, useState } from 'react';
import './SingleService.css'
// import style from '../Venues/venue.module.css'

function SingleService() {

    const { id } = useParams()
    // const [serviceDetails, setServiceDetails] = useState({})
    // console.log(serviceDetails);
    const details = useFetch(`http://localhost:5000/single-service/${id}`, {})

    const { eventName, image, description, eventPrice } = details
    // console.log(eventName.split(' '));

    const name = eventName?.split(' ');
    console.log(name);


    // const handleBooking = () => {

    // }


    const submission = (e) => {
        e.preventDefault();

        const bookingInfo = {
            user_name: e.target.user_name.value,
            user_email: e.target.user_email.value,
            phone: e.target.phone.value,
            address: e.target.address.value,
            message: e.target.message.value,
            code: e.target.code.value,
            image: image,
            eventName: eventName,
            eventPrice: eventPrice
        }
        console.log(bookingInfo);

        axios.post('http://localhost:5000/service-booking', bookingInfo)
            .then(res => {
                const { data } = res
                console.log(data);
                if (data.insertedId) {
                    toast.success('Your order placed successfully. We will contact you soon for confirm your booking. Check it up in your dashboard.')
                }
                else {
                    toast.error('Faild to prossed booking. Please try again.')
                }
            })



        emailjs
            .sendForm(
                "service_6dyxcv9",
                "template_9kexzyl",
                e.target,
                "o9Z3tWsWjPM6vPC1M",
            )
            .then(
                (result) => {},
                (error) => {
                    toast.error(error.text, { theme: "light" });
                }
            );

        e.target.reset();
    };


    const [select,setSelect] = useState({});
    const [venues,setVenues] = useState([]);

    // const {venueCode} = venues
    useEffect(()=> {
        axios.get(`http://localhost:5000/venues`)
        .then(res => {
            setVenues(res?.data);
            setSelect(res?.data[0]);
        })
    },[])

    const selection = (venue)=> {
        setSelect(venue);
    }

    return (
        <div className='route'>
            <div className=" p-3 bg-image lg:h-[340px] h-[200px] banner-background">
                <div className="flex justify-center items-center h-full lg:-mt-8">
                    <div className="text-white">
                        <p className="tracking-[8px] uppercase">ALL YOU NEED TO KNOW About this service</p>
                        <p className="text-6xl text-center font-bold my-3">
                            <span className="text-[#ffbe30] mr-4 uppercase">{name && name[0]}</span>
                            <span className="font-normal tracking-wide uppercase">{name && name[1]}</span>
                        </p>
                    </div>
                </div>
            </div>

            <div className='bg-gray-200'>
                <div class="lg:flex justify-around max-w-7xl mx-auto py-14 lg:flex-row-reverse">
                    <div className='flex justify-center w-full'>
                        <img src={image} class=" shadow-2xl" alt='' />
                    </div>
                    <div className='grid justify-center items-center w-full '>
                        <p class="text-xl w-[600px]">
                            <span className='text-4xl font-semibold font-serif -ml-2'>{description?.slice(0, 1)}</span>
                            <span className='-ml-1'>{description?.slice(1)}</span>
                        </p>
                        <p className='text-3xl font-semibold'>Price: ${eventPrice}</p>
                    </div>
                </div>
            </div>



            {/*---- venue ---- */}
            <section className='bgImage'>
                <section className='bg-[#333333c7]'>
                    <div className='py-[100px] flex sm:flex-row flex-col sm:items-end sm:justify-center gap-x-[1%] gap-y-5 flex-wrap container mx-auto'>
                        <div className='basis-[49%] shrink px-3'>
                            <div className='max-w-[530px] ml-auto text-center sm:text-left'>
                                <div className='h-[3px] w-[70px] bg-gradient-to-r from-red-500 to-pink-500 mx-auto sm:mx-0 mb-2' />
                                <h4 className='openSans text-white uppercase tracking-[5px] mb-4'>Eventy Venues</h4>
                                <h2 className='roboto text-4xl text-white'>Conference <span className='font-bold'>Rooms & Hotels</span></h2>
                            </div>
                            <div className={`h-[424px] max-w-[500px] overflow-y-scroll mt-10 section ml-auto`}>

                                {
                                    venues.map((venue) => {
                                        return <div className={`h-[141px] max-w-[424.4px] mr-[30px] p-[30px] flex items-center gap-[10%] text-white whitespace-pre cursor-pointer ${venue._id === select._id && 'selected'}`} key={venue.id} onClick={() => selection(venue)}>
                                            <img className='h-[80px] max-w-[80px] object-cover overflow-hidden' src={venue?.img} alt="" />
                                            <div className='space-y-1 shrink'>
                                                <h5 className=''><span className='text-rose-500 font-bold'>{`${venue?.star} ⭐ ${venue?.venueName}`}</span></h5>
                                                <h6 className='text-xs'>{`Party Room ${venue?.seats} seats`}</h6>
                                                <h6 className='text-rose-500 font-bold text-xs'>{`Price from $${venue?.price}/night`}</h6>
                                                <h6 className='text-xs'>{`Venue Code : ${venue?.code}`}</h6>
                                            </div>
                                        </div>
                                    })
                                }

                            </div>
                        </div>
                        <div className={`h-[424px] sm:min-w-[500px] grow basis-[50%] shrink relative highlight}`}>
                            <img src={select.img} alt="" className={`w-full h-[200px] sm:h-[424px] object-cover child opacity-80 `} />
                            <div className={`absolute top-0 left-0 batch flex justify-end pr-6`}>
                                <p className='font-bold text-lg text-center rotate-90'>{select.star} ⭐ <br /> Hotel</p>
                            </div>
                            {/* <button className={`absolute bg-gradient-to-r from-red-500 to-pink-500 top-[calc(50%-25px)] right-[calc(50%-69px)] px-5 py-2 pt-3 rounded-full text-white font-bold uppercase z-10 hover:scale-105 transition-transform active:scale-100`}>Book Now</button> */}
                        </div>
                    </div>
                </section>
            </section>


            {/* input section */}
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
                                <div className="space-y-1">
                                    <h4 className="font-body text-xl">Add your information For place your booking.</h4>
                                    <p className="text-paragraph"></p>
                                    <p className=" font-normal"> We will contact with you for confirm your booking</p>
                                    <p className=" font-semibold"> As soon as possible. </p>
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
                                        placeholder="Venue Code"
                                        name="code"
                                    />
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
                                    className="border border-gray-900/30 resize-none w-full outline-none p-6 rounded-md h-[100px] focus:outline focus:outline-1 focus:outline-accent placeholder:text-gray-900/50"
                                    placeholder="Your Address"
                                    name="address"
                                ></textarea>
                                <textarea
                                    required
                                    className="border border-gray-900/30 resize-none w-full outline-none p-6 rounded-md h-[200px] focus:outline focus:outline-1 focus:outline-accent placeholder:text-gray-900/50"
                                    placeholder="Your message"
                                    name="message"
                                ></textarea>


                                <input
                                    required
                                    className="hidden"
                                    type="text"
                                    value={image}
                                    name="image"
                                />

                                <input
                                    required
                                    className="hidden"
                                    type="text"
                                    value={eventName}
                                    name="eventName"
                                />

                                <input
                                    required
                                    className="hidden"
                                    type="text"
                                    value={eventPrice}
                                    name="eventPrice"
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
    )
}

export default SingleService
