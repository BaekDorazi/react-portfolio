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
        <FullPage className="full-page" />
        <Header />
      </div>
    );
  }
}

export default App;
