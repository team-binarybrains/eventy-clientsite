/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import auth from "../../../../Firebase/firebase.init";


const WriteAComment = ({refetch,blogId}) => {
  const [stars, setStars] = useState(5);

  const countStars = (e) => {
      setStars(parseInt(e.target.value));
      // console.log(parseInt(e.target.value));
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
          commentId:`${user?.uid}:${blogId}`,
          blogId:blogId,
          uid:user?.uid,
          name:user?.displayName,
          img:user?.photoURL,
          detail: data?.detail,
          email: user?.email,
          rating: stars
        };
    
        fetch("http://localhost:5000/comment", {
          method: "PUT",
          headers: {
            "content-type": "application/json",
            // authorization: Bearer ${localStorage.getItem('accessToken')}
          },
          body: JSON.stringify(inputdetail),
        })
          .then((res) => res.json())
          .then(({success}) => {
            // console.log(addeddetail);
            if (success) {
              toast.success("Your detail added successfully");
              refetch();
              reset();
              setStars(5);
            } else {
              toast.error("Faild to add your detail. Please try again.");
            }
          });
      };


  return (
    <div className="mb-5">
      <h1 className="text-[36px]">Write A <strong>Comment</strong></h1>
      <div>
        <form onSubmit={handleSubmit(handleAdddetail)}>
          <div className=" md:flex gap-5 ">

          </div>
          <div className="form-control md:w-[880px] lg:w-[880px]">
            <textarea
              type="text"
              placeholder="Detail"
              name="detail"
              className="outline-amber-300 overflow-auto min-h-[150px] max-h-[150px] p-2 bg-[#f7f7f7] w-full placeholder:tracking-wide"
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
          
          <section className='flex gap-2'>
            <p className="font-bold">Rating :</p>

            <div class=" rating">
              <input onClick={countStars} type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" value={1} />
              <input onClick={countStars} type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" value={2} />
              <input onClick={countStars} type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" value={3} />
              <input onClick={countStars} type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" value={4} />
              <input onClick={countStars} type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" value={5} />
            </div>
          </section>

          <br />
          <button className='custom-btn px-10 py-3 rounded-full text-white font-extrabold mt-10'> Submit Now</button>
        </form>
      </div>
    

    </div>
  );
};

export default WriteAComment;