import React from "react";
import { ReactComponent as Error } from "../images/icon-error.svg";

import "./Banner.styles.scss";

const Banner = () => {
  const onError = () => {
    const { value } = document.querySelector("input[type=email]");
    const { classList: icon } = document.querySelector(".error-icon");
    const { classList: container } = document.querySelector(".input-container");
    const { classList: message } = document.querySelector(".error-msg");

    if (!value.endsWith(".com")) {
      icon.add("active");
      message.add("active");
      container.add("error");
      return;
    }
  };

  return (
    <section className="banner">
      <p className="member-count">35,000+ already joined</p>
      <p className="invite-msg">Stay-up-to-date with what we're doing</p>
      <div className="contact">
        <div className="input-container">
          <input required type="email" placeholder="Enter your email address" />
          <Error className="error-icon" />
          <span className="error-msg">Whoops, make sure it's an email</span>
        </div>
        <button className="custom-buttom" onClick={onError}>
          Contact Us
        </button>
      </div>
    </section>
  );
};

export default Banner;
