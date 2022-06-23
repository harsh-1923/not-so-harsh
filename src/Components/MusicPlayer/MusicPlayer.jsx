import React, { useState, useRef } from "react";

const MusicPlayer = () => {
  const [text, setText] = useState(true);
  let timerID = useRef(null);

  timerID = setTimeout(() => {
    setText(false);
  }, 5000);
  return (
    <div>
      {text ? (
        <h2 className="navbar-logo">my music pick of the day</h2>
      ) : (
        <audio controls autoplay={true}>
          <source
            src="https://raag.fm/files/mp3/128/Hindi/11060802/Log%20Kya%20Kahenge%20-%20(Raag.Fm).mp3"
            type="audio/mpeg"
          ></source>
        </audio>
      )}
    </div>
  );
};

export default MusicPlayer;
