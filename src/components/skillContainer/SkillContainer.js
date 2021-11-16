import React from "react";
import { Element } from "react-scroll";
import LinearProgress from "@material-ui/core/LinearProgress";
import "./skillContainer.css";
import mern from "../../assets/mern.jpg";

const SkillContainer = () => {
  return (
    <Element className="skillContainer" id="skills">
      <div className="skillContainer_image">
        <img src={mern} alt="mern" />
      </div>
      <div className="skillContainer_text">
        <h2>SKILLSET</h2>
        <div className="skillContainer_skillset">
          <h5>
            ReactJS
            <img
              src={
                "https://istvankocsis.gallerycdn.vsassets.io/extensions/istvankocsis/reactcodesnippets/3.1/1582843313592/Microsoft.VisualStudio.Services.Icons.Default"
              }
              className="skillContainer_icon"
              alt={"react"}
            />
          </h5>

          <div className="skillContainer_slider skillContainer_slider1">
            <LinearProgress variant="determinate" value={80} />
          </div>
        </div>
        <div className="skillContainer_skillset">
          <h5>
            NodeJS
            <img
              src={
                "https://pluspng.com/img-png/nodejs-logo-png-nice-images-collection-node-js-desktop-wallpapers-370.png"
              }
              className="skillContainer_icon"
              alt={"nodejs"}
            />
          </h5>
          <div className="skillContainer_slider skillContainer_slider2">
            <LinearProgress variant="determinate" value={75} />
          </div>
        </div>
        <div className="skillContainer_skillset">
          <h5>
            ExpressJs{" "}
            <img
              src={"https://vectorified.com/images/express-js-icon-20.png"}
              className="skillContainer_icon"
              alt={"express"}
            />
          </h5>
          <div className="skillContainer_slider skillContainer_slider3">
            <LinearProgress variant="determinate" value={70} />
          </div>
        </div>
        <div className="skillContainer_skillset">
          <h5>
            MongoDB
            <img
              src={"http://pluspng.com/img-png/mongodb-png--770.png"}
              className="skillContainer_icon"
              alt={"mongodb"}
            />
          </h5>
          <div className="skillContainer_slider skillContainer_slider4">
            <LinearProgress variant="determinate" value={80} />
          </div>
        </div>
      </div>
    </Element>
  );
};

export default SkillContainer;
