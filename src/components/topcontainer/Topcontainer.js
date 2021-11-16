import React from "react";
import { Element } from "react-scroll";
import TopContent from "../topContent/TopContent";
import "./topcontainer.css";

const Topcontainer = () => {
  return (
    <Element name="about" className="topContainer">
      <TopContent />
    </Element>
  );
};

export default Topcontainer;
