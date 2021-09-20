import React, { Component } from "react";
import "./editprofile.css";
export default class UserEdit extends Component {
  render() {
    return (
      <div>
        <div className="container heading">
          <h4>Current Profile</h4>
          <p>(will change after submit)</p>
        </div>
        <div className="container row profile">
          <div className="left col-2">
            <img src="#" className="user" alt="user-logo" />
          </div>
          <div className="right col-10">
            <div className="icons">
              <nav>
                <a href="/#">
                  <i className="icon fab fa-facebook-f social-icons" />
                </a>
                <a href="/#">
                  <i className="icon fab fa-instagram social-icons" />
                </a>
                <a href="/#">
                  <i className="icon fab fa-linkedin social-icons" />
                </a>
                <a href="/#">
                  <i className="icon fab fa-twitter social-icons" />
                </a>
              </nav>
            </div>
            <div>
              <i className="fas fa-phone-alt icon phone-icon" /> 9284903101
              <div>
                <i className="fas fa-phone-alt icon phone-icon" />
              </div>
            </div>
            <div>Area of Specialization : All Field</div>
            <div>
              <i className="fas fa-envelope icon mail-icon" />
              <a href="/#" className="email">
                abhie56007@gmail.com
              </a>
            </div>
            <div>
              <i className="fas fa-map-marker-alt icon loc-icon" />
            </div>
          </div>
        </div>
        <div className="container">
          <h4 className="edit">EDIT PROFILE HERE</h4>
        </div>
        <div className="container form">
          <form>
            <div className="form-group">
              <label>Business Name</label>
              <input
                type="text"
                className="form-control"
                placeholder="Business name"
              />
            </div>
            <div className="form-group">
              <label>Business Email</label>
              <input
                type="email"
                className="form-control"
                placeholder="abhie56007@gmail.com"
              />
            </div>
            <div className="form-group">
              <label>Alternate Phone Number</label>
              <input
                type="number"
                className="form-control"
                placeholder="Alt. Phone Number"
              />
            </div>
            <div className="form-group">
              <label>Area of Specialization</label>
              <input
                type="text"
                className="form-control"
                placeholder="All Field"
              />
            </div>
            <div className="form-group">
              <label>Office Address</label>
              <input
                type="text"
                className="form-control"
                placeholder="address"
              />
            </div>
            <div className="form-group">
              <label>Office map link</label>
              <input type="link" className="form-control" placeholder="map" />
            </div>
            <div className="form-group">
              <label>Office embeded map link</label>
              <input
                type="link"
                className="form-control"
                placeholder="embedded map"
              />
            </div>
            <div className="form-group">
              <label>Facebook link</label>
              <input
                type="link"
                className="form-control"
                placeholder="Facebook"
              />
            </div>
            <div className="form-group">
              <label>Instagram link</label>
              <input
                type="link"
                className="form-control"
                placeholder="Instagram"
              />
            </div>
            <div className="form-group">
              <label>Linkedin link</label>
              <input
                type="link"
                className="form-control"
                placeholder="Linkedin"
              />
            </div>
            <div className="form-group">
              <label>Twitter link</label>
              <input
                type="link"
                className="form-control"
                placeholder="Twitter"
              />
            </div>
            <div className="form-group">
              <label>Profile Photo</label>
              <input type="file" className="form-control-file" />
            </div>
            <button type="button" className="btn btn-primary btn-lg btn-block">
              Submit
            </button>
          </form>
        </div>
      </div>
    );
  }
}
