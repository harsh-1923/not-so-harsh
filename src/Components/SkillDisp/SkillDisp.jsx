import React from "react";
import "./SkillDisp.css";

const SkillDisp = ({ title }) => {
  return (
    <div className="skill-wrapper">
      <h1 className="skill-title">{title}</h1>
    </div>
  );
};

export default SkillDisp;
