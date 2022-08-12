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
    
      const handleAdddetail = (data) => {
        const inputdetail = {
          
          name:data?.name,
          phoneNumber:data?.phoneNumber,
          detail: data.detail,
          email: data.email,
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

                </div>
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
              <p className="font-bold py-3">Reting</p>
              <div class=" rating">
                
  <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" checked />
  <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
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