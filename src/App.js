/* eslint-disable no-unused-vars */
import logo from "./logo.svg";
import "./App.css";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home/Home";
import NotFound from "./Components/Share/NOtFound/NotFound";
import BackTopBtn from "./Components/BackToTop/BackTopBtn";
import Form from "./Components/Authentication/Form";
function App() {
  return (
    <div className="overflow-x-hidden">
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/authentication" element={<Form></Form>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
      <BackTopBtn></BackTopBtn>
      <ToastContainer />
    </div>
  );
}

export default App;
