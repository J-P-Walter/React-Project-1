import React, { Component } from "react";

class Navbar extends Component {
  render() {
    return (
      <nav className="inter-font flex-container">
        <img src={require("../images/logo192.png")} alt="logo" height="50px" />
        <h3>ReactFacts</h3>
        <h4>React Course - Project 1</h4>
      </nav>
    );
  }
}

export default Navbar;
