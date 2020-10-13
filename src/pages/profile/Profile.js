import React, { Component } from "react";
import ContentRect from "../../components/common/ContentRect";
import Sunhee from "../../images/sunhee_white.png";

class Profile extends Component {
  render() {
    return (
      <div className="profile-container">
          <img className="sunhee-img" src={Sunhee} />
      </div>
    );
  }
}

export default Profile;
