import React, { useState } from "react";

export default function NestedPropertyOpt({ option }) {
  const [mainMenu, setMenu] = useState("");
  const [childMenu, setChild] = useState("");
  const handleMainMenu = (event) => {
    setMenu(event.target.name);
  };
  const handleChildMenu = (event) => {
    setChild(event.target.name);
  };

  return (
    <div className="property-type">
      <div className="d-inline-flex flex-column">
        <div className="header">
          <h3 className="-mb-5 fs-4 text-uppercase">Property Type*</h3>
          <span className="mt-2">Click the any Options to see sub Options</span>
        </div>
        <div className="options-main d-inline-flex">
          {option &&
            option.map((item, index) => (
              <div className="form-check mb-2 mr-sm-2" key={item.id}>
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="inlineFormCheck"
                  checked={mainMenu === item.title.toLowerCase()}
                  name={item.title.toLowerCase()}
                  onClick={handleMainMenu}
                />
                <label className="form-check-label" htmlFor="inlineFormCheck">
                  {item.title.toLocaleUpperCase()}
                </label>
              </div>
            ))}
        </div>
        <div className="d-flex flex-wrap">
          {option.map((item, index) => {
            if (item.title.toLowerCase() === mainMenu) {
              return item.data.map((subItem, index) => (
                <div>
                  <button
                    key={index}
                    className="btn option-pill rounded-pill btn-main common-btn m-3"
                    style={{ backgroundColor: "" }}
                    name={subItem.title
                      .toLowerCase()
                      .replaceAll("/", "_")
                      .replaceAll(" ", "_")}
                    onClick={handleChildMenu}
                  >
                    {subItem.title}
                  </button>
                  <hr />
                </div>
              ));
            }
          })}
        </div>
        <div className="d-flex flex-wrap">
          {option.map((item, index) => {
            return item.data.map((subItem) => {
              if (
                subItem.title
                  .toLowerCase()
                  .replaceAll("/", "_")
                  .replaceAll(" ", "_") === childMenu
              ) {
                return subItem.data.map((childItem, index) => {
                  return (
                    <div>
                      <button
                        key={index}
                        className="btn option-pill rounded-pill btn-main common-btn m-3"
                        style={{ backgroundColor: "" }}
                        name={childItem
                          .toLowerCase()
                          .replaceAll("/", "_")
                          .replaceAll(" ", "_")}
                      >
                        {childItem}
                      </button>
                    </div>
                  );
                });
              }
            });
          })}
        </div>
      </div>
    </div>
  );
}
