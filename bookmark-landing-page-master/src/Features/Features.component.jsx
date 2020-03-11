import React, { useState } from "react";

import Tabs from "../Tabs/Tabs.component";
import Contents from "../Tabs/Contents/Contents.component";
import { featuresContents } from "./Features.data";
import "./Features.styles.scss";

const Features = () => {
  const [activeTab, setActiveTab] = useState("1");
  const toggle = tab => {
    if (activeTab !== tab) setActiveTab(tab);
  };
  const { featureNames, tabContents } = featuresContents;
  return (
    <section className="features">
      <div className="container">
        <div className="text">
          <h3 className="main-text">Features</h3>
          <p className="sub-text">
            Our aim is to make it quick and easy for you to access your
            favourite websites. Your bookmarks sync between your devices so you
            can access them on the go.
          </p>
        </div>
        <Tabs
          toggle={toggle}
          activeTab={activeTab}
          featureNames={featureNames}
        />
        <Contents tabContents={tabContents} activeTab={activeTab} />
      </div>
    </section>
  );
};

export default Features;
