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
        <div className="center-rect"></div>
        <div className="license-skill-container">
          <div className="license-container">
            <div className="circle" />
            <div className="license-title">License</div>
            <div className="license-contents">
              웹디자인기능사 -
              <sapn className="license-date"> 한국산업인력공단(2014.04)</sapn>
            </div>
            <div className="license-contents">
              SOKI 국제 디자인&일러스트레이션 입상 -
              <sapn className="license-date"> 한국일러스트학회(2014.01)</sapn>
            </div>
            <div className="license-contents">
              GTQ 포토샵 -
              <sapn className="license-date"> 한국생산성본부 KPC(2009.10)</sapn>
            </div>
            <div className="license-contents">
              정보기기운용기능사 -
              <sapn className="license-date"> 한국산업인력공단(2009.07)</sapn>
            </div>
            <div className="license-contents">
              정보기술자격 ITQ 한글파워포인트 -
              <sapn className="license-date"> 한국생산성본부 KPC(2008.06)</sapn>
            </div>
            <div className="license-contents">
              워드프로세서 -
              <sapn className="license-date"> 대한상공회의소(2007.08)</sapn>
            </div>
            <div className="license-contents">
              정보기술자격 ITQ 아래한글 -
              <sapn className="license-date"> 한국생산성본부 KPC(2007.07)</sapn>
            </div>
          </div>
          <div className="skill-container">
            <div className="left-chart-container">
              <div>
                <i className="icon-adobepremiere"></i>
              </div>
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
        </div>
        {/* <div className="animation-container">
          <div className="dot"></div>
          <div className="step s1"></div>
          <div className="step s2"></div>
          <div className="step s3"></div>
        </div> */}
      </div>
    );
  }
}

export default Career;
