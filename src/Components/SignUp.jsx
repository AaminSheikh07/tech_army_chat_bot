import { Link } from "react-router-dom";
import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../fire_base/fireBase";
import { setDoc, doc } from "firebase/firestore";
import { toast } from "react-toastify";

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();
    e.target.reset();

    alert("hello");

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      const user = auth.currentUser;
      console.log(user);
      if (user) {
        await setDoc(doc(db, "Users", user.uid), {
          email: user.email,
          firstName: fname,
          lastName: lname,
        });
      }
      console.log("user register");
      Toast.success("user Registered Successfully!!", {
        position: "top-center",
      });
    } catch (error) {
      console.log(error.message);
      Toast.success(error.message, {
        position: "bottom-center",
      });
    }
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
              <h2>Sign Up</h2>

              <div className="form">
                <form action="" onSubmit={handleRegister}>
                  <div className="inputBox">
                    <input
                      type="text"
                      className=""
                      onChange={(e) => setFname(e.target.value)}
                      required
                    />{" "}
                    <i>First Name</i>
                  </div>

                  <div className="inputBox">
                    <input
                      type="text"
                      onChange={(e) => setLname(e.target.value)}
                      required
                    />{" "}
                    <i>last Name</i>
                  </div>

                  <div className="inputBox">
                    <input
                      type="email"
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />{" "}
                    <i>Email</i>
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
                    <Link to="/" href="#">
                      Log In
                    </Link>
                  </div>

                  <div className="inputBox">
                    <input type="submit" value="Sign Up" />
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
