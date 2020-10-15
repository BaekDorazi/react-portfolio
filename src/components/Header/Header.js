import React, { Component } from "react";
import Menu from "components/Menu/Menu";
import ReactFullpage from "@fullpage/react-fullpage";

import { connect } from "react-redux";

import dhLogo from "images/logo_dh.png";
import shLogo from "images/logo_sh.png";

const mapStateToProps = ({ appConfig }) => ({
  userNum: appConfig.appState.userNum,
});

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  handleClickLogo = () => {};

  toggleModal = () => {
    this.setState({
      myInfoModalStatus: !this.state.myInfoModalStatus,
    });
  };

  render() {
    const { userNum, showPageName } = this.props;
    return (
      <div className="abs header line-bottom">
        <ReactFullpage
          render={({ state, fullpageApi }) => {
            return (
              <div className="logo" onClick={() => fullpageApi.moveTo(1, 0)}>
                {userNum === 1 ? (
                  <img src={dhLogo} width="100px" height="auto" />
                ) : (
                  <img src={shLogo} width="100px" height="auto" />
                )}
              </div>
            );
          }}
        />
        <div className="page-title">
          <Menu showPageName={showPageName} />
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, {})(Header);
