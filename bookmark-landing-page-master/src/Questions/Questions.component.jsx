import React, { useState } from "react";
import { Collapse, Button, CardBody, Card } from "reactstrap";
import "./Questions.styles.scss";
import faq from "./faq.data";

const Questions = () => {
  const [openQuestion, setOpenQuestion] = useState(faq.map(_ => false));

  const toggle = i => {
    const questions = faq.map(_ => false);
    questions[i] = !openQuestion[i];
    setOpenQuestion(questions);
  };

  return (
    <section className="questions">
      <div className="container">
        <div className="text">
          <h3 className="main-text">Frequently Asked Questions </h3>
          <p className="sub-text">
            Here are some of our FAQs. If you have any other questions you'd
            like answered please feel free to email us.
          </p>
        </div>
        <div className="list">
          <ul>
            {faq.map((q, i) => {
              const { title, content } = q;
              const isOpen = openQuestion[i];
              return (
                <li key={i} className="question" onClick={_ => toggle(i)}>
                  <div className="title">
                    {title}
                    {isOpen ? (
                      <i className="fas fa-chevron-up opened" />
                    ) : (
                      <i className="fas fa-chevron-down closed" />
                    )}
                  </div>
                  <CollapseContents isOpen={isOpen} content={content} />
                </li>
              );
            })}
          </ul>
        </div>
        <button className="custom-button">More Info</button>
      </div>
    </section>
  );
};

export default Questions;

const CollapseContents = ({ isOpen, content }) => (
  <Collapse isOpen={isOpen}>
    <Card
      style={{
        border: "none",
        width: "100%",
        borderRadius: "unset"
      }}
    >
      <CardBody className="card-body">{content}</CardBody>
    </Card>
  </Collapse>
);
