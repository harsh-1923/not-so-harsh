import React from "react";
import "./Quarantime.css";
import Q_ONE from "../../assets/Q_ONE.png";
import Q_TWO from "../../assets/Q_TWO.png";
import Q_THREE from "../../assets/Q_THREE.png";
import { Fade } from "react-awesome-reveal";

const Quarantime = () => {
  return (
    <>
      <Fade duration={2000}>
        <div className="quarantime-wrapper">
          <br />

          <h1 className="quarantime-title">Quarantime</h1>
          <strong className="project-title">Stay home. Stay safe</strong>
          <br />

          <img className="q-m-img" src={Q_THREE} />
        </div>
      </Fade>
      <div className="quarantime-sec">
        <strong className="project-title">
          A React Native App with minimalistic UI design that tracks World Wide
          Data of the Covid-19 data.
        </strong>

        <br />
      </div>
      <div className="xrsim-workdetails">
        <div className="xrsim-details-left">
          <button className="gitlink-btn">
            <a
              className="link"
              href="https://github.com/harsh-1923/Quarantime"
              target="_blank"
            >
              View code on GitHub
            </a>
          </button>

          <br />
          <br />
          <p>
            <strong>Tools, Frameworks and Libraries</strong>
            <div className="xrsim-techstack">
              <div className="tech">
                <p>React Native</p>
              </div>
              <div className="tech">
                <p>Expo</p>
              </div>
              <div className="tech">
                <p>React Native Reanimated</p>
              </div>
              <div className="tech">
                <p>Figma</p>
              </div>
            </div>
          </p>
        </div>
        <div className="xrsim-details-right">
          <strong>Highlights</strong>
          <br />
          <br />
          Quarantime fetches Covid-19 data from the trusted Disease.sh API.
          <br />
          <br />
          Displays a sorted Flatlist of countries according to decreasing Covid
          cases.
          <br />
          <br />
          Integrated bottom sheet to display selected country's vaccination info
        </div>
      </div>
    </>
  );
};

export default Quarantime;
