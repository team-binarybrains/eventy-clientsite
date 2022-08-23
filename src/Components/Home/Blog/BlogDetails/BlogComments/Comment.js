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


  const showStars = (star) => {
    if (star > 1) {
      return <>
        <AiTwotoneStar className="text-xl" />
        {showStars(star - 1)}
      </>
    }
    if (star === 1) {
      return <AiTwotoneStar className="text-xl" />;
    }
  }

  return (
    <>
      <div className="py-10 flex gap-3 flex-col sm:flex-row items-center sm:items-stretch">

        {/* user image */}
        <section className="w-10"
        data-aos="fade-right"
        data-aos-delay="600"
        data-aos-duration="2000"
        >
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
        </section>

        {/* comment body */}
        <section className="space-y-3 flex flex-wrap grow">

          {/* user name with rating */}
          <div className="basis-full flex flex-col items-center sm:block">
            <h1 className="text-lg font-bold"
            data-aos="fade-right"
            data-aos-duration="2000"
            >{comment.name}</h1>
            <div className="flex text-[#ffbe30]"
            data-aos="fade-left"
            data-aos-duration="2000"
            >
              {showStars(comment?.rating)}
            </div>
          </div>

          {/* comment text*/}
          <p className="text-sm h-28 basis-full grow overflow-auto"
          data-aos="flip-up"
          data-aos-duration="2000"
          >
            {comment.detail}
          </p>

          {/* reacting button */}
          <section className="basis-full flex items-end justify-between">

            {/* helpful indicator */}
            <div className="space-y-5">

              <div className="flex gap-2 text-[#878787]"
                data-aos="zoom-in"
                data-aos-duration="2000"
              >
                <GiSelfLove className="text-3xl inline-block" />
                <h1 className=" font-bold text-lg">Helpful?</h1>
              </div>

              <div className="flex flex-col sm:flex-row"
                data-aos="fade-left"
                data-aos-duration="2000"
              >
                <button
                  onClick={yes}
                  className={`${helpful === "helpful"
                    ? "text-white bg-gradient-to-b from-amber-300 to-amber-500"
                    : "bg-white text-[#878787]"
                    } py-3 w-20 font-bold rounded-sm border-2 border-r hover:text-gray-700`}
                >
                  Yes
                </button>
                <button
                  onClick={no}
                  className={`${helpful === "notHelpful"
                    ? "text-white bg-gradient-to-b from-amber-300 to-amber-500"
                    : "bg-white text-[#878787]"
                    } py-3 w-20 font-bold rounded-sm border-2 border-l hover:text-gray-700`}
                >
                  No
                </button>
              </div>

            </div>

            {/* reply and share btn */}
            <div className="flex flex-col sm:flex-row"
            data-aos="fade-right"
            data-aos-duration="2000"
            >

              <button className="py-3 w-28 border-2 border-r text-[#878787] font-bold hover:text-gray-700">
                <FaReplyAll className="inline-block mr-2" />
                Reply
              </button>

              <button className="py-3 w-28 border-2 border-l text-[#878787] font-bold hover:text-gray-700">
                <FaShareSquare className="inline-block mr-2" />
                Share
              </button>

            </div>

          </section>

        </section>

      </div>
      <div className="py-[1px] rounded-full bg-gray-400/60" 
      data-aos="zoom-in"
      data-aos-duration="2000"
      />
    </>
  );
};

export default Comment;
