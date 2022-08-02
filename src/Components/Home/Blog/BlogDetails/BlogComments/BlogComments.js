import React from 'react';
import { AiTwotoneStar } from "react-icons/ai";
import { GiSelfLove } from "react-icons/gi";
import { FaShareSquare, FaReplyAll } from "react-icons/fa";
import WriteAComment from '../../WriteAComment/WriteAComment';
const BlogComments = () => {
    return (
        <div className="lg:pl-[280px] p-5 ">
            <h1 className="text-[36px] ">Blog <strong>Comments</strong></h1>
            <div className=" flex gap-6 mt-16 ">
                <img className="h-[82px] rounded-full" src="https://i.ibb.co/T44K8gh/admin.png" alt="" />

                <div className="mt-6 w-[892px]  px-5">
                    <div className="flex text-[#ffbe30]">
                        <AiTwotoneStar className="text-xl" />
                        <AiTwotoneStar className="text-xl" />
                        <AiTwotoneStar className="text-xl" />
                        <AiTwotoneStar className="text-xl" />
                        <AiTwotoneStar className="text-xl" />
                    </div>
                    <h1 className="text-4xl font-bold">John Doe</h1>

                    <p className="text-[20px] py-10">Brilliant production. Enjoyed this as it captured so many emotions and being Irish some bits resonated with Irish families, the craic, singing. Fantastic acting and so many surprises.</p>

                    <div className=" md:flex justify-around">
                        <div>
                            <div className="flex gap-2 text-[#878787]">
                                <GiSelfLove className="text-3xl inline-block" />
                                <h1 className=" font-bold text-lg">Helpful?</h1>
                            </div>
                            <div className='mt-3'>
                                <button className=" px-7 py-3 border text-[#878787] font-bold text-lg hover:text-[#ffbe30]">Yes</button>
                                <button className=" px-7 py-3 border text-[#878787] font-bold text-lg hover:text-[#ffbe30]">No</button>
                                {/* <button>no</button> */}
                            </div>
                        </div>

                        <div>
                            <div className='mt-3'>
                                <button className=" px-10 py-5 mr-4 border text-[#878787] font-bold text-lg hover:text-[#ffbe30]">
                                    <span className="pr-3">
                                        <FaReplyAll className="inline-block" />
                                    </span>
                                    Reply</button>
                                <button className=" px-10 py-5 border text-[#878787] font-bold text-lg hover:text-[#ffbe30]">
                                    <span className="pr-3">
                                        <FaShareSquare className="inline-block text-lg " />

                                    </span>
                                    Share</button>
                                {/* <button>no</button> */}
                            </div>
                        </div>
                    </div>
                    <hr className=" my-7 bg-gray-200" />

                    <div>
                        <WriteAComment></WriteAComment>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogComments;