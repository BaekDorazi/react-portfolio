import React, { Component } from "react";
import profileImg from "images/profile_img.png";

class Profile extends Component {
  render() {
    return (
      <div className="profile-container">
        <img className="profile-img" src={profileImg} />
      </div>
    );
  }
}

export default Profile;
