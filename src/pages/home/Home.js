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
      <div style ={{fontSize:"300px"}}>
        <i className="icon-avatar">홈 화면</i>
      </div>
    );
  }
}

export default Home;
