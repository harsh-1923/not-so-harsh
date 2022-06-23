import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar-wrapper">
      <Link className="navbar-link" to="./">
        <h2 className="navbar-logo">
          not so harsh
        </h2>
      </Link>
      <button className="navbar-button click">
        <h2 className="nav-item">Resume</h2>
      </button>
    </div>
  );
};

export default Navbar;
