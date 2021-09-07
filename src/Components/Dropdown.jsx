import React, { useState } from "react";

import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";

export default function Dropdown({ forDrop, data, dropListShowIndex }) {
  const [dropState, setDropState] = useState(false);
  const [dropData, setDropData] = useState(data);
  const [keyWord, setKey] = useState("");
  const filter = (e) => {
    let keyWord = e.target.value;
    setKey(keyWord);
    if (keyWord !== "") {
      let result = dropData.slice(0, dropListShowIndex).filter((item) => {
        return item.value.toLowerCase().startsWith(keyWord.toLowerCase());
      });
      setDropData(result);
    } else {
      setDropData(data);
    }
  };

  return (
    <div>
      <div>
        <div className={"dropdown"}>
          <button
            className="btn d-inline-flex align-items-center justify-content-between px-2 btn-default dropdown-toggle"
            type="button"
            data-toggle="dropdown"
            aria-expanded={dropState}
            onClick={() => setDropState(!dropState)}
          >
            <a href="/#">{forDrop}</a>
          </button>
          <ul
            className="dropdown-menu"
            onClick={(e) => {
              e.stopPropagation();
            }}
          >
            <li className="m-2">
              <input
                className="form-control"
                type="text"
                onChange={filter}
                autoComplete="off"
                id="purpose-optionList-input"
                value={keyWord}
              />
            </li>
            {dropData &&
              dropData.slice(0, dropListShowIndex).map((item) => (
                <li
                  style={{
                    margin: "0 10px",
                    position: "relative",
                  }}
                >
                  <FormControlLabel
                    value={item ? item.value : item}
                    control={<Checkbox color="secondary" />}
                    label={item.value ? `${item.value}` : item}
                    labelPlacement="end"
                  />
                  <br />
                  <label className="label-placement">{item.label}</label>
                  {/* <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      defaultValue="New_Booking"
                      id="purpose-check"
                    />
                    <label className="form-check-label" htmlFor="purpose-check">
                      <span>{item.value ? item.value : item}</span>
                      <br />
                      <span className="drop-item-label">
                        {item.label ? item.label : ""}
                      </span>
                    </label>
                  </div> */}
                </li>
              ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
