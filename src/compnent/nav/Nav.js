import React from "react";
import { NavLink } from "react-router-dom";
import "./Nav.css";

function Nav() {
  return (
    <div className="navbar__wrapper">
      <div className="nav__container">
        <NavLink to="/" className="nav_link">
          Get Random Kitties
        </NavLink>
        <NavLink to="/fav" className="nav_link">
          My Favorite Kitties
        </NavLink>
      </div>
    </div>
  );
}

export default Nav;
