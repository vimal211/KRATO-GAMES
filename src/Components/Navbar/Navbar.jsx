import React from "react";
import "./Navbar.css";
import profile from "../../Images/boom.jpg";

function Navbar() {
  return (
    <div className="navbar__Container">
      <div className="navbar">
        <h2>
          KRATO<span>GAMES</span>
        </h2>
        <div className="right">
          <div className="profile">
            <img src={profile} alt="" />
            <div className="name">
              <h3>Mr.Bo0M</h3>
              <p>@boom211</p>
            </div>
          </div>
          <p>Favourites</p>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
