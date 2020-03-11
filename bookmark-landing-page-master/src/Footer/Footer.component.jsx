import React from "react";

import { ReactComponent as Logo } from "../images/logo-bookmark.svg";
import { ReactComponent as IconFB } from "../images/icon-facebook.svg";
import { ReactComponent as IconTW } from "../images/icon-twitter.svg";
import "./Footer.styles.scss";

const Footer = () => (
  <footer>
    <div className="container">
      <Logo className="logo" />
      <ul className="nav-footer">
        <li>features</li>
        <li>pricing</li>
        <li>contact</li>
      </ul>
      <div />
      <ul className="social-icons">
        <li>
          <IconFB className="icon" />
        </li>
        <li>
          <IconTW className="icon" />
        </li>
      </ul>
    </div>
    <p className="attribution">
      Challenge by&nbsp;
      <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
        Frontend Mentor
      </a>
      . Coded by <a href="#">Junbeom An</a>.
    </p>
  </footer>
);

export default Footer;
