import React, { Component } from "react";
import introImg from "../../images/intro-img.png";
// import logoImg from "../../images/001-knight.png";

class Intro extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    let nextState = {};

    return nextState;
  }

  componentDidMount() {}

  componentWillUnmount() {}

  render() {
    return (
      <div className="intro-container">
        <div className="intro-content">
          <div className="font-size-12pt first-line">Hi, my name is</div>
          <div className="font-size-30pt second-line">Yusunhee.</div>
          <div className="font-size-30pt third-line">
            All I Wanna Do <font className="red-font">Design&Programming.</font>
          </div>
          <div className="font-size-10pt fourth-line">
            Web Design / Publisher
          </div>
        </div>

        <img className="intro-image" src={introImg} height="65%" />
      </div>
    );
  }
}

export default Intro;
