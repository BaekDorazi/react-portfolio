import React, { Component } from "react";
import profileImg from "images/profile_img.png";

class Profile extends Component {
  render() {
    return (
      <div className="profile-container">
        <div className="test">선희누나 세젤예</div>
        <div className="profile-frame">
          <div class="profile-image">
            <div class="circle-1"></div>
            <div class="circle-2"></div>
            <div class="picture">
              <img class="img-fluid" src={profileImg} />
            </div>
          </div>

          <div className="profile-button">
            <div class="name">yusunhee</div>
            <div class="job">Web Publisher</div>

            <div class="actions">
              <button class="btn">Follow</button>
              <button class="btn">Message</button>
            </div>
          </div>

          <div class="stats">
            <div class="box">
              <span class="value">124</span>
              <span class="parameter">Posts</span>
            </div>
            <div class="box">
              <span class="value">4357</span>
              <span class="parameter">Likes</span>
            </div>
            <div class="box">
              <span class="value">1180</span>
              <span class="parameter">Follower</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Profile;
