import React, { Component } from "react";
import logoImg from "../../images/001-knight.png";

class Header extends Component {
  render() {
    return (
      <div className="abs header">
        <div className="logo-container">
          <img src={logoImg} width="45px" height="45px" />
        </div>
        <div className="menu">
          <div className="my-info-icon">
            <i className="icon-avatar" />
          </div>
          <div className="logout-icon">
            <i className="icon-logout" />
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
