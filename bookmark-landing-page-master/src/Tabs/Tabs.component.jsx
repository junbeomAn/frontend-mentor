import React from "react";
import { Nav, NavItem, NavLink } from "reactstrap";

import "./Tabs.styles.scss";

const Tabs = ({ activeTab, toggle, featureNames }) => (
  <Nav tabs className="feature-tabs">
    {featureNames.map((feature, i) => {
      const tab = `${i + 1}`;
      return (
        <NavItem>
          <NavLink
            className={activeTab === tab ? "active" : ""}
            onClick={() => {
              toggle(tab);
            }}
          >
            {feature}
          </NavLink>
        </NavItem>
      );
    })}
  </Nav>
);

export default Tabs;
