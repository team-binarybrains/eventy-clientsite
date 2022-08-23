import axios from "axios";
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./speaker.module.css";
import SpeakerBanner from "./SpeakerBanner";
import { BsFacebook, BsLinkedin, BsTwitter } from 'react-icons/bs';
import { AiFillInstagram } from 'react-icons/ai';
// import TopBanner from "../../EventDetails/TopBanner";

const Speaker = () => {
  const [speaker, setSpeaker] = useState([]);
  const profession = "speaker"
  useEffect(() => {
    axios.get(`http://localhost:5000/employed/${profession}`).then((res) => setSpeaker(res.data));
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
  <>
    <div className="mt-[7rem]">
      <SpeakerBanner />
    </div>
    <section className={`${styles.bg}`}>
      <div className={`${styles.bgLayer} pt-5`}>
        <div className={`mx-auto`}>
          <Slider
            {...settings}
            className="mx-auto"
          >
            {speaker.map((speaker, i) => (
              <div className={`px-3 ${styles.slide} flex-col lg:flex-row`} key={i}>
                {/* <div className="flex gap-5 sm:flex-row flex-col items-center px-3"> */}
                <img
                  className="block object-contain lg:h-[80vh] mx-auto lg:mx-0"
                  src={speaker?.image}
                  alt=""
                  data-aos="fade-right"
                  data-aos-duration="2000"
                />
                <div className="space-y-5 max-w-sm pb-5"
                  data-aos="fade-left"
                  data-aos-duration="2000"
                >
                  <div className="h-[4px] w-[70px] bg-gradient-to-r from-red-500 to-pink-500 mx-0 -mb-3 rounded-full" />
                  <h6
                    className={`openSans uppercase tracking-[5px] text-sm text-gray-500`}
                  > Eventy Staffs</h6>
                  <h4 className={`roboto font-medium text-xl`}> Professional<br />
                    <span className="font-extrabold">{speaker?.profession}</span>
                  </h4>
                  <h5 className="font-semibold text-lg">{speaker?.name}</h5>
                  <p className="text-sm pr-2 overflow-auto">{speaker?.details?.slice(0, 200)}</p>
                  <h5 className="font-semibold text-xl">Social Network</h5>
                  <ul className="flex items-center gap-2">
                    <li className="cursor-pointer"><a href={speaker?.facebook} target="_blank" ><BsFacebook className="text-2xl " /></a></li>
                    <li className="cursor-pointer"><a href={speaker?.instagram} target="_blank"><AiFillInstagram className="text-[1.85rem] " /></a></li>
                    <li className="cursor-pointer"><a href={speaker?.twitter} target="_blank"><BsTwitter className="text-2xl " /></a></li>
                    <li className="cursor-pointer"><a href={speaker?.linkedIn} target="_blank"><BsLinkedin className="text-xl " /></a></li>

                  </ul>
                </div>
                {/* </div> */}
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  </>
);
};

export default Speaker;
