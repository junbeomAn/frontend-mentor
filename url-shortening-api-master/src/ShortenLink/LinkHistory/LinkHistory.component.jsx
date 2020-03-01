import React from "react";
import Button from "../../Button/Button.component";
import "./LinkHistory.styles.scss";

const LinkHistory = ({ original, shorten, hashid }) => {

  const copyToClipboard = value => {
    const input = document.createElement("input");
    document.body.appendChild(input);
    input.value = value;
    input.select();    
    document.execCommand("copy");
    document.body.removeChild(input);
  };
  const onClick = e => {
    const value = document.getElementById(`shorten-link-to-copy-${hashid}`)
      .innerHTML;
    copyToClipboard(value);
    const target = e.target;
    target.innerHTML = "Copied!";
    target.style.backgroundColor = "hsl(260, 8%, 14%)";
  };

  return (
    <div className="history">
      <span>{original || "www.frontendmentor.io"}</span>
      <hr className="history-divider" />
      <div className="right">
        <span id={`shorten-link-to-copy-${hashid}`}>
          {shorten || "www.frontendmentor.io"}
        </span>
        <Button copied={true} onClick={e => onClick(e)}>
          Copy
        </Button>
      </div>
    </div>
  );
};

export default LinkHistory;
