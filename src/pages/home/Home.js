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
    return <div style={{background:"#123456"}}>1번 페이지</div>;
  }
}

export default Home;
