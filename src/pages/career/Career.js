import React, { Component } from "react";
import SkillProgress from "components/SkillProgress/SkillProgress";

class Career extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const { isPageFocus } = this.props;

    return (
      <div className="career-container">
        <div>
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

        <div className="container">
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
