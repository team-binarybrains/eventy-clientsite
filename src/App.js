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
        <Route path="/authentication" element={<Form></Form>}></Route>
        <Route
          path="/blogs-details"
          element={<BlogDetails></BlogDetails>}
        ></Route>
        <Route
          path="/blogs-details/:blogId"
          element={<BlogDetails></BlogDetails>}
        ></Route>
        <Route path="/blogs" element={<MainBlogs />}></Route>
        <Route path="/about" element={<AboutUs></AboutUs>}></Route>
        <Route path="/gallery" element={<Gallery></Gallery>}></Route>
        <Route path="/map" element={<Map></Map>}></Route>
        <Route
          path="/event-booking"
          element={<EventBooking></EventBooking>}
        ></Route>
        <Route path='/event-booking/:id' element={<SingleEventBooking></SingleEventBooking>}></Route>
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
        <Route
          path="/event-details/:id"
          element={<EventDetails></EventDetails>}
        ></Route>

        <Route 
        path="/contact-us"
        element={<ContactUs></ContactUs>}
        ></Route>

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
