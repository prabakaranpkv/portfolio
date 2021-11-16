import { IconButton } from "@material-ui/core";
import { GitHub } from "@material-ui/icons";
import React from "react";
import { Element } from "react-scroll";
import "./contact.css";

const Contact = () => {
  return (
    <Element className="contact" id="contact">
      <h1>Contact</h1>
      <div className="contact_container">
        <p>
          Email :<span> prabakaranpkv@gmail.com</span>
        </p>
        <p>
          Mobile : <span> +91 9003282143</span>
        </p>
        <div className="contact_icons">
          <a
            href="https://github.com/prabakaranpkv?tab=repositories"
            rel="noreferrer"
            target="_blank"
          >
            <IconButton>
              GitHub <GitHub />
            </IconButton>
          </a>
        </div>
      </div>
    </Element>
  );
};

export default Contact;
