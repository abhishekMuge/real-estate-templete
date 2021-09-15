import React from "react";

export default function FormUpload({ label }) {
  return (
    <div>
      <div className="option-header">
        <h3 className="-mb-5 fs-2 text-uppercase">{label}*</h3>
      </div>
      <div className="mt-3 col-lg-10">
        <input type="file" className="form-control custom-file-input"></input>
      </div>
    </div>
  );
}
