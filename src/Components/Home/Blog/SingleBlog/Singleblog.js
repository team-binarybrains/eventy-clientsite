import React from "react";
import { BsPlusLg } from "react-icons/bs";
import { Navigate, useNavigate } from "react-router-dom";

const Singleblog = ({ item }) => {
  const { tittle, type, image, date, address, details, _id } = item;
  const navigete = useNavigate();
  const handleblogs = (id) => {
    navigete("/blogs-details/" + id);
  };

  return (
    <div className="bg-white lg:mt-5 p-4  lg:p-5 lg:max-w-2xl shadow-sm gap-4 flex flex-col items-center  lg:flex-row "
      data-aos="flip-down"
      data-aos-duration="2600"
    >
      <div className="blog-image   lg:w-[300px] relative hvr">
        <img
          className="lg:h-[200px] lg:w-[300px] object-cover"
          src={image}
          alt=""
        />
        <div
          onClick={() => handleblogs(_id)}
          className="absolute top-0 left-0 right-0 bottom-0 bg-transparent cld cursor-pointer"
        >
          <BsPlusLg className="text-6xl text-white absolute top-[calc(50%-30px)] left-[calc(50%-30px)] pls " />
        </div>
      </div>
      <div className=" blog-details w-full ">
        <h1 className="text-center  text-[20px] font-bold lg:text-start lg:mx-0 lg:w-[310px]">
          {tittle}
        </h1>
        <h1 className="text-center text-[18px] lg:text-start text-[#ffbe30] mt-2 font-bold">
          {date}
        </h1>
        <p className="mt-5 text-center text-[17px] lg:text-start lg:text-[18px] lg:mx-0 text-[#333333] lg:w-[350px] lg:mt-5">
          {details.slice(0, 100)}
        </p>
      </div>
    </div>
  );
};

export default Singleblog;
