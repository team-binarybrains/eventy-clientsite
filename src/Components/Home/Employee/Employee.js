import axios from "axios";
import React, { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./Employee.module.css";
// import { BsFacebook, BsLinkedin, BsTwitter } from 'react-icons/bs';
// import { AiFillInstagram } from 'react-icons/ai';
import PurchaseEvent from "../PurchaseEvent/PurchaseEvent";
import EmployeeBanner from "./EmployeeBanner";
// import TopBanner from "../../EventDetails/TopBanner";

const Employee = () => {
  const [employeeInfo, setEmployeeInfo] = useState([]);
  useEffect(() => {
    axios
      .get(`https://eventy-serversite-production.up.railway.app/employee`)
      .then((res) => setEmployeeInfo(res.data));
  }, []);
  // console.log(employeeInfo);

  return (
    <>
      <div className="mt-[7rem]">
        <EmployeeBanner />
      </div>
      <section className={`${styles.bg}`}>
        <div className={`${styles.bgLayer} py-6`}>
          <div className={`mx-auto container px-3 m-auto`}>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 sm:gap-0   items-center">
              {employeeInfo.map((employee, i) => (
                <div
                  key={i}
                  className={`sm:mt-6 w-full sm:w-[270px] md:w-[270px] lg:w-[270px] xl:w-[270px] h-auto  m-auto px-2 py-10 bg-[#ffff] shadow-2xl border border-white rounded`}
                >
                  <div id="employee_img">
                    <img
                      className="w-[155px] h-[155px] rounded-full m-auto border border-blue-700 p-[2px]"
                      src={employee?.image}
                      alt=""
                    />
                  </div>
                  <div id="employee_content" className="text-center pl-4 pt-4">
                    <h1 className="text-slate-600 capitalize py-2">
                      {employee?.profession}
                    </h1>
                    <h1 className="text-slate-600 capitalize">
                      {employee?.name}
                    </h1>
                    <h3 className="text-slate-600 capitalize">
                      {employee?.city} , {employee?.country}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <PurchaseEvent />
    </>
  );
};

export default Employee;
