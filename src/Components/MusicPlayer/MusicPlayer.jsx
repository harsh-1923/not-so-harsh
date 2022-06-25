import React, { useState, useRef } from "react";
import { Fade, Slide } from "react-awesome-reveal";

const MusicPlayer = () => {
  const [text, setText] = useState(true);
  let timerID = useRef(null);

  timerID = setTimeout(() => {
    setText(false);
  }, 5000);
  return (
    <div>
      {text ? (
        <Fade>
          <h2 className="navbar-logo">my music pick of the day</h2>
        </Fade>
      ) : (
        <Slide duration={500}>
          <audio controls autoPlay={true}>
            <source
              src="https://raag.fm/files/mp3/128/Hindi/11060802/Log%20Kya%20Kahenge%20-%20(Raag.Fm).mp3"
              type="audio/mpeg"
            ></source>
          </audio>
        </Slide>
      )}
    </div>
  );
};

export default MusicPlayer;
