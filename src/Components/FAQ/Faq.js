import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

const Faq = () => {
  const [firstAccountQuestion, setFirstAccountQuestion] = useState([]);
  const [question, setQuestion] = useState("");

  useEffect(() => {
    fetch("https://eventy-serversite-production.up.railway.app/allQuestion")
      .then((res) => res.json())
      .then((data) => setFirstAccountQuestion(data));
  }, [question]);

  const handleQuestion = () => {
    if (question) {
      toast.success("You Question was submited");
    } else {
      toast.error("Please ask any question?");
    }
  };

  return (
    <div className="route">
      <div className="py-20 bg-[url('/src/asset/12tmag-switzerland-slide-E5KB-superJumbo.jpg')] bg-fixed bg-no-repeat bg-cover text-center">
        <div data-aos="zoom-in" data-aos-duration="2000">
          <h4
            style={{ wordSpacing: "4px", letterSpacing: "5px" }}
            className="font-semibold text-lg text-white"
          >
            EVENTY EVENT MANAGEMENT
          </h4>
          <h2 className="text-5xl font-semibold mt-5 text-white">
            EVENTY <span className="font-bold text-amber-400">FAQ</span>
          </h2>
        </div>

        <div className="text-white mt-12 font-bold flex justify-center">
          <p
            className="pr-8 border-r-2"
            data-aos="fade-right"
            data-aos-duration="2000"
          >
            Home
          </p>

          <p
            className="pl-8 font-medium"
            data-aos="fade-left"
            data-aos-duration="2000"
          >
            Frequently Ask Qusetion
          </p>
        </div>
      </div>

      <div className="px-5 sm:px-20 mb-28 2xl:max-w-7xl mx-auto">
        <div className="grid grid-cols-6 mt-24 mb-12">
          <div
            className="col-span-6 sm:col-span-4"
            data-aos="fade-right"
            data-aos-duration="2000"
          >
            <h1 className="text-4xl sm:text-5xl font-normal">
              1. About <span className="font-bold">Account</span>{" "}
            </h1>
          </div>
          <div
            className="col-span-6 sm:col-span-2 text-center sm:text-right mt-10 sm:mt-0"
            data-aos="fade-left"
            data-aos-duration="2000"
          >
            <label
              onClick={() => setQuestion("")}
              for="my-modal-6"
              className="py-3.5 px-9 custom-btn rounded-full uppercase font-semibold text-white"
            >
              Make A Question
            </label>
          </div>

          <input type="checkbox" id="my-modal-6" class="modal-toggle" />
          <div class="modal modal-middle">
            <div class="modal-box relative">
              <label
                for="my-modal-6"
                class="btn btn-sm btn-circle absolute right-3 top-3"
              >
                ✕
              </label>
              <h3 class="font-bold text-2xl mb-3">Ask Question ?</h3>

              <div class="form-control">
                <label class="label">
                  <span class="label-text font-medium">
                    Please Enter Your Question
                  </span>
                </label>
                <textarea
                  onChange={(e) => setQuestion(e.target.value)}
                  class="textarea textarea-bordered h-28 rounded-none focus:outline-none focus:border-amber-400"
                  placeholder="Please type, what you want to know about..."
                  value={question}
                ></textarea>
              </div>

              <div class="modal-action justify-center">
                <label
                  onClick={() => handleQuestion()}
                  for={`${question && "my-modal-6"}`}
                  class="py-3 px-10 custom-btn rounded-full uppercase font-semibold text-white"
                >
                  Submit
                </label>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-0 sm:gap-10">
          <div>
            {firstAccountQuestion.map((faq) => (
              <div
                key={faq.questionNumber}
                tabindex="0"
                class="collapse collapse-arrow bg-base-100"
                data-aos="fade-right"
                data-aos-duration="2500"
              >
                <input type="checkbox" className="peer duration-1000" />
                <div class="collapse-title text-lg font-bold bg-white border-b-[1px] border-l-[3px] border-l-white peer-checked:border-l-[3px] peer-checked:border-l-amber-400 peer-checked:border-b-white peer-checked:bg-stone-100">
                  <span className="mr-1.5 text-gray-500">
                    0{faq.questionNumber}.
                  </span>{" "}
                  {faq.question}
                </div>
                <div class="collapse-content p-0 border-l-2 bg-white peer-checked:border-l-[3px] peer-checked:border-l-amber-400 peer-checked:bg-stone-100">
                  <div className="p-7 pb-5">
                    <h5 className="text-amber-400 font-bold mb-4 text-lg">
                      Answer
                    </h5>
                    <p>{faq.Answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div>
            {firstAccountQuestion.map((faq) => (
              <div
                key={faq.questionNumber}
                tabindex="0"
                class="collapse collapse-arrow bg-base-100"
                data-aos="fade-left"
                data-aos-duration="2500"
              >
                <input type="checkbox" className="peer" />
                <div class="collapse-title text-lg font-bold bg-white border-b-[1px] border-l-[3px] border-l-white peer-checked:border-l-[3px] peer-checked:border-l-amber-400 peer-checked:border-b-white peer-checked:bg-stone-100">
                  <span className="mr-1.5 text-gray-500">
                    0{faq.questionNumber + 4}.
                  </span>{" "}
                  {faq.question}
                </div>
                <div class="collapse-content p-0 border-l-2 bg-white peer-checked:border-l-[3px] peer-checked:border-l-amber-400 peer-checked:bg-stone-100">
                  <div className="p-7 pb-5">
                    <h5 className="text-amber-400 font-bold mb-4 text-lg">
                      Answer
                    </h5>
                    <p>{faq.Answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-6 mt-20 mb-12">
          <div className="col-span-6 sm:col-span-4">
            <h1
              className="text-4xl sm:text-5xl font-normal"
              data-aos="fade-right"
              data-aos-duration="2000"
            >
              2. About<span className="font-bold"> Our Events </span>{" "}
            </h1>
          </div>
          <div
            className="col-span-6 sm:col-span-2 text-center sm:text-right mt-10 sm:mt-0"
            data-aos="fade-left"
            data-aos-duration="2000"
          >
            <label
              onClick={() => setQuestion("")}
              for="my-modal-6"
              className="py-3.5 px-9 custom-btn rounded-full uppercase font-semibold text-white"
            >
              Make A Question
            </label>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-0 sm:gap-10">
          <div>
            {firstAccountQuestion.map((faq) => (
              <div
                key={faq.questionNumber}
                tabindex="0"
                class="collapse collapse-arrow bg-base-100"
                data-aos="fade-right"
                data-aos-duration="2500"
              >
                <input type="checkbox" className="peer" />
                <div class="collapse-title text-lg font-bold bg-white border-b-[1px] border-l-[3px] border-l-white peer-checked:border-l-[3px] peer-checked:border-l-amber-400 peer-checked:border-b-white peer-checked:bg-stone-100">
                  <span className="mr-1.5 text-gray-500">
                    0{faq.questionNumber}.
                  </span>{" "}
                  {faq.question}
                </div>
                <div class="collapse-content p-0 border-l-2 bg-white peer-checked:border-l-[3px] peer-checked:border-l-amber-400 peer-checked:bg-stone-100">
                  <div className="p-7 pb-5">
                    <h5 className="text-amber-400 font-bold mb-4 text-lg">
                      Answer
                    </h5>
                    <p>{faq.Answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div>
            {firstAccountQuestion.map((faq) => (
              <div
                key={faq.questionNumber}
                tabindex="0"
                class="collapse collapse-arrow bg-base-100"
                data-aos="fade-left"
                data-aos-duration="2500"
              >
                <input type="checkbox" className="peer" />
                <div class="collapse-title text-lg font-bold bg-white border-b-[1px] border-l-[3px] border-l-white peer-checked:border-l-[3px] peer-checked:border-l-amber-400 peer-checked:border-b-white peer-checked:bg-stone-100">
                  <span className="mr-1.5 text-gray-500">
                    0{faq.questionNumber + 4}.
                  </span>{" "}
                  {faq.question}
                </div>
                <div class="collapse-content p-0 border-l-2 bg-white peer-checked:border-l-[3px] peer-checked:border-l-amber-400 peer-checked:bg-stone-100">
                  <div className="p-7 pb-5">
                    <h5 className="text-amber-400 font-bold mb-4 text-lg">
                      Answer
                    </h5>
                    <p>{faq.Answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
