/* eslint-disable no-unused-vars */
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
  
  return (
    <div className="mx-auto px-2 lg:px-0 lg:mt-[119px] route ">
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
          <ul className="menu px-2 overflow-y-auto  bg-[#1e293b] border-r-1 shadow-lg  ">
            {/* <!-- Sidebar content here --> */}
            { admin ||
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
            { admin &&
              <li className="text-lg hover:bg-[#0f172a]  rounded">
                <CustomLink
                  className="flex justify-center items-center gap-2"
                  to={"/dashboard/allusers"}
                >
                  <FontAwesomeIcon
                    className=""
                    icon={faUser}
                  ></FontAwesomeIcon>{" "}
                  <span className=" font-bold"> ALLUSERS</span>
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
