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
        <div>
            <section className="py-10 px-5 main" id="contact">
                <div className="container mx-auto">
                    <div data-aos="zoom-out-down" className="space-y-5 mb-8 text-center">
                        <h2 className="text-2xl uppercase">Contact Us</h2>
                        <p className="text-base text-gray-600 text-paragraph max-w-lg mx-auto"></p>
                    </div>
                    <div className="flex flex-row justify-between sm:justify-center gap-x-10 gap-y-5 flex-wrap items-start ">
                        <div className="flex flex-col lg:flex-row gap-x-3 gap-y-1.5 shadow-lg rounded-md px-3 pb-3 bg-white">
                            <div className="text-accent rounded-sm text-2xl bounce mt-0.5">
                                <FiMail />
                            </div>
                            <div className="space-y-1">
                                <h4 className="font-body text-xl">Have a question?</h4>
                                <p className="text-paragraph">I am here to help you.</p>
                                <p className="text-accent font-normal">
                                    Email us at binarybrains777@gmail.com
                                </p>
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
                                className="py-2 px-5 bg-green-500/70 hover:bg-green-500/90 font-medium text-white rounded-md transition-all cursor-pointer"
                                value="submit"
                            ></input>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default BookingContact
