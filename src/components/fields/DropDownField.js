import React from "react";

const DropDownField = ({ name, val, onHandleChange }) => {
  return (
    <div className="field">
      <label>Person's State</label>
      <select
        className="ui search dropdown"
        name={name}
        onChange={onHandleChange}
      >
        <option value>Select State</option>
        {val.map((values) => (
          <option value={values} key={values}>
            {values}
          </option>
        ))}
      </select>
    </div>
  );
};

export default DropDownField;
