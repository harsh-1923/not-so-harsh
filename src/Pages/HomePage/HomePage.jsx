import React from "react";
import "./Homepage.css";
import { Fade, Slide } from "react-awesome-reveal";

import LinkedInCard from "../../Components/SocialConnectCards/LinkedInCard";
import GmailCard from "../../Components/SocialConnectCards/GmailCard.jsx";

const HomePage = () => {
  return (
    <div className="homepage-wrapper">
      <Fade triggerOnce={true} top>
        <h1 className="homepage-title-primary">
          Hi, I am <strong className="highlight">Harsh Sharma.</strong>
        </h1>
        <h1 className="homepage-title-primary">
          a Software Developer Intern (Mentee) at{" "}
          <strong className="highlight">Airbus.</strong>
        </h1>
      </Fade>

      <br />

      <Slide>
        <h1>Feel free to connect with me</h1>
        <div bottom className="social-media-links">
          <LinkedInCard />
          <GmailCard />
        </div>
      </Slide>
    </div>
  );
};

export default HomePage;
