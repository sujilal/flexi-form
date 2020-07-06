import React from "react";

const DropDownField = () => {
  return (
    <div>
      <div className="ui form">
        <div className="field">
          <select className="ui search dropdown">
            <option value>Select Country</option>
            <option value="AF">Afghanistan</option>
            <option value="AX">Åland Islands</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default DropDownField;
