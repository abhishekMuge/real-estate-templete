import React from "react";
import { AddToQueue, FavoriteBorder } from "@material-ui/icons";
export default function Agent() {
  return (
    <div>
      {/* Page Title */}
      <div className="page-title-area title-bg-five">
        <div className="d-table">
          <div className="d-table-cell">
            <div className="container">
              <div className="title-content">
                <h2>Agents</h2>
                <ul>
                  <li>
                    <a href="index.html">Home</a>
                  </li>
                  <li>
                    <span>Agent</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Page Title */}
      <div className="d-flex agents-list m-4 flex-wrap">
        <div
          className="team-item item border"
          style={{
            width: "300px",
            margin: "0 20px",
          }}
        >
          <div className="top">
            <span
              style={{
                cursor: "pointer",
              }}
            >
              <AddToQueue />
            </span>
            <span
              style={{
                cursor: "pointer",
              }}
            >
              <FavoriteBorder />
            </span>
            <img src="assets/images/team1.jpg" alt="Team" />
            <h3>OM SHIV INTERNATIONAL</h3>
            <p>commercial leasing and consultant</p>
            <ul>
              <li>
                <a href="/#" target="_blank">
                  <i className="bx bxl-facebook" />
                </a>
              </li>
              <li>
                <a href="/#" target="_blank">
                  <i className="bx bxl-twitter" />
                </a>
              </li>
              <li>
                <a href="/#" target="_blank">
                  <i className="bx bxl-instagram" />
                </a>
              </li>
              <li>
                <a href="/#" target="_blank">
                  <i className="bx bxl-youtube" />
                </a>
              </li>
            </ul>
          </div>
          <div className="bottom">
            <ul>
              <li>
                <a href="/#">
                  {" "}
                  A-1 Opposite Mahindra Aura, New Palam Vihar Sector 110A
                  Gurugram
                </a>
              </li>
              <li>
                <i className="bx bx-mail-send" />
                <a href="mailto:hello@snift.com">hipvtltd@gmail.com</a>
              </li>
              <li>
                <i className="bx bx-phone-call" />
                <a href="tel:+123456789">9999408076</a>
                {"  /  "}
                <a href="tel:+123456789">9999408076</a>
              </li>
            </ul>
          </div>
        </div>
        {/* 1item */}
        <div
          className="team-item item border"
          style={{
            width: "300px",
          }}
        >
          <div className="top">
            <span
              style={{
                cursor: "pointer",
              }}
            >
              <AddToQueue />
            </span>
            <span
              style={{
                cursor: "pointer",
              }}
            >
              <FavoriteBorder />
            </span>
            <img src="assets/images/team1.jpg" alt="Team" />
            <h3>OM SHIV INTERNATIONAL</h3>
            <p>commercial leasing and consultant</p>
            <ul>
              <li>
                <a href="/#" target="_blank">
                  <i className="bx bxl-facebook" />
                </a>
              </li>
              <li>
                <a href="/#" target="_blank">
                  <i className="bx bxl-twitter" />
                </a>
              </li>
              <li>
                <a href="/#" target="_blank">
                  <i className="bx bxl-instagram" />
                </a>
              </li>
              <li>
                <a href="/#" target="_blank">
                  <i className="bx bxl-youtube" />
                </a>
              </li>
            </ul>
          </div>
          <div className="bottom">
            <ul>
              <li>
                <a href="/#">
                  {" "}
                  A-1 Opposite Mahindra Aura, New Palam Vihar Sector 110A
                  Gurugram
                </a>
              </li>
              <li>
                <i className="bx bx-mail-send" />
                <a href="mailto:hello@snift.com">hipvtltd@gmail.com</a>
              </li>
              <li>
                <i className="bx bx-phone-call" />
                <a href="tel:+123456789">9999408076</a>
                {"  /  "}
                <a href="tel:+123456789">9999408076</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
