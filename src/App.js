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
import ScrollToTop from "./Components/Share/ScrolltoTop/ScrollToTop";
import { useEffect } from "react";

function App() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="overflow-x-hidden">
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/authentication" element={<Form></Form>}></Route>
        <Route
          path="/blogs-details"
          element={<BlogDetails></BlogDetails>}
        ></Route>
        <Route path="/about" element={<AboutUs></AboutUs>}></Route>
        <Route path="/gallery" element={<Gallery></Gallery>}></Route>
        <Route
          path="/eventlist"
          element={<EventListDetailsMain></EventListDetailsMain>}
        ></Route>
        <Route
          path="/event-booking"
          element={<EventBooking></EventBooking>}
        ></Route>
        <Route
          path="/event-details"
          element={<EventDetails></EventDetails>}
        ></Route>
        <Route
          path="/event-details"
          element={<EventDetails></EventDetails>}
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
