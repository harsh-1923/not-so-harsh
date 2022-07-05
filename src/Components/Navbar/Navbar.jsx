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
      <Fade duration={2000}>
        <Link className="navbar-link" to="./">
          <h2 className="navbar-logo">
            {logo ? "not so harsh" : <MusicPlayer />}
          </h2>
        </Link>
      </Fade>

      <Fade duration={2000}>
        <button className="navbar-button click">
          <h2 className="nav-item">
            <a
              className="link"
              href="https://drive.google.com/file/d/13ItXjYd-DIekBD8Az_-nTYL3dVPiXssh/view?usp=sharing"
              target="_blank"
            >
              Resume
            </a>
          </h2>
        </button>
      </Fade>
    </div>
  );
};

export default Navbar;
