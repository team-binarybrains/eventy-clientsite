import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { FiEdit } from "react-icons/fi";
import { Link } from "react-router-dom";
import { BiUserCircle } from "react-icons/bi";
import { BsFillCameraFill } from "react-icons/bs";
import { FileUploader } from "react-drag-drop-files";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import auth from "../../../Firebase/firebase.init";
import Loading from "../../Share/Loading/Loading";
import "./UserProfile.css";

const fileTypes = ["JPG", "PNG", "GIF"];
const UserProfile = () => {
  const [user, loading, error] = useAuthState(auth);
  const [currentUser, setCurrentUser] = useState([]);
  const [open, SetOpen] = useState(false);
  const navigate = useNavigate();
  const email = user?.email;
  // upload photo drag in drop

  const [file, setFile] = useState(null);
  const handleChange = (file) => {
    setFile(file);
  };
  // for profile photo uploaded
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    const imgbbAPIKey = "e32b2607a3f00cb963832ebb13d8a672";
    // const image = data.file[0];
    const image = file[0];
    const formData = new FormData();
    formData.append("image", image);
    const url = `https://api.imgbb.com/1/upload?key=${imgbbAPIKey}`;
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.success) {
          const img = result?.data?.url;
          const user = {
            image: img,
          };

          fetch(
            `https://eventy-serversite-production.up.railway.app/user-update/${email}`,
            {
              method: "PUT",
              headers: {
                "content-type": "application/json",
              },
              body: JSON.stringify(user),
            }
          )
            .then((res) => res.json())
            .then((inserted) => {
              if (inserted) {
                reset();
                setFile(null);
                navigate("/manage-profile");
                toast.success("Profile Picture Updated Successfully");
                SetOpen(false);
              }
            });
        }
      });
  };
  //
  useEffect(() => {
    fetch(
      `https://eventy-serversite-production.up.railway.app/single-user/${email}`
    )
      .then((res) => res.json())
      .then((data) => setCurrentUser(data));
  }, [file, email]);

  if (loading) {
    return <Loading />;
  }
  if (error) {
    console.log(error);
  }
  const openPopup = () => {
    SetOpen(true);
  };
  return (
    <section className="mt-64 mb-20 container mx-auto px-4 ">
      <div
        className="relative flex flex-col min-w-0 break-words border-2 bg-white w-full  mb-6 shadow-xl rounded-lg mt-16 "
        id="profileSection"
      >
        <div className="px-6">
          <div className="flex flex-wrap justify-center">
            <div className="w-full px-4 flex justify-center">
              <div
                id="user_profile"
                // data-aos="zoom-in"
                // data-aos-duration="2000"
              >
                {currentUser?.image ? (
                  <>
                    <img
                      src={currentUser?.image}
                      className="w-44 h-44  rounded-full mt-[-50%] bg-slate-50"
                      alt=""
                    />
                    <label
                      for="profile_picture"
                      id="profile_picture_change_btn"
                      onClick={openPopup}
                    >
                      <BsFillCameraFill className="text-2xl"></BsFillCameraFill>
                    </label>
                    <input
                      type="checkbox"
                      id="profile_picture"
                      class="modal-toggle"
                    />
                    {open && (
                      <div class="modal">
                        <div class="modal-box rounded">
                          <form
                            id="profile_photo_upload"
                            onSubmit={handleSubmit(onSubmit)}
                          >
                            <label
                              for="profile_picture"
                              class="btn btn-sm btn-circle bg-red-500 hover:bg-red-600 border-none absolute right-2 top-2"
                            >
                              ✕
                            </label>
                            <div className="mt-10">
                              <FileUploader
                                handleChange={handleChange}
                                multiple={true}
                                name="file"
                                types={fileTypes}
                              />
                              {file && (
                                <p
                                  className={`pt-4 text-sm font-medium text-slate-700`}
                                >
                                  {file &&
                                    `Selected File Name: ${file[0].name}`}
                                </p>
                              )}
                              {!file && (
                                <p
                                  className={`pt-4 text-sm text-red-600 font-medium`}
                                >
                                  {!file && "No File Uploaded Yet !"}
                                </p>
                              )}
                            </div>
                            <div class="modal-action">
                              {file ? (
                                <label for="profile_picture" class="w-full">
                                  <input
                                    className="block w-full bg-blue-700 hover:bg-blue-600 text-white text-center py-2 rounded cursor-pointer"
                                    type="submit"
                                    value="SAVE"
                                  />
                                </label>
                              ) : (
                                <label
                                  aria-disabled
                                  aria-readonly
                                  for=""
                                  class="block w-full bg-blue-200 text-white text-center py-2 rounded"
                                >
                                  SAVE
                                </label>
                              )}
                            </div>
                          </form>
                        </div>
                      </div>
                    )}
                  </>
                ) : (
                  // <img
                  //   src={user?.photoURL}
                  //   className="w-44 h-44 rounded-full mt-[-50%]"
                  //   alt=""
                  // />
                  <div className="">
                    <BiUserCircle className="w-44 h-44 mt-[-50%] border-2 text-slate-700 bg-slate-200 bg-opacity-100 text-4xl rounded-full" />
                    <label
                      for="profile_picture"
                      id="profile_picture_change_btn"
                      onClick={openPopup}
                    >
                      <BsFillCameraFill className="text-2xl"></BsFillCameraFill>
                    </label>
                    <input
                      type="checkbox"
                      id="profile_picture"
                      class="modal-toggle"
                    />
                    {open && (
                      <div class="modal">
                        <div class="modal-box rounded">
                          <form
                            id="profile_photo_upload"
                            onSubmit={handleSubmit(onSubmit)}
                          >
                            <label
                              for="profile_picture"
                              class="btn btn-sm btn-circle bg-red-500 hover:bg-red-600 border-none absolute right-2 top-2"
                            >
                              ✕
                            </label>
                            <div className="mt-10">
                              <FileUploader
                                handleChange={handleChange}
                                multiple={true}
                                name="file"
                                types={fileTypes}
                              />
                              {file && (
                                <p
                                  className={`pt-4 text-sm font-medium text-slate-700`}
                                >
                                  {file &&
                                    `Selected File Name: ${file[0].name}`}
                                </p>
                              )}
                              {!file && (
                                <p
                                  className={`pt-4 text-sm text-red-600 font-medium`}
                                >
                                  {!file && "No File Uploaded Yet !"}
                                </p>
                              )}
                            </div>
                            <div class="modal-action">
                              {file ? (
                                <label for="profile_picture" class="w-full">
                                  <input
                                    className="block w-full bg-blue-700 hover:bg-blue-600 text-white text-center py-2 rounded cursor-pointer"
                                    type="submit"
                                    value="SAVE"
                                  />
                                </label>
                              ) : (
                                <label
                                  aria-disabled
                                  aria-readonly
                                  for=""
                                  class="block w-full bg-blue-200 text-white text-center py-2 rounded"
                                >
                                  SAVE
                                </label>
                              )}
                            </div>
                          </form>
                        </div>
                      </div>
                    )}
                  </div>
                )}
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
                <h3 className="text-lg font-semibold leading-normal text-slate-700 mb-1 capitalize">
                  Name: {currentUser?.displayName}
                </h3>
              </div>
              <div className="text-base font-semibold leading-normal text-slate-700 mb-1">
                <span className="">Email : </span> {currentUser?.email}
              </div>
              <div className="">
                <p className="text-base font-semibold leading-normal text-slate-700 mb-1 capitalize">
                  City :{" "}
                  {currentUser?.city ? currentUser?.city : "Set Your City Name"}
                </p>
              </div>
              <div className="mb-2 text-gray-600 mt-0">
                <p className="text-base font-semibold leading-normal text-slate-700 mb-1 capitalize">
                  Country :{" "}
                  {currentUser?.country
                    ? currentUser?.country
                    : "Set Your City Name"}{" "}
                </p>{" "}
              </div>

              <div className="mb-2 text-gray-600 mt-0">
                <p className="text-base font-semibold leading-normal text-slate-700 mb-1 capitalize">
                  Address :
                  {currentUser?.address
                    ? currentUser?.address
                    : " Set Your Address"}
                </p>
              </div>
            </div>
            <div className="mt-10 py-10 border-t border-gray-200 text-start">
              <div className="">
                <div className="w-full lg:w-9/12 px-4">
                  <p className="text-xl pb-5">About Me</p>
                  <p className="text-base text-slate-600 font-normal mb-1 capitalize">
                    {currentUser?.aboutMe
                      ? currentUser?.aboutMe
                      : "Set Your About "}
                  </p>
                  {currentUser?.aboutMe?.length > 200 && (
                    <a
                      href="#!"
                      className="font-normal text-lightBlue-500"
                      onClick={(e) => e.preventDefault()}
                    >
                      {" "}
                      Show more
                    </a>
                  )}
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
