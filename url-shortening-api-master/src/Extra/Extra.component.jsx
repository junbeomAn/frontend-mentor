import React from "react";

import Banner from "../images/bg-boost-desktop";
import Button from "../Button/Button.component";

import "./Extra.styles.scss";

const Extra = () => {
  return (
    <div className="extra">
      <Banner />
      <h1>Boost your links today</h1>
      <Button>Get Started</Button>
    </div>
  );
};

export default Extra;
