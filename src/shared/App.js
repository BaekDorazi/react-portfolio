import React, { Component } from "react";
import Header from "components/Header/Header";
import FullPage from "components/FullPage/FullPage";
import Launcher from "components/Launcher/Launcher";

import { connect } from "react-redux";
import { setAppState } from "store/modules/AppConfig";

const mapStateToProps = ({}) => ({});

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isSetTimeOut: false,
      userNum: 2, //1: 백도형, 2: 유선희
    };
  }

  componentDidMount() {
    const { setAppState } = this.props;
    setAppState(this.state); //App의 state 값을 저장
  }

  render() {
    const { isSetTimeOut } = this.state;

    if (!isSetTimeOut) {
      setTimeout(() => {
        this.setState({ isSetTimeOut: true });
      }, 2000);
    }

    return (
      <div>
        {!isSetTimeOut && (
          <div style={{ width: "100%", height: "100%" }}>
            <Launcher />
          </div>
        )}
        {isSetTimeOut && (
          <div className="app-container">
            <FullPage className="full-page" />
            <Header />
          </div>
        )}
      </div>
    );
  }
}

export default connect(mapStateToProps, { setAppState })(App);
