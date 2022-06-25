import React from "react";
import "./WorkPage.css";
import XRSIM_MOCKUP from "../../assets/XRSIM_MOCKUP.png";
import AIRBUS from "../../assets/AIRBUS.png";
import { Fade, Slide, Zoom } from "react-awesome-reveal";
import { Link } from "react-router-dom";
import PHONE_XRSIM from "../../assets/PHONE_XRSIM.png";

const WorkPage = () => {
  return (
    <div className="workpage-wrapper">
      <Fade duration={2000}>
        <h1 className="title-work-header">Experience</h1>

        <br />
        <h1 className="title-work">
          <a className="link" href="http://xrsim.co" target="_blank">
            XRSim
          </a>
        </h1>
        <strong className="title-role">Full Stack Developer</strong>
        <strong className="title-role">Dec 2021 - May 2022</strong>
        <br />
        <h1 className="tag-xrsim">New look, new website</h1>
      </Fade>
      <img className="xrsim-m-img" src={XRSIM_MOCKUP} />
      {/* <img className="xrsim-m-img" src={PHONE_XRSIM} /> */}

      <div className="xrsim-workdetails">
        <div className="xrsim-details-left">
          <p>
            <strong>Role </strong> Full Stack Developer
            <br />
            <strong>Duration </strong> 6 months
            <br />
            <br />
            <strong>Tech Stack</strong>
            <div className="xrsim-techstack">
              <div className="tech">
                <p>ReactJS</p>
              </div>
              <div className="tech">
                <p>NodeJS</p>
              </div>
              <div className="tech">
                <p>MongoDB</p>
              </div>
              <div className="tech">
                <p>Express</p>
              </div>
              <div className="tech">
                <p>three.js</p>
              </div>
              <div className="tech">
                <p>Postman</p>
              </div>
              <div className="tech">
                <p>AdobeXD</p>
              </div>
            </div>
          </p>
        </div>
        <div className="xrsim-details-right">
          <strong>Highlights</strong>
          <br />
          <br />
          Complete UI/UX redesign from scratch
          <br />
          <br />
          Built a new website for XRSim from scratch using ReactJS, NodeJS,
          Express and MongoDB
          <br />
          <br />
          Dynamic blog page with backend integration and admin support for
          maintaining blogs
          <br />
          <br />
          Integrated API endpoints for data flow, admin dashboard and order
          management system
        </div>
      </div>
    </div>
  );
};

export default WorkPage;
