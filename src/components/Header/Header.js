import React, { Component } from "react";
import logoImg from "../../images/001-knight.png";
import MyInfoModal from "../Modal/MyInfoModal";
import Menu from "../../components/Menu/Menu";

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = { myInfoModalStatus: false };
  }

  handleClickLogo = () => {};

  toggleModal = () => {
    console.log("==toggleModal ");
    this.setState({
      myInfoModalStatus: !this.state.myInfoModalStatus,
    });
  };

  render() {
    const { myInfoModalStatus } = this.state;

    return (
      <div className="abs header">
        <div className="logo">
          <font className="nanumsquare-light">Zombie</font>
          <font className="nanumsquare-extra-bold">Couple</font>
        </div>
        <div className="page-title">
          <Menu />
        </div>
      </div>
    );
  }
}

export default Header;
