import { faCloudArrowUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { toast } from 'react-toastify';
import "./AddEvent.css";

const AddEvent = () => {

    const imageStorageKey = "bbb41293b29baeed6436287ccb9bbf00"
    const [file, setFile] = useState("");

    const handleFileSelected = (e) => {
        const files = Array.from(e.target.files)
        setFile(files);
    }
    let userImage;

    const handleServiceAdd = async (e) => {
        e.preventDefault();
        const image = file[0];
        const formData = new FormData();
        formData.append("image", image)
        const url = `https://api.imgbb.com/1/upload?key=${imageStorageKey}`
        await fetch(url, {
            method: "POST",
            body: formData
        })
            .then(res => res.json())
            .then(result => {
                if (result.success) {
                    userImage = result.data.url;
                }
            })
        const name = e.target.name.value;
        const price = e.target.price.value;
        const description = e.target.description.value;
        const newService = { name, price, description, image: userImage };

        // fetch(`https://morning-brushlands-93158.herokuapp.com/services?name=${name}`, {
        //     method: 'POST',
        //     headers: {
        //         "content-type": "application/json",
        //         "authorization": `Bearer ${localStorage.getItem("accessToken")}`
        //     },
        //     body: JSON.stringify(newService)
        // })
        //     .then(res => res.json())
        //     .then(data => {
        //         if (data.success) {
        //             toast.success(`${name} service was successfully Added`)
        //             e.target.reset();
        //         } else {
        //             toast.error(`${name} service already exists`);
        //         }
        //     })

    }

    return (
        <div style={{ background: "#f4f7fc" }}>
            <div className='2xl:max-w-7xl mx-auto'>
                <h2 className='pt-5 pb-3 text-2xl font-bold text-center'>Add Event</h2>
                <div className="max-h-fit py-2 pb-12">
                    <div className='ml-8 sm:ml-5 mr-10 bg-white p-5 rounded-none sm:rounded-2xl'>
                        <h2 className='text-2xl'>Event Information</h2>
                        <form onSubmit={handleServiceAdd}>
                            <div className='sm:flex md:flex-none'>
                                <div className='grid grid-cols-1 gap-3 sm:w-1/2 mt-5'>
                                    <div className="form-control">
                                        <input type="text" name='title' placeholder="Event Title" className="input input-bordered inputDegine" required />
                                    </div>
                                    <div className="form-control">
                                        <input type="text" name='venu' placeholder="Event Venu Name" className="input input-bordered inputDegine" required />
                                    </div>
                                    <div className="form-control">
                                        <input type="text" name='type' placeholder="Event Type" className="input input-bordered inputDegine" required />
                                    </div>
                                    <div className="form-control grid grid-cols-12 items-center ml-1">
                                        <p className='col-span-5 inputFontSize font-semibold'>Event Beginning Date <span className='font-bold ml-3'>:</span></p>
                                        <input type="date" name='type' placeholder="Event Beginning Date" className="input input-bordered col-span-7 inputDegine" required />
                                    </div>
                                    <div className="form-control grid grid-cols-12 items-center ml-1">
                                        <p className='col-span-5 inputFontSize font-semibold'>Event Conclusion Date <span className='font-bold ml-3'>:</span></p>
                                        <input type="date" name='type' placeholder="Event Conclusion Date" className="input input-bordered col-span-7 inputDegine" required />
                                    </div>
                                    <div className="form-control grid grid-cols-12 items-center ml-1">
                                        <p className='col-span-5 inputFontSize font-semibold'>Event Start Time <span className='font-bold ml-3'>:</span></p>
                                        <input type="time" name='type' placeholder="Event Start Time" className="input input-bordered col-span-7 inputDegine" required />
                                    </div>
                                    <div className="form-control grid grid-cols-12 items-center ml-1">
                                        <p className='col-span-5 inputFontSize font-semibold'>Event End Time <span className='font-bold ml-3'>:</span></p>
                                        <input type="time" name='type' placeholder="Event End Time" className="input input-bordered col-span-7 inputDegine" required />
                                    </div>
                                    <div className="form-control">
                                        <input type="number" name='type' placeholder="Event Ticket Price (only Digit type)" className="input input-bordered inputDegine" required />
                                    </div>
                                    <div className="form-control">
                                        <input type="text" name='type' placeholder="Event Location" className="input input-bordered inputDegine" required />
                                    </div>
                                    <div className="form-control">
                                        <textarea name='description' className="textarea textarea-bordered h-32 inputDegine" placeholder="About Tell Us Event" required></textarea>
                                    </div>
                                </div>
                                <div className='sm:pl-14 mt-3'>
                                    <div>
                                        <p className='text-xl font-semibold mb-3'>Event Image 3 Minimum Include</p>
                                        <p className='label-text font-medium mb-4'>Event Image 1</p>
                                        <label className='bg-amber-400 py-2 px-8 text-white border font-medium border-amber-400 rounded-md' htmlFor="image1">
                                            <FontAwesomeIcon icon={faCloudArrowUp}></FontAwesomeIcon>  Upload Photo 1
                                        </label>
                                        <input type="file" onChange={handleFileSelected} id="image1" name='file' style={{ visibility: "hidden" }} required />
                                    </div>
                                    <div className='2xl:mt-8'>
                                        <p className='label-text font-medium mb-4'>Event Image 2</p>
                                        <label className='bg-amber-400 py-2 px-8 text-white border font-medium border-amber-400 rounded-md' htmlFor="image2">
                                            <FontAwesomeIcon icon={faCloudArrowUp}></FontAwesomeIcon>  Upload Photo 2
                                        </label>
                                        <input type="file" onChange={handleFileSelected} id="image2" name='file' style={{ visibility: "hidden" }} required />
                                    </div>
                                    <div className='2xl:mt-8'>
                                        <p className='label-text font-medium mb-4'>Event Image 3</p>
                                        <label className='bg-amber-400 py-2 px-8 text-white border font-medium border-amber-400 rounded-md' htmlFor="image3">
                                            <FontAwesomeIcon icon={faCloudArrowUp}></FontAwesomeIcon>  Upload Photo 3
                                        </label>
                                        <input type="file" onChange={handleFileSelected} id="image3" name='file' style={{ visibility: "hidden" }} required />
                                    </div>
                                </div>
                            </div>

                            <h3 className='text-2xl mt-10'>Day 1 : Shedule Information</h3>

                            <div className='sm:flex md:flex-none'>
                                <div className='grid grid-cols-1 gap-3 sm:w-1/2 mt-5'>
                                    <div className="form-control">
                                        <input type="text" name='title' placeholder="Event Title" className="input input-bordered inputDegine" required />
                                    </div>
                                    <div className="form-control">
                                        <input type="text" name='speaker' placeholder="Event Host Speaker Name" className="input input-bordered inputDegine" required />
                                    </div>
                                    <div className="form-control grid grid-cols-12 items-center ml-1">
                                        <p className='col-span-5 inputFontSize font-semibold'>Day 1 - Event Date <span className='font-bold ml-3'>:</span></p>
                                        <input type="date" name='type' placeholder="Event Start Time" className="input input-bordered col-span-7 inputDegine" required />
                                    </div>
                                    <div className="form-control grid grid-cols-12 items-center ml-1">
                                        <p className='col-span-5 inputFontSize font-semibold'>Day 1 - Event Start Time <span className='font-bold ml-3'>:</span></p>
                                        <input type="time" name='type' placeholder="Event Start Time" className="input input-bordered col-span-7 inputDegine" required />
                                    </div>
                                    <div className="form-control grid grid-cols-12 items-center ml-1">
                                        <p className='col-span-5 inputFontSize font-semibold'>Day 1 - Event End Time <span className='font-bold ml-3'>:</span></p>
                                        <input type="time" name='type' placeholder="Event End Time" className="input input-bordered col-span-7 inputDegine" required />
                                    </div>
                                    <div className="form-control">
                                        <input type="number" name='type' placeholder="Total Event Seats (Only Digit Type)" className="input input-bordered inputDegine" required />
                                    </div>
                                    <div className="form-control">
                                        <textarea name='description' className="textarea textarea-bordered h-32 inputDegine" placeholder="About Tell Us Event Day-1 Shedule" required></textarea>
                                    </div>
                                </div>
                                <div className='sm:pl-14 mt-3'>
                                    <div>
                                        <p className='text-xl font-semibold mb-3'>Day 1 : Event Image 1 Minimum Include</p>
                                        <p className='label-text font-medium mb-4'>Event Image Day : 1</p>
                                        <label className='bg-amber-400 py-2 px-8 text-white border font-medium border-amber-400 rounded-md' htmlFor="image4">
                                            <FontAwesomeIcon icon={faCloudArrowUp}></FontAwesomeIcon>  Upload Photo
                                        </label>
                                        <input type="file" onChange={handleFileSelected} id="image4" name='file' style={{ visibility: "hidden" }} required />
                                    </div>
                                </div>
                            </div>

                            <h3 className='text-2xl mt-10'>Day 2 : Shedule Information</h3>

                            <div className='sm:flex md:flex-none'>
                                <div className='grid grid-cols-1 gap-3 sm:w-1/2 mt-5'>
                                    <div className="form-control">
                                        <input type="text" name='title' placeholder="Event Title" className="input input-bordered inputDegine" required />
                                    </div>
                                    <div className="form-control">
                                        <input type="text" name='speaker' placeholder="Event Host Speaker Name" className="input input-bordered inputDegine" required />
                                    </div>
                                    <div className="form-control grid grid-cols-12 items-center ml-1">
                                        <p className='col-span-5 inputFontSize font-semibold'>Day 2 - Event Date <span className='font-bold ml-3'>:</span></p>
                                        <input type="date" name='type' placeholder="Event Start Time" className="input input-bordered col-span-7 inputDegine" required />
                                    </div>
                                    <div className="form-control grid grid-cols-12 items-center ml-1">
                                        <p className='col-span-5 inputFontSize font-semibold'>Day 2 - Event Start Time <span className='font-bold ml-3'>:</span></p>
                                        <input type="time" name='type' placeholder="Event Start Time" className="input input-bordered col-span-7 inputDegine" required />
                                    </div>
                                    <div className="form-control grid grid-cols-12 items-center ml-1">
                                        <p className='col-span-5 inputFontSize font-semibold'>Day 2 - Event End Time <span className='font-bold ml-3'>:</span></p>
                                        <input type="time" name='type' placeholder="Event End Time" className="input input-bordered col-span-7 inputDegine" required />
                                    </div>
                                    <div className="form-control">
                                        <input type="number" name='type' placeholder="Total Event Seats (Only Digit Type)" className="input input-bordered inputDegine" required />
                                    </div>
                                    <div className="form-control">
                                        <textarea name='description' className="textarea textarea-bordered h-32 inputDegine" placeholder="About Tell Us Event Day-2 Shedule" required></textarea>
                                    </div>
                                </div>
                                <div className='sm:pl-14 mt-3'>
                                    <div>
                                        <p className='text-xl font-semibold mb-3'>Day 2 : Event Image 1 Minimum Include</p>
                                        <p className='label-text font-medium mb-4'>Event Image Day : 2</p>
                                        <label className='bg-amber-400 py-2 px-8 text-white border font-medium border-amber-400 rounded-md' htmlFor="image4">
                                            <FontAwesomeIcon icon={faCloudArrowUp}></FontAwesomeIcon>  Upload Photo
                                        </label>
                                        <input type="file" onChange={handleFileSelected} id="image4" name='file' style={{ visibility: "hidden" }} required />
                                    </div>
                                </div>
                            </div>

                            <h3 className='text-2xl mt-10'>Day 3 : Shedule Information</h3>

                            <div className='sm:flex md:flex-none'>
                                <div className='grid grid-cols-1 gap-3 sm:w-1/2 mt-5'>
                                    <div className="form-control">
                                        <input type="text" name='title' placeholder="Event Title" className="input input-bordered inputDegine" required />
                                    </div>
                                    <div className="form-control">
                                        <input type="text" name='speaker' placeholder="Event Host Speaker Name" className="input input-bordered inputDegine" required />
                                    </div>
                                    <div className="form-control grid grid-cols-12 items-center ml-1">
                                        <p className='col-span-5 inputFontSize font-semibold'>Day 3 - Event Date <span className='font-bold ml-3'>:</span></p>
                                        <input type="date" name='type' placeholder="Event Start Time" className="input input-bordered col-span-7 inputDegine" required />
                                    </div>
                                    <div className="form-control grid grid-cols-12 items-center ml-1">
                                        <p className='col-span-5 inputFontSize font-semibold'>Day 3 - Event Start Time <span className='font-bold ml-3'>:</span></p>
                                        <input type="time" name='type' placeholder="Event Start Time" className="input input-bordered col-span-7 inputDegine" required />
                                    </div>
                                    <div className="form-control grid grid-cols-12 items-center ml-1">
                                        <p className='col-span-5 inputFontSize font-semibold'>Day 3 - Event End Time <span className='font-bold ml-3'>:</span></p>
                                        <input type="time" name='type' placeholder="Event End Time" className="input input-bordered col-span-7 inputDegine" required />
                                    </div>
                                    <div className="form-control">
                                        <input type="number" name='type' placeholder="Total Event Seats (Only Digit Type)" className="input input-bordered inputDegine" required />
                                    </div>
                                    <div className="form-control">
                                        <textarea name='description' className="textarea textarea-bordered h-32 inputDegine" placeholder="About Tell Us Event Day-3 Shedule" required></textarea>
                                    </div>
                                </div>
                                <div className='sm:pl-14 mt-3'>
                                    <div>
                                        <p className='text-xl font-semibold mb-3'>Day 3 : Event Image 1 Minimum Include</p>
                                        <p className='label-text font-medium mb-4'>Event Image Day : 3</p>
                                        <label className='bg-amber-400 py-2 px-8 text-white border font-medium border-amber-400 rounded-md' htmlFor="image4">
                                            <FontAwesomeIcon icon={faCloudArrowUp}></FontAwesomeIcon>  Upload Photo
                                        </label>
                                        <input type="file" onChange={handleFileSelected} id="image4" name='file' style={{ visibility: "hidden" }} required />
                                    </div>
                                </div>
                            </div>
                            <div className='text-center py-8'>
                                <input className='custom-btn rounded text-lg font-semibold w-full sm:w-96 py-4 sm:px-16 mt-0 sm:mt-5 text-white' type="submit" value="Add Event" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddEvent;