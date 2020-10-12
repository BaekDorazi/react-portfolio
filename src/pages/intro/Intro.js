import React, { Component } from "react";
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
                : "백도형과 유선희의 포폴이에여♥ 화이팅"}
              {/* <Typing.Reset delay={10000} /> */}
            </div>
          </Typing>
        </div>
      </div>
    );
  }
}

export default Intro;