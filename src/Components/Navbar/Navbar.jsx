import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { Fade, Slide } from "react-awesome-reveal";

import MusicPlayer from "../MusicPlayer/MusicPlayer.jsx";

const Navbar = () => {
  const [logo, setLogo] = useState(true);
  let timerID = useRef(null);

  timerID = setTimeout(() => {
    setLogo(false);
  }, 5000);

  return (
    <div className="navbar-wrapper">
      <Slide top>
        <Link className="navbar-link" to="./">
          <h2 className="navbar-logo">
            {logo ? "not so harsh" : <MusicPlayer />}
          </h2>
        </Link>
      </Slide>

      <Slide top>
        <button className="navbar-button click">
          <h2 className="nav-item">Resume</h2>
        </button>
      </Slide>
    </div>
  );
};

export default Navbar;
