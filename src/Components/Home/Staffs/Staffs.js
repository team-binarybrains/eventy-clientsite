import axios from "axios";
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./staffs.module.css";

const Staffs = () => {
  const [staffs, setStaffs] = useState([]);

  useEffect(() => {
    axios.get("staffs.json").then((res) => setStaffs(res.data));
  }, []);

  const settings = {
    fade: true,
    dots: false,
    infinite: true,
    speed: 2000,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: false,
    swipeToSlide: false,
    arrows: false,
    swipe: false,
  };

  return (
    <section className={`${styles.bg}`}>
      <div className={`${styles.bgLayer} pt-5`}>
        <div className={`mx-auto`}>
          <Slider
            {...settings}
            className="mx-auto"
          >
            {staffs.map((staff, i) => (
              <div className={`px-3 ${styles.slide} flex-col lg:flex-row`} key={i}>
                {/* <div className="flex gap-5 sm:flex-row flex-col items-center px-3"> */}
                  <img
                    className="block object-contain lg:h-[80vh] mx-auto lg:mx-0"
                    src={staff.image}
                    alt=""
                  />
                  <div className="space-y-5 max-w-sm">
                    <div className="h-[4px] w-[70px] bg-gradient-to-r from-red-500 to-pink-500 mx-0 -mb-3 rounded-full" />
                    <h6
                      className={`openSans uppercase tracking-[5px] text-sm text-gray-500`}
                    >
                      Eventy Staffs
                    </h6>
                    <h4 className={`roboto font-medium text-xl`}>
                      Professional<br />
                      <span className="font-extrabold">{staff.profession}</span>
                    </h4>
                    <h5 className="font-semibold text-lg">{staff.name}</h5>
                    <p className="text-sm pr-2 overflow-auto">{staff.details?.slice(0,200)}</p>
                    <h5 className="font-semibold text-xl">
                      Social Network
                      <div></div>
                    </h5>
                  </div>
                {/* </div> */}
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Staffs;
