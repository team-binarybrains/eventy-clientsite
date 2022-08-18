/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import "./Navbar.css";
import { BiUser } from "react-icons/bi";
import { AiOutlineUser } from "react-icons/ai";
import TopnavBar from "../TopBar/TopnavBar";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../Firebase/firebase.init";
import { signOut } from "firebase/auth";
import { useEffect } from "react";

const Navbar = ({ location }) => {
  const { pathname } = location;
  const routeName = pathname.slice("1");
  const navigate = useNavigate()

  const [navbarBg, setNavbar] = useState(false);
  const changeBg = () => {
    if (window.scrollY >= 200) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };
  window.addEventListener("scroll", changeBg);

  const handleSignOut = () => {
    signOut(auth);
    localStorage.removeItem("accessToken");
    navigate('/')
  };
  const [user] = useAuthState(auth);

  const [show, setShow] = useState("hidden");

  const homeRoute = navbarBg
    ? "navbar active_nav fixed z-[999] text-white"
    : "navbar bg-transparent fixed text-white flex items-center z-[999]";

  const anotherRoute = `fixed left-0 right-0 top-0 z-[999] shadow-lg`;

  const navStyle = ({ isActive }) => {
    return isActive && "btnActive";
  };

  // profile photos load
  const [currentUser, setCurrentUser] = useState([]);
  const email = user?.email
  useEffect(() => {
    fetch(`http://localhost:5000/single-user/${email}`)
      .then(res => res.json())
      .then(data => setCurrentUser(data))
  }, [email]);
  return (
    <div>
      <section className={`${routeName ? anotherRoute : homeRoute} bg-white`}>
        {routeName && <TopnavBar></TopnavBar>}
        <div
          className={` ${routeName ? "bg-white text-black" : "bg-transparent text-white"
            }  flex items-center justify-around flex-wrap grow-0 h-[69px] gap-x-10 z-[999] container mx-auto`}
          id="navbar"
        >
          {/* navbar icons and logo */}
          <div class="flex lg:grow-0 md:grow md:justify-start">
            {/* for mobile */}
            <div class="dropdown">
              <label tabindex="0" class="btn btn-ghost lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-7 w-7"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    stroke-width="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </label>
              <ul
                tabindex="0"
                class="menu bg-white text-black menu-compact dropdown-content mt-3 p-2 shadow rounded-box w-52"
              >
                <li>
                  <Link to="/" className="uppercase">
                    Home
                  </Link>
                </li>
                <li tabindex="0">
                  <Link to={pathname} className="uppercase">
                    About
                    <svg
                      class="fill-current"
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                    >
                      <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                    </svg>
                  </Link>
                  <ul class="p-2" id="megaMenu" style={{ zIndex: "11111" }}>
                    <li>
                      <Link className="uppercase" to="/about">
                        About us
                      </Link>
                    </li>
                    <li>
                      <Link className="uppercase" to="/faq">
                        faq
                      </Link>
                    </li>
                  </ul>
                </li>
                <li tabindex="0">
                  <Link to={pathname} className="uppercase">
                    Event
                    <svg
                      class="fill-current"
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                    >
                      <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                    </svg>
                  </Link>
                  <ul class="p-2" id="megaMenu" style={{ zIndex: "11111" }}>
                    <li>
                      <Link className="uppercase" to="/eventlist">
                        event list
                      </Link>
                    </li>
                    <li>
                      <Link className="uppercase" to="/event-grid">
                        event grid
                      </Link>
                    </li>
                    <li>
                      <Link className="uppercase" to="/event-booking">
                        event Booking
                      </Link>
                    </li>
                  </ul>
                </li>
                {/* HERE THE SERVICES  */}
                <li tabindex="0">
                  <Link to={pathname} className="">
                    SERVICES
                    <svg
                      class="fill-current"
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                    >
                      <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                    </svg>
                  </Link>
                  <ul
                    class="p-2 -ml-24"
                    id="megaMenu"
                    style={{ zIndex: "11111" }}
                  >
                    <li>
                      <Link className="" to="/catering">
                        Catering
                      </Link>
                    </li>
                    <li>
                      <Link className="" to="/audiovisual">
                        Audiovisual
                      </Link>
                    </li>
                    <li>
                      <Link className="" to="/sound-lighting">
                        Sound And Lighting
                      </Link>
                    </li>
                    <li>
                      <Link className="" to="/event-linen">
                        Event Linen Rentals
                      </Link>
                    </li>
                    <li>
                      <Link className="" to="/destination">
                        Destination Management
                      </Link>
                    </li>
                    <li>
                      <Link className="" to="/logistics-registration">
                        Logistic And Registration
                      </Link>
                    </li>
                    <li>
                      <Link className="" to="/venue-facility">
                        Venue & Facility Negotiation
                      </Link>
                    </li>
                    <li>
                      <Link className="" to="/photography">
                        Videography & Photography
                      </Link>
                    </li>
                  </ul>
                </li>

                <li>
                  <Link to="/blogs" className={navStyle}>
                    BLOGS
                  </Link>
                </li>

                <li>
                  <Link to="/gallery">GALLERY</Link>
                </li>
                <li>
                  <Link to="/speaker">SPEAKER</Link>
                </li>
                <li>
                  <Link to="/dashboard">DASHBOARD</Link>
                </li>
                <li>
                  <Link to="/contact-us">CONTACT</Link>
                </li>
              </ul>
            </div>

            {/* logo */}
            <div className="flex items-end justify-center">
              <img
                src="https://i.ibb.co/Qb1N5CN/Eventy-Logo.png"
                alt=""
                className="w-9 h-9"
              />
              <Link to="/" class=" text-3xl tracking-widest">
                EVENTY
              </Link>
            </div>
          </div>

          {/* children */}
          <div class=" hidden lg:flex font-bold">
            <ul class="menu menu-horizontal p-0">
              <li>
                <NavLink to="/" className={navStyle}>
                  HOME
                </NavLink>
              </li>
              <li tabindex="0">
                <Link to={pathname} className={` `}>
                  ABOUT
                  <svg
                    class="fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                  >
                    <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                  </svg>
                </Link>
                <ul class="p-2" id="megaMenu" style={{ zIndex: "11111" }}>
                  <li>
                    <Link className="uppercase" to="/about">
                      About us
                    </Link>
                  </li>
                  <li>
                    <Link className="uppercase" to="/faq">
                      faq
                    </Link>
                  </li>
                </ul>
              </li>
              <li tabindex="0">
                <Link to={pathname} className={` `}>
                  EVENT
                  <svg
                    class="fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                  >
                    <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                  </svg>
                </Link>
                <ul class="p-2" id="megaMenu" style={{ zIndex: "11111" }}>
                  <li>
                    <Link className="uppercase" to={"/eventlist"}>
                      event list
                    </Link>
                  </li>
                  <li>
                    <Link className="uppercase" to="/event-grid">
                      event grid
                    </Link>
                  </li>
                  <li>
                    <Link className="uppercase" to="/event-booking">
                      event Booking
                    </Link>
                  </li>
                </ul>
              </li>
              {/* HERE THE SERVICES */}
              <li tabindex="0">
                <Link to={pathname} className={` `}>
                  SERVICES
                  <svg
                    class="fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                  >
                    <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                  </svg>
                </Link>
                <ul class="p-2" id="megaMenu" style={{ zIndex: "11111" }}>
                  <li>
                    <Link className="" to="/catering">
                      Catering
                    </Link>
                  </li>
                  <li>
                    <Link className="" to="/audiovisual">
                      Audiovisual
                    </Link>
                  </li>
                  <li>
                    <Link className="" to="/sound-lighting">
                      Sound And Lighting
                    </Link>
                  </li>
                  <li>
                    <Link className="" to="/event-linen">
                      Event Linen Rentals
                    </Link>
                  </li>
                  <li>
                    <Link className="" to="/destination">
                      Destination Management
                    </Link>
                  </li>
                  <li>
                    <Link className="" to="/logistics-registration">
                      Logistics And Registration
                    </Link>
                  </li>
                  <li>
                    <Link className="" to="/venue-facility">
                      Venue & Facility Negotiation
                    </Link>
                  </li>
                  <li>
                    <Link className="" to="/photography">
                      Videography & Photography
                    </Link>
                  </li>
                </ul>
              </li>

              <li>
                <NavLink to="/blogs" className={navStyle}>
                  BLOGS
                </NavLink>
              </li>

              <li>
                <NavLink to="/gallery" className={navStyle}>
                  GALLERY
                </NavLink>
              </li>
              <li>
                <NavLink to="/speaker" className={navStyle}>
                  SPEAKER
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard" className={navStyle}>
                  DASHBOARD
                </NavLink>
              </li>
              <li>
                <NavLink to="/contact-us" className={navStyle}>
                  CONTACT
                </NavLink>
              </li>
            </ul>
          </div>

          {/* user */}
          <div class="w-12">
            <div className="profile ">
              {/* FaRegUserCircle */}
              {/* <img className='w-10 h-10' src={userIcon} alt="" /> */}
              <div className="flex items-end justify-center mt-2 lg:mt-0">
                {!user ? (
                  <Link to={"/authentication"} className="text-3xl">
                    <BiUser></BiUser>
                  </Link>
                ) : (
                  <>
                    <div className="dropdown dropdown-end">
                      <div
                        tabIndex="0"
                        className=""
                        onClick={() => {
                          show === "hidden"
                            ? setShow("block")
                            : setShow("hidden");
                        }}
                      >
                        {currentUser?.image && (
                          <img
                            src={currentUser?.image}
                            className="w-10 h-10 rounded-full"
                            alt=""
                          />
                        )}

                        {!currentUser?.image && (
                          <span className="">
                            <AiOutlineUser className="border-2 border-black text-black bg-white bg-opacity-50 text-4xl rounded-full" />
                          </span>
                        )}
                      </div>

                      <ul
                        tabIndex="0"
                        class={`dropdown-content menu p-2 shadow border-2 bg-white rounded-sm ${show} text-black text-center mt-5`}
                      >
                        <div className="grid gap-y-3 pt-7 pb-3">
                          <div className="bg-gray-200 grid justify-center p-4 rounded-sm">
                            <div className="flex justify-center -mt-11">
                              {currentUser?.image && (
                                <img
                                  src={currentUser?.image}
                                  className="w-14 h-14 rounded-full bg-slate-100"
                                  alt=""
                                />
                              )}

                              {!currentUser?.image && (
                                <span className="">
                                  <AiOutlineUser className="text-black border-2 border-black bg-white text-5xl rounded-full" />
                                </span>
                              )}
                            </div>
                            <div>
                              <p className="pt-3 ">{user?.email}</p>
                            </div>
                          </div>

                          <Link
                            to={`/manage-profile`}
                            className="uppercase hover:text-gray-600"
                          >
                            Manage profile
                          </Link>

                          <button
                            onClick={handleSignOut}
                            className="uppercase hover:text-gray-600"
                          >
                            Sign out
                          </button>
                        </div>
                      </ul>
                    </div>
                  </>
                )}
              </div>
              <div></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Navbar;
