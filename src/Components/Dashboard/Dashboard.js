/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { AiOutlineUser } from "react-icons/ai";
import {
  faChartBar,
  faChevronRight,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import "./Dashboard.css";
import { Link, Outlet } from "react-router-dom";
import { FaChartBar, FaChartLine } from "react-icons/fa";
import "./Dashboard.css"
import CustomLink from "../Share/CustomLink/CustomLink";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../Firebase/firebase.init";
import useAdmin from "../Hooks/useAdmin";
const Dashboard = () => {
  const [user, loading] = useAuthState(auth);
  const [admin, adminLoading] = useAdmin(user);
  const [currentUser, setCurrentUser] = useState([]);
  const email = user?.email;
  useEffect(() => {
    fetch(`http://localhost:5000/single-user/${email}`)
      .then(res => res.json())
      .then(data => setCurrentUser(data))
  }, [email]);
  return (
    <div className="mx-auto px-2 lg:px-0 route">
      <div class="drawer drawer-mobile">
        <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
        <div class="drawer-content  flex flex-col" id="drawer">
          {/* <!-- Page content here --> */}
          <div className="text-left mt-4 z-10">
            <label
              htmlFor="open-dashboard-menu"
              className="rounded inline-block cursor-pointer text-white lg:hidden z-50"
            >
              <span className="text-2xl bg-green-400 hover:bg-green-500 px-4 py-2 rounded ">
                <FontAwesomeIcon icon={faChevronRight} />
              </span>{" "}
            </label>
          </div>
          <div className="">
            <div className="text-left -mt-12 lg:-mt-4 w-full">
              {/* <div className="bg-[#0284C7] h-[500px] lg:-mr-3">
                  <div className="pt-20 flex justify-center">
                    <Count></Count>
                  </div> */}

              <Outlet></Outlet>
              {/* </div> */}
            </div>
          </div>
        </div>
        <div class="drawer-side w-[180px]">
          <label
            htmlFor="open-dashboard-menu"
            className="drawer-overlay"
          ></label>
          <ul className="menu overflow-y-auto  bg-[#1e293b] border-r-1 shadow-lg  ">
            {/* <!-- Sidebar content here --> */}
            <div className="" id="user_profile">
              <div className="">
                <div id="user_profile_photo">
                  
                  {currentUser?.image && (
                          <img className="w-[75px] h-[75px] rounded-full m-auto" src={currentUser?.image} alt="" />
                        )}

                        {!currentUser?.image  && (
                          <span className="">
                            <AiOutlineUser className="w-[75px] h-[75px] border-2  text-slate-800 m-auto bg-white bg-opacity-50 text-4xl rounded-full" />
                          </span>
                        )}
                </div>
                <div id="user_content" className="pt-2">
                  <h1 className="text-white text-center text-sm">{currentUser?.displayName}</h1>
                  <h1 className="text-white text-center text-xs">{currentUser?.email}</h1>
                </div>
              </div>
            </div>
            {admin ||
              <li className="text-lg hover:bg-[#0f172a]  rounded">
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
            }
            {admin &&
              <li className="text-lg hover:bg-[#0f172a]  rounded px-2">
                <CustomLink
                  className="flex justify-center items-center gap-2"
                  to={"/dashboard/allusers"}
                >
                  <FontAwesomeIcon
                    className=""
                    icon={faUser}
                  ></FontAwesomeIcon>{" "}
                  <span className=" font-bold"> ALL USERS</span>
                </CustomLink>
              </li>
            }

            {/* booking info for admin */}
            {admin &&
              <li className="text-lg hover:bg-[#0f172a]  rounded px-2">
                <CustomLink
                  className="flex justify-center items-center gap-2"
                  to={"/dashboard/all-booking"}
                >
                  <span className=" font-bold"> ALL BOOKINGS</span>
                </CustomLink>
              </li>
            }

            {/* booking info for user */}
            {!admin &&
              <li className="text-lg hover:bg-[#0f172a]  rounded px-2">
                <CustomLink
                  className="flex justify-center items-center gap-2 "
                  to={"/dashboard/my-booking"}
                >

                  <span className="font-bold">MY BOOKING</span>
                </CustomLink>
              </li>
            }
            {!admin &&
              <li className="text-lg hover:bg-[#0f172a]  rounded px-2">
                <CustomLink
                  className="flex justify-center items-center gap-2 "
                  to={"/dashboard/add-event"}
                >

                  <span className="font-bold">ADD EVENT</span>
                </CustomLink>
              </li>
            }
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
