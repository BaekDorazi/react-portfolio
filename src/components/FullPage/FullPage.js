import React, { Component } from "react";
import ReactFullpage from "@fullpage/react-fullpage";
import Home from "../../pages/home/Home";
import Profile from "../../pages/profile/Profile";
import Career from "../../pages/career/Career";
import Skill from "../../pages/skill/Skill";
import Portfolio from "../../pages/portfolio/Portfolio";

class FullPage extends Component {
  onLeave(origin, destination, direction) {
    console.log("Leaving section " + origin.index);
  }
  afterLoad(origin, destination, direction) {
    console.log("After load: " + destination.index);
  }

  render() {
    return (
      <div className="abs">
        <ReactFullpage
          anchors={["Home", "Profile", "Career", "Skill", "Portfolio"]}
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
            "Home",
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
                  <Home />
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
