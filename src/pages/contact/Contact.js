import React, { Component } from "react";

import WorkspaceHwky from "components/Illustrations/WorkspaceHwky";
import WorkingLatePukg from "components/Illustrations/WorkingLatePukg";
import Rpm6 from "components/Illustrations/Rpm6";

class Contact extends Component {
  render() {
    return (
      <div className="contact-container">
        <ul>
          <li>
            <div class="image">
              <WorkingLatePukg />
            </div>
            <div class="shadow"></div>
          </li>
          <li>
            <div class="image">
              <WorkspaceHwky />
            </div>
            <div class="shadow"></div>
          </li>
          <li>
            <div class="image">
              <Rpm6 />
            </div>
            <div class="shadow"></div>
          </li>
        </ul>

        <div className="stats">
          <div>
            <i className="icon-bubbles box" onClick={this.test}>
              {" "}
              {/* {!talkClick ? "talk" : "yusunhee18"} */}
              talk
            </i>
          </div>
          <div>
            <i className="icon-drawer2 box"> mail</i>
          </div>
          <div>
            <a href="https://www.instagram.com/yusunhee_/" target="_blank">
              <i className="icon-instagram box"> sns</i>
            </a>
          </div>
          <div>
            <a href="https://github.com/yusunhee" target="_blank">
              <i className="icon-github box"> git</i>
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
