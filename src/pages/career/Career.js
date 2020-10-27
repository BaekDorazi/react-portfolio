import React, { Component } from "react";
import SkillProgress from "components/SkillProgress/SkillProgress";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

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
          <VerticalTimeline>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "#123456", color: "#fff" }}
              contentArrowStyle={{
                borderRight: "7px solid  #123456",
              }}
              date="2020.10.27"
              iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            >
              <h3 className="vertical-timeline-element-title">
                자격증 명
              </h3>
              <h4 className="vertical-timeline-element-subtitle">자격증 발급 기관</h4>
            </VerticalTimelineElement>
          </VerticalTimeline>
        </div>

        <div className="skill-container">
          <SkillProgress
            isPageFocus={isPageFocus}
            percentVal={70}
            color={"#123456"}
          />

          <SkillProgress
            isPageFocus={isPageFocus}
            percentVal={30}
            color={"#ab5482"}
          />

          <SkillProgress
            isPageFocus={isPageFocus}
            percentVal={90}
            color={"#855124"}
          />
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
