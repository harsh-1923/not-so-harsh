import React from "react";
import "./Flint.css";
import { Fade, Slide, Zoom } from "react-awesome-reveal";

import FLINT_INTRO from "../../assets/FLINT_INTRO.png";
import F_II from "../../assets/F_II.png";
import BG_F from "../../assets/BG_F.png";
import FLINT_MESSAGES from "../../assets/FLINT_MESSAGES.png";
import SCREENS from "../../assets/SCREENS.png";
import ICONS from "../../assets/ICONS.png";
import TAB_FLINT from "../../assets/TAB_FLINT.png";
import LAPTOP_FLINT from "../../assets/LAPTOP_FLINT.png";

const Flint = () => {
  return (
    <div className="flint-wrapper">
      <Fade duration={3000} cascade={true}>
        <div className="quarantime-wrapper">
          <br />

          <div className="flint-project-img-wrapper">
            <h1 className="quarantime-title">Flint</h1>

            <strong className="flint-project-title">
              The product for all your productivity needs.
            </strong>
            <br />
            <img className="f-m-img" src={F_II} />
          </div>
        </div>
      </Fade>
      <Fade>
        <div className="flint-highlights-wrapper">
          <h1 className="flint-project-title-2">Project Highlights</h1>
          <div className="fph-b-wrapper">
            <div className="fph-b-l1">
              <div className="fph-b-l1-p1">
                <div className="fph-b-l1-title-wrapper">
                  <h1>
                    Create collaborative workspaces. <br />
                    with anyone. <br />
                    from anywhere. <br />
                    on any device.
                  </h1>
                  <div className="fph-b-l1-button-wrapper">
                    <svg
                      className="fph-b-l1-button"
                      stroke="currentColor"
                      fill="#f73558"
                      stroke-width="0"
                      viewBox="0 0 1024 1024"
                      height="1.5em"
                      width="1.5em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm192 472c0 4.4-3.6 8-8 8H544v152c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V544H328c-4.4 0-8-3.6-8-8v-48c0-4.4 3.6-8 8-8h152V328c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v152h152c4.4 0 8 3.6 8 8v48z"></path>
                    </svg>
                  </div>
                </div>
              </div>
              <div className="fph-b-l1-p2">
                <h1 className="title-dash">Flint Messages</h1>
                <small style={{ textAlign: "center" }}>
                  Get Flint Premium and boost your productivity by discussing
                  with you collaborators inside work spaces!!
                </small>
                <img className="fph-b-l1-img-flint-msg" src={FLINT_MESSAGES} />
              </div>
            </div>
            <div className="fph-b-l2">
              <h1 className="title-dash">Consistent Design</h1>
              <p
                style={{
                  textAlign: "center",
                  color: "black",
                  fontWeight: "600",
                }}
              >
                Enjoy a consistent, easy to understand UI design across all
                screens sizes to ease your work flow
              </p>
              <img className="fph-b-l2-img-consistent" src={ICONS} />
              <img className="fph-b-l3-img-tab" src={TAB_FLINT} />
            </div>

            <div className="laptop-flint-wrapper">
              <img className="laptop-flint-img" src={LAPTOP_FLINT} />
            </div>
          </div>
        </div>
      </Fade>
      <div className="mb">
        <div style={{ marginTop: "40px" }} className="xrsim-workdetails">
          <div className="xrsim-details-left">
            <button className="gitlink-btn">
              <a
                className="link"
                href="https://github.com/harsh-1923/flint-app"
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
                  <p>ReactJS</p>
                </div>
                <div className="tech">
                  <p>Node.js</p>
                </div>
                <div className="tech">
                  <p>Express</p>
                </div>
                <div className="tech">
                  <p>MongoDB</p>
                </div>
                <div className="tech">
                  <p>CSS</p>
                </div>
                <div className="tech">
                  <p>Postman</p>
                </div>
              </div>
            </p>
          </div>
          <div className="xrsim-details-right special">
            <strong>Highlights</strong>
            <br />
            <br />
            Create shared workspaces with other users and add notes, to-dos and
            bookmarks
            <br />
            <br />
            Integrated Payments Gateway for Flint Premium features like Flint
            Messages
            <br />
            <br />
            Responsive UI design for all screen sizes
          </div>
        </div>
      </div>
    </div>
  );
};

export default Flint;
