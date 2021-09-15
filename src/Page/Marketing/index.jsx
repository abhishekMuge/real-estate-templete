import React from "react";
import FormCheck from "../../Components/FormComponent/FormCheck";
import FormTextArea from "../../Components/FormComponent/FormTextArea";
import FormUpload from "../../Components/FormComponent/FormUpload";

export default function Marketing() {
  return (
    <div
      className="container-fluid"
      style={{
        padding: "20px",
      }}
    >
      <div className="row">
        <div
          className="d-flex text-center"
          style={{
            width: "100%",
          }}
        >
          <h2>Marketing</h2>
        </div>
        <div className="d-flex mt-3">
          <FormCheck item={"SMS"} />
          <FormCheck item={"Email"} />
        </div>
        <div className="col-14 mt-3">
          <FormTextArea label={"Enter Template Details"} />
        </div>
        <div className="col-14 mt-3">
          <FormUpload label={"Upload Excel Sheet"} />
        </div>
      </div>
    </div>
  );
}
