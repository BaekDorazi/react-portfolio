import React, { Component } from "react";

class Home extends Component {
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
      <div className="home-container">
        안녕하세요. (나이)살(성별) (이름)입니다.
        <br />
        (직업 or 하는일)
      </div>
    );
  }
}

export default Home;
