import logo from "./logo.svg";
import "./App.css";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home/Home";
import NotFound from "./Components/Share/NOtFound/NotFound";
function App() {
  return (
    <div className="">
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
