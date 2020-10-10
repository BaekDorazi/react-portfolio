import React, { Component } from "react";
import introImg from "../../images/intro-img.png";
import bloodHandImg from "../../images/blood-hand.png";
import Typing from "react-typing-animation";

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
    const { userNum } = this.props;

    return (
      <div className="intro-container">
        <div className="intro-content intro-text-cursor">
          {/* <Typing loop onFinishedTyping={this.showCursor}> */}
          <Typing onFinishedTyping={this.showCursor}>
            <Typing.Delay ms={0} />
            <div className="font-size-50pt">
              {userNum === 1
                ? "Developer 백도형 포트폴리오입니다."
                : "디자이너 유선희 포트폴리오입니다."}
              {/* <Typing.Reset delay={10000} /> */}
            </div>
          </Typing>
        </div>
      </div>
    );
  }
}

export default Intro;
