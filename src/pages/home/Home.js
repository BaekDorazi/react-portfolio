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
    return <div>소개 화면</div>;
  }
}

export default Home;
