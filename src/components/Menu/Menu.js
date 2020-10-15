import React, { Component } from "react";
import ReactFullpage from "@fullpage/react-fullpage";

class Menu extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  handleClickLogo = () => {};

  render() {
    const { showPageName } = this.props;

    return (
      <div>
        <ReactFullpage
          render={({ state, fullpageApi }) => {
            return (
              <div className="menu">
                <div
                  className={
                    showPageName === "Intro"
                      ? "menu-btn selected-menu"
                      : "menu-btn"
                  }
                  onClick={() => fullpageApi.moveTo(1, 0)}
                >
                  Intro
                </div>
                <div
                  className={
                    showPageName === "Profile"
                      ? "menu-btn selected-menu"
                      : "menu-btn"
                  }
                  onClick={() => fullpageApi.moveTo(2, 0)}
                >
                  Profile
                </div>
                <div
                  className={
                    showPageName === "Career"
                      ? "menu-btn selected-menu"
                      : "menu-btn"
                  }
                  onClick={() => fullpageApi.moveTo(3, 0)}
                >
                  Career
                </div>
                <div
                  className={
                    showPageName === "Portfolio"
                      ? "menu-btn selected-menu"
                      : "menu-btn"
                  }
                  onClick={() => fullpageApi.moveTo(4, 0)}
                >
                  Portfolio
                </div>
                <div
                  className={
                    showPageName === "Contact"
                      ? "menu-btn selected-menu"
                      : "menu-btn"
                  }
                  onClick={() => fullpageApi.moveTo(5, 0)}
                >
                  Contact
                </div>
              </div>
            );
          }}
        />
      </div>
    );
  }
}

export default Menu;
