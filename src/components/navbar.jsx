import React, { Component } from "react";

class Navbar extends Component {
  render() {
    return (
      <nav className="inter-font flex-container">
        <img
          className="nav-icon"
          src={require("../images/logo192.png")}
          alt="logo"
          height="50px"
        />
        <h3 className="nav-title">ReactFacts</h3>
        <h4 className="nav-subtitle">React Course - Project 1</h4>
      </nav>
    );
  }
}

export default Navbar;
