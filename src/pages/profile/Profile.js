import React, { Component } from "react";
import profileImg from "images/profile_img.png";

class Profile extends Component {
  render() {
    return (
      <div className="profile-container">
        <div class="col-12 col-sm-6 col-md-4 col-lg-3">
          <div class="our-team">
            <div class="picture">
              <img
                class="img-fluid"
                src={profileImg}
              />
            </div>
            <div class="team-content">
              <h3 class="name">Michele Miller</h3>
              <h4 class="title">Web Developer</h4>
            </div>
            <ul class="social">
              <li>
                <a
                  href="https://codepen.io/collection/XdWJOQ/"
                  class="fa fa-facebook"
                  aria-hidden="true"
                ></a>
              </li>
              <li>
                <a
                  href="https://codepen.io/collection/XdWJOQ/"
                  class="fa fa-twitter"
                  aria-hidden="true"
                ></a>
              </li>
              <li>
                <a
                  href="https://codepen.io/collection/XdWJOQ/"
                  class="fa fa-google-plus"
                  aria-hidden="true"
                ></a>
              </li>
              <li>
                <a
                  href="https://codepen.io/collection/XdWJOQ/"
                  class="fa fa-linkedin"
                  aria-hidden="true"
                ></a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Profile;
