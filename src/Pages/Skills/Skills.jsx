import React from "react";
import "./skills.css";
import SkillDisp from "../../Components/SkillDisp/SkillDisp.jsx";

const Skills = () => {
  return (
    <div className="skills-wrapper">
      <h1 className="title-work-header">Skills</h1>
      <div className="skills-disp-wrapper">
        <SkillDisp title={"Java"} />
        <SkillDisp title={"JavaScript"} />
        <SkillDisp title={"ReactJS"} />
        <SkillDisp title={"NodeJs"} />
        <SkillDisp title={"Express"} />
        <SkillDisp title={"MongoDB"} />
        <SkillDisp title={"Spring"} />
        <SkillDisp title={"Git and GitHub"} />
        <SkillDisp title={"Postman"} />
        <SkillDisp title={"IntelliJ"} />
        <SkillDisp title={"VSCode"} />
      </div>
    </div>
  );
};

export default Skills;
