import React from "react";
import "./forminput.scss";

const FormInput = ({ handleChange, label, ...otherFormInputProps }) => {
  return (
    <div className="group">
      <input
        className="form-input"
        onChange={handleChange}
        {...otherFormInputProps}
      />
      {label ? (
        <label
          className={`${
            otherFormInputProps.value.length ? "shrink" : ""
          } form-input-label`}
        >
          {label}
        </label>
      ) : null}
    </div>
  );
};

export default FormInput;
