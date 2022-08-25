import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./venue.module.css";

const Venues = () => {
  const navigate = useNavigate();
  const [select, setSelect] = useState({});
  const [venues, setVenues] = useState([]);
  useEffect(() => {
    axios.get(`http://localhost:5000/venues`).then((res) => {
      setVenues(res?.data);
      setSelect(res?.data[0]);
    });
  }, []);

  const selection = (venue) => {
    setSelect(venue);
  };

  return (
    <section id="venues" className={`${styles.bgImage}`}>
      <section className="bg-[#333333c7]">
        <div className="py-[100px] flex sm:flex-row flex-col sm:items-end sm:justify-center gap-x-[1%] gap-y-5 flex-wrap container mx-auto">
          <div className="basis-[49%] shrink px-3">
            <div className="max-w-[530px] ml-auto text-center sm:text-left">
              <div className="h-[3px] w-[70px] bg-gradient-to-r from-red-500 to-pink-500 mx-auto sm:mx-0 mb-2" />
              <h4
                className={`${styles.openSans} text-white uppercase tracking-[5px] mb-4`}
                data-aos="fade-left"
                data-aos-duration="3000"
              >
                Eventy Venues
              </h4>
              <h2 className={`${styles.roboto} text-4xl text-white`} data-aos="zoom-in" data-aos-duration="3000" >
                Conference <span className="font-bold">Rooms & Hotels</span>
              </h2>
            </div>
            <div
              className={`h-[424px] max-w-[500px] overflow-y-scroll mt-10 ${styles.section} ml-auto`}
              data-aos="fade-right"
              data-aos-duration="2500"
            >
              {venues.map((venue) => {
                return (
                  <div
                    className={`h-[141px] max-w-[424.4px] mr-[30px] p-[30px] flex items-center gap-[10%] text-white whitespace-pre cursor-pointer ${venue._id === select._id && styles.selected
                      } `}
                    key={venue.id}
                    onClick={() => selection(venue)}
                  >
                    <img
                      className="h-[80px] max-w-[80px] object-cover overflow-hidden"
                      src={venue?.img}
                      alt=""
                    />
                    <div className="space-y-1 shrink">
                      <h5 className="">
                        <span className="text-rose-500 font-bold">{`${venue?.star} ⭐ ${venue?.venueName}`}</span>
                      </h5>
                      <h6 className="text-xs text-white">{`Party Room ${venue?.seats} seats`}</h6>
                      <h6 className="text-rose-500 font-bold text-xs">{`Price from $${venue?.price}/night`}</h6>
                      <h6 className="text-xs text-white">{`Venue Code : ${venue?.code}`}</h6>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className={`h-[424px] sm:min-w-[500px] grow basis-[50%] shrink relative ${styles.highlight}`}
          data-aos="zoom-in-left"
          data-aos-duration="2500"
          >
            <img
              src={select.img}
              alt=""
              className={`w-full h-[200px] sm:h-[424px] object-cover ${styles.child} opacity-80 `}
            />
            <div
              className={`absolute top-0 left-0 ${styles.batch} flex justify-end pr-6`}
            >
              <p className="font-bold text-lg text-center rotate-90">
                {select.star} ⭐ <br /> Hotel
              </p>
            </div>
            <button
              className={`absolute bg-gradient-to-r from-red-500 to-pink-500 top-[calc(50%-25px)] right-[calc(50%-69px)] px-5 py-2 pt-3 rounded-full text-white font-bold uppercase z-10 hover:scale-105 transition-transform active:scale-100`}
              onClick={() => {
                navigate(`/event-booking/${select?._id}`);
              }}
            >
              Book Now
            </button>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Venues;
