import React from "react";
import "./styles.scss";

import Header from "./Header/Header.component";
import Introduction from "./Introduction/Introduction.component";
import Features from "./Features/Features.component";
import Download from "./Download/Download.component";
import Questions from "./Questions/Questions.component";
import Banner from "./Banner/Banner.component";
import Footer from "./Footer/Footer.component";

export default function App() {
  return (
    <div className="App">
      <Header />
      <Introduction />
      <Features />
      <Download />
      <Questions />
      <Banner />
      <Footer />
    </div>
  );
}
