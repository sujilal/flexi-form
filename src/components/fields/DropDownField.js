import React from "react";

const DropDownField = ({ name, val, onHandleChange, label }) => {
  return (
    <div className="field">
      <label>{label}</label>
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
