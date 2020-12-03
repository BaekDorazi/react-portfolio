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
              <span className="desc">
                웹디자인기능사 -
                <span className="license-date"> 한국산업인력공단(2014.04)</span>
              </span>
            </div>
            <div className="license-contents">
              <span className="desc">
                SOKI 국제 디자인&일러스트레이션 입상 -
                <span className="license-date"> 한국일러스트학회(2014.01)</span>
              </span>
            </div>
            <div className="license-contents">
              <span className="desc">
                GTQ 포토샵 -
                <span className="license-date">
                  {" "}
                  한국생산성본부 KPC(2009.10)
                </span>
              </span>
            </div>
            <div className="license-contents">
              <span className="desc">
                정보기기운용기능사 -
                <span className="license-date"> 한국산업인력공단(2009.07)</span>
              </span>
            </div>
            <div className="license-contents">
              <span className="desc">
                정보기술자격 ITQ 한글파워포인트 -
                <span className="license-date">
                  {" "}
                  한국생산성본부 KPC(2008.06)
                </span>
              </span>
            </div>
            <div className="license-contents">
              <span className="desc">
                워드프로세서 -
                <span className="license-date"> 대한상공회의소(2007.08)</span>
              </span>
            </div>
            <div className="license-contents">
              <span className="desc">
                정보기술자격 ITQ 아래한글 -
                <span className="license-date">
                  {" "}
                  한국생산성본부 KPC(2007.07)
                </span>
              </span>
            </div>
          </div>
          <div className="skill-container">
            <div className="chart">
              <i className="icon-adobephotoshop"></i>
              <SkillProgress
                isPageFocus={isPageFocus}
                percentVal={80}
                color={"#123456"}
                skillName="Photoshop - 합성, 사진 편집 등의 2D 그래픽 작업을 비롯한 다양한 웹 시안
                디자인 작업"
              />
            </div>

            <div className="chart box">
              <i className="icon-adobeillustrator"></i>
              <SkillProgress
                isPageFocus={isPageFocus}
                percentVal={50}
                color={"#ab5482"}
                skillName="Illustrator - 디자인 목업, 배너, 플래카드 등과 아이콘, 로고, 심볼 등의 그래픽 디자인 작업"
              />
            </div>

            <div className="chart">
              <i className="icon-adobeindesign"></i>
              <SkillProgress
                isPageFocus={isPageFocus}
                percentVal={80}
                color={"#855124"}
                skillName="Indesign - 리플렛, 브로슈어, 카다로그, 책자 등의 인쇄물 편집 디자인 작업"
              />
            </div>
            <div className="chart">
              <i className="icon-adobeaftereffects"></i>
              <SkillProgress
                isPageFocus={isPageFocus}
                percentVal={60}
                color={"#123456"}
                skillName="After Effects - 영상 보정, 자막, 모션그래픽 등의 편집과 음악, 효과음 합성 작업"
              />
            </div>

            <div className="chart">
              <i className="icon-adobepremiere"></i>
              <SkillProgress
                isPageFocus={isPageFocus}
                percentVal={80}
                color={"#ab5482"}
                skillName="Premier - 영상 자르고 붙이는 등의 컷 편집과 음악, 효과음 합성 작업"
              />
            </div>

            <div className="chart">
              <i className="icon-embed"></i>
              <SkillProgress
                isPageFocus={isPageFocus}
                percentVal={60}
                color={"#855124"}
                skillName="HTML+CSS - HTML로 구조화하고 CSS로 디자인을 적용하는 웹 디자인 및 퍼블리싱 작업"
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
