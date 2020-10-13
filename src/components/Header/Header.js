import React, { Component } from "react";
import MyInfoModal from "../Modal/MyInfoModal";
import Menu from "../../components/Menu/Menu";
import ReactFullpage from "@fullpage/react-fullpage";

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = { myInfoModalStatus: false };
  }

  handleClickLogo = () => {};

  toggleModal = () => {
    this.setState({
      myInfoModalStatus: !this.state.myInfoModalStatus,
    });
  };

  render() {
    const { myInfoModalStatus } = this.state;
    return (
      <div className="abs header line-bottom">
        <ReactFullpage
          render={({ state, fullpageApi }) => {
            return (
              <div className="logo" onClick={() => fullpageApi.moveTo(1, 0)}>
                <font className="nanumsquare-light">Zombie</font>
                <font className="nanumsquare-extra-bold">Couple</font>
              </div>
            );
          }}
        />
        <div className="page-title">
          <Menu />
        </div>
      </div>
    );
  }
}

export default Header;
