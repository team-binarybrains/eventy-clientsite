/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import "../../EventDetails/FeaturedEvent/EventSchedule/Tab/Tab.css";
import useRefetch from "../../Hooks/useRefetch";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../Firebase/firebase.init";
import axios from "axios";
import DisplayMyBooking from "./DisplayMyBooking";
import DisplayMyTickets from "./DisplayMyTickets";

function MyBooking() {

    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index);
    };


    const [user] = useAuthState(auth);
    const [myBookingServices, setMyBookingServices] = useState([]);

    const [tickets, loading, refetch] = useRefetch(`http://localhost:5000/user-booked-ticket/${user?.uid}`, [])

    useEffect(() => {
        const email = user.email;

        axios.get(`http://localhost:5000/booking-info/${email}`, {
            headers: {
                authorization: ` Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => {
                const { data } = res
                console.log(data);
                setMyBookingServices(data)
            })

    }, [user])

    // cancle order
    const handleBookingCancle = id => {
        console.log(id);

        const proceed = window.confirm("Are you sure?");

        if (proceed) {
            fetch(`http://localhost:5000/delete-booking/${id}`, {
                method: "DELETE",
            })
                .then((res) => res.json())
                .then((data) => {
                    const remaining = myBookingServices.filter(
                        (bookingItems) => bookingItems._id !== id
                    )
                    setMyBookingServices(remaining);
                })
        }
    }

    return (
        <div className="tabContainer">
            <div className="bloc-tabs flex flex-col sm:flex-row">

                <button
                    className={toggleState === 1 ? "eventTabs active-tabs" : "eventTabs"}
                    onClick={() => toggleTab(1)}
                >
                    <p className="text-xl font-semibold block uppercase">Booked
                        <span className={`mx-2 ${toggleState === 1? 'text-gray-700':'text-amber-500'}`}>Event</span>
                    </p>
                </button>

                <button
                    className={toggleState === 2 ? "eventTabs active-tabs" : "eventTabs"}
                    onClick={() => toggleTab(2)}
                >
                    <p className="text-xl font-semibold block uppercase">Booked 
                        <span className={`mx-2 ${toggleState === 2? 'text-gray-700':'text-amber-500'}`}>Ticket</span>
                    </p>
                </button>

                <button
                    className={`${toggleState === 3 ? "eventTabs active-tabs" : "eventTabs"} invisible`}
                    onClick={() => toggleTab(3)}
                >
                    <p className="text-2xl font-semibold block  uppercase"></p>
                    <p className=" font-semibold"> </p>
                </button>

                <button
                    className={`${toggleState === 4 ? "eventTabs active-tabs" : "eventTabs"} invisible`}
                    onClick={() => toggleTab(4)}
                >
                    <p className="text-2xl font-semibold block  uppercase"></p>
                    <p className=" font-semibold"> </p>
                </button>

            </div>

            {/* booked event array map */}
            <div className="content-tabs">
                <div
                    className={toggleState === 1 ? "content  active-content" : "content"}
                >
                    <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-y-5 gap-x-10 lg:p-10'>

                        {
                            [...myBookingServices].reverse().map(booking => <DisplayMyBooking
                                key={booking._id}
                                booking={booking}
                                handleBookingCancle={handleBookingCancle}
                            />)
                        }
                    </div>
                </div>

                {/* booked ticket array map */}
                <div
                    className={toggleState === 2 ? "content  active-content" : "content"}
                >
                    <div className='flex flex-wrap gap-5 p-3 lg:p-10'>
                        {
                            tickets?.map((ticket) => <DisplayMyTickets key={ticket?.eventId} ticket={ticket} refetch={refetch} />)
                        }
                    </div>
                </div>

                {/* <div
                    className={toggleState === 3 ? "content  active-content" : "content"}
                >
                    
                </div> */}

                {/* <div
                    className={toggleState === 4 ? "content  active-content" : "content"}
                >
                    
                </div> */}
            </div>
        </div>
    );
}

export default MyBooking;