import React from "react";
import Header from "./Header.component";

const HeaderContainer = () => {
  const openMenu = () => {
    const menu = document.querySelector(".menu");
    if (menu.classList.contains("active")) {
      menu.classList.remove("active");
    } else {
      menu.classList.add("active");
    }
  };
  return <Header openMenu={openMenu} />;
};

export default HeaderContainer;
