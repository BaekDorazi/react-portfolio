import React, { Component } from "react";
import testGif from "../../images/test.gif";

class Launcher extends Component {
  render() {
    return (
      <div style={{ background: "#ffffff" }}>
        <img src={testGif} />
      </div>
    );
  }
}

export default Launcher;
