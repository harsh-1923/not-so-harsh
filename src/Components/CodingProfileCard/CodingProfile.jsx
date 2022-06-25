import React from "react";

const CodingProfile = ({ header, img, title, link, w, h }) => {
  return (
    <a href={link} target="_blank" className="cpc-wrapper">
      <img style={{ width: w, height: h }} src={img} className="cpc-img"></img>
      <br />
      <h2 className="cpc-tag">{header}</h2>
      <h3 className="cpc-title">{title}</h3>
    </a>
  );
};

export default CodingProfile;
