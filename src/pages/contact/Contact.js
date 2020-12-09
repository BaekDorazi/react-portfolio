import React, { Component } from "react";
import profileImg from "../../images/profile_sh.jpg";
import SunheeImg from "../../images/sunhee.jpg";

class Contact extends Component {
  render() {
    return (
      <div className="contact-container">
          
        <ul>
          <li>
            <div class="image">
              <img className="profile-img" src={profileImg} />
            </div>
            <div class="shadow"></div>
          </li>
          <li>
            <div class="image">
              <img className="profile-img" src={SunheeImg} />
            </div>
            <div class="shadow"></div>
          </li>
          <li>
            <div class="image">
              <img src="https://unsplash.it/300/200?image=433"></img>
            </div>
            <div class="shadow"></div>
          </li>
        </ul>
      </div>
    );
  }
}

export default Contact;
