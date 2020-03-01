import React from "react";

import Container from "../Container/Container.component";
import FeatureCard from "./Feature-card/Feature-card.component";
import ShortenLink from "../ShortenLink/ShortenLink.component";

import data from "./Features.data";
import "./Features.styles.scss";

const Features = () => {
  return (
    <div className="features">
      <Container>
        <ShortenLink />
        <div className="text">
          <h2>Advanced Statistics</h2>
          <p>
            Track how your links are performing across the web with our advanced
            statistics dashboard.
          </p>
        </div>
        <div className="cards">
          {data.map(({ title, content }, i) => (
            <FeatureCard key={i} title={title} content={content} i={i} />
          ))}
        </div>
        <hr className="vertical-line"/>
      </Container>
    </div>
  );
};
export default Features;
