import React from "react";
import ReactDOM from "react-dom";

import "./index.css";

const Body = () => (
  <div className="containerBody">
    <h2>Esto es un body</h2>
    <div>Name: body</div>
    <div>Framework: react</div>
    <div>Language: JavaScript</div>
    <div>CSS: Empty CSS</div>
  </div>
);
export default Body;
ReactDOM.render(<Body />, document.getElementById("app"));
