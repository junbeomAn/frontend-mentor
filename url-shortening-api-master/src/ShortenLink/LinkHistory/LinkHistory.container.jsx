import React from "react";
import LinkHistory from "./LinkHistory.component";
import Container from "../../Container/Container.component";

const LinkHistoryContainer = ({ links }) => {
  let len = links.length;
  return (
    <Container>
      {links.map((_, i) => {
        let idx = len - 1 - i;
        const { hashid, url } = links[idx];
        return (
          <LinkHistory
            key={hashid + i}
            hashid={hashid}
            original={url}
            shorten={`https://rel.ink/${hashid}`}
          />
        );
      })}
    </Container>
  );
};

export default LinkHistoryContainer;
