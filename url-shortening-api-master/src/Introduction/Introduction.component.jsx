import React from "react";

import Button from "../Button/Button.component";
import Container from "../Container/Container.component";
import { ReactComponent as IntroImage } from "../images/illustration-working.svg";

import "./Introduction.styles.scss";

const Introduction = () => {
  return (
    <div className="introduction">
      <Container>
        <div className="intro-text">
          <p>More than just shorter links</p>
          <p>
            Build your brand's recognition and get detailed insights on how your
            links are performing.
          </p>
          <Button>Get Started</Button>
        </div>
        <div className="intro-image">
          <IntroImage className="image" />
        </div>
      </Container>
    </div>
  );
};

export default Introduction;
