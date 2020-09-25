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
          <div>
            <i className="icon-avatar"> 내 정보</i>
          </div>
          <div>
            <i className="icon-logout">로그아웃</i>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
