import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { FiEdit } from "react-icons/fi";
import { Link } from "react-router-dom";
import { BiUserCircle } from 'react-icons/bi';
import { AiOutlineUser } from 'react-icons/ai';
import auth from "../../../Firebase/firebase.init";
import Loading from "../../Share/Loading/Loading";
import axios from "axios";
import "./UserProfile.css";

const UserProfile = () => {
  const [currentUser, setCurrentUser] = useState([]);
  const [user, loading, error] = useAuthState(auth);
  const email = user?.email;
  // 
  useEffect(() => {
    // axios.get(`https://powerful-cove-50894.herokuapp.com/single-user/${email}`).then((res) => {
    //   const { data } = res;
    //   setUpdateUser(data);
    // });
    fetch(`http://localhost:5000/single-user/${email}`)
      .then(res => res.json())
      .then(data => setCurrentUser(data))
  }, [email]);
  if (loading) {
    return <Loading />;
  }
  console.log(currentUser);
  return (
    <section className="mt-64 mb-20 container mx-auto px-4 ">
      <div
        className="relative flex flex-col min-w-0 break-words border-2 bg-white w-full  mb-6 shadow-xl rounded-lg mt-16 "
        id="profileSection"
      >
        <div className="px-6">
          <div className="flex flex-wrap justify-center">
            <div className="w-full px-4 flex justify-center">
              <div className="relative">

                {currentUser?.image ? <img
                  src={currentUser?.image}
                  className="w-44 h-44  rounded-full mt-[-50%]"
                  alt=""
                />
                  :
                  // <img
                  //   src={user?.photoURL}
                  //   className="w-44 h-44 rounded-full mt-[-50%]"
                  //   alt=""
                  // />
                  <span className="">
                    <BiUserCircle className="w-44 h-44 mt-[-50%] border-2 text-slate-700 bg-slate-200 bg-opacity-100 text-4xl rounded-full" />
                  </span>
                }
                {/* {user?.photoURL && (
                    
                  )} */}

                {/* {user?.photoURL === null && currentUser?.image === null(
                  <span className="">
                    <AiOutlineUser className="w-44 h-44 mt-[-50%] border-2 border-black text-black bg-white bg-opacity-50 text-4xl rounded-full" />
                  </span>
                )} */}
                {/* <BiUserCircle className="w-[200px] h-[200px]  mt-[-50%] text-slate-600"></BiUserCircle> */}

              </div>
            </div>
            <div className="w-full px-4 text-start mt-[-5%]">
              <div className="flex justify-center sm:justify-start py-4 lg:pt-4 pt-8">
                <div className="mr-4 p-3 text-center">
                  <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                    10
                  </span>
                  <span className="text-sm text-blueGray-400">Booking</span>
                </div>
                <div className="mr-4 p-3 text-center">
                  <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                    20
                  </span>
                  <span className="text-sm text-blueGray-400">Review</span>
                </div>
                <div className="lg:mr-4 p-3 text-center">
                  <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                    89
                  </span>
                  <span className="text-sm text-blueGray-400">Comments</span>
                </div>
              </div>
            </div>
            {/* for logout button */}
            {/* className="sm:absolute sm:top-32 sm:right-20 md:top-28 md:right-40 lg:top-28 lg:right-32 xl:top-20 xl:right-48 " */}

            {/* className="sm:absolute flex w-full justify-center md:justify-end md:top-28 lg:top-20 xl:top-16"  */}
            <div className="sm:absolute sm:top-32 sm:right-0 md:top-28 md:right-4 lg:top-28 lg:right-4 xl:top-20 xl:right-4 ">
              <Link
                to={`/update/user-profile`}
                className="px-8 py-2 rounded text-black font-bold text-xl flex items-center gap-3 hover:text-gray-600"
              >
                <FiEdit></FiEdit> Edit Profile
              </Link>
            </div>
          </div>
          <div className="text-center mt-6">
            <div className="">
              <div className="">
                <h3 className="text-lg font-semibold leading-normal text-slate-700 mb-1">
                  Name: {currentUser?.displayName}
                </h3>
              </div>
              <div className="text-base font-semibold leading-normal text-slate-700 mb-1">
                <span className="">Email : </span> {currentUser?.email}
              </div>
              <div className="">
                <p className="text-base font-semibold leading-normal text-slate-700 mb-1">City : {currentUser?.city ? currentUser?.city : "Set Your City Name"}</p>
              </div>
              <div className="mb-2 text-gray-600 mt-0">
                <p className="text-base font-semibold leading-normal text-slate-700 mb-1">Country : {
                  currentUser?.country ? currentUser?.country : "Set Your City Name"
                } </p>{" "}
              </div>

              <div className="mb-2 text-gray-600 mt-0">
                <p className="text-base font-semibold leading-normal text-slate-700 mb-1 capitalize">Address :
                  {currentUser?.address ? currentUser?.address : " Set Your Address"}
                </p>
              </div>
            </div>
            <div className="mt-10 py-10 border-t border-gray-200 text-start">
              <div className="">
                <div className="w-full lg:w-9/12 px-4">
                  <p className="text-xl pb-5">About Me</p>
                  <p className="text-base text-slate-600 font-normal mb-1 capitalize">
                    {currentUser?.aboutMe ? currentUser?.aboutMe : "Set Your About "}
                  </p>
                  {
                    currentUser?.aboutMe?.length > 200
                    &&
                    <a
                      href="#!"
                      className="font-normal text-lightBlue-500"
                      onClick={(e) => e.preventDefault()}
                    > Show more lorem205</a>
                  }
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UserProfile;