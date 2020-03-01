import React from "react";

import { default as Header } from "./Header/Header.container";
import Introduction from "./Introduction/Introduction.component";
import Features from "./Features/Features.component";
import Extra from "./Extra/Extra.component";
import Footer from "./Footer/Footer.component";

import "./styles.scss";

export default function App() {
  return (
    <div className="App">
      <Header />
      <Introduction />
      <Features />
      <Extra />
      <Footer />
    </div>
  );
}
