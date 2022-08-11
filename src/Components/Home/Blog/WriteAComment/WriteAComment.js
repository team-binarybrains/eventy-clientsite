import React from 'react';
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import auth from "../../../../Firebase/firebase.init";
const WriteAComment = () => {
    const {
        register,
        formState: { errors },
        handleSubmit,
        reset,
      } = useForm();
    
      const [user] = useAuthState(auth);
    
      const handleAddReview = (data) => {
        const inputReview = {
          
          name:data?.name,
          phoneNumber:data?.phoneNumber,
          review: data.review,
        };
    
        fetch("https://enigmatic-dawn-06088.herokuapp.com/review", {
          method: "POST",
          headers: {
            "content-type": "application/json",
            // authorization: Bearer ${localStorage.getItem('accessToken')}
          },
          body: JSON.stringify(inputReview),
        })
          .then((res) => res.json())
          .then((addedReview) => {
            console.log(addedReview);
            if (addedReview.insertedId) {
              toast.success("Your review added successfully");
              reset();
            } else {
              toast.error("Faild to add your review. Please try again.");
            }
          });
      };

    return (
        <div>
            <h1 className="text-[36px]">Write A <strong>Comment</strong></h1>
            <div>
               <form onSubmit={handleSubmit(handleAddReview)}>
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
                        value: /[0-9]/,
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
                        value: /[A-Za-z]{3}/,
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

              


                 {/* <input type="text" placeholder="Name" className="md:w-[280px]  w-full h-[52px] px-5  py-4 outline-amber-300 block mt-5  bg-[#f7f7f7]"/> 
                <input type="email" placeholder="Email" className="md:w-[280px] w-full h-[52px] px-5 py-4 outline-amber-300 block mt-5  bg-[#f7f7f7]"/> 
              <input type="text" placeholder="YOur Phone Number" className="md:w-[234px] w-full h-[52px] px-5 py-4 outline-amber-300 block mt-5  bg-[#f7f7f7]"/> */}

                </div>
                {/* <textarea className='w-full md:w-[760px] mt-5 h-[150px] outline-amber-300 bg-[#f7f7f7]'></textarea> */}

                <div className="form-control  md:w-[900px] max-w-xs">
                  <textarea
                    type="text"
                    placeholder="detail"
                    name="detail"
                    className="  w-full max-w-xs  mt-5 h-[150px] bg-[#f7f7f7] py-3 px-3 outline-amber-300"
                    {...register("detail", {
                      required: {
                        value: true,
                        message: "detail is required",
                      },
                      pattern: {
                        value: /[0-9]/,
                        message: "your detail is required",
                      },
                    })}
                  />
                  <label className="label">
                    {errors.detail?.type === "required" && (
                      <span className="label-text-alt text-red-500">
                        {errors.detail.message}
                      </span>
                    )}
                    {errors.detail?.type === "pattern" && (
                      <span className="label-text-alt text-red-500">
                        {errors.detail.message}
                      </span>
                    )}
                  </label>
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