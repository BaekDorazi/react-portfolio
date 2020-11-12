import React, { Component } from "react";
import Logo from "components/Header/Logo";
import Menu from "components/Header/Menu";
import SideNav from "components/Header/SideNav";

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
    const { showPageName } = this.props;
    console.log("showPage Name == ", showPageName);
    return (
      <div className="abs header">
        {showPageName === "Intro" && <Logo />}
        <Menu showPageName={showPageName} />
        <SideNav />
      </div>
    );
  }
}

export default Header;
