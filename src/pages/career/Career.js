import React, { Component } from "react";
import SkillProgress from "components/SkillProgress/SkillProgress";
import { Timeline, TimelineItem } from "vertical-timeline-component-for-react";

class Career extends Component {
  constructor(props) {
    super(props);

    this.state = {
      licenseArr: [
        {
          licenseName: "웹디자인기능사",
          issuingAgency: "한국산업인력공단",
          issueDate: "2014.04",
        },
        {
          licenseName: "SOKI 국제 디자인 & 일러스트레이션 입상",
          issuingAgency: "한국일러스트학회",
          issueDate: "2014.01",
        },
        {
          licenseName: "GTQ 포토샵",
          issuingAgency: "한국생산성본부 KPC",
          issueDate: "2009.10",
        },
        {
          licenseName: "정보기기운용기능사",
          issuingAgency: "한국산업인력공단",
          issueDate: "2009.07",
        },
        {
          licenseName: "정보기술자격 ITQ 한글파워포인트",
          issuingAgency: "한국생산성본부 KPC",
          issueDate: "2008.06",
        },
        {
          licenseName: "워드프로세서",
          issuingAgency: "대한상공회의소",
          issueDate: "2007.08",
        },
        {
          licenseName: "정보기술자격 ITQ 아래한글",
          issuingAgency: "한국생산성본부 KPC",
          issueDate: "2007.07",
        },
      ], //자격증 정보 json
      skillArr: [
        {
          icon: "icon-adobephotoshop",
          percentVal: 80,
          color: "#123456",
          contents:
            "Photoshop - 합성, 사진 편집 등의 2D 그래픽 작업을 비롯한 다양한 웹 시안 디자인 작업",
        },
        {
          icon: "icon-adobeillustrator",
          percentVal: 50,
          color: "#ab5482",
          contents:
            "Illustrator - 디자인 목업, 배너, 플래카드 등과 아이콘, 로고, 심볼 등의 그래픽 디자인 작업",
        },
        {
          icon: "icon-adobeindesign",
          percentVal: 80,
          color: "#855124",
          contents:
            "Indesign - 리플렛, 브로슈어, 카다로그, 책자 등의 인쇄물 편집 디자인 작업",
        },
        {
          icon: "icon-adobeaftereffects",
          percentVal: 60,
          color: "#123456",
          contents:
            "After Effects - 영상 보정, 자막, 모션그래픽 등의 편집과 음악, 효과음 합성 작업",
        },
        {
          icon: "icon-adobepremiere",
          percentVal: 80,
          color: "#ab5482",
          contents:
            "Premier - 영상 자르고 붙이는 등의 컷 편집과 음악, 효과음 합성 작업",
        },
        {
          icon: "icon-embed",
          percentVal: 60,
          color: "#855124",
          contents:
            "HTML+CSS - HTML로 구조화하고 CSS로 디자인을 적용하는 웹 디자인 및 퍼블리싱 작업",
        },
      ], //skill 정보 json
    };
  }

  render() {
    const { licenseArr, skillArr } = this.state;
    const { isPageFocus } = this.props;

    let showLicense = licenseArr.map((license) => {
      return (
        <div className="license-contents">
          <span className="desc">
            {license.licenseName} -
            <span className="license-date">
              {license.issuingAgency}({license.issueDate})
            </span>
          </span>
        </div>
      );
    });

    let showSkill = skillArr.map((skill) => {
      return (
        <div className="chart">
          <i className={skill.icon}></i>
          <SkillProgress
            isPageFocus={isPageFocus}
            percentVal={skill.percentVal}
            color={skill.color}
            contents={skill.contents}
          />
        </div>
      );
    });

    return (
      <div className="career-container">
        <div className="license-skill-container">
          <div className="license-container">
            <div className="circle" />
            <div className="license-title">License</div>
            {showLicense}
          </div>
          <div className="skill-container">{showSkill}</div>
        </div>
      </div>
    );
  }
}

export default Career;
