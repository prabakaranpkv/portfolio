import React from "react";
import Header from "./components/header/Header";
import ProjectContainer from "./components/projectContainer/ProjectContainer";
import SkillContainer from "./components/skillContainer/SkillContainer";
import Topcontainer from "./components/topcontainer/Topcontainer";
import "./App.css";
import ExperienceContainer from "./components/experienceContainer/ExperienceContainer";
import Contact from "./components/contact/Contact";

const App = () => {
  return (
    <div>
      <Header />
      <Topcontainer />
      <SkillContainer />
      <ProjectContainer />
      <ExperienceContainer />
      <Contact />
    </div>
  );
};

export default App;
