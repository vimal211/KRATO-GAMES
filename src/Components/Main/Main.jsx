import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import Home from "./Home/Home";
import "./Main.css";

function Main() {
  return (
    <div className="main_Container">
      <Sidebar />
      <div className="main">
        <Home />
      </div>
    </div>
  );
}

export default Main;
