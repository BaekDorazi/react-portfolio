import React, { Component } from "react";
import Header from "../components/Header/Header";
import FullPage from "../components/FullPage/FullPage";
import Launcher from "../components/Launcher/Launcher";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { isSetTimeOut: false };
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
            {/* userInfo : 1(백도형), 2(유선희) */}
            <FullPage className="full-page" userNum={1} />
            <Header />
          </div>
        )}
      </div>
    );
  }
}

export default App;
