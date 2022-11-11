import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import auth from "../../../../Firebase/firebase.init";
import Loading from "../../../Share/Loading/Loading";

const UpdateUser = () => {
  const [user, loading, error] = useAuthState(auth);
  const [userData, setUserData] = useState([]);
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
      `https://eventy-serversite-production.up.railway.app/single-user/${email}`,
      {
        method: "GET",
      }
    )
      .then((res) => res.json())
      .then((data) => setUserData(data));
  }, [email]);

  const onSubmit = (data) => {
    // const imgbbAPIKey = "e32b2607a3f00cb963832ebb13d8a672";
    // const image = data.image[0];
    // const formData = new FormData();
    // formData.append("image", image);
    // const url = `https://api.imgbb.com/1/upload?key=${imgbbAPIKey}`;
    // fetch(url, {
    //    method: "POST",
    //    body: formData,
    // })
    //    .then((res) => res.json())
    //    .then((result) => {
    //       if (result.success) {
    //          const img = result?.data?.url;
    //          const user = {
    //             displayName: data.displayName,
    //             country: data.country,
    //             city: data.city,
    //             aboutMe: data.aboutMe,
    //             address: data.address,
    //             email: data.email,
    //             image: img,
    //          };

    // fetch(`https://eventy-serversite-production.up.railway.app/user-update/${email}`, {
    //    method: "PUT",
    //    headers: {
    //       "content-type": "application/json",
    //    },
    //    body: JSON.stringify(user),
    // })
    //    .then((res) => res.json())
    //    .then((inserted) => {
    //       if (inserted) {
    //          toast.success("updated");
    //          navigate('/manage-profile')
    //          reset();
    //       }
    //    });
    //    }
    // });
    const user = {
      displayName: data.displayName,
      country: data.country,
      city: data.city,
      aboutMe: data.aboutMe,
      address: data.address,
      email: data.email,
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
          toast.success("updated");
          navigate("/manage-profile");
          reset();
        }
      });
  };

  // for user
  if (loading) {
    return <Loading></Loading>;
  }
  if (error) {
    console.log(error);
  }

  return (
    <section className="route my-10 container mx-auto px-4">
      <div className="rounded bg-white shadow-2xl" id="profile_container">
        <div className="text-start">
          <h1 className="text-2xl pt-4 font-semibold py-6 text-slate-700 pl-9">
            Edit Profile
          </h1>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="p-4">
            <div className="block sm:flex gap-3 mt-4">
              <div className="w-full">
                <div className="">
                  <label
                    htmlFor="displayName"
                    className="text-slate-500 block font-semibold w-1/2 "
                  >
                    User Name{" "}
                  </label>
                  <input
                    defaultValue={userData?.displayName}
                    id="displayName"
                    name="displayName"
                    type="text"
                    className=" mt-2 appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-green-500 focus:border-green-500 focus:z-10 sm:text-sm"
                    placeholder="User Name"
                    {...register("displayName", {
                      required: {
                        value: true,
                        message: "enter your name",
                      },
                    })}
                  />
                </div>
                <label className="text-left sm:text-start block">
                  {errors.displayName?.type === "required" && (
                    <span className="text-red-500 text-sm capitalize">
                      {errors.displayName.message}
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
                    Email Address
                  </label>
                  <input
                    value={email}
                    readOnly
                    id="email"
                    name="email"
                    type="text"
                    className="mt-2 appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-green-500 focus:border-green-500 focus:z-10 sm:text-sm"
                    placeholder="Email Address"
                    // {...register("email", {
                    //   required: {
                    //     value: true,
                    //     message: "Enter Email Address",
                    //   },
                    // })}
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
            <div className="block sm:flex gap-3 mt-4">
              <div className="w-full">
                <div className="">
                  <label
                    htmlFor="country"
                    className="text-slate-500 font-semibold w-1/2 "
                  >
                    Country
                  </label>
                  <input
                    // defaultValue={userData?.country? userData?.country : "Enter Your Country"}
                    defaultValue={userData?.country}
                    id="country"
                    name="country"
                    type="text"
                    className="mt-2 appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-green-500 focus:border-green-500 focus:z-10 sm:text-sm"
                    placeholder="Country Name"
                    {...register("country", {
                      required: {
                        value: true,
                        message: "Enter Your Country",
                      },
                    })}
                  />
                </div>
                <label className="text-left sm:text-start block">
                  {errors.country?.type === "required" && (
                    <span className="text-red-500 text-sm capitalize">
                      {errors.country.message}
                    </span>
                  )}
                </label>
              </div>
              <div className="w-full">
                <div className="">
                  <label
                    htmlFor="city"
                    className="text-slate-500 font-semibold w-1/2 "
                  >
                    City
                  </label>
                  <input
                    defaultValue={userData?.city}
                    id="city"
                    name="city"
                    type="text"
                    className="mt-2 appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-green-500 focus:border-green-500 focus:z-10 sm:text-sm"
                    placeholder="City Name"
                    {...register("city", {
                      required: {
                        value: true,
                        message: "Enter City Name",
                      },
                    })}
                  />
                </div>
                <label className="text-left sm:text-start block">
                  {errors.city?.type === "required" && (
                    <span className="text-red-500 text-sm capitalize">
                      {errors.city.message}
                    </span>
                  )}
                </label>
              </div>
            </div>
            <div>
              <div className="mt-4">
                <label
                  htmlFor="address"
                  className="text-slate-500 font-semibold "
                >
                  Address
                </label>
                <input
                  defaultValue={userData?.address}
                  id="address"
                  name="address"
                  type="text"
                  className="mt-2 appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-green-500 focus:border-green-500 focus:z-10 sm:text-sm"
                  placeholder="Address "
                  {...register("address", {
                    required: {
                      value: true,
                      message: "Enter your address",
                    },
                  })}
                />
              </div>
              <label className="text-left sm:text-start block">
                {errors.address?.type === "required" && (
                  <span className="text-red-500 text-sm capitalize">
                    {errors.address.message}
                  </span>
                )}
              </label>
            </div>
            <div className="py-2">
              <div className="mt-4">
                <label
                  htmlFor="aboutMe"
                  className="text-slate-500 w-1/5 font-semibold"
                >
                  {" "}
                  About Me{" "}
                </label>
                <textarea
                  defaultValue={userData?.aboutMe}
                  id="aboutMe"
                  name="aboutMe"
                  type="text"
                  className="mt-2 appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-green-500 focus:border-green-500 focus:z-10 sm:text-sm"
                  placeholder="About Me"
                  cols="5"
                  rows="5"
                  {...register("aboutMe", {
                    required: {
                      value: true,
                      message: "Enter Your About",
                    },
                  })}
                />
              </div>
              <label className="text-left sm:text-start block">
                {errors.aboutMe?.type === "required" && (
                  <span className="text-red-500 text-sm  capitalize">
                    {errors.aboutMe.message}
                  </span>
                )}
              </label>
            </div>
            {/* <div className="pb-4">
                     <div className="">
                        <label
                           htmlFor="image"
                           className="text-slate-500 w-1/5 font-semibold block mt-4"
                        >
                           Update Photos
                        </label>
                        <input

                           id="image"
                           name="image"
                           type="file"
                           className="mt-2 appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-green-500 focus:border-green-500 focus:z-10 sm:text-sm"
                           placeholder="select photo"
                           {...register("image", {
                              required: {
                                 value: true,
                                 message: "select photos",
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
                  </div> */}
          </div>
          <button className="uppercase transition-all bg-green-500 w-full py-2 text-white hover:bg-green-600 rounded-b">
            Update
          </button>
        </form>
      </div>
    </section>
  );
};

export default UpdateUser;
