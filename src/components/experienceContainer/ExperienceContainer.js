import React from "react";
import { Element } from "react-scroll";
import Experience from "../experienceBox/Experience";
import "./experienceContainer.css";

const ExperienceContainer = () => {
  return (
    <Element className="experienceContainer" id="exp">
      <h1>Work Experience</h1>
      <div className="experienceContainer_info">
        <Experience
          period="3 years"
          title="Worked as a Manager in Sri Gayathri Cashews Import & Export"
        />
        <Experience
          period="2 years"
          title="Worked as a Auditing Executive in Go Fashion India Pvt Ltd"
        />
        <Experience
          period="1 year"
          title="Worked as a Manager in PTM Travels"
        />
        <Experience
          period=""
          title=" I have longed to join the software industry and now is the time for that"
          style={{ backgroundColor: "#f64c08" }}
        />
      </div>
    </Element>
  );
};

export default ExperienceContainer;
