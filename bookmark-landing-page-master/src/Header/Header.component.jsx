import React from "react";

import { ReactComponent as Logo } from "../images/logo-bookmark.svg";
import "./Header.styles.scss";

const Header = () => (
  <header>
    <div className="container">
      <div className="logo">
        <Logo />
      </div>
      <nav>
        <ul className="menu">
          <li>features</li>
          <li>pricing</li>
          <li>contact</li>
        </ul>
        <button className="custom-button">login</button>
      </nav>
    </div>
  </header>
);

export default Header;
