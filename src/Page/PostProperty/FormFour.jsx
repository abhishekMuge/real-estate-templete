import React from "react";

export default function FormFour() {
  return (
    <div>
      <div>
        <div className="container-fluid m-5 ">
          <div className="row">
            <div className="purpose-option-header">
              <h3 className="-mb-5 fs-2 text-uppercase">Upload Photos*</h3>
              <span className="mt-2">Upload Property photos</span>
            </div>
            <div className="mt-3 col-lg-10">
              <input
                type="file"
                className="form-control custom-file-input"
              ></input>
            </div>
          </div>
          <div className="row mt-4">
            <div className="purpose-option-header">
              <h3 className="-mb-5 fs-2 text-uppercase">
                Upload Cover Photos*
              </h3>
              <span className="mt-2">Upload Cover photos</span>
            </div>
            <div className="mt-3 col-lg-10">
              <input
                type="file"
                className="form-control custom-file-input"
              ></input>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
