import React, { Component } from "react";
import HTMLFlipBook from "react-pageflip";
import Profile from "pages/profile/Profile";
import Career from "pages/career/Career";
import Contact from "pages/contact/Contact";
import PortfolioPage from "components/PortfolioPage/PortfolioPage";

class Portfolio extends Component {
  render() {
    return (
      <div className="portfolio-container">
        <div className="portfolio-contents-container">포트폴리오 내용 부분</div>
        <div className="portfolio-filter-container">
          <div className="portfolio-filter">
            <div className="test-margin">전체</div>
            <div className="test-margin">편집디자인</div>
            <div className="test-margin">OO 디자인</div>
          </div>
          <div className="portfolio-list">
            <div className="test-rect">1</div>
            <div className="test-rect">2</div>
            <div className="test-rect">3</div>
            <div className="test-rect">4</div>
            <div className="test-rect">5</div>
            <div className="test-rect">6</div>
          </div>
        </div>
        {/* <HTMLFlipBook width={100} height={100}>
          <div className="demoPage">
            <Contact />
          </div>
          <div className="demoPage">
            <PortfolioPage />
          </div>
          <div className="demoPage">
            <Contact />
          </div>
          <div className="demoPage">
            <PortfolioPage />
          </div>
        </HTMLFlipBook> */}
      </div>
    );
  }
}

export default Portfolio;
