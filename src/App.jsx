import React from "react";
import Login from "./Components/Login";
import "..\\node_modules\\bootstrap\\dist\\css\\bootstrap.min.css";
import { Route, Routes, useNavigate } from "react-router-dom";
import SignUp from "./Components/SignUp";
import Bot from "./Components/bot";

const App = () => {
  return (
    <div>
      <nav className="navbar bg-dark navwid">
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

      <div>
        <Routes>
          <Route path="/signup" element={<SignUp></SignUp>}></Route>
          <Route path="/" element={<Login></Login>}></Route>
          <Route path="/bot" element={<Bot></Bot>}></Route>
        </Routes>
      </div>
    </div>
  );
};

export default App;
