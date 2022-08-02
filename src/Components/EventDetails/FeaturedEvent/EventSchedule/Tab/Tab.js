import { useState } from "react";
import DayOne from "../DayOne/DayOne";
import "./Tab.css";

function Tabs() {
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
               <p className=" font-semibold">26 December 2022</p>
            </button>
            <button
               className={toggleState === 2 ? "eventTabs active-tabs" : "eventTabs"}
               onClick={() => toggleTab(2)}
            >
               <p className="text-2xl font-semibold block uppercase"> Day 2</p>
               <p className=" font-semibold">26 December 2022</p>
            </button>
            <button
               className={toggleState === 3 ? "eventTabs active-tabs" : "eventTabs"}
               onClick={() => toggleTab(3)}
            >
               <p className="text-2xl font-semibold block  uppercase"> Day 3</p>
               <p className=" font-semibold">26 December 2022</p>
            </button>
         </div>

         <div className="content-tabs">
            <div
               className={toggleState === 1 ? "content  active-content" : "content"}
            >
               <div className="">
                  <DayOne/>
               </div>
            </div>

            <div
               className={toggleState === 2 ? "content  active-content" : "content"}
            >
               {/* <h2>Content 2</h2> */}
               <p>
                  {/* Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
                  voluptatum qui adipisci. */}
               </p>
            </div>

            <div
               className={toggleState === 3 ? "content  active-content" : "content"}
            >
               {/* <h2>Content 3</h2> */}
               <p>
                  {/* Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos sed
                  nostrum rerum laudantium totam unde adipisci incidunt modi alias!
                  Accusamus in quia odit aspernatur provident et ad vel distinctio
                  recusandae totam quidem repudiandae omnis veritatis nostrum
                  laboriosam architecto optio rem, dignissimos voluptatum beatae
                  aperiam voluptatem atque. Beatae rerum dolores sunt. */}
               </p>
            </div>
         </div>
      </div>
   );
}

export default Tabs;