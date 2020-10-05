import React, { Component } from "react";
import introImg from "../../images/intro-img.png";
import bloodHandImg from "../../images/blood-hand.png";
import Typing from "react-typing-animation";

class Intro extends Component {
  constructor(props) {
    super(props);

    this.state = { test: false };
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    let nextState = {};

    return nextState;
  }

  componentDidMount() {}

  componentWillUnmount() {}

  showCursor = () => {
    console.log("zzz 찍히는 시점");
    this.setState({ test: true });
  };

  render() {
    const { test } = this.state;
    return (
      <div className="intro-container">
        {/* <div className="intro-content">
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
        </div> */}
        <div className="intro-content">
          <Typing loop onFinishedTyping={this.showCursor}>
            <Typing.Delay ms={2000} />
            <div className="font-size-30pt second-line">
              디자이너 유선희 포트폴리오입니다.
              <Typing.Reset delay={10000} />
            </div>
          </Typing>
        </div>
      </div>
    );
  }
}

export default Intro;
