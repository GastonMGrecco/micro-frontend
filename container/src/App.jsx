import React from "react";
import ReactDOM from "react-dom";
import Header from "header/Header";
import Body from "body/Body";
import Login from "login/Login";
//SI SE DESCOMENTAN LINEAS 7,24-26,36 Y 43 SE GENERA ERROR DE REACT
// import Log from "./Log";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import "./index.css";

const App = () => (
  <div>
    <BrowserRouter>
      <Link className="link" to="/">
        Home
      </Link>
      <Link className="link" to="/body">
        Body
      </Link>
      <Link className="link" to="/header">
        Header
      </Link>
      {/* <Link className="link" to="/login">
        Login
      </Link> */}
      <h1 className="container">CONTAINER</h1>

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header />
              <Body />
              {/* <Login /> */}
            </>
          }
        />

        <Route path="/body" element={<Body />} />
        <Route path="/header" element={<Header />} />
        {/* <Route path="/login" element={<Login />} /> */}
      </Routes>
    </BrowserRouter>
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
