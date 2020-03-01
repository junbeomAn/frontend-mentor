import React from "react";

import Container from "../Container/Container.component";
import Logo from "../images/logo";
import { ReactComponent as Facebook } from "../images/icon-facebook.svg";
import { ReactComponent as Twitter } from "../images/icon-twitter.svg";
import { ReactComponent as Pinterest } from "../images/icon-pinterest.svg";
import { ReactComponent as Instagram } from "../images/icon-instagram.svg";

import "./Footer.styles.scss";

const ListCreator = list => {
  return (
    <ul>
      {list.map((v, i) => (
        <li key={i}>{v}</li>
      ))}
    </ul>
  );
};

const Footer = () => {
  return (
    <footer>
      <Container>
        <Logo />
        {ListCreator([
          "Features",
          "Link Shortening",
          "Branded Links",
          "Analytics"
        ])}
        {ListCreator(["Resources", "Blog", "Developers", "Support"])}
        {ListCreator(["Company", "About", "Our Team", "Careers", "Contact"])}
        {ListCreator([<Facebook />, <Twitter />, <Pinterest />, <Instagram />])}
      </Container>
    </footer>
  );
};
export default Footer;
