import React from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import "./Login.css";

export default function Login({ setUserLoggedin }) {
  const history = useHistory();
  const handleLoggedIn = () => {
    setUserLoggedin();
    history.push({
      pathname: "/",
    });
  };
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
          <h1 className="fs-5 text-center">Login In Into Account</h1>
        </div>
        <div className="d-flex m-3 flex-column justify-content-center align-items-center">
          <div className="col-9 d-flex m-3 flex-column justify-content-center text-left">
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

              <button
                className="btn common-btn"
                style={{
                  width: "100%",
                  marginTop: "30px",
                }}
                onClick={handleLoggedIn}
              >
                Login
              </button>

              <div className="register-btn text-center">
                <span className="mt-3">
                  Haven't Register Your Business Yet click to follow {""}
                  <Link to="/register">Register</Link>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
