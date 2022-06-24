import React from "react";
import "./aboutme.css";
import LC_LOGO from "../../assets/LC_LOGO.png";
import GFG_LOGO from "../../assets/GFG_LOGO.png";
import CC_LOGO from "../../assets/CC_LOGO.png";

import { Fade, Slide, Zoom } from "react-awesome-reveal";

import CodingProfile from "../../Components/CodingProfileCard/CodingProfile.jsx";

const AboutMe = () => {
  return (
    <div className="aboutme-wrapper">
      <Fade>
        <h1 className="title">About me</h1>
        <p className="aboutme-content">
          I am a final year undergrad (2023 batch) in{" "}
          <span className="special-text">Jadavpur University, Kolkata</span> and
          an aspring{" "}
          <span className="special-text">Software Developer Engineer.</span>{" "}
          <br />
          <br />I am a web development enthusiast and I primarily use{" "}
          <span className="special-text">ReactJs</span> as my frontend
          framework. <span className="special-text"></span>
          <br />
          <br />
          Besides development, I enjoy solving{" "}
          <span className="special-text">
            Data Structures and Algorithm problem
          </span>{" "}
          on various platforms.
        </p>
      </Fade>

      <br />
      <br />
      <br />
      <br />

      <Fade direction={"bottom"} cascade={true}>
        <h1 className="title">Check out my coding profiles</h1>
      </Fade>
      <div className="coding-profiles">
        <Zoom>
          <CodingProfile
            header={"LeetCode"}
            w={"100px"}
            h={"100px"}
            link={"https://leetcode.com/harsh_ju_sharma/"}
            img={LC_LOGO}
            title={"400+ problems solved"}
          />
          <CodingProfile
            header={"GeekForGeeks"}
            w={"180px"}
            h={"90px"}
            link={"https://auth.geeksforgeeks.org/user/harshjusharma/practice"}
            img={GFG_LOGO}
            title={"150+ problems solved"}
          />
          <CodingProfile
            header={"Codechef"}
            w={"100px"}
            h={"100px"}
            link={"https://www.codechef.com/users/harsh_ju"}
            img={CC_LOGO}
            title={"max 1989 | 4 star"}
          />
        </Zoom>
      </div>
    </div>
  );
};

export default AboutMe;
