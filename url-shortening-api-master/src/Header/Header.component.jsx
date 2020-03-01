import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

import { ReactComponent as Logo } from "../images/logo.svg";
import Container from "../Container/Container.component";
import Menu from "./Menu/Menu.component";
import "./Header.styles.scss";

const Header = ({ openMenu }) => {
  return (
    <header>
      <Container>
        <Logo className="logo" />
        <Menu />
        <FontAwesomeIcon
          className="menu-bars"
          onClick={openMenu}
          icon={faBars}
        />
      </Container>
    </header>
  );
};

export default Header;
