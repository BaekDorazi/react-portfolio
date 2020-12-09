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
      </div>
    );
  }
}

export default Contact;
