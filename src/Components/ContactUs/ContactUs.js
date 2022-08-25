import React from "react";
import { FiMail } from "react-icons/fi";
import "./ContactUs.css";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import Address from "../AboutUs/Address";

const ContactUs = () => {
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
        <div className="route">

            <div className=" p-3 bg-image lg:h-[340px] h-[200px] banner-background">
                <div className="flex justify-center items-center h-full lg:-mt-8">
                    <div className="text-white text-center"
                        data-aos="zoom-in"
                        data-aos-duration="2000"
                    >
                        <p className="tracking-[8px]">CONTACT US NOW</p>
                        <p className="text-4xl text-center font-bold my-3">
                            <span className="font-normal tracking-wide mr-3">KEEP</span>
                            <span className="text-[#ffbe30]">IN TOUCH</span>
                        </p>
                    </div>
                </div>

                <div className='flex justify-center items-center gap-x-3 lg:-mt-16 -mt-10 text-white '>
                    <Link to='/' className='text-lg font-semibold'
                        data-aos="fade-right"
                        data-aos-duration="2000"
                    >Home</Link>
                    <span>|</span>
                    <p className='text-lg'
                        data-aos="fade-left"
                        data-aos-duration="2000"
                    >Contact Us</p>
                </div>
            </div>

            {/* form */}
            <section className="lg:mt-20 py-10 px-5 main" id="contact">
                <div className="container mx-auto">

                    <div className="flex justify-around">
                        <div className="grid justify-center">
                            <p className="tracking-[6px]"
                                data-aos="fade-right"
                                data-aos-duration="2500"
                            >CONTACT US</p>
                            <p className="text-5xl"
                                data-aos="fade-left"
                                data-aos-duration="2500"
                            >
                                <span>Keep In Touch </span>
                                <span className="font-bold">With Eventy</span>
                            </p>
                        </div>

                        <div className="flex flex-col lg:flex-row gap-x-3 gap-y-1.5 shadow-lg rounded-md px-3 pb-3 bg-white"
                            data-aos="zoom-in-up"
                            data-aos-duration="2500"
                        >
                            <div className="text-amber-400 rounded-sm text-2xl bounce mt-0.5">
                                <FiMail />
                            </div>
                            <div className="space-y-1">
                                <h4 className="font-body text-xl">Have a question?</h4>
                                <p className="text-paragraph">I am here to help you.</p>
                                <p className="text-amber-400 font-normal">
                                    Email us at binarybrains777@gmail.com
                                </p>
                            </div>
                        </div>
                    </div>

                    <div data-aos="zoom-out-down" className="space-y-5 mb-8 text-center">
                        <p className="text-base text-gray-600 text-paragraph max-w-lg mx-auto"></p>
                    </div>
                    <div className="flex flex-row justify-between sm:justify-center gap-x-10 gap-y-5 flex-wrap items-start ">

                        <form
                            onSubmit={submission}
                            className="space-y-8 w-full max-w-[1220px] mt-5"
                        >
                            <div className="flex gap-8">
                                <input
                                    required
                                    className=" bg-gray-100 h-[50px] text-paragraph outline-none pl-6 w-full font-body text-[15px] rounded-md focus:outline focus:outline-1 focus:outline-[#ffbe30] placeholder:text-gray-900/50"
                                    type="text"
                                    placeholder="Your name"
                                    name="user_name"
                                    data-aos="fade-right"
                                    data-aos-duration="2500"
                                />
                                <input
                                    required
                                    className="bg-gray-100 h-[50px] text-paragraph outline-none pl-6 w-full font-body text-[15px] rounded-md focus:outline focus:outline-1 focus:outline-[#ffbe30] placeholder:text-gray-900/50"
                                    type="email"
                                    placeholder="Your email"
                                    name="user_email"
                                    data-aos="fade-left"
                                    data-aos-duration="2500"
                                />
                            </div>
                            <input
                                required
                                className="bg-gray-100 h-[50px] text-paragraph outline-none pl-6 w-full font-body text-[15px] rounded-md focus:outline focus:outline-1 focus:outline-[#ffbe30] placeholder:text-gray-900/50"
                                type="text"
                                placeholder="Subject"
                                name="subject"
                                data-aos="zoom-in"
                                data-aos-duration="1550"
                            />
                            <textarea
                                required
                                className="bg-gray-100 resize-none w-full outline-none p-6 rounded-md h-[170px] focus:outline focus:outline-1 focus:outline-[#ffbe30] placeholder:text-gray-900/50"
                                placeholder="Your message"
                                name="message"
                                data-aos="flip-down"
                                data-aos-duration="1550"
                            ></textarea>

                            <div className='flex justify-center'>
                                <input
                                    type="submit"
                                    className='text-sm space-x-10 px-11 py-4 bg-gradient-to-r from-[#ffbe30] to-[#ff3e00] hover:bg-amber-500 rounded-full text-white uppercase font-bold mt-6 transition-all duration-500'
                                    value="SEND MAIL"

                                    data-aos="zoom-in"
                                    data-aos-duration="1500"
                                ></input>
                            </div>
                        </form>
                    </div>
                </div>
            </section>

            <Address></Address>
        </div>
    );
};

export default ContactUs;
