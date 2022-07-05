import React from "react";
import "./Projects.css";
import { Fade } from "react-awesome-reveal";

import Quarantime from "../../Components/Quarantime/Quarantime.jsx";
import Flint from "../../Components/Flint/Flint.jsx";

const Projects = () => {
  return (
    <div className="project-wrapper">
      <Fade duration={2000}>
        <h1 className="title-work-header">Projects</h1>
      </Fade>
      <Flint />
      <Quarantime />
    </div>
  );
};

export default Projects;
