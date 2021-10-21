import React from "react";
import "./Header.css";
import tomatillo from "./assets/johnny-automatic-tomatillo.svg";

const Header = () => {
  return (
    <header className="header" id="siteHeader">
      <h1 className="header-text" id="siteHeaderText">
        rancid tomatillos
      </h1>
      <div className="tomatillo-container" id="tomatilloContainer">
        <img
          className="tomatillo-image"
          id="tomatilloImage"
          src={tomatillo}
          alt=""
        />
      </div>
    </header>
  );
};

export default Header;
