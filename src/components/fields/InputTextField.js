import React from "react";

const InputTextField = ({ name, onHandleChange, label }) => {
  return (
    <div className="field">
      <label>{label}</label>
      <input
        type="text"
        name={name}
        placeholder="Enter Name"
        required="required"
        autoComplete="off"
        onChange={onHandleChange}
      />
    </div>
  );
};

export default InputTextField;
