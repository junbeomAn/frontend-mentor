import React from "react";
import "./Feature-card.styles.scss";
import { ReactComponent as IconBrand } from "../../images/icon-brand-recognition.svg";
import { ReactComponent as IconCustom } from "../../images/icon-fully-customizable.svg";
import { ReactComponent as IconDetail } from "../../images/icon-detailed-records.svg";


const FeatureCard = ({ title, content, i }) => {
  return (
    <div className="card">
      <div className="icon">
        {i === 0 ? (
          <IconBrand className="img brand" />
        ) : i === 1 ? (
          <IconDetail className="img detail" />
        ) : i === 2 ? (
          <IconCustom className="img custom" />
        ) : (
          ""
        )}
      </div>
      <h3>{title}</h3>
      <p>{content}</p>
    </div>
  );
};

export default FeatureCard;
