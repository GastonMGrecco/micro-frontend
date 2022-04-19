import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Link } from "react-router-dom";

import "./index.css";

const Login = () => (
  <div className="containerLogin">
    <BrowserRouter>
      <h1>Esto es un Login</h1>
      <div>Name: login</div>
      <div>Framework: react</div>
      <div>Language: JavaScript</div>
      <div>CSS: Empty CSS</div>
      <button>ir a Logup</button>
      <Link to="/login">Ir a login</Link>
    </BrowserRouter>
  </div>
);
export default Login;
ReactDOM.render(<Login />, document.getElementById("app"));
