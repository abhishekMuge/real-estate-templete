import React, { Component } from "react";
import FormInput from "../../Components/FormComponent/FormInput";
import FormTextArea from "../../Components/FormComponent/FormTextArea";
import FormUpload from "../../Components/FormComponent/FormUpload";
import PostProperty from "../PostProperty";
export default class OrderData extends Component {
  state = {
    active: "property",
  };
  render() {
    return (
      <div
        className="row"
        style={{
          padding: "30px",
        }}
      >
        <div className="container-fluid">
          <div className="main d-flex justify-content-evenly align-items-center">
            <div className="col-lg-3">
              <button
                onClick={() => {
                  this.setState({ active: "property" });
                }}
                className="btn common-btn"
              >
                Property Details
              </button>
            </div>
            <div className="col-lg-3">
              <button
                onClick={() => {
                  this.setState({ active: "user" });
                }}
                className="btn common-btn"
              >
                Saler Details
              </button>
            </div>
            <div className="col-lg-3">
              <button
                onClick={() => {
                  this.setState({ active: "user" });
                }}
                className="btn common-btn"
              >
                Buyers Details
              </button>
            </div>
          </div>
        </div>
        {this.state.active === "property" && (
          <div className="container-fluid">
            <div className="header mt-4">
              <h1>Enter Property Details</h1>
            </div>
            <PostProperty />
          </div>
        )}
        {this.state.active === "user" && (
          <div className="container-fluid">
            <div className="header mt-4">
              <h1>Enter Saler Details</h1>
            </div>
            <div className="col mt-4">
              <FormInput labelValue={"Enter name"} />
            </div>
            <div className="col mt-2">
              <FormInput labelValue={"Enter Email"} />
            </div>
            <div className="col mt-2">
              <FormInput labelValue={"Enter Phone No"} />
            </div>
            <div className="col mt-2">
              <FormTextArea label={"Enter residential Address"} />
            </div>
            <div className="col mt-2">
              <FormTextArea label={"Enter Perminant Address"} />
            </div>
            <div className="col mt-2">
              <FormInput labelValue={"Enter Job Description"} />
            </div>
            <div className="col mt-2">
              <FormInput labelValue={"Enter Income"} />
            </div>
            <div className="col mt-2">
              <FormUpload label="Enter ID Proof(PAN Card)" />
            </div>
            <div className="col mt-2">
              <FormUpload label="Enter ID Proof(Aadhar Card)" />
            </div>
          </div>
        )}
      </div>
    );
  }
}
