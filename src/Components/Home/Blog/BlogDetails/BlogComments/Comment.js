import React, { useState } from "react";
import { AiOutlineUser, AiTwotoneStar } from "react-icons/ai";
import { GiSelfLove } from "react-icons/gi";
import { FaShareSquare, FaReplyAll } from "react-icons/fa";

const Comment = ({ comment }) => {
  const [helpful, setHelpful] = useState(localStorage.getItem(`helpful:${comment?._id}`) || "neutral");

  const yes = () => {
    localStorage.setItem(`helpful:${comment?._id}`, "helpful");
    setHelpful(localStorage.getItem(`helpful:${comment?._id}`));
  };
  const no = () => {
    localStorage.setItem(`helpful:${comment?._id}`, "notHelpful");
    setHelpful(localStorage.getItem(`helpful:${comment?._id}`));
  };

  return (
    <div comment={comment} className="mt-6 md:w-[892px] lg:w-[892px]  ">
      <div>
        <div className="">
          <div className="flex gap-6">
            
         <>
         {comment.img && (
                          <img
                            src={comment.img}
                            className="w-10 h-10 rounded-full"
                            alt=""
                          />
                        )}

                        {comment.img === null && (
                          <span className="">
                            <AiOutlineUser className="border-2 border-black text-black bg-white bg-opacity-50 text-4xl rounded-full" /> </span>)}
         </>


            <div>
            
              <h1 className="text-xl font-bold">{comment.name}</h1>
              <div className="flex text-[#ffbe30]">
                <AiTwotoneStar className="text-xl" />
                <AiTwotoneStar className="text-xl" />
                <AiTwotoneStar className="text-xl" />
                <AiTwotoneStar className="text-xl" />
                <AiTwotoneStar className="text-xl" />
              </div>
            </div>
          </div>

          <p className="text-[20px] md:ml-20 lg:ml-20 py-10">
            {comment.detail}
          </p>
        </div>

      </div>

      <div className=" md:flex justify-around">
        <div>
          <div className="flex gap-2 text-[#878787]">
            <GiSelfLove className="text-3xl inline-block" />
            <h1 className=" font-bold text-lg">Helpful?</h1>
          </div>
          <div className="mt-3">
            <button
              onClick={yes}
              className={`${
                helpful === "helpful"
                  ? "text-white bg-green-500"
                  : "bg-white text-[#878787]"
              } px-7  text-7 py-3 border  font-bold text-lg hover:text-black`}
            >
              Yes
            </button>
            <button
              onClick={no}
              className={`${
                helpful === "notHelpful"
                  ? "text-white bg-red-500"
                  : "bg-white text-[#878787]"
              } px-7  text-7 py-3 border  font-bold text-lg hover:text-black`}
            >
              No
            </button>
            {/* <button>no</button> */}
          </div>
        </div>

        <div>
          <div className="mt-3">
            <button className=" px-10 py-5 mr-4 border text-[#878787] font-bold text-lg hover:text-[#ffbe30]">
              <span className="pr-3">
                <FaReplyAll className="inline-block" />
              </span>
              Reply
            </button>
            <button className=" px-10 py-5 border text-[#878787] font-bold text-lg hover:text-[#ffbe30]">
              <span className="pr-3">
                <FaShareSquare className="inline-block text-lg " />
              </span>
              Share
            </button>
            {/* <button>no</button> */}
          </div>
        </div>
      </div>

      <div></div>
      <hr className=" my-9  bg-black" />
    </div>
  );
};

export default Comment;
