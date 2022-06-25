import React from "react";
import HomePage from "../HomePage/HomePage.jsx";
import AboutMe from "../AboutMe/AboutMe.jsx";
import WorkPage from "../WorkPage/WorkPage.jsx";
import Projects from "../Projects/Projects.jsx";
import Skills from "../Skills/Skills.jsx";

const LandingPage = () => {
  return (
    <div>
      <HomePage />
      <AboutMe />
      <WorkPage />
      <Projects />
      {/* <Skills /> */}
    </div>
  );
};

export default LandingPage;
