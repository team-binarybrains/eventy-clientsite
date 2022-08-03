import React from 'react'
import { FiMail } from "react-icons/fi";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import "./BookingContact.css";


function BookingContact() {
    const submission = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                "service_9azmkim",
                "template_btw71qt",
                e.target,
                "o9Z3tWsWjPM6vPC1M"
            )
            .then(
                (result) => {
                    toast.success("Email send successfully", { theme: "dark" });
                },
                (error) => {
                    toast.error(error.text, { theme: "light" });
                }
            );

        e.target.reset();
    };
    return (
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
                                    className="border-2 border-gray-900/30 text-paragraph h-[60px] outline-none pl-6 w-full font-body text-[15px] rounded-md focus:outline focus:outline-1 focus:outline-accent placeholder:text-gray-900/50"
                                    type="text"
                                    placeholder="Your name"
                                    name="user_name"
                                />
                                <input
                                    required
                                    className="border-2 border-gray-900/30 text-paragraph h-[60px] outline-none pl-6 w-full font-body text-[15px] rounded-md focus:outline focus:outline-1 focus:outline-accent placeholder:text-gray-900/50"
                                    type="email"
                                    placeholder="Your email"
                                    name="user_email"
                                />
                            </div>
                            <input
                                required
                                className="border-2 border-gray-900/30 text-paragraph h-[60px] outline-none pl-6 w-full font-body text-[15px] rounded-md focus:outline focus:outline-1 focus:outline-accent placeholder:text-gray-900/50"
                                type="text"
                                placeholder="Subject"
                                name="subject"
                            />
                            <textarea
                                required
                                className="border-2 border-gray-900/30 resize-none w-full outline-none p-6 rounded-md h-[200px] focus:outline focus:outline-1 focus:outline-accent placeholder:text-gray-900/50"
                                placeholder="Your message"
                                name="message"
                            ></textarea>
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
    )
}

export default BookingContact
