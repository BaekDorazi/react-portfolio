import React, { Component } from "react";
import Logo from "components/Logo/Logo";
import Menu from "components/Menu/Menu";

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
    return (
      <div className="abs header">
        <Logo />
        <Menu showPageName={showPageName} />
      </div>
    );
  }
}

export default Header;
