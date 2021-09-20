import React, { Component } from "react";
import "./home.css";

export default class home extends Component {
  render() {
    const mql = window.matchMedia(`(min-width: 800px)`);
    return (
      <div
        className="container-fluid"
        style={{
          padding: "30px",
        }}
      >
        <div className="nav-header">
          <div className="d-flex justify-content-between align-items-center ">
            {!mql.matche && (
              <div className="right">
                <button
                  className="btn btn-danger common-btn"
                  onClick={() =>
                    this.props.setsidebarOpen(!this.props.navStatus)
                  }
                >
                  Open Navbar
                </button>
              </div>
            )}
            <div className="right">
              <button className="btn btn-danger common-btn">Logout</button>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-14">
            <div className="user-card ">
              <div className="d-flex flex-wrap justify-content-between align-items-center">
                <h1 className="text-white">Jon Doe</h1>
                {/* <a href="/#">
                  <i
                    style={{
                      fontSize: "1.6rem",
                      backgroundColor: "#ffff",
                      padding: "5px",
                      borderRadius: "50px",
                    }}
                    className="bx bx-dots-vertical-rounded "
                  ></i>
                </a> */}
              </div>
              {/* <div className="content d-flex">
                <button className="btn common-btn">

                </button>
              </div> */}
            </div>
          </div>
          <div className="d-flex flex-wrap">
            <div className="col-lg-3 box-option align-items-center mr-5">
              <h1 className="header text-white d-flex flex-column">
                Start Blogging
              </h1>
              <a href="/#" className="btn">
                <i
                  style={{
                    fontSize: "1.6rem",
                    backgroundColor: "#ffff",
                    padding: "5px",
                  }}
                  class="bx bx-right-arrow-alt"
                ></i>
              </a>
            </div>
            <div className="col-lg-3 box-option mr-5">
              <h1 className="header text-white d-flex flex-column">
                Manage Property
              </h1>
              <a href="/#" className="btn">
                <i
                  style={{
                    fontSize: "1.6rem",
                    backgroundColor: "#ffff",
                    padding: "5px",
                  }}
                  class="bx bx-right-arrow-alt"
                ></i>
              </a>
            </div>
            <div className="col-lg-3 box-option mr-5">
              <h1 className="header text-white d-flex flex-column">
                Register Business
              </h1>
              <a href="/#" className="btn">
                <i
                  style={{
                    fontSize: "1.6rem",
                    backgroundColor: "#ffff",
                    padding: "5px",
                  }}
                  class="bx bx-right-arrow-alt"
                ></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
