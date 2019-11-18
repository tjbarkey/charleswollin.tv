import React from "react";
import "../css/Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="f-wrapper">
        <div>
          <a href="http://www.instagram.com/djchuckywo">
            <FontAwesomeIcon className="icns" icon={["fab", "instagram"]} />
          </a>
          <a href="http://www.twitter.com/cwollin">
            <FontAwesomeIcon className="icns" icon={["fab", "twitter"]} />
          </a>
          <a href="http://www.linkedin.com/in/charleswollin">
            <FontAwesomeIcon className="icns" icon={["fab", "linkedin"]} />
          </a>
        </div>

        <p>
          <FontAwesomeIcon className="icnf" icon={["far", "copyright"]} />
          {new Date().getFullYear()} Charles Wollin.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
