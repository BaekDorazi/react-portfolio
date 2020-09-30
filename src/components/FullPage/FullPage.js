import React, { Component } from "react";
import ReactFullpage from "@fullpage/react-fullpage";
import Intro from "../../pages/intro/Intro";
import Profile from "../../pages/profile/Profile";
import Career from "../../pages/career/Career";
import Skill from "../../pages/skill/Skill";
import Portfolio from "../../pages/portfolio/Portfolio";

class FullPage extends Component {
  onLeave(origin, destination, direction) {
    console.log("Leaving section ", destination);
  }
  afterLoad(origin, destination, direction) {
    console.log("after load ", destination);
  }

  render() {
    return (
      <div className="abs">
        <ReactFullpage
          anchors={["Intro", "Profile", "Career", "Skill", "Portfolio"]}
          // sectionsColor={[
          //   "#FFA9B0",
          //   "#CCD1FF",
          //   "#FFDDA6",
          //   "#BBD1E8",
          //   "#F8E5D0",
          // ]}
          scrollOverflow={true}
          navigation={true}
          navigationPosition={"left"}
          navigationTooltips={[
            "Intro",
            "Profile",
            "Career",
            "Skill",
            "Portfolio",
          ]}
          onLeave={this.onLeave.bind(this)}
          afterLoad={this.afterLoad.bind(this)}
          render={({ state, fullpageApi }) => {
            return (
              <div id="fullpage-wrapper">
                <div className="section section1">
                  <Intro />
                </div>
                <div className="section">
                  <Profile />
                </div>
                <div className="section">
                  <Career />
                </div>
                <div className="section">
                  <Skill />
                </div>
                <div className="section">
                  <div className="slide">
                    <Portfolio />
                  </div>
                  <div className="slide">
                    <Portfolio />
                  </div>
                  <div className="slide">
                    <Portfolio />
                  </div>
                </div>
              </div>
            );
          }}
        />
      </div>
    );
  }
}

export default FullPage;
