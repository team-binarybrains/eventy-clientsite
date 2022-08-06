import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";
// import userIcon from '../../../asset/UserIcon/1946429.png'
import { BiUser } from "react-icons/bi";
import { AiOutlineUser } from "react-icons/ai";
import TopnavBar from "../TopBar/TopnavBar";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../Firebase/firebase.init";
import { signOut } from "firebase/auth";

const Navbar = ({ location }) => {
  const navigate = useNavigate();
  const { pathname } = location;
  const routeName = pathname.slice("1");
  // console.dir(location);

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
    navigate('/')
  };
  const [user] = useAuthState(auth)

  const [show, setShow] = useState("hidden");

  return (
    <div>
      {/* navbar bg-transparent fixed z-50 */}
      {routeName ? (
        // use in other route without home
        <section className="fixed left-0 right-0 top-0 z-[999] shadow-lg">
          <TopnavBar></TopnavBar>
          <div
            class={"navbar bg-white text-black flex items-center"}
            style={{ zIndex: "111111" }}
            id="navbar"
          >
            <div class="navbar-start">
              <div class="dropdown w-full">
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
                  class="menu bg-white menu-compact dropdown-content mt-3 p-2 shadow rounded-box w-52"
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
                        <Link className="uppercase" to="/blogs">
                          blogs
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
                  <li tabindex="0">
                    <Link to={pathname} className="uppercase">
                      Blogs
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
                        <Link className="uppercase" to="/blogs">
                          blogs
                        </Link>
                      </li>
                      {/* <li>
                        <Link className="uppercase" to={"/blogs-details"}>
                          blogs details
                        </Link>
                      </li> */}
                    </ul>
                  </li>
                  <li>
                    <Link to="/gallery">GALLERY</Link>
                  </li>
                  <li>
                    <Link to="/speaker">SPEAKER</Link>
                  </li>
                  <li>
                    <Link to="/contact">CONTACT</Link>
                  </li>
                </ul>
              </div>
              <div className="w-[85px] lg:w-full flex items-end">
                <img src="https://i.ibb.co/Qb1N5CN/Eventy-Logo.png" alt="" className="w-9 h-9" />
                <Link to="/" class=" text-3xl tracking-widest">
                  EVENTY
                </Link>
              </div>
            </div>
            <div class="navbar-center hidden lg:flex">
              <ul class="menu menu-horizontal p-0">
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
                      <Link className="uppercase" to="/blogs">
                        blogs
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
                <li tabindex="0">
                  <Link to={pathname} className="uppercase">
                    Blogs
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
                      <Link className="uppercase" to="/blogs">
                        blogs
                      </Link>
                    </li>
                    {/* <li>
                      <Link className="uppercase" to={"/blogs-details"}>
                        blogs details
                      </Link>
                    </li> */}
                  </ul>
                </li>
                <li>
                  <Link to="/gallery">GALLERY</Link>
                </li>
                <li>
                  <Link to="/speaker">SPEAKER</Link>
                </li>
                <li>
                  <Link to="/contact">CONTACT</Link>
                </li>
              </ul>
            </div>
            <div class="navbar-start">
              <div className="profile w-full flex lg:justify-around justify-end">
                {/* FaRegUserCircle */}
                {/* <img className='w-10 h-10' src={userIcon} alt="" /> */}
                <div>
                  {!user ?
                    <Link to={"/authentication"} className="text-3xl">
                      <BiUser></BiUser>
                    </Link>

                    :
                    <>
                      <div className="dropdown dropdown-end">
                        <div
                          tabIndex="0"
                          className=" m-1"
                          onClick={() => {
                            show === "hidden" ? setShow("block") : setShow("hidden");
                          }}
                        >
                          {user?.photoURL && (
                            <img
                              src={user?.photoURL}
                              className="w-10 h-10 rounded-full"
                              alt=""
                            />
                          )}

                          {user?.photoURL === null && (
                            <span className="">
                              <AiOutlineUser className="border-2 border-black text-black bg-white bg-opacity-50 text-4xl rounded-full" />
                            </span>
                          )}
                        </div>

                        <ul
                          tabIndex="0"
                          class={`dropdown-content menu p-2 shadow border-2 bg-white rounded-sm w-60 ${show} text-black text-center mt-5 -mr-`}
                        >
                          <div className="grid gap-y-3 pt-7 pb-3">
                            <div className="bg-gray-200 grid justify-center p-4 rounded-sm">
                              <div className="flex justify-center -mt-11">
                                {user?.photoURL && (
                                  <img
                                    src={user?.photoURL}
                                    className="w-14 h-14 rounded-full"
                                    alt=""
                                  />
                                )}

                                {user?.photoURL === null && (
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
                  }
                </div>
                <div></div>
              </div>
            </div>
          </div>
        </section>
      ) : (
        // use in home route
        <div
          class={
            navbarBg
              ? "navbar active_nav fixed z-[999] text-white"
              : "navbar bg-transparent fixed text-white flex items-center"
          }
          style={{ zIndex: "111111" }}
          id="navbar"
        >
          <div class="navbar-start">
            <div class="dropdown w-full">
              <label tabindex="0" class="lg:hidden">
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
                class="menu bg-gray-100 text-black menu-compact dropdown-content mt-3 p-2 shadow rounded-box w-52"
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
                      <Link className="uppercase" to="/blogs">
                        blogs
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
                <li tabindex="0">
                  <Link to={pathname} className="uppercase">
                    Blogs
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
                      <Link className="uppercase" to="/blogs">
                        blogs
                      </Link>
                    </li>
                    {/* <li>
                      <Link className="uppercase" to={"/blogs-details"}>
                        blogs details
                      </Link>
                    </li> */}
                  </ul>
                </li>
                <li>
                  <Link to="/gallery">GALLERY</Link>
                </li>
                <li>
                  <Link to="/speaker">SPEAKER</Link>
                </li>
                <li>
                  <Link to="/contact">CONTACT</Link>
                </li>
              </ul>
            </div>
            <div className="w-[85px] lg:w-full flex items-end">
              <img src="https://i.ibb.co/Qb1N5CN/Eventy-Logo.png" alt="" className="w-9 h-9" />
              <Link to="/" class=" text-3xl tracking-widest">
                EVENTY
              </Link>
            </div>
          </div>
          <div class="navbar-center hidden lg:flex">
            <ul class="menu menu-horizontal p-0">
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
                    <Link className="uppercase" to="/blogs">
                      blogs
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
              <li tabindex="0">
                <Link to={pathname} className="uppercase">
                  Blogs
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
                    <Link className="uppercase" to="/blogs">
                      blogs
                    </Link>
                  </li>
                  {/* <li>
                    <Link className="uppercase" to={"/blogs-details"}>
                      blogs details
                    </Link>
                  </li> */}
                </ul>
              </li>
              <li>
                <Link to="/gallery">GALLERY</Link>
              </li>
              <li>
                <Link to="/speaker">SPEAKER</Link>
              </li>
              <li>
                <Link to="/contact">CONTACT</Link>
              </li>
            </ul>
          </div>
          <div class="navbar-start">
          <div className="profile w-full flex lg:justify-around justify-end">
                {/* FaRegUserCircle */}
                {/* <img className='w-10 h-10' src={userIcon} alt="" /> */}
                <div>
                  {!user ?
                    <Link to={"/authentication"} className="text-3xl">
                      <BiUser></BiUser>
                    </Link>

                    :
                    <>
                      <div className="dropdown dropdown-end">
                        <div
                          tabIndex="0"
                          className=" m-1"
                          onClick={() => {
                            show === "hidden" ? setShow("block") : setShow("hidden");
                          }}
                        >
                          {user?.photoURL && (
                            <img
                              src={user?.photoURL}
                              className="w-10 h-10 rounded-full"
                              alt=""
                            />
                          )}

                          {user?.photoURL === null && (
                            <span className="">
                              <AiOutlineUser className="border-2 border-black text-black bg-white bg-opacity-50 text-4xl rounded-full" />
                            </span>
                          )}
                        </div>

                        <ul
                          tabIndex="0"
                          class={`dropdown-content menu p-2 shadow border-2 bg-white rounded-sm w-60 ${show} text-black text-center mt-5 -mr-`}
                        >
                          <div className="grid gap-y-3 pt-7 pb-3">
                            <div className="bg-gray-200 grid justify-center p-4 rounded-sm">
                              <div className="flex justify-center -mt-11">
                                {user?.photoURL && (
                                  <img
                                    src={user?.photoURL}
                                    className="w-14 h-14 rounded-full"
                                    alt=""
                                  />
                                )}

                                {user?.photoURL === null && (
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
                  }
                </div>
                <div></div>
              </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
