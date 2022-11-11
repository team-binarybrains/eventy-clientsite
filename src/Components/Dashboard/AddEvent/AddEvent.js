import { faCloudArrowUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import Loading from "../../Share/Loading/Loading";
import "./AddEvent.css";

const AddEvent = () => {
  // State initilize
  const [eventdate, setEventdate] = useState("");
  const [eventEndDate, setEventEndDate] = useState("");
  const [dateDifference, setDateDifference] = useState(0);
  const [loading, setLoading] = useState(false);

  // imageBB Secret Key
  const imageStorageKey = "bbb41293b29baeed6436287ccb9bbf00";

  // Event Start and End Time Difference Handler Function Start
  useEffect(() => {
    if (eventdate && eventEndDate) {
      const diffInMs = Math.abs(eventdate - eventEndDate);
      const dateDiff = diffInMs / (1000 * 60 * 60 * 24);
      setDateDifference(Number(dateDiff + 1));
    }
  }, [eventdate, eventEndDate]);

  const handleEventStartDate = (e) => {
    const date = new Date(e.target.value);
    setEventdate(date);
  };

  const handleEventEndDate = (e) => {
    const endDate = new Date(e.target.value);
    setEventEndDate(endDate);
  };
  // Event Start and End Time Difference Handler Function Finish

  // Local Image to DynamicImageLink convert function Start
  const LocalImageConvertIntoDynamicImageLink = async (eventImage) => {
    let imageUrl;

    const image = eventImage[0];
    const formData = new FormData();
    formData.append("image", image);
    const url = `https://api.imgbb.com/1/upload?key=${imageStorageKey}`;
    await fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.success) {
          imageUrl = result.data.url;
        }
      });

    return imageUrl;
  };
  // Local Image to DynamicImageLink convert function Finish

  // Time AM OR PM Function Start
  function timeAMorPM(time) {
    var timeSplit = time.split(":"),
      hours,
      minutes,
      meridian;
    hours = timeSplit[0];
    minutes = timeSplit[1];
    if (hours > 12) {
      meridian = "PM";
      hours -= 12;
    } else if (hours < 12) {
      meridian = "AM";
      if (Number(hours) === 0) {
        hours = 12;
      }
    } else {
      meridian = "PM";
    }
    return `${hours}:${minutes} ${meridian}`;
  }
  // Time AM OR PM Function End

  // StringDate convert to day,month,year format
  const stringDateConvertIntoDayMonthYear = (date) => {
    const monthName = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    var dateSplit = date.split("-");
    let day = dateSplit[2];
    let month = dateSplit[1];
    let year = dateSplit[0];
    month = monthName[Number(month - 1)];
    return `${day},${month},${year}`;
  };

  // Event All Information Submit Function
  const handleEventAdd = async (e) => {
    setLoading(true);
    e.preventDefault();

    const title = e.target.title.value;
    const venue = e.target.venue.value;
    const type = e.target.type.value;
    const date = stringDateConvertIntoDayMonthYear(e.target.date.value);
    const endDate = stringDateConvertIntoDayMonthYear(e.target.endDate.value);
    const starttime = timeAMorPM(e.target.starttime.value);
    const endtime = timeAMorPM(e.target.endtime.value);
    const ticketprice = e.target.price.value;
    const address = e.target.address.value;
    const description = e.target.eventDescription.value;
    const eventImage1 = await LocalImageConvertIntoDynamicImageLink(
      Array.from(e.target.eventImage1.files)
    );
    const eventImage2 = await LocalImageConvertIntoDynamicImageLink(
      Array.from(e.target.eventImage2.files)
    );
    const eventImage3 = await LocalImageConvertIntoDynamicImageLink(
      Array.from(e.target.eventImage3.files)
    );
    const img = [eventImage1, eventImage2, eventImage3];
    const image = eventImage1;

    let day = [];
    for (let index = 0; index < dateDifference; index++) {
      day.push({
        title: e.target[`day${index + 1}Title`].value,
        speaker: e.target[`day${index + 1}Speaker`].value,
        date: stringDateConvertIntoDayMonthYear(
          e.target[`day${index + 1}Date`].value
        ),
        eventStartTime: timeAMorPM(e.target[`day${index + 1}starttime`].value),
        eventEndTime: timeAMorPM(e.target[`day${index + 1}endtime`].value),
        maxSeats: e.target[`day${index + 1}Seats`].value,
        description: e.target[`day${index + 1}Description`].value,
        image: await LocalImageConvertIntoDynamicImageLink(
          Array.from(e.target[`day${index + 1}Image`].files)
        ),
      });
    }

    const eventInformation = {
      title,
      venue,
      type,
      date,
      endDate,
      starttime,
      endtime,
      ticketprice,
      address,
      description,
      day,
      img,
      image,
    };

    fetch(
      "https://eventy-serversite-production.up.railway.app/addEventRequest",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(eventInformation),
      }
    )
      .then((response) => response.json())
      .then((data) => {
        if (data.acknowledged) {
          toast.success(
            `Website Admin Receive Your Event Information. Very soon Admin Member Contact you`
          );
          e.target.reset();
          setLoading(false);
        } else {
          toast.error(`Someting Went Wrong. Please Fill the form again`);
          setLoading(false);
        }
      });
  };

  return (
    <div style={{ background: "#f4f7fc" }}>
      {loading && <Loading></Loading>}
      <div className="2xl:max-w-7xl mx-auto">
        <h2
          className="pt-5 pb-3 text-2xl font-bold text-center"
          data-aos="zoom-in"
          data-aos-duration="2000"
        >
          Add Event
        </h2>
        <div className="max-h-fit py-2 pb-12">
          <div className="ml-8 sm:ml-5 mr-10 bg-white p-5 rounded-none sm:rounded-2xl">
            <h2
              className="text-2xl"
              data-aos="fade-left"
              data-aos-duration="2000"
            >
              Event Information
            </h2>

            <form onSubmit={handleEventAdd}>
              <div className="sm:flex md:flex-none">
                <div className="grid grid-cols-1 gap-3 sm:w-1/2 mt-5">
                  <div className="form-control">
                    <input
                      type="text"
                      name="title"
                      placeholder="Event Title"
                      className="input input-bordered inputDegine"
                      data-aos="flip-down"
                      data-aos-duration="2500"
                    />
                  </div>
                  <div className="form-control">
                    <input
                      type="text"
                      name="venue"
                      placeholder="Event venue Name"
                      className="input input-bordered inputDegine"
                      data-aos="flip-down"
                      data-aos-duration="2500"
                    />
                  </div>
                  <div className="form-control">
                    <input
                      type="text"
                      name="type"
                      placeholder="Event Type"
                      className="input input-bordered inputDegine"
                      data-aos="flip-down"
                      data-aos-duration="2500"
                    />
                  </div>
                  <div className="form-control grid grid-cols-12 items-center ml-1">
                    <p
                      className="col-span-5 inputFontSize font-semibold"
                      data-aos="zoom-in"
                      data-aos-duration="2000"
                    >
                      Event Beginning Date{" "}
                      <span className="font-bold ml-3">:</span>
                    </p>
                    <input
                      type="date"
                      onChange={(e) => handleEventStartDate(e)}
                      name="date"
                      placeholder="Event Beginning Date"
                      className="input input-bordered col-span-7 inputDegine"
                      data-aos="flip-down"
                      data-aos-duration="2500"
                    />
                  </div>
                  <div className="form-control grid grid-cols-12 items-center ml-1">
                    <p
                      className="col-span-5 inputFontSize font-semibold"
                      data-aos="zoom-in"
                      data-aos-duration="2000"
                    >
                      Event Conclusion Date{" "}
                      <span className="font-bold ml-3">:</span>
                    </p>
                    <input
                      type="date"
                      onChange={(e) => handleEventEndDate(e)}
                      name="endDate"
                      placeholder="Event Conclusion Date"
                      className="input input-bordered col-span-7 inputDegine"
                      data-aos="flip-down"
                      data-aos-duration="2500"
                    />
                  </div>
                  <div className="form-control grid grid-cols-12 items-center ml-1">
                    <p
                      className="col-span-5 inputFontSize font-semibold"
                      data-aos="zoom-in"
                      data-aos-duration="2000"
                    >
                      Event Start Time <span className="font-bold ml-3">:</span>
                    </p>
                    <input
                      type="time"
                      name="starttime"
                      placeholder="Event Start Time"
                      className="input input-bordered col-span-7 inputDegine"
                      data-aos="flip-down"
                      data-aos-duration="2500"
                    />
                  </div>
                  <div className="form-control grid grid-cols-12 items-center ml-1">
                    <p
                      className="col-span-5 inputFontSize font-semibold"
                      data-aos="zoom-in"
                      data-aos-duration="2000"
                    >
                      Event End Time <span className="font-bold ml-3">:</span>
                    </p>
                    <input
                      type="time"
                      name="endtime"
                      placeholder="Event End Time"
                      className="input input-bordered col-span-7 inputDegine"
                      data-aos="flip-down"
                      data-aos-duration="2500"
                    />
                  </div>
                  <div className="form-control">
                    <input
                      type="number"
                      name="price"
                      placeholder="Event Ticket Price (only Digit type)"
                      className="input input-bordered inputDegine"
                      data-aos="flip-down"
                      data-aos-duration="2500"
                    />
                  </div>
                  <div className="form-control">
                    <input
                      type="text"
                      name="address"
                      placeholder="Event Location"
                      className="input input-bordered inputDegine"
                      data-aos="flip-down"
                      data-aos-duration="2500"
                    />
                  </div>
                  <div className="form-control">
                    <textarea
                      name="eventDescription"
                      className="textarea textarea-bordered h-32 inputDegine"
                      placeholder="About Tell Us Event"
                      // data-aos="flip-down"
                      // data-aos-duration="2500"
                    ></textarea>
                  </div>
                </div>
                <div className="sm:pl-14 mt-3">
                  <div>
                    <p
                      className="text-xl font-semibold mb-4 2xl:mb-6"
                      data-aos="fade-left"
                      data-aos-duration="2500"
                    >
                      Event Image 3 Minimum Include
                    </p>

                    <p
                      className="label-text font-medium mb-1"
                      data-aos="fade-left"
                      data-aos-duration="2500"
                    >
                      Event Image 1
                    </p>
                    <div
                      className="w-[294px] pr-7 bg-amber-400 relative rounded-md"
                      data-aos="flip-down"
                      data-aos-duration="2500"
                    >
                      <FontAwesomeIcon
                        className="absolute top-1/3 left-6 text-white"
                        icon={faCloudArrowUp}
                      ></FontAwesomeIcon>
                      <label class="block">
                        <input
                          type="file"
                          class="block w-full text-base text-gray-100 rounded-md file:mr-4 file:py-2 file:pr-0 file:pl-12 file:border-0 file:text-base file:font-semibold
                                                    file:bg-amber-400 file:text-white"
                          name="eventImage1"
                          required
                        />
                      </label>
                    </div>
                  </div>
                  <div className="2xl:mt-5">
                    <p
                      className="label-text font-medium mb-1 mt-3"
                      data-aos="fade-left"
                      data-aos-duration="2500"
                    >
                      Event Image 2
                    </p>

                    <div
                      className="w-[294px] pr-7 bg-amber-400 relative rounded-md"
                      data-aos="flip-down"
                      data-aos-duration="2500"
                    >
                      <FontAwesomeIcon
                        className="absolute top-1/3 left-6 text-white"
                        icon={faCloudArrowUp}
                      ></FontAwesomeIcon>
                      <label class="block">
                        <input
                          type="file"
                          class="block w-full text-base text-gray-100 rounded-md file:mr-4 file:py-2 file:pr-0 file:pl-12 file:border-0 file:text-base file:font-semibold
                                                    file:bg-amber-400 file:text-white"
                          name="eventImage2"
                          required
                        />
                      </label>
                    </div>
                  </div>
                  <div className="2xl:mt-5">
                    <p
                      className="label-text font-medium mb-1 mt-3"
                      data-aos="fade-left"
                      data-aos-duration="2500"
                    >
                      Event Image 3
                    </p>

                    <div
                      className="w-[294px] pr-7 bg-amber-400 relative rounded-md"
                      data-aos="flip-down"
                      data-aos-duration="2500"
                    >
                      <FontAwesomeIcon
                        className="absolute top-1/3 left-6 text-white"
                        icon={faCloudArrowUp}
                      ></FontAwesomeIcon>
                      <label class="block">
                        <input
                          type="file"
                          class="block w-full text-base text-gray-100 rounded-md file:mr-4 file:py-2 file:pr-0 file:pl-12 file:border-0 file:text-base file:font-semibold
                                                    file:bg-amber-400 file:text-white"
                          name="eventImage3"
                          required
                        />
                      </label>
                    </div>
                  </div>
                </div>
              </div>

              {[...Array(dateDifference).keys()].map((eventShedule, index) => (
                <>
                  <h3 className="text-2xl mt-10">
                    Day {eventShedule + 1} : Shedule Information
                  </h3>

                  <div className="sm:flex md:flex-none">
                    <div className="grid grid-cols-1 gap-3 sm:w-1/2 mt-5">
                      <div className="form-control">
                        <input
                          type="text"
                          name={`day${eventShedule + 1}Title`}
                          placeholder="Event Title"
                          className="input input-bordered inputDegine"
                        />
                      </div>
                      <div className="form-control">
                        <input
                          type="text"
                          name={`day${eventShedule + 1}Speaker`}
                          placeholder="Event Host Speaker Name"
                          className="input input-bordered inputDegine"
                        />
                      </div>
                      <div className="form-control grid grid-cols-12 items-center ml-1">
                        <p className="col-span-5 inputFontSize font-semibold">
                          Day {eventShedule + 1} - Event Date{" "}
                          <span className="font-bold ml-3">:</span>
                        </p>
                        <input
                          type="date"
                          name={`day${eventShedule + 1}Date`}
                          placeholder="Event Start Time"
                          className="input input-bordered col-span-7 inputDegine"
                        />
                      </div>
                      <div className="form-control grid grid-cols-12 items-center ml-1">
                        <p className="col-span-5 inputFontSize font-semibold">
                          Day {eventShedule + 1} - Event Start Time{" "}
                          <span className="font-bold ml-3">:</span>
                        </p>
                        <input
                          type="time"
                          name={`day${eventShedule + 1}starttime`}
                          placeholder="Event Start Time"
                          className="input input-bordered col-span-7 inputDegine"
                        />
                      </div>
                      <div className="form-control grid grid-cols-12 items-center ml-1">
                        <p className="col-span-5 inputFontSize font-semibold">
                          Day {eventShedule + 1} - Event End Time{" "}
                          <span className="font-bold ml-3">:</span>
                        </p>
                        <input
                          type="time"
                          name={`day${eventShedule + 1}endtime`}
                          placeholder="Event End Time"
                          className="input input-bordered col-span-7 inputDegine"
                        />
                      </div>
                      <div className="form-control">
                        <input
                          type="number"
                          name={`day${eventShedule + 1}Seats`}
                          placeholder="Total Event Seats (Only Digit Type)"
                          className="input input-bordered inputDegine"
                        />
                      </div>
                      <div className="form-control">
                        <textarea
                          name={`day${eventShedule + 1}Description`}
                          className="textarea textarea-bordered h-32 inputDegine"
                          placeholder={`About Tell Us Day ${
                            eventShedule + 1
                          } Event Shedule`}
                        ></textarea>
                      </div>
                    </div>
                    <div className="sm:pl-14 mt-3">
                      <div>
                        <p className="text-xl font-semibold mb-3">
                          {" "}
                          Day {eventShedule + 1} : Event Image 1 Minimum Include
                        </p>
                        <p className="label-text font-medium mb-1">
                          Event Image Day : {eventShedule + 1}
                        </p>
                        <div className="w-[294px] pr-7 bg-amber-400 relative rounded-md">
                          <FontAwesomeIcon
                            className="absolute top-1/3 left-6 text-white"
                            icon={faCloudArrowUp}
                          ></FontAwesomeIcon>
                          <label class="block">
                            <input
                              type="file"
                              class="block w-full text-base text-gray-100 rounded-md file:mr-4 file:py-2 file:pr-0 file:pl-12 file:border-0 file:text-base file:font-semibold
                                                    file:bg-amber-400 file:text-white"
                              name={`day${eventShedule + 1}Image`}
                              required
                            />
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              ))}
              <div
                className="text-center py-8"
                // data-aos="zoom-in"
                // data-aos-duration="2500"
              >
                <input
                  className="custom-btn rounded text-lg font-semibold w-full sm:w-96 py-4 sm:px-16 mt-0 sm:mt-5 text-white"
                  type="submit"
                  value="Add Event"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddEvent;
