import React, { useState, useEffect } from "react";
import axios from "axios";

import Button from "../Button/Button.component";
import LinkHistoryContainer from "./LinkHistory/LinkHistory.container";

import "./ShortenLink.styles.scss";

// const state = [
//   {
//     url: "https://www.frontendmentor.io",
//     hashid: "k4lKyk"
//   },
//   {
//     url: "https://www.frontendmentor.io",
//     hashid: "k4lKyka"
//   },
//   {
//     url: "https://www.frontendmentor.io",
//     hashid: "k4lKykb"
//   },
//   {
//     url: "https://www.frontendmentor.io",
//     hashid: "k4lKykc"
//   },
//   {
//     url: "https://www.frontendmentor.io",
//     hashid: "k4lKykd"
//   },
//   {
//     url: "https://www.frontendmentor.io",
//     hashid: "k4lKyks"
//   }
// ];

const ShortenLink = () => {
  const [links, setLink] = useState([]);
  const [data, setData] = useState("");

  const onChange = e => {
    setData(e.target.value);
  };

  const showErrorMsg = () => {
    const input = document.querySelector('input[name="url"]');
    const msg = document.querySelector(".error-message");
    input.classList.add("error");
    msg.style.display = "block";
  };

  const shorten = () => {
    if (!data) {
      showErrorMsg();
      return;
    }
    const postUrl = "https://rel.ink/api/links/";
    const payload = {
      url: data
    };
    axios
      .post(postUrl, payload)
      .then(res => {
        const { hashid, url } = res.data;
        setLink([...links, { hashid, url }]);
        localStorage.setItem(
          "links",
          JSON.stringify([...links, { hashid, url }])
        );
      })
      .catch(err => console.log(err));
  };

  useEffect(() => {
    let items = JSON.parse(localStorage.getItem("links"));
    setLink(items || links);
  }, []);

  return (
    <div className="shorten-link">
      <div className="shorten-container">
        <input
          type="text"
          name="url"
          value={data}
          placeholder="Shorten a link here..."
          onChange={e => onChange(e)}
        />
        <span className="error-message">Please add a link</span>
        <Button shorten={true} onClick={shorten}>
          Shorten it!
        </Button>
      </div>
      <LinkHistoryContainer links={links} />
    </div>
  );
};

export default ShortenLink;
