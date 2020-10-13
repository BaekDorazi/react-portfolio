import React, { Component } from "react";
import Typing from "react-typing-animation";

import { connect } from "react-redux";

const mapStateToProps = ({ appConfig }) => ({
  userNum: appConfig.appState.userNum,
});

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
          <Typing onFinishedTyping={this.showCursor}>
            <Typing.Delay ms={0} />
            <div className="font-size-50pt">
              {userNum === 1
                ? "Developer 백도형 포트폴리오입니다."
                : "웹 HTML+CSS+Javascript 포트폴리오입니다."}
            </div>
          </Typing>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, {})(Intro);
