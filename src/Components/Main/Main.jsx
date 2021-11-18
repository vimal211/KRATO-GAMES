import React from "react";
import { Routes, Route } from "react-router-dom";
import Sidebar from "../Sidebar/Sidebar";
import Genres from "./Genres/Genres";
import Home from "./Home/Home";
import "./Main.css";

function Main() {
  return (
    <div className="main_Container">
      <Sidebar />
      <div className="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/genres" element={<Genres />} />
        </Routes>
      </div>
    </div>
  );
}

export default Main;
