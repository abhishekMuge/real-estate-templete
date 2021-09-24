import React, { Component } from "react";

export default class TellMeNedd extends Component {
  render() {
    return (
      <div>
        {/* Page Title */}
        <div className="page-title-area title-bg-two">
          <div className="d-table">
            <div className="d-table-cell">
              <div className="container">
                <div className="title-content">
                  <h2>Property Right Sidebar</h2>
                  <ul>
                    <li>
                      <a href="index.html">Home</a>
                    </li>
                    <li>
                      <span>Tell Me Your Needs</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End Page Title */}
        <div className="container mt-20">
          <div className="row">
            <div className="page-header text-center">
              <h1 className="text-bold fs-1">Tell Me Your Need</h1>
              <p className="text-bold fs-6">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque
                ducimus vitae laudantium cumque nihil cupiditate, quod labore
                quae! Quam expedita corrupti voluptatem facilis maiores autem
                iure nesciunt fuga sit architecto?
              </p>
            </div>
            <div className="page-form">
              <div className="col">
                <div className="form-group">
                  <label htmlFor="name">Name:</label>
                  <input type="text" className="form-control" id="name" />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email address:</label>
                  <input type="email" className="form-control" id="email" />
                </div>
                <div className="form-group">
                  <label htmlFor="phone">Phone No:</label>
                  <input type="phone" className="form-control" id="phone" />
                </div>
                <div className="form-group">
                  <label htmlFor="address">Enter Address:</label>
                  <input
                    type="text"
                    className="form-control mt-2"
                    id="address"
                    placeholder="uint/plot No."
                  />
                  <input
                    type="text"
                    className="form-control mt-2"
                    id="address"
                    placeholder="sector/location"
                  />
                  <input
                    type="text"
                    className="form-control mt-2"
                    id="address"
                    placeholder="city"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Enter Message description: </label>
                  <textarea className="form-control" rows="10"></textarea>
                </div>
                <div className="col">
                  <button
                    className=" common-btn"
                    style={{
                      width: "100%",
                    }}
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
