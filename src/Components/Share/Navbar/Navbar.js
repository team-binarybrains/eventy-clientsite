import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'
// import userIcon from '../../../asset/UserIcon/1946429.png'
import { BiUser } from 'react-icons/bi';

const Navbar = () => {
  const [navbarBg, setNavbar] = useState(false);
  const changeBg = () => {
    if (window.scrollY >= 200) {
      setNavbar(true)
    } else {
      setNavbar(false)
    }
  }
  window.addEventListener('scroll', changeBg);
  return (
    <div>
      {/* navbar bg-transparent fixed z-50 */}
      <div class={navbarBg ? 'navbar active_nav fixed z-50' : 'navbar bg-transparent fixed z-50'} id='navbar'>
        <div class="navbar-start">
          <div class="dropdown">
            <label tabindex="0" class="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
              <li><Link to='/home'>Home</Link></li>
              <li tabindex="0">
                <a class="justify-between">
                  Parent
                  <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" /></svg>
                </a>
                <ul class="p-2 z-20" id='megaMenu' style={{ zIndex: '11111' }}>
                  <li><a>Submenu 1</a></li>
                  <li><a>Submenu 2</a></li>
                </ul>
              </li>
              <li><a>Item 3</a></li>
            </ul>
          </div>
          <a class="btn btn-ghost normal-case text-xl">Eventy</a>
        </div>
        <div class="navbar-center hidden lg:flex">
          <ul class="menu menu-horizontal p-0">
            <li><Link to='/home'>Home</Link></li>
            <li tabindex="0">
              <Link to=''>
                About
                <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
              </Link>
              <ul class="p-2" id='megaMenu' style={{ zIndex: '11111' }}>
                <li><Link className='capitalize' to={'/about-us'}>About us</Link></li>
                <li><Link className='capitalize' to='/blogs'>blogs</Link></li>
              </ul>
            </li>
            <li tabindex="0">
              <Link to=''>
                Event
                <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
              </Link>
              <ul class="p-2" id='megaMenu' style={{ zIndex: '11111' }}>
                <li><Link className='capitalize' to={'/event-list'}>event list</Link></li>
                <li><Link className='capitalize' to='/event-grid'>event grid</Link></li>
                <li><Link className='capitalize' to='/event-details'>event details</Link></li>
                <li><Link className='capitalize' to='/event-booking'>event Booking</Link></li>
              </ul>
            </li>
            <li tabindex="0">
              <Link to=''>
                Blogs
                <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
              </Link>
              <ul class="p-2" id='megaMenu' style={{ zIndex: '11111' }}>
                <li><Link className='capitalize' to='/blogs'>blogs</Link></li>
                <li><Link className='capitalize' to={'/blogs-details'}>blogs details</Link></li>
              </ul>
            </li>
            <li><Link to='/gallery'>GALLERY</Link></li>
            <li><Link to='/speaker'>SPEAKER</Link></li>
            <li><Link to='/contact'>CONTACT</Link></li>
          </ul>
        </div>
        <div class="navbar-end">
          <div className="profile">
            {/* FaRegUserCircle */}
            {/* <img className='w-10 h-10' src={userIcon} alt="" /> */}
            <button className='text-3xl'><BiUser></BiUser></button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;