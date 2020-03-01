import React from "react";

import "./Button.styles.scss";

const Button = ({ children, signUp, shorten, copied, ...otherProps }) => (
  <button
    className={`${signUp ? "sign-up" : ""} 
    ${shorten ? "shorten" : ""} 
    ${copied ? "copied" : ""} 
    custom-button`}
    {...otherProps}
  >
    {children}
  </button>
);
export default Button;
