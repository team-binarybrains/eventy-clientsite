/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { AiOutlineArrowUp } from "react-icons/ai";
import { BiUpArrow } from "react-icons/bi";
import { IoIosArrowUp } from "react-icons/io";
// import link
import { animateScroll as scroll } from "react-scroll";
// import icon
import "./Backtotop.css";
const BackTopBtn = () => {
  const [show, setShow] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      return window.scrollY > 600 ? setShow(true) : setShow(false);
    });
  });
  const scrollToTop = () => {
    scroll.scrollToTop();
  };
  return (
    show && (
      <button
        onClick={() => scrollToTop()}
        className="bounce  bg-gradient-to-r from-rose-600 to-red-600 hover:bg-accent-hover text-3xl  w-12 h-16 rounded-sm fixed right-8 bottom-[150px] lg:bottom-[530px] cursor-pointer flex justify-center items-center transition-all z-[999]"
      >
        <div className="text-white font-bold ">
          <IoIosArrowUp></IoIosArrowUp>
          <IoIosArrowUp className="-mt-10"></IoIosArrowUp>
        </div>
      </button>
    )
  );
};

export default BackTopBtn;
