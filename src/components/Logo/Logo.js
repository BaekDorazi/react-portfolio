import React, { Component } from "react";
import moment from "moment";

class Logo extends Component {
  render() {
    return (
      <div>
        <div className="logo-container">
          <div className="logo">YUSUNHEE</div>
          <div className="logo-container-right">{moment().format("YYYY.MM")}</div>
        </div>
      </div>
    );
  }
}

export default Logo;
