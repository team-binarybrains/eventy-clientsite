import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
// import userIcon from '../../../asset/UserIcon/1946429.png'
import { BiUser } from "react-icons/bi";
import TopnavBar from "../TopBar/TopnavBar";

const Navbar = ({ location }) => {
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

  return (
    <div>
      {/* navbar bg-transparent fixed z-50 */}
      {routeName ? (
        // use in other route without home
        <section className="fixed left-0 right-0 top-0 z-50">
          <TopnavBar></TopnavBar>
          <div
            class={"navbar bg-white text-black"}
            style={{ zIndex: "111111" }}
            id="navbar"
          >
            <div class="navbar-start">
              <div class="dropdown">
                <label tabindex="0" class="btn btn-ghost lg:hidden">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5"
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
                  class="menu bg-[#333333] menu-compact dropdown-content mt-3 p-2 shadow rounded-box w-52"
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
                      <li>
                        <Link className="uppercase" to={"/blogs-details"}>
                          blogs details
                        </Link>
                      </li>
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
              <Link to="/" class="btn btn-ghost normal-case text-xl">
                Eventy
              </Link>
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
                    <li>
                      <Link className="uppercase" to={"/blogs-details"}>
                        blogs details
                      </Link>
                    </li>
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
            <div class="navbar-end">
              <div className="profile ">
                {/* FaRegUserCircle */}
                {/* <img className='w-10 h-10' src={userIcon} alt="" /> */}
                <Link to={"/authentication"} className="text-3xl">
                  <BiUser></BiUser>
                </Link>
              </div>
            </div>
          </div>
        </section>
      ) : (
        // use in home route
        <div
          class={
            navbarBg
              ? "navbar active_nav fixed z-50 text-white"
              : "navbar bg-transparent fixed text-white"
          }
          style={{ zIndex: "111111" }}
          id="navbar"
        >
          <div class="navbar-start">
            <div class="dropdown">
              <label tabindex="0" class="btn btn-ghost lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5"
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
                class="menu bg-[#333333] menu-compact dropdown-content mt-3 p-2 shadow rounded-box w-52"
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
                    <li>
                      <Link className="uppercase" to={"/blogs-details"}>
                        blogs details
                      </Link>
                    </li>
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
            <Link to="/" class="btn btn-ghost normal-case text-xl">
              Eventy
            </Link>
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
                  <li>
                    <Link className="uppercase" to={"/blogs-details"}>
                      blogs details
                    </Link>
                  </li>
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
          <div class="navbar-end">
            <div className="profile ">
              {/* FaRegUserCircle */}
              {/* <img className='w-10 h-10' src={userIcon} alt="" /> */}
              <Link to={"/authentication"} className="text-3xl">
                <BiUser></BiUser>
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
