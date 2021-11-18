import React from "react";
import "./Sidebar.css";
import HomeIcon from "@mui/icons-material/Home";
import CategoryIcon from "@mui/icons-material/Category";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div className="sidebar">
      <Link style={{ textDecoration: "none" }} to="/">
        <div>
          <HomeIcon />
          <span>Home</span>
        </div>
      </Link>
      <Link style={{ textDecoration: "none" }} to="/genres">
        <div>
          <CategoryIcon /> <span>Genres</span>
        </div>
      </Link>
    </div>
  );
}

export default Sidebar;
