import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Stepper } from "react-form-stepper";

import "./Login.css";

export default function Login() {
  const [pageIndex, setIndex] = useState(1);
  return (
    <div className="row login-form">
      <div
        className="left col-7 d-flex justify-content-center align-items-center"
        style={{
          background:
            "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url(https://images.unsplash.com/photo-1582647509711-c8aa8a8bda71?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=375&q=80) center/cover",
        }}
      >
        <div className="left-content">
          {/* <h1 className="text-white fs-4">Login In Into Account</h1> */}
        </div>
      </div>
      <div className="right col-5  d-flex mt-100 justify-content-center flex-column">
        <div className="text-center">
          <h1 className="fs-5 text-center">Register Your Account</h1>
        </div>
        <div className="d-flex m-3 flex-column justify-content-center align-items-center">
          {pageIndex === 1 && (
            <div className="col-9 d-flex m-3 flex-column justify-content-center text-left">
              <Stepper
                steps={[
                  { label: "Register Your account" },
                  { label: "Validate Your Account" },
                ]}
                activeStep={pageIndex - 1}
              />

              <label htmlFor="Username" className="mb-2">
                Username
              </label>
              <div className="col">
                <input
                  type="text"
                  className="form-control"
                  id="username"
                  placeholder="Enter Username"
                />

                <label htmlFor="password" className="mb-2 mt-2">
                  Password
                </label>
                <div className="col">
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    placeholder="Enter Password"
                  />
                </div>

                <label htmlFor="email" className="mb-2 mt-2">
                  Email Address
                </label>
                <div className="col">
                  <input
                    type="password"
                    className="form-control"
                    id="email"
                    placeholder="Enter Password"
                  />
                </div>

                <label htmlFor="mobile-no" className="mb-2 mt-2">
                  Mobile No
                </label>
                <div className="col">
                  <input
                    type="password"
                    className="form-control"
                    id="mobile-no"
                    placeholder="Enter Password"
                  />
                </div>

                <label htmlFor="password" className="mb-2 mt-2">
                  Business Services
                </label>
                <div className="col">
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    placeholder="Enter Password"
                  />
                </div>

                <label htmlFor="password" className="mb-2 mt-2">
                  Upload Business Logo
                </label>
                <div className="col">
                  <input
                    type="file"
                    className="form-control custom-file-input"
                  ></input>
                </div>

                <label htmlFor="password" className="mb-2 mt-2">
                  Upload Business License
                </label>
                <div className="col">
                  <input
                    type="file"
                    className="form-control custom-file-input"
                  ></input>
                </div>

                <label htmlFor="address" className="mb-2 mt-2">
                  Enter Business Address
                </label>
                <div className="col">
                  <input
                    type="password"
                    className="form-control"
                    id="address"
                    placeholder="Enter Password"
                  />
                </div>

                <button
                  className="btn common-btn"
                  style={{
                    width: "100%",
                    marginTop: "30px",
                  }}
                  onClick={() => setIndex(2)}
                >
                  Next
                </button>
              </div>
            </div>
          )}
          {pageIndex === 2 && (
            <div className="col-9 d-flex m-3 flex-column justify-content-center text-left">
              <Stepper
                steps={[
                  { label: "Register Your account" },
                  { label: "Validate Your Account" },
                ]}
                activeStep={pageIndex - 1}
              />

              <label htmlFor="otp" className="mb-2">
                Enter OTP
              </label>
              <div className="col">
                <input
                  type="text"
                  className="form-control"
                  id="otp"
                  placeholder="Enter Username"
                />

                <button
                  className="btn common-btn"
                  style={{
                    width: "100%",
                    marginTop: "30px",
                  }}
                >
                  Submit
                </button>

                <div className="register-btn text-center">
                  <span className="mt-3">
                    Haven't Register Your Business Yet click to follow {""}
                    <Link to="/login">Login</Link>
                  </span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
