import React, { useState } from "react";

export default function Dropdown({ forDrop, data, dropListShowIndex }) {
  const [dropData, setDropData] = useState(data);
  const [keyWord, setKey] = useState("");
  const filter = (e) => {
    let keyWord = e.target.value;
    setKey(keyWord);
    if (keyWord !== "") {
      let result = dropData.slice(0, dropListShowIndex).filter((item) => {
        return item.toLowerCase().startsWith(keyWord.toLowerCase());
      });
      setDropData(result);
    } else {
      setDropData(data);
    }
  };

  return (
    <div>
      <div>
        <div className="dropdown">
          <button
            className="btn d-inline-flex align-items-center justify-content-between px-2 btn-default dropdown-toggle"
            type="button"
            data-toggle="dropdown"
          >
            <a>{forDrop}</a>
          </button>
          <ul
            className="dropdown-menu purpose-optionList"
            id="purpose-optionList"
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
                <li>
                  <div className="form-check" data-item-id="new booking">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      defaultValue="New_Booking"
                      id="purpose-check"
                    />
                    <label className="form-check-label" htmlFor="purpose-check">
                      <span>{item}</span>
                    </label>
                  </div>
                </li>
              ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
