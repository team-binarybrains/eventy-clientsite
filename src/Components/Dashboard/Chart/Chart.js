import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import LineChar from "./LineChart/LineChar";

const data = [
  {
    name: "January",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "February",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "March",
    uv: 2000,
    pv: 5800,
    amt: 2290,
  },
  {
    name: "April",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "May",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "June",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "July",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

export default function Chart() {
  return (
    <div className="lg:flex grid "
    data-aos="flip-down"
    data-aos-duration="2000"
    >
      <div
        className="h-[400px] w-[90vw] bg-[#334155] lg:ml-5 lg:mt-72 rounded-md 
      lg:w-[56%] lg:h-[500px] "
      >
        <div className="pt-2 pl-5">
          <h1 className="text-white text-sm">Overview</h1>
          <h1 className="text-white text-xl mb-6">Salse Value</h1>
        </div>

        <ResponsiveContainer>
          <LineChart
            width={1000}
            height={600}
            data={data}
            margin={{
              top: 0,
              right: 30,
              left: 20,
              bottom: 90,
            }}
          >
            {/* <CartesianGrid strokeDasharray="" /> */}
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="pv"
              stroke="#ffffff"
              activeDot={{ r: 8 }}
            />
            <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
          </LineChart>
        </ResponsiveContainer>
      </div>
      <LineChar></LineChar>
    </div>
  );
}
