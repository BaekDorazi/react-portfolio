import React, { Component } from "react";
import logoImg from "../../images/001-knight.png";
import MyInfoModal from "../Modal/MyInfoModal";

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
        <div className="logo-container">
          {/* <img src={logoImg} width="45px" height="45px" /> */}

        </div>
        <div className="menu">
          {/* <div className="my-info-icon" onClick={this.toggleModal}>
            <i className="icon-avatar" />
          </div>
          <div className="logout-icon">
            <i className="icon-logout" />
          </div> */}
        </div>

        {/* <MyInfoModal isOpen={myInfoModalStatus} toggle={this.toggleModal} /> */}
      </div>
    );
  }
}

export default Header;
