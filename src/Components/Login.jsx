import "../CSS/Login.css";
import "../../src/assets/tech-army-high-resolution-logo-black.png";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleLogin = () => {};
  var navigate = useNavigate();
  var nav = () => {
    navigate("/userregister");
  };
  return (
    <>
      <body>
        <section>
          {" "}
          <span></span> <span></span> <span></span> <span></span> <span></span>{" "}
          <span></span> <span></span> <span></span> <span></span> <span></span>{" "}
          <span></span> <span></span> <span></span> <span></span> <span></span>{" "}
          <span></span> <span></span> <span></span> <span></span> <span></span>{" "}
          <span></span> <span></span> <span></span> <span></span> <span></span>{" "}
          <span></span> <span></span> <span></span> <span></span> <span></span>{" "}
          <span></span> <span></span> <span></span> <span></span> <span></span>{" "}
          <span></span> <span></span> <span></span> <span></span> <span></span>{" "}
          <span></span> <span></span> <span></span> <span></span> <span></span>{" "}
          <span></span> <span></span> <span></span> <span></span> <span></span>{" "}
          <span></span> <span></span> <span></span> <span></span> <span></span>{" "}
          <span></span> <span></span> <span></span> <span></span> <span></span>{" "}
          <span></span> <span></span> <span></span> <span></span> <span></span>{" "}
          <span></span> <span></span> <span></span> <span></span> <span></span>{" "}
          <span></span> <span></span> <span></span> <span></span> <span></span>{" "}
          <span></span> <span></span> <span></span> <span></span> <span></span>{" "}
          <span></span> <span></span> <span></span> <span></span> <span></span>{" "}
          <span></span> <span></span> <span></span> <span></span> <span></span>{" "}
          <span></span> <span></span> <span></span> <span></span> <span></span>{" "}
          <span></span> <span></span> <span></span> <span></span> <span></span>{" "}
          <span></span> <span></span> <span></span> <span></span> <span></span>{" "}
          <span></span> <span></span> <span></span> <span></span> <span></span>{" "}
          <span></span> <span></span> <span></span> <span></span> <span></span>{" "}
          <span></span> <span></span> <span></span> <span></span> <span></span>{" "}
          <span></span> <span></span> <span></span> <span></span> <span></span>{" "}
          <span></span> <span></span> <span></span> <span></span> <span></span>{" "}
          <span></span> <span></span> <span></span> <span></span> <span></span>{" "}
          <span></span> <span></span> <span></span> <span></span> <span></span>{" "}
          <span></span> <span></span> <span></span> <span></span> <span></span>{" "}
          <span></span> <span></span> <span></span> <span></span> <span></span>{" "}
          <span></span> <span></span> <span></span> <span></span> <span></span>{" "}
          <span></span> <span></span> <span></span> <span></span> <span></span>{" "}
          <span></span> <span></span> <span></span> <span></span> <span></span>{" "}
          <span></span> <span></span> <span></span> <span></span> <span></span>{" "}
          <span></span> <span></span> <span></span> <span></span> <span></span>{" "}
          <span></span> <span></span> <span></span> <span></span> <span></span>{" "}
          <span></span> <span></span> <span></span> <span></span> <span></span>{" "}
          <span></span> <span></span> <span></span> <span></span> <span></span>{" "}
          <span></span> <span></span> <span></span> <span></span> <span></span>{" "}
          <span></span> <span></span> <span></span> <span></span> <span></span>{" "}
          <span></span> <span></span> <span></span> <span></span> <span></span>{" "}
          <span></span> <span></span> <span></span> <span></span> <span></span>{" "}
          <span></span> <span></span> <span></span> <span></span> <span></span>{" "}
          <span></span> <span></span> <span></span> <span></span> <span></span>{" "}
          <span></span> <span></span> <span></span> <span></span> <span></span>{" "}
          <span></span> <span></span> <span></span> <span></span> <span></span>{" "}
          <span></span> <span></span> <span></span> <span></span> <span></span>{" "}
          <span></span> <span></span> <span></span> <span></span> <span></span>{" "}
          <span></span> <span></span> <span></span> <span></span> <span></span>{" "}
          <span></span> <span></span> <span></span> <span></span> <span></span>{" "}
          <span></span> <span></span> <span></span> <span></span> <span></span>{" "}
          <span></span> <span></span> <span></span> <span></span> <span></span>
          <div className="signin">
            <div className="content">
              <h2>Log In</h2>

              <div className="form">
                <div className="inputBox">
                  <input type="text" required /> <i>Username</i>
                </div>

                <div className="inputBox">
                  <input type="password" required /> <i>Password</i>
                </div>

                <div className="links">
                  {" "}
                  <Link href="#"></Link>{" "}
                  <Link to="/signup" onClick={nav} href="#">
                    Sign Up
                  </Link>
                </div>

                <div className="inputBox">
                  <input type="submit" value="Login" />
                </div>
              </div>
            </div>
          </div>
        </section>
      </body>
    </>
  );
}
