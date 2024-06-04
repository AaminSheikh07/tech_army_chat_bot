import "../CSS/Login.css";
import "../../src/assets/tech-army-high-resolution-logo-black.png";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../fire_base/fireBase";

import { toast } from "react-toastify";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    e.target.reset();

    try {
      await signInWithEmailAndPassword(auth, email, password);
      console.log("login successfully");
      navigate("/bot");
    } catch (error) {
      console.log(error.message);
      toast.success(error.message, {
        position: "bottom-center",
      });
    }
  };
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
                <form onSubmit={handleLogin}>
                  <div className="inputBox">
                    <input
                      type="text"
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />{" "}
                    <i>Username</i>
                  </div>

                  <div className="inputBox">
                    <input
                      type="password"
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />{" "}
                    <i>Password</i>
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
                </form>
              </div>
            </div>
          </div>
        </section>
      </body>
    </>
  );
}
