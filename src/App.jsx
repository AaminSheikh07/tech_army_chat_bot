import React from "react";
import Login from "./Components/Login";
import "..\\node_modules\\bootstrap\\dist\\css\\bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import SignUp from "./Components/SignUp";
import Bot from "./Components/bot";
import Home from "./Components/home";

const App = () => {
  return (
    <div>
      <nav className="navbar bg-dark m-0 nav-mar">
        <div className="container-fluid nav-back">
          <a className="navbar-brand" href="#">
            <img
              src="../../src/assets\photo_2024-06-03_14-38-16.jpg"
              alt="Bootstrap"
              width="130"
              height="70"
            />
          </a>
        </div>
      </nav>
      <div className="">{/* <Login></Login> */}</div>

      {/* __________ */}

      <div>
        <Routes>
          <Route path="/signup" element={<SignUp></SignUp>}></Route>
          <Route path="/" element={<Login></Login>}></Route>
          <Route path="/home" element={<Home></Home>}></Route>
        </Routes>
      </div>
    </div>

    // _____
  );
};

export default App;
