import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { AiOutlineUser, AiOutlineAppstoreAdd } from "react-icons/ai";
import { TiThSmall } from "react-icons/ti";
import { IoTicket } from "react-icons/io5";
import { IoMdPersonAdd } from "react-icons/io";
import { FaUsers } from "react-icons/fa";
import { faChartBar, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import "./Dashboard.css";
import { Outlet } from "react-router-dom";
// import "./Dashboard.css"
import CustomLink from "../Share/CustomLink/CustomLink";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../Firebase/firebase.init";
import useAdmin from "../Hooks/useAdmin";
import Loading from "../Share/Loading/Loading";
const Dashboard = () => {
  const [user, loading] = useAuthState(auth);
  const [admin, adminLoading] = useAdmin(user);
  const [currentUser, setCurrentUser] = useState([]);
  const email = user?.email;
  useEffect(() => {
    fetch(
      `https://eventy-serversite-production.up.railway.app/single-user/${email}`
    )
      .then((res) => res.json())
      .then((data) => setCurrentUser(data));
  }, [email]);
  if (loading) {
    return <Loading />;
  }
  return (
    <div className="mx-auto px-2 lg:px-0 route">
      <div className="drawer drawer-mobile pt-0">
        <input
          id="open-dashboard-menu"
          type="checkbox"
          className="drawer-toggle"
        />
        <div className="drawer-content  flex flex-col bg-slate-200">
          {/* <!-- Page content here --> */}
          <div className="text-left mt-4 z-[1111111] fixed">
            <label
              htmlFor="open-dashboard-menu"
              className="rounded inline-block cursor-pointer text-white lg:hidden z-50"
            >
              <span className="text-2xl bg-gradient-to-r from-[#FF4402] to-[#f5ac1a] hover:bg-gradient-to-l from-[#e73f02] to-[#ffaa00] px-4 py-2 rounded shadow-2xl">
                <FontAwesomeIcon icon={faChevronRight} />{" "}
              </span>
            </label>
          </div>
          <div className="text-center ">
            <div id="header" className=""></div>
            <div className="text-left px-3">
              <Outlet></Outlet>
            </div>
          </div>
        </div>
        <div className="drawer-side w-[100%] lg:w-[260px]">
          <label
            htmlFor="open-dashboard-menu"
            className="drawer-overlay "
          ></label>
          <ul className="menu overflow-y-auto  bg-[#1e293b] border-r-1 w-[70%] lg:w-[100%] border-r-1 shadow-lg  text-white">
            {/* <!-- Sidebar content here --> */}
            <div className="" id="sidebar_User_profile">
              <div className="pt-5">
                <div
                  id="user_profile_photo"
                  data-aos="zoom-in"
                  data-aos-duration="2000"
                >
                  {currentUser?.image && (
                    <img
                      className="w-[75px] h-[75px] rounded-full m-auto"
                      src={currentUser?.image}
                      alt=""
                    />
                  )}

                  {!currentUser?.image && (
                    <span className="">
                      <AiOutlineUser className="w-[75px] h-[75px] border-2  text-slate-800 m-auto bg-white bg-opacity-50 text-4xl rounded-full" />
                    </span>
                  )}
                </div>
                <div id="user_content" className="pt-2">
                  <h1
                    className="text-white text-center text-sm capitalize"
                    data-aos="zoom-out"
                    data-aos-duration="2000"
                  >
                    {currentUser?.displayName}
                  </h1>
                  <h1
                    className="text-white text-center text-sm"
                    data-aos="zoom-out"
                    data-aos-duration="2000"
                  >
                    {currentUser?.email}
                  </h1>
                </div>
              </div>
            </div>
            {admin || (
              <li className="text-base hover:bg-[#0f172a]  rounded">
                <CustomLink
                  className="flex justify-center items-center gap-2 "
                  to={"/dashboard"}
                >
                  <FontAwesomeIcon
                    className=""
                    icon={faChartBar}
                  ></FontAwesomeIcon>{" "}
                  <span className="font-bold"> OVERVIEW</span>
                </CustomLink>
              </li>
            )}
            {admin && (
              <li className="text-base hover:bg-[#0f172a]  rounded px-2">
                <CustomLink
                  className="flex justify-center items-center gap-2"
                  to={"/dashboard/allusers"}
                >
                  <FaUsers className="text-xl" />
                  <span className=" font-bold"> ALL USERS</span>
                </CustomLink>
              </li>
            )}

            {/* booking info for admin */}
            {admin && (
              <li className="text-base hover:bg-[#0f172a]  rounded px-2">
                <CustomLink
                  className="flex justify-center items-center gap-2"
                  to={"/dashboard/all-booking"}
                >
                  <TiThSmall className="text-xl" />
                  <span className=" font-bold"> ALL BOOKINGS</span>
                </CustomLink>
              </li>
            )}
            {admin && (
              <li className="text-base hover:bg-[#0f172a]  rounded px-2">
                <CustomLink
                  className="flex justify-center items-center gap-2"
                  to={"/dashboard/all-employee"}
                >
                  <FaUsers className="text-xl" />
                  <span className=" font-bold"> ALL EMPLOYEE</span>
                </CustomLink>
              </li>
            )}
            {/* booking info for user */}
            {!admin && (
              <li className="text-base hover:bg-[#0f172a]  rounded">
                <CustomLink
                  className="flex justify-center items-center gap-2 "
                  to={"/dashboard/my-booking"}
                >
                  <IoTicket className="text-xl" />
                  <span className="font-bold">MY BOOKING</span>
                </CustomLink>
              </li>
            )}
            {!admin && (
              <li className="text-base hover:bg-[#0f172a]  rounded">
                <CustomLink
                  className="flex justify-center items-center gap-2 "
                  to={"/dashboard/add-event"}
                >
                  <AiOutlineAppstoreAdd className="text-xl" />
                  <span className="font-bold">ADD EVENT</span>
                </CustomLink>
              </li>
            )}
            {/* speaker */}
            {admin && (
              <li className="text-base hover:bg-[#0f172a]  rounded">
                <CustomLink
                  className="flex justify-center items-center gap-2 "
                  to={"/dashboard/add-employed"}
                >
                  <IoMdPersonAdd className="text-xl ml-2" />
                  <span className="font-bold uppercase">ADD Employee</span>
                </CustomLink>
              </li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
