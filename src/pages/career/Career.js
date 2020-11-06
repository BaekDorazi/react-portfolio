import React, { Component } from "react";
import SkillProgress from "components/SkillProgress/SkillProgress";
import { Timeline, TimelineItem } from "vertical-timeline-component-for-react";

class Career extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const { isPageFocus } = this.props;

    return (
      <div className="career-container">
        <div className="license-container">
          <Timeline lineColor={"#ffffff"}>
            <TimelineItem dateText="2014.01">
              <h5>자격증명</h5>
              <p>발급기관</p>
            </TimelineItem>
            <TimelineItem dateStyle={{ display: "none" }}>
              <h5>자격증명</h5>
              <p>발급기관</p>
            </TimelineItem>
            <TimelineItem dateText="2020.10">
              <h5>자격증명</h5>
              <p>발급기관</p>
            </TimelineItem>
            <TimelineItem dateStyle={{ display: "none" }}>
              <h5>자격증명</h5>
              <p>발급기관</p>
            </TimelineItem>
            <TimelineItem dateText="2020.10">
              <h5>유선희</h5>
              <p>백도형</p>
            </TimelineItem>
            <TimelineItem dateText="2020.11">
              <h5>자격증명</h5>
              <p>발급기관</p>
            </TimelineItem>
            <TimelineItem dateStyle={{ display: "none" }}>
              <h5>자격증명</h5>
              <p>발급기관</p>
            </TimelineItem>
          </Timeline>
        </div>

        <div className="skill-container">
          <div className="left-chart-container">
            <SkillProgress
              isPageFocus={isPageFocus}
              percentVal={70}
              color={"#123456"}
              centerSkillName="PS"
              skillName="Photoshop"
            />

            <SkillProgress
              isPageFocus={isPageFocus}
              percentVal={30}
              color={"#ab5482"}
              centerSkillName="AI"
              skillName="Illustrator"
            />

            <SkillProgress
              isPageFocus={isPageFocus}
              percentVal={90}
              color={"#855124"}
              centerSkillName="ID"
              skillName="Indesign"
            />
          </div>
          <div className="right-chart-container">
            <SkillProgress
              isPageFocus={isPageFocus}
              percentVal={70}
              color={"#123456"}
              centerSkillName="AE"
              skillName="After Effects"
            />

            <SkillProgress
              isPageFocus={isPageFocus}
              percentVal={30}
              color={"#ab5482"}
              centerSkillName="PR"
              skillName="Premier"
            />

            <SkillProgress
              isPageFocus={isPageFocus}
              percentVal={90}
              color={"#855124"}
              centerSkillName="H/C"
              skillName="HTML+CSS"
            />
          </div>
        </div>

        <div className="animation-container">
          <div className="dot"></div>
          <div className="step s1"></div>
          <div className="step s2"></div>
          <div className="step s3"></div>
        </div>
      </div>
    );
  }
}

export default Career;
