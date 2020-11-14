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
        <HTMLFlipBook width={800} height={700}>
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
        </HTMLFlipBook>
      </div>
    );
  }
}

export default Portfolio;
