import React from "react";
import ReactDOM from "react-dom";

import "./index.css";

const Header = () => (
  <div className="containerHeader">
    <h1>Esto es un header</h1>
  </div>
);
export default Header;
ReactDOM.render(<Header />, document.getElementById("app"));
