import React from "react";
import { Outlet } from "react-router-dom";
import Login from "login/Login";

const Log = () => {
  return (
    <>
      <Login />
      <Outlet />
    </>
  );
};

export default Log;
