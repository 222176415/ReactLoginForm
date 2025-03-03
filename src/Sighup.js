import "./styles.css";
import React, { useState } from "react";
import SignUp from "./Images/SignUp.svg";
import TabletImg from "./Images/Tablet.svg";
import Login from "./LoginForm";

export default function SignUI() {
  const [logedIn, setlogedIn] = useState(true);

  if (logedIn !== true) {
    return (
      //if you dont have account and not logged in SignUp
      <section style={{ marginTop: 100 }}>
        <div
          className="container justify-content-center align-items-center mini-vh-100 login"
          style={{ borderRadius: 5 }}
        >
          <div className="row border rounder-5 p-3 bg-white shadow box-area">
            <div
              className="col-md-6 rounder-4 d-flex justify-content-center align-items-center flex-column left-box"
              style={{ backgroundColor: "#FFE5B4" }}
            >
              <div className="featured-image mb-3">
                <img
                  src={SignUp}
                  alt=""
                  className="img-fluid;"
                  style={{ width: 250 }}
                />
              </div>
            </div>
            <form className="col-md-6 right-box">
              <div className="row align-items-center">
                <div className="header-text mb-4" />
                <h1>Sign Up</h1>
                <p>
                  New Users Get FREE Delivery for the first Order...Sign Up NOW!
                </p>
              </div>
              <div className="input-group mb-3">
                <input
                  type="text"
                  name="username"
                  id="username"
                  placeholder="Username"
                  required=""
                  className="form-control form-control-lg bg-light fs-6"
                />
              </div>
              <div className="input-group mb-3">
                <input
                  type="text"
                  className="form-control form-control-lg bg-light fs-6"
                  placeholder="Email"
                  name="email"
                />
              </div>
              <div className="input-group mb-1">
                <input
                  type="password"
                  className="form-control form-control-lg bg-light fs-6"
                  name="password"
                  placeholder="Password"
                  required=""
                />
              </div>
              <div className="input-group mb-3">
                <button
                  type="submit"
                  className="btn btn-lg w-100 fs-6"
                  style={{
                    borderColor: "#666",
                    backgroundColor: "#FFE5B4",
                    alignContent: "center",
                  }}
                >
                  Sign Up
                </button>
              </div>
              <div className="row">
                <small>
                  Have an Account ?{" "}
                  <button type="submit" onClick={setlogedIn(true)}>
                    {" "}
                    Log In
                  </button>
                </small>
              </div>
            </form>
          </div>
        </div>
      </section>
    );
  } else {
    return (
      <div className="LoginForm">
        <section style={{ marginTop: 100 }}>
          <div
            className="container justify-content-center align-items-center mini-vh-100 login"
            style={{ borderRadius: 5 }}
          >
            <div className="row border rounder-5 p-3 bg-white shadow box-area">
              <div
                className="col-md-6 rounder-4 d-flex justify-content-center align-items-center flex-column left-box"
                style={{ backgroundColor: "#FFE5B4" }}
              >
                <div className="featured-image mb-3">
                  <img
                    src={TabletImg}
                    alt=""
                    className="img-fluid;"
                    style={{ width: 250 }}
                  />
                </div>
              </div>
              <form
                className="col-md-6 right-box"
                action="login.php"
                method="post"
              >
                <div className="row align-items-center">
                  <div className="header-text mb-4">
                    <h1>Hello, Again!</h1>
                    <p>We're happy to have you back shopping with us.</p>
                  </div>
                </div>
                <div className="input-group mb-3">
                  <input
                    type="text"
                    name="email"
                    className="form-control form-control-lg bg-light fs-6"
                    placeholder="Email"
                    required=""
                  />
                </div>
                <div className="input-group mb-1">
                  <input
                    type="password"
                    name="password"
                    className="form-control form-control-lg bg-light fs-6"
                    placeholder="Password"
                    required=""
                  />
                </div>
                <div className="input-group mb-3">
                  <button
                    type="submit"
                    className="btn btn-lg w-100 fs-6"
                    style={{ borderColor: "#666", backgroundColor: "#FFE5B4" }}
                  >
                    Login
                  </button>
                </div>
                <div className="row">
                  <small>
                    Don't have an Account? <a href="SignUp.html">Sign Up</a>
                  </small>
                </div>
              </form>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
