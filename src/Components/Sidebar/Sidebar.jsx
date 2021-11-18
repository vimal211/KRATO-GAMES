import React from "react";
import "./Sidebar.css";
import HomeIcon from "@mui/icons-material/Home";
import CategoryIcon from "@mui/icons-material/Category";

function Sidebar() {
  return (
    <div className="sidebar">
      <div>
        <HomeIcon />
        <span>Home</span>
      </div>
      <div>
        <CategoryIcon /> <span>Genres</span>
      </div>
    </div>
  );
}

export default Sidebar;
