import React from "react";
import BaseNav from "../components/Nav/BaseNav";
import { Outlet } from "react-router-dom";

const Main = () => {
  return (
    <div>
      <BaseNav />
      <Outlet />
    </div>
  );
};

export default Main;
