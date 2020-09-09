import React, { Component } from "react";

class SideMenu extends Component {
  render() {
    return (
      <div className="side-menu">
        <div className="menu-container">
          <div className="menu-padding">Home</div>
          <div className="menu-padding">Profile</div>
          <div className="menu-padding">Career</div>
          <div className="menu-padding">Skill</div>
          <div className="menu-padding">Portfolio</div>
        </div>
      </div>
    );
  }
}

export default SideMenu;
