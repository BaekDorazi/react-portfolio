import React, { Component } from "react";
import ReactFullpage from "@fullpage/react-fullpage";

class Menu extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  handleClickLogo = () => {};

  render() {
    const { myInfoModalStatus } = this.state;

    return (
      <div>
        <ReactFullpage
          render={({ state, fullpageApi }) => {
            return (
              <div className="menu">
                <div onClick={() => fullpageApi.moveTo(1, 0)}>Intro</div>
                <div onClick={() => fullpageApi.moveTo(2, 0)}>Profile</div>
                <div onClick={() => fullpageApi.moveTo(3, 0)}>Career</div>
                <div onClick={() => fullpageApi.moveTo(4, 0)}>Portfolio</div>
                <div onClick={() => fullpageApi.moveTo(5, 0)}>Contact</div>
              </div>
            );
          }}
        />
      </div>
    );
  }
}

export default Menu;
