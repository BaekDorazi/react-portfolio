import React, { Component } from "react";
import ContentRect from "../../components/common/ContentRect";

class Profile extends Component {
  render() {
    return (
      <div className="profile-container">
        {/* <div className="rect">test 사각형</div> */}
        <ContentRect />
      </div>
    );
  }
}

export default Profile;
