import React from "react";
import Button from "../../Button/Button.component";

const Menu = () => (
  <div className="menu">
    <ul>
      <li>Features</li>
      <li>Pricing</li>
      <li>Resources</li>
    </ul>
    <hr className="menu-split" />
    <ul>
      <li>Login</li>
      <li>
        <Button signUp={true}>Sign Up</Button>
      </li>
    </ul>
  </div>
);

export default Menu;
