import React from "react";

const InputTextField = ({ name, onHandleChange }) => {
  return (
    <div className="field">
      <input
        type="text"
        name={name}
        autoComplete="off"
        onChange={onHandleChange}
      />
    </div>
  );
};

export default InputTextField;
