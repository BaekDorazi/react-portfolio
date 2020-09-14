import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
      <div className="abs header">
        <div className="logo">로고</div>
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
