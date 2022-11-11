import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { useNavigate, useParams } from "react-router-dom";
import auth from "../../../Firebase/firebase.init";
import Loading from "../../Share/Loading/Loading";

const UpdateEmployee = () => {
  const { id } = useParams();
  const [user, loading, error] = useAuthState(auth);
  const [employeeInfo, setEmployeeInfo] = useState([]);
  const navigate = useNavigate();
  const email = user?.email;
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  useEffect(() => {
    fetch(
      `https://eventy-serversite-production.up.railway.app/update-employee/${id}`,
      {
        method: "GET",
      }
    )
      .then((res) => res.json())
      .then((data) => setEmployeeInfo(data));
  }, [id]);

  const onSubmit = (data) => {
    const imgbbAPIKey = "e32b2607a3f00cb963832ebb13d8a672";
    const image = data.image[0];
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
          const employee = {
            name: data.employeeName,
            profession: data.employeeProfession,
            city: data.EmployeeCity,
            country: data.employeeCountry,
            address: data.employeeAddress,
            details: data.EmployeeAbout,
            email: data.email,
            image: img,
          };
          // console.log(employee);
          fetch(
            `https://eventy-serversite-production.up.railway.app/update-employee/${id}`,
            {
              method: "PUT",
              headers: {
                "content-type": "application/json",
              },
              body: JSON.stringify(employee),
            }
          )
            .then((res) => res.json())
            .then((inserted) => {
              if (inserted) {
                toast.success("Update was successful");
                reset();
                navigate("/dashboard/all-employee");
              }
            });
        }
      });
  };
  console.log(employeeInfo);
  // for user
  if (loading) {
    return <Loading></Loading>;
  }
  if (error) {
    console.log(error);
  }

  return (
    <section className="my-7 container mx-auto px-4">
      <div className="rounded bg-white shadow-2xl" id="profile_container">
        <div className="text-start">
          <h1 className="text-2xl pt-4 font-semibold py-6 text-slate-700 pl-9 capitalize font-sans">
            Update Employee Information
          </h1>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="p-4">
            <div className="block sm:flex gap-3 mt-4">
              <div className="w-full">
                <div className="">
                  <label
                    htmlFor="employeeName"
                    className="text-slate-500 block font-semibold w-1/2 "
                  >
                    Employee's Name{" "}
                  </label>
                  <input
                    defaultValue={employeeInfo?.name}
                    id="employeeName"
                    name="employeeName"
                    type="text"
                    className=" mt-2 appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-green-500 focus:border-green-500 focus:z-10 sm:text-sm"
                    placeholder="Enter Employee's Name"
                    {...register("employeeName", {
                      required: {
                        value: true,
                        message: "Change Employee's Name",
                      },
                    })}
                  />
                </div>
                <label className="text-left sm:text-start block">
                  {errors.employeeName?.type === "required" && (
                    <span className="text-red-500 text-sm capitalize">
                      {errors.employeeName.message}
                    </span>
                  )}
                </label>
              </div>
              <div className="w-full">
                <div className="">
                  <label
                    htmlFor="email"
                    className="text-slate-500 font-semibold w-1/2 "
                  >
                    Employee's Email
                  </label>
                  <input
                    defaultValue={employeeInfo?.email}
                    id="email"
                    name="email"
                    type="text"
                    className="mt-2 appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-green-500 focus:border-green-500 focus:z-10 sm:text-sm"
                    placeholder="Enter Employee's Email Address"
                    {...register("email", {
                      required: {
                        value: true,
                        message: "Change Employee's Email Address",
                      },
                    })}
                  />
                </div>
                <label className="text-left sm:text-start block">
                  {errors.email?.type === "required" && (
                    <span className="text-red-500 text-sm capitalize">
                      {errors.email.message}
                    </span>
                  )}
                </label>
              </div>
            </div>
            {/* <div className="block sm:flex gap-3 mt-4">
                     <div className="w-full">
                        <div className="">
                           <label
                              htmlFor="FbAccount"
                              className="text-slate-500 font-semibold w-1/2 "
                           >
                              Facebook Account Link
                           </label>
                           <input
                              // defaultValue={userData?.country? userData?.country : "Enter Your Country"}
                              // defaultValue={userData?.country}
                              id="FbAccount"
                              name="FbAccount"
                              type="text"
                              className="mt-2 appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-green-500 focus:border-green-500 focus:z-10 sm:text-sm"
                              placeholder="Enter Employee's Facebook Link"
                              {...register("FbAccount", {
                                 required: {
                                    value: true,
                                    message: "Enter Employee's Facebook Link",
                                 },
                              })}
                           />
                        </div>
                        <label className="text-left sm:text-start block">
                           {errors.FbAccount?.type === "required" && (
                              <span className="text-red-500 text-sm capitalize">
                                 {errors.FbAccount.message}
                              </span>
                           )}
                        </label>
                     </div>
                     <div className="w-full">
                        <div className="">
                           <label
                              htmlFor="instagramLink"
                              className="text-slate-500 font-semibold w-1/2 "
                           >
                              Instagram Account Link
                           </label>
                           <input
                              id="instagramLink"
                              name="instagramLink"
                              type="text"
                              className="mt-2 appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-green-500 focus:border-green-500 focus:z-10 sm:text-sm"
                              placeholder="Enter Employee's Instagram Link"
                              {...register("instagramLink", {
                                 // required: {
                                 //    value: true,
                                 //    message: "Enter Employee's Instagram Link",
                                 // },
                              })}
                           />
                        </div>
                        <label className="text-left sm:text-start block">
                           {errors.instagramLink?.type === "required" && (
                              <span className="text-red-500 text-sm capitalize">
                                 {errors.instagramLink.message}
                              </span>
                           )}
                        </label>
                     </div>
                  </div> */}
            {/* <div className="block sm:flex gap-3 mt-4">
                     <div className="w-full">
                        <div className="">
                           <label
                              htmlFor="twitterLink"
                              className="text-slate-500 font-semibold w-1/2 "
                           >
                              Twitter Account Link
                           </label>
                           <input
                              id="twitterLink"
                              name="twitterLink"
                              type="text"
                              className="mt-2 appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-green-500 focus:border-green-500 focus:z-10 sm:text-sm"
                              placeholder="Enter Employee's Twitter Link "
                              {...register("twitterLink", {
                                 // required: {
                                 //    value: true,
                                 //    message: "Enter Employee's Twitter Link",
                                 // },
                              })}
                           />
                        </div>
                        <label className="text-left sm:text-start block">
                           {errors.twitterLink?.type === "required" && (
                              <span className="text-red-500 text-sm capitalize">
                                 {errors.twitterLink.message}
                              </span>
                           )}
                        </label>
                     </div>
                     <div className="w-full">
                        <div className="">
                           <label
                              htmlFor="LinkedinLink"
                              className="text-slate-500 font-semibold w-1/2 "
                           >
                              linkedin Account Link
                           </label>
                           <input
                              id="LinkedinLink"
                              name="LinkedinLink"
                              type="text"
                              className="mt-2 appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-green-500 focus:border-green-500 focus:z-10 sm:text-sm"
                              placeholder="Enter Employee's Linkedin Link"
                              {...register("LinkedinLink", {
                                 // required: {
                                 //    value: true,
                                 //    message: "Enter Employee's Linkedin Link",
                                 // },
                              })}
                           />
                        </div>
                        <label className="text-left sm:text-start block">
                           {errors.LinkedinLink?.type === "required" && (
                              <span className="text-red-500 text-sm capitalize">
                                 {errors.LinkedinLink.message}
                              </span>
                           )}
                        </label>
                     </div>
                  </div> */}
            <div className="block sm:flex gap-3 mt-4">
              <div className="w-full">
                <div className="">
                  <label
                    htmlFor="EmployeeCity"
                    className="text-slate-500 font-semibold w-1/2 "
                  >
                    Employee City
                  </label>
                  <input
                    defaultValue={employeeInfo?.city}
                    id="EmployeeCity"
                    name="EmployeeCity"
                    type="text"
                    className="mt-2 appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-green-500 focus:border-green-500 focus:z-10 sm:text-sm"
                    placeholder="Employee City Name"
                    {...register("EmployeeCity", {
                      required: {
                        value: true,
                        message: "Change Employee City Name",
                      },
                    })}
                  />
                </div>
                <label className="text-left sm:text-start block">
                  {errors.EmployeeCity?.type === "required" && (
                    <span className="text-red-500 text-sm capitalize">
                      {errors.EmployeeCity.message}
                    </span>
                  )}
                </label>
              </div>
              <div className="w-full">
                <div className="">
                  <label
                    htmlFor="employeeCountry"
                    className="text-slate-500 font-semibold w-1/2 "
                  >
                    Employee Country
                  </label>
                  <input
                    // defaultValue={userData?.country? userData?.country : "Enter Your Country"}
                    defaultValue={employeeInfo?.country}
                    id="employeeCountry"
                    name="employeeCountry"
                    type="text"
                    className="mt-2 appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-green-500 focus:border-green-500 focus:z-10 sm:text-sm"
                    placeholder="Employee Country "
                    {...register("employeeCountry", {
                      required: {
                        value: true,
                        message: "Change Employee Country Name",
                      },
                    })}
                  />
                </div>
                <label className="text-left sm:text-start block">
                  {errors.employeeCountry?.type === "required" && (
                    <span className="text-red-500 text-sm capitalize">
                      {errors.employeeCountry.message}
                    </span>
                  )}
                </label>
              </div>
            </div>
            <div>
              <div className="mt-4">
                <label
                  htmlFor="employeeAddress"
                  className="text-slate-500 font-semibold "
                >
                  Employee Address
                </label>
                <input
                  defaultValue={employeeInfo?.address}
                  id="employeeAddress"
                  name="employeeAddress"
                  type="text"
                  className="mt-2 appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-green-500 focus:border-green-500 focus:z-10 sm:text-sm"
                  placeholder="employeeAddress "
                  {...register("employeeAddress", {
                    required: {
                      value: true,
                      message: "Change Employee Address",
                    },
                  })}
                />
              </div>
              <label className="text-left sm:text-start block">
                {errors.employeeAddress?.type === "required" && (
                  <span className="text-red-500 text-sm capitalize">
                    {errors.employeeAddress.message}
                  </span>
                )}
              </label>
            </div>
            <div className="w-full pt-4">
              <div className="">
                <label
                  htmlFor="employeeProfession"
                  className="text-slate-500 font-semibold w-1/2 "
                >
                  Employee's Profession
                </label>
                <select
                  name="employeeProfession"
                  id="employeeProfession"
                  className="select mt-2 appearance-none rounded-none relative block w-full px-3 border border-gray-300 placeholder-gray-500 text-gray-500 rounded-t-md focus:outline-none focus:ring-green-500 focus:border-green-500 focus:z-10 sm:text-sm"
                  {...register("employeeProfession", {
                    // required: {
                    //    value: true,
                    //    message: "Enter employee's Profession",
                    // },
                  })}
                >
                  <option
                    disabled
                    selected
                    defaultValue={employeeInfo?.profession}
                  >
                    {employeeInfo?.profession}
                  </option>
                  <option value="speaker">Speaker</option>
                  <option value="event planner">Event planner</option>
                </select>
              </div>
              <label className="text-left sm:text-start block">
                {errors.employeeProfession?.type === "required" && (
                  <span className="text-red-500 text-sm capitalize">
                    {errors.employeeProfession.message}
                  </span>
                )}
              </label>
            </div>
            <div className="py-2">
              <div className="mt-4">
                <label
                  htmlFor="EmployeeAbout"
                  className="text-slate-500 w-1/5 font-semibold"
                >
                  {" "}
                  Employee's About{" "}
                </label>
                <textarea
                  defaultValue={employeeInfo?.details}
                  id="EmployeeAbout"
                  name="EmployeeAbout"
                  type="text"
                  className="mt-2 appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-green-500 focus:border-green-500 focus:z-10 sm:text-sm"
                  placeholder="Enter Employee's About"
                  cols="5"
                  rows="5"
                  {...register("EmployeeAbout", {
                    required: {
                      value: true,
                      message: "Change Employee's About",
                    },
                  })}
                />
              </div>
              <label className="text-left sm:text-start block">
                {errors.EmployeeAbout?.type === "required" && (
                  <span className="text-red-500 text-sm  capitalize">
                    {errors.EmployeeAbout.message}
                  </span>
                )}
              </label>
            </div>
            <div className="pb-4">
              <div className="">
                <label
                  htmlFor="image"
                  className="text-slate-500 w-1/5 font-semibold block mt-4"
                >
                  Employee's Photos
                </label>
                <input
                  defaultValue={employeeInfo?.image}
                  id="image"
                  name="image"
                  type="file"
                  className="mt-2 appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-green-500 focus:border-green-500 focus:z-10 sm:text-sm"
                  placeholder="select photo"
                  {...register("image", {
                    required: {
                      value: true,
                      message: "Select Employee's  photos",
                    },
                  })}
                />
              </div>
              <label className="text-left sm:text-start block">
                {errors.image?.type === "required" && (
                  <span className="text-red-500 text-sm  capitalize">
                    {errors.image.message}
                  </span>
                )}
              </label>
            </div>
          </div>
          <button className="uppercase transition-all bg-green-500 w-full py-2 text-white hover:bg-green-600 rounded-b">
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default UpdateEmployee;
