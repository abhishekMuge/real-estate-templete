import React from "react";

export default function FormTextArea({ label }) {
  return (
    <div>
      <div className="mt-3">
        <div class="form-group">
          <label className="bold-text fs-4" for="exampleFormControlTextarea1">
            {label}
          </label>
          <textarea
            class="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
          ></textarea>
        </div>
      </div>
    </div>
  );
}
