import React, { useState, useEffect } from "react";

import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";

export default function Dropdown({
  forDrop,
  data,
  dropListShowIndex,
  HandleChecks,
}) {
  const [dropState, setDropState] = useState(false);
  const [dropData, setDropData] = useState(data);
  const [keyWord, setKey] = useState("");
  const [selectedProps, setSelected] = useState([]);
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
  useEffect(async () => {
    await HandleChecks(selectedProps);
  }, [selectedProps]);

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
                    control={
                      <Checkbox
                        color="secondary"
                        onChange={(event) =>
                          setSelected([...selectedProps, item.value])
                        }
                      />
                    }
                    label={item.value ? `${item.value}` : item}
                    labelPlacement="end"
                  />
                  <br />
                  <label className="label-placement">{item.label}</label>
                </li>
              ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
