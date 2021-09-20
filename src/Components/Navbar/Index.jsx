import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
export default function SideBarItems() {
  return (
    <div
      className="container-fluid text-center mt-5"
      style={{
        width: "300px",
      }}
    >
      <div className="header d-flex align-items-center flex-column text-white">
        <img
          src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
          className="rounded "
          alt="brand-avatar"
          style={{
            width: "70px",
            height: "70px",
            borderRadius: "100%",
          }}
        />
        <span className="fs-5 mt-3">Jon Doe</span>
        <span
          class="badge badge-pill badge-danger"
          style={{
            background: "red",
          }}
        >
          Contracter
        </span>
        <p className="text-justify mt-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, omnis!
        </p>
      </div>
      <div className="navlink">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/post-property">Post Property</Link>
          </li>
          <li>
            <Link to="/post-project">Post Project</Link>
          </li>
          <li>
            <a href="/#">Show All Post</a>
          </li>
          <li>
            <a href="/#">Post Requirements</a>
          </li>
          <li>
            <a href="/#">Service Directory</a>
          </li>
          <li>
            <a href="/#">Forum Support</a>
          </li>
          <li>
            <a href="/#">Custome Messages</a>
          </li>
          <li>
            <a href="/#">Settings</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
