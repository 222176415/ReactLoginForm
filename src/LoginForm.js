import React from "react";
import TabletImg from "./Images/Tablet.svg";
import "./styles.css";

export default function Login() {
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
