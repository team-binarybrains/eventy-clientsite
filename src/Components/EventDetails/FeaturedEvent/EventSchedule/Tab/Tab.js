/* eslint-disable no-unused-vars */
import { useState } from "react";
import DayOne from "../DayOne/DayOne";
import "./Tab.css";

function Tabs({ eventDetailsData }) {
   const {day} = eventDetailsData;

   // console.log(day);

   const [toggleState, setToggleState] = useState(1);

   const toggleTab = (index) => {
      setToggleState(index);
   };
   
   return (
      <div className="tabContainer">
         <div className="bloc-tabs">
            <button
               className={toggleState === 1 ? "eventTabs active-tabs" : "eventTabs"}
               onClick={() => toggleTab(1)}
            >
               <p className="text-2xl font-semibold block uppercase"> Day 1</p>
               <p className=" font-semibold">{day?.[0]?.date?.split(',')?.join(' ')}</p>
            </button>
            <button
               className={toggleState === 2 ? "eventTabs active-tabs" : "eventTabs"}
               onClick={() => toggleTab(2)}
            >
               <p className="text-2xl font-semibold block uppercase"> Day 2</p>
               <p className=" font-semibold">{day?.[1]?.date?.split(',')?.join(' ')}</p>
            </button>
            <button
               className={toggleState === 3 ? "eventTabs active-tabs" : "eventTabs"}
               onClick={() => toggleTab(3)}
            >
               <p className="text-2xl font-semibold block  uppercase"> Day 3</p>
               <p className=" font-semibold">{day?.[2]?.date?.split(',')?.join(' ')}</p>
            </button>
         </div>

         <div className="content-tabs">
            <div
               className={toggleState === 1 ? "content  active-content" : "content"}
            >
               <div className="">
                  <DayOne data={day?.[0]} />
               </div>
            </div>

            <div
               className={toggleState === 2 ? "content  active-content" : "content"}
            >
               <div className="">
                  <DayOne data={day?.[1]} />
               </div>
            </div>

            <div
               className={toggleState === 3 ? "content  active-content" : "content"}
            >
               <div className="">
                  <DayOne data={day?.[2]} />
               </div>
            </div>
         </div>
      </div>
   );
}

export default Tabs;