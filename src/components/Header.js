import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import SutroA from "./SutroA";
import "../css/Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Header = () => {
  const [headerState, setHeaderState] = useState({ isVisible: false });

  const handleClick = () => {
    let isVisible;
    isVisible = !headerState.isVisible;
    setHeaderState({ isVisible: isVisible });
  };

  return (
    <header className="header">
      <div className="h-wrapper">
        <div className="top-bar">
          <Link to="/">
            <h2>
              Ch
              <FontAwesomeIcon className="icnh" icon="broadcast-tower" />
              rles W
              <FontAwesomeIcon className="icnh" icon="futbol" />
              llin
            </h2>
          </Link>
          <FontAwesomeIcon
            onClick={handleClick}
            className="hamburger"
            icon="bars"
            size="lg"
          />
        </div>
        <div
          className={`nav-wrapper${
            headerState.isVisible ? "" : " nav-is-invisible"
          }`}
        >
          <ul className="main-nav">
            <li>
              <NavLink exact to="/">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li>
              <NavLink to="/content">Content</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
            <li>
              <NavLink to="/Blog">Blog</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
