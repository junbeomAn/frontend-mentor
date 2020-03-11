import React from "react";
import { ReactComponent as IntroImage } from "../images/illustration-hero.svg";
import "./Introduction.styles.scss";

const Introduction = () => (
  <div className="intro">
    <div className="text">
      <h1 className="main-text">A Simple Bookmark Manager</h1>
      <p className="sub-text">
        A clean and simple interface to organize your favourite websites. Open a
        new browser tab and see your sites load instantly. Try it for free.
      </p>
      <div className="function-buttons">
        <button className="chrome">Get it on Chrome</button>
        <button className="firefox">Get it on Firefox</button>
      </div>
    </div>
    <IntroImage />
    <div className="intro-shape" />
  </div>
);

export default Introduction;
