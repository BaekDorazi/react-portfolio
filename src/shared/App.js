import React, { Component } from "react";
import Header from "../components/Header/Header";
import FullPage from "../components/FullPage/FullPage";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="app-container">
        {/* userInfo : 1(백도형), 2(유선희) */}
        <FullPage className="full-page" userNum={1} />
        <Header />
      </div>
    );
  }
}

export default App;
