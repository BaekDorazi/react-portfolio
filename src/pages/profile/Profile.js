import React, { Component } from "react";
import ContentRect from "../../components/common/ContentRect";
import Sunhee from "../../images/sunhee_white.png";

class Profile extends Component {
  render() {
    return (
      <div className="profile-container">
        <div className="intro-image-area">
          <img className="profile-sunhee" src={Sunhee} height="30%" />
        </div>
      </div>
    );
  }
}

export default Profile;
