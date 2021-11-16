import React from "react";
import "./experience.css";

const Experience = ({ period, title, style }) => {
  return (
    <div style={{ ...style }} className="experience">
      <h4>{period}</h4>
      <p>{title}</p>
    </div>
  );
};

export default Experience;
