import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChartBar,
  faChevronRight,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import "./Dashboard.css";
import { Outlet } from "react-router-dom";
import CustomLink from "./Chart/CustomLink/CustomLink";
import { FaChartBar, FaChartLine } from "react-icons/fa";
const Dashboard = () => {
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
          <ul className="menu p-4 overflow-y-auto  bg-[#1e293b] border-r-1 shadow-lg  ">
            {/* <!-- Sidebar content here --> */}
            {
              <li className="py-1 text-lg hover:bg-[#0f172a]  rounded">
                <CustomLink
                  className="flex justify-center items-center gap-2 "
                  to={"/dashboard"}
                >
                  <FontAwesomeIcon
                    className="text-white"
                    icon={faChartBar}
                  ></FontAwesomeIcon>{" "}
                  <span className="text-white font-bold"> OVERVIEW</span>
                </CustomLink>
              </li>
            }
            {
              <li className="py-1 text-lg hover:bg-[#0f172a]  rounded">
                <CustomLink
                  className="flex justify-center items-center gap-2"
                  to={"/dashboard/allusers"}
                >
                  <FontAwesomeIcon
                    className="text-white"
                    icon={faUser}
                  ></FontAwesomeIcon>{" "}
                  <span className="text-white font-bold"> ALLUSERS</span>
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
