/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import auth from "../../../../Firebase/firebase.init";


const WriteAComment = () => {
  const [stars, setStars] = useState(5);
  const countStars = (e) => {
    setStars(e.target.value);
  }
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  const [user] = useAuthState(auth);

  const handleAdddetail = (data) => {
    const inputdetail = {

      name: data?.name,
      phoneNumber: data?.phoneNumber,
      detail: data.detail,
      email: data.email,
      rating: stars
    };

    fetch("http://localhost:5000/comment", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        // authorization: Bearer ${localStorage.getItem('accessToken')}
      },
      body: JSON.stringify(inputdetail),
    })
      .then((res) => res.json())
      .then((addeddetail) => {
        console.log(addeddetail);
        if (addeddetail.insertedId) {
          toast.success("Your detail added successfully");
          reset();
        } else {
          toast.error("Faild to add your detail. Please try again.");
        }
      });
  };

  return (
    <div>
      <h1 className="text-[36px]">Write A <strong>Comment</strong></h1>
      <div>
        <form onSubmit={handleSubmit(handleAdddetail)}>
          <div className=" md:flex gap-5 ">


            <div className="form-control w-full md:w-[280px] lg:w-[280px] max-w-xs">
              <input
                type="text"
                placeholder="Name"
                name="name"
                className="  w-full max-w-xs bg-[#f7f7f7] py-3 px-3 outline-amber-300"
                {...register("name", {
                  required: {
                    value: true,
                    message: "name is required",
                  },
                  pattern: {
                    value: /[A-z]/,
                    message: "your name is required",
                  },
                })}
              />
              <label className="label">
                {errors.name?.type === "required" && (
                  <span className="label-text-alt text-red-500">
                    {errors.name.message}
                  </span>
                )}
                {errors.phoneNumber?.type === "pattern" && (
                  <span className="label-text-alt text-red-500">
                    {errors.name.message}
                  </span>
                )}
              </label>
            </div>



            <div className="form-control w-full md:w-[280px] lg:w-[280px] max-w-xs">
              <input
                type="email"
                placeholder="Email"
                name="email"
                className="  w-full max-w-xs bg-[#f7f7f7] py-3 px-3 outline-amber-300"
                {...register("email", {
                  required: {
                    value: true,
                    message: "email is required",
                  },
                  pattern: {
                    value: /[A-Za-z]/,
                    message: "your email is required",
                  },
                })}
              />
              <label className="label">
                {errors.email?.type === "required" && (
                  <span className="label-text-alt text-red-500">
                    {errors.email.message}
                  </span>
                )}
                {errors.email?.type === "pattern" && (
                  <span className="label-text-alt text-red-500">
                    {errors.email.message}
                  </span>
                )}
              </label>
            </div>



            <div className="form-control w-full md:w-[280px] lg:w-[280px] max-w-xs">
              <input
                type="text"
                placeholder="Phone Number"
                name="phoneNumber"
                className="  w-full max-w-xs bg-[#f7f7f7] py-3 px-3 outline-amber-300"
                {...register("phoneNumber", {
                  required: {
                    value: true,
                    message: "phoneNumber is required",
                  },
                  pattern: {
                    value: /[0-9]/,
                    message: "your phoneNumber is required",
                  },
                })}
              />
              <label className="label">
                {errors.phoneNumber?.type === "required" && (
                  <span className="label-text-alt text-red-500">
                    {errors.phoneNumber.message}
                  </span>
                )}
                {errors.phoneNumber?.type === "pattern" && (
                  <span className="label-text-alt text-red-500">
                    {errors.phoneNumber.message}
                  </span>
                )}
              </label>
            </div>

          </div>
          {/* <textarea className='w-full md:w-[760px] mt-5 h-[150px] outline-amber-300 bg-[#f7f7f7]'></textarea> */}
          <div className="form-control md:w-[880px] lg:w-[880px]">

            <textarea
              type="text"
              placeholder="detail"
              name="detail"
              className="outline-amber-300 h-[150px] px-5 bg-[#f7f7f7] w-full "
              {...register("detail", {
                required: {
                  value: true,
                  message: "your detail is required",
                },
                minLength: {
                  value: /A-z/,
                  message: "your your detail  must be 20 character",
                },
              })}
            />
            <label className="label">
              {errors.detail?.type === "required" && (
                <span className="label-text-alt text-red-500">
                  {errors.detail.message}
                </span>
              )}
              {errors.detail?.type === "minLength" && (
                <span className="label-text-alt text-red-500">
                  {errors.detail.message}
                </span>
              )}
            </label>
          </div>
          <p className="font-bold py-3">reding</p>

          <div onClick={countStars} class=" rating">
            <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" value={1} />
            <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" value={2} />
            <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" value={3} />
            <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" value={4} />
            <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" value={5} />
          </div>

          <br />
          <button className='custom-btn px-10 py-3 rounded-full text-white font-extrabold mt-10'> Submit Now</button>
        </form>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />

    </div>
  );
};

export default WriteAComment;