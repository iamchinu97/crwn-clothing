import React from "react";
import "./custombutton.scss";

const CustomButton = ({ children, isGoogleSigIn, inverted, ...otherProps }) => {
  return (
    <div
      className={`${inverted ? "inverted" : ""} ${
        isGoogleSigIn ? "google-sign-in" : ""
      } custom-button`}
      {...otherProps}
    >
      {children}
    </div>
  );
};

export default CustomButton;
