import React from "react";
import { Link } from "react-scroll";
import "./topContent.css";

const TopContent = () => {
  return (
    <div className="topContent">
      <div className="topContent_container">
        <h1>Prabakaran R</h1>
        <p>
          To work in a challenging environment, that fosters professional and
          personal growth and has an urge to reach the most challenging position
          within an organization that provides ample opportunities to learn and
          to contribute.
        </p>
        <a
          href="https://drive.google.com/file/d/1MARwylLVIeNDqCTVK310FVsw2jR39YUg/view?usp=sharing"
          target="_blank"
          rel="noreferrer"
        >
          <button className="topContent_resume">Resume</button>
        </a>
        <Link to="projects" smooth={true} duration={500}>
          <button className="topContent_projects">My Projects</button>
        </Link>
      </div>
    </div>
  );
};

export default TopContent;
