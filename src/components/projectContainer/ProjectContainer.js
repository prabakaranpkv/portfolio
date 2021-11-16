import React from "react";
import { Element } from "react-scroll";
import Project from "../project/Project";
import "./projectContainer.css";
import chatapp from "../../assets/chatapp.png";
import flipkart from "../../assets/flipkart.png";

const ProjectContainer = () => {
  const projects = [
    {
      img: chatapp,
      title: "ChatApp",
      desc: "ChatApp build with ReactJs, NodeJs, ExpressJs and MongoDB, and used Google Authentication IDE",
      link: "https://chattingapp-client.netlify.app",
    },
    {
      img: flipkart,
      title: "Flipkart Clone",
      desc: "Flipkart ECommerce Website with ReactJs, NodeJs, ExpressJs and MongoDB, and used Paytm IDE for Payment Gateway ",
      link: "https://flipkartclone-client.netlify.app",
    },
  ];

  return (
    <Element className="projectContainer" id="projects">
      <h1>Projects</h1>
      <p>Here are some projects which I done</p>
      <div className="projectContainer_projects">
        {projects.map((project, index) => {
          return (
            <Project
              key={index}
              img={project.img}
              title={project.title}
              desc={project.desc}
              link={project.link}
            />
          );
        })}
      </div>
    </Element>
  );
};

export default ProjectContainer;
