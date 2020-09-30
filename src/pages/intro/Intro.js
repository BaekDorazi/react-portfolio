import React, { Component } from "react";
import introImg from "../../images/intro-img.png";
import bloodHandImg from "../../images/blood-hand.png";

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
        <div className="intro-image-area">
          <img className="intro-image" src={introImg} height="55%" />
          <img className="blood-hand-image1" src={bloodHandImg} height="7%" />
          <img className="blood-hand-image2" src={bloodHandImg} height="7%" />
          <img className="blood-hand-image3" src={bloodHandImg} height="7%" />
        </div>
      </div>
    );
  }
}

export default Intro;
