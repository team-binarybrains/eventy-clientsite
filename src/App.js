/* eslint-disable no-unused-vars */
import logo from "./logo.svg";
import "./App.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./Components/Home/Home";
import NotFound from "./Components/Share/NOtFound/NotFound";
import BackTopBtn from "./Components/BackToTop/BackTopBtn";
import Form from "./Components/Authentication/Form";
import MessengerCustomerChat from "react-messenger-customer-chat";
import EventListDetailsMain from "./Components/EventListDetails/EventListDetailsMain";
import BlogDetails from "./Components/Home/Blog/BlogDetails/BlogDetails";
import AboutUs from "./Components/AboutUs/AboutUs";
import Footer from "./Components/Share/Footer/Footer";
import EventDetails from "./Components/EventDetails/EventDetails";
import EventBooking from "./Components/EventBooking/EventBooking";
import Gallery from "./Components/Gallery/Gallery";
import SingleService from "./Components/Home/OurServices/SingleService";
import DayOne from "./Components/EventDetails/FeaturedEvent/EventSchedule/DayOne/DayOne";
import MainBlogs from "./Components/MainBlogs/MainBlogs";
import ScrollToTop from "./Components/Share/ScrolltoTop/ScrollToTop";
import { useEffect } from "react";
import Navbar from "./Components/Share/Navbar/Navbar";
import SingleEventBooking from "./Components/SingleEventBooking/SingleEventBooking";
import Map from "./Components/AboutUs/Map";
import ContactUs from "./Components/ContactUs/ContactUs";
import Dashboard from "./Components/Dashboard/Dashboard";
import Chart from "./Components/Dashboard/Chart/Chart";
import MainChart from "./Components/Dashboard/Chart/MainChart/MainChart";
import Faq from "./Components/FAQ/Faq";
import Services from "./Components/Services/Services";
import Catering from "./Components/Services/Catering/Catering";
import Audiovisual from "./Components/Services/Audiovisual/Audiovisual";
import Lighting from "./Components/Services/Lighting/Lighting";
import LinenRentals from "./Components/Services/LinenRentals/LinenRentals";
import Destination from "./Components/Services/Destination/Destination";
import Logistics from "./Components/Services/Logistics/Logistics";
import VenueFacility from "./Components/Services/VenueFacility/VenueFacility";
import Photography from "./Components/Services/Photography/Photography";
import AllUsers from "./Components/Dashboard/AllUsers/AllUsers";
import OurTeam from "./Components/OurTeam/OurTeam";
import UserProfile from "./Components/Dashboard/UserProfile/UserProfile";
import UpdateUser from "./Components/Dashboard/UserProfile/UpdateUser/UpdateUser";
import RequireAdmin from "./Components/Authentication/RequireAdmin/RequireAdmin";
import RequireAuth from "./Components/Authentication/RequireAuth/RequireAuth";
import { signOut } from "firebase/auth";
import useToken from "./Components/Hooks/useToken";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "./Firebase/firebase.init";
import MyBooking from "./Components/Dashboard/MyBooking/MyBooking";
import AllBookings from "./Components/Dashboard/AllBookings/AllBookings";
import Payment from "./Components/Dashboard/MyBooking/Payment/Payment";
import AddEvent from "./Components/Dashboard/AddEvent/AddEvent";

function App() {
  const location = useLocation();
  const { pathname } = location;
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="overflow-x-hidden">
      <Navbar location={location}></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>

        {/* services */}
        <Route path="/services" element={<Services></Services>}></Route>
        <Route path="/catering" element={<Catering></Catering>}></Route>
        <Route
          path="/audiovisual"
          element={<Audiovisual></Audiovisual>}
        ></Route>
        <Route path="/sound-lighting" element={<Lighting></Lighting>}></Route>
        <Route
          path="/event-linen"
          element={<LinenRentals></LinenRentals>}
        ></Route>
        <Route
          path="/destination"
          element={<Destination></Destination>}
        ></Route>
        <Route
          path="/logistics-registration"
          element={<Logistics></Logistics>}
        ></Route>
        <Route
          path="/venue-facility"
          element={<VenueFacility></VenueFacility>}
        ></Route>
        <Route
          path="/photography"
          element={<Photography></Photography>}
        ></Route>

        {/* dashboard */}
        <Route
          path="/dashboard"
          element={
            <RequireAuth>
              <Dashboard></Dashboard>
            </RequireAuth>
          }
        >
          <Route index path="/dashboard" element={<MainChart />}></Route>
          <Route
            index
            path="/dashboard/allusers"
            element={
              <RequireAdmin>
                <AllUsers />
              </RequireAdmin>
            }
          ></Route>

          <Route
            path="/dashboard/my-booking"
            element={
              <MyBooking />
            }
          ></Route>

          <Route
            path="/dashboard/payment/:_id"
            element={
              <Payment />
            }
          ></Route>

          <Route
            path="/dashboard/all-booking"
            element={
              <RequireAdmin>
                <AllBookings />
              </RequireAdmin>
            }
          ></Route>

          <Route
            path="/dashboard/add-event"
            element={
              <AddEvent></AddEvent>
            }
          ></Route>

        </Route>

        {/* blog */}
        <Route
          path="/blogs-details"
          element={<BlogDetails></BlogDetails>}
        ></Route>
        <Route
          path="/blogs-details/:blogId"
          element={<BlogDetails></BlogDetails>}
        ></Route>
        <Route path="/blogs" element={<MainBlogs />}></Route>

        {/* booking  */}
        <Route
          path="/event-booking"
          element={<EventBooking></EventBooking>}
        ></Route>
        <Route
          path="/event-booking/:id"
          element={<SingleEventBooking></SingleEventBooking>}
        ></Route>

        {/* event */}
        <Route
          path="/eventlist"
          element={<EventListDetailsMain></EventListDetailsMain>}
        ></Route>
        <Route path="/event" element={<DayOne></DayOne>}></Route>
        <Route
          path="/event-details"
          element={<EventDetails></EventDetails>}
        ></Route>
        <Route
          path="/event-details/:id"
          element={<EventDetails></EventDetails>}
        ></Route>

        {/* details */}
        <Route
          path="/service-details"
          element={<SingleService></SingleService>}
        ></Route>
        <Route
          path="/service-details/:id"
          element={<SingleService></SingleService>}
        ></Route>
        <Route
          path="/event-details/:id"
          element={<EventDetails></EventDetails>}
        ></Route>

        {/* nornal routes */}
        <Route path="/manage-profile" element={<RequireAuth><UserProfile /></RequireAuth>} ></Route>
        <Route path="/update/user-profile" element={<RequireAuth><UpdateUser /></RequireAuth>} ></Route>
        <Route path="/authentication" element={<Form></Form>}></Route>
        <Route path="/ourteam" element={<OurTeam />}></Route>
        <Route path="/about" element={<AboutUs></AboutUs>}></Route>
        <Route path="/gallery" element={<Gallery></Gallery>}></Route>
        <Route path="/map" element={<Map></Map>}></Route>
        <Route
          path="/event-booking"
          element={<EventBooking></EventBooking>}
        ></Route>
        <Route
          path="/event-booking/:id"
          element={<SingleEventBooking></SingleEventBooking>}
        ></Route>
        <Route
          path="/eventlist"
          element={<EventListDetailsMain></EventListDetailsMain>}
        ></Route>
        <Route path="/event" element={<DayOne></DayOne>}></Route>
        <Route
          path="/event-details"
          element={<EventDetails></EventDetails>}
        ></Route>
        <Route
          path="/event-details/:id"
          element={<EventDetails></EventDetails>}
        ></Route>
        <Route
          path="/service-details"
          element={<SingleService></SingleService>}
        ></Route>
        <Route
          path="/service-details/:id"
          element={<SingleService></SingleService>}
        ></Route>
        {/* <Route
          path="/event-details/:id"
          element={<EventDetails></EventDetails>}
        ></Route> */}

        <Route path="faq" element={<Faq></Faq>}></Route>

        <Route path="/contact-us" element={<ContactUs></ContactUs>}></Route>

        {/* not found */}
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>

      <Footer></Footer>
      <BackTopBtn></BackTopBtn>
      <MessengerCustomerChat
        pageId="103025519179972"
        appId="1257335411675093"
      />

      <ToastContainer />
    </div>
  );
}

export default App;
