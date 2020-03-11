import React from "react";
import { Card, CardBody, CardTitle, CardText, Button } from "reactstrap";
import "./Download.styles.scss";

import { ReactComponent as Chrome } from "../images/logo-chrome.svg";
import { ReactComponent as Firefox } from "../images/logo-firefox.svg";
import { ReactComponent as Opera } from "../images/logo-opera.svg";
import { ReactComponent as Line } from "../images/bg-dots.svg";

const Download = () => (
  <section className="download">
    <div className="container">
      <div className="text">
        <h3 className="main-text">Download the extension</h3>
        <p className="sub-text">
          We've got more browsers in the pipeline. Please do let us know if
          you've got a favourite you'd like us to prioritize.
        </p>
      </div>
      <div className="cards">
        <Card>
          <CardBody>
            <Chrome />
            <CardTitle>
              <h5>Add to Chrome</h5>
            </CardTitle>
            <CardText>Minimum version 62</CardText>
          </CardBody>
          <Line className="dot-line" />
          <CardBody>
            <Button className="custom-button">Add & Install Extension</Button>
          </CardBody>
        </Card>
        <Card>
          <CardBody>
            <Firefox />
            <CardTitle>
              <h5>Add to Firefox</h5>
            </CardTitle>
            <CardText>Minimum version 55</CardText>
          </CardBody>
          <Line className="dot-line" />
          <CardBody>
            <Button className="custom-button">Add & Install Extension</Button>
          </CardBody>
        </Card>
        <Card>
          <CardBody>
            <Opera />
            <CardTitle>
              <h5>Add to Opera</h5>
            </CardTitle>
            <CardText>Minimum version 46</CardText>
          </CardBody>
          <Line className="dot-line" />
          <CardBody>
            <Button className="custom-button">Add & Install Extension</Button>
          </CardBody>
        </Card>
      </div>
    </div>
  </section>
);

export default Download;
