import React from "react";
import Count from "../../Count/Count";
import CardPageVisits from "../../PageVisits/CardPageVisits";
import CardSocialTraffic from "../../SocialTrafic/CardSocialTraffic";
import Chart from "../Chart";

const MainChart = () => {
  return (
    <div className="grid justify-center">
      <div className="text-left">
        <div className="bg-amber-400 h-[500px] lg:-mr-3 lg:w-[1640px]">
          <div className="lg:pt-20 pt-3 flex justify-center">
            <Count />
          </div>
        </div>
      </div>

      <div className="lg:-mt-[450px] mt-3 lg:px-7" >
        <Chart />
        <div className="grid lg:flex justify-center gap-2 overflow-x-hidden">
          <CardPageVisits />
          <CardSocialTraffic />
        </div>
      </div>
    </div>
  );
};

export default MainChart;
