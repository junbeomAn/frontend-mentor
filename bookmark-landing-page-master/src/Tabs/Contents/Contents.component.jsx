import React from "react";
import {
  TabContent,
  TabPane,
  Card,
  Button,
  CardTitle,
  CardText,
  Row,
  Col
} from "reactstrap";
import "./Contents.styles.scss";
import { ReactComponent as TabOne } from "../../images/illustration-features-tab-1.svg";
import { ReactComponent as TabTwo } from "../../images/illustration-features-tab-2.svg";
import { ReactComponent as TabThree } from "../../images/illustration-features-tab-3.svg";

const images = [
  <TabOne className="image" />,
  <TabTwo className="image" />,
  <TabThree className="image" />
];

const Contents = ({ activeTab, tabContents }) => (
  <TabContent activeTab={activeTab}>
    {tabContents.map((value, i) => {
      const { title, content } = value;
      const id = `${i + 1}`;
      return (
        <TabPane tabId={id}>
          <Row>
            <Col sm="6">{images[i]}</Col>
            <div className="shape" />
            <Col sm="6">
              <Card body>
                <CardTitle>
                  <h4>{title}</h4>
                </CardTitle>
                <CardText>{content}</CardText>
                <Button className="custom-button">More Info</Button>
              </Card>
            </Col>
          </Row>
        </TabPane>
      );
    })}
  </TabContent>
);

export default Contents;
