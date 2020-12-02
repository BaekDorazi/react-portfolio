import React, { Component } from "react";
import HTMLFlipBook from "react-pageflip";
import Profile from "pages/profile/Profile";
import Career from "pages/career/Career";
import Contact from "pages/contact/Contact";
import PortfolioPage from "components/PortfolioPage/PortfolioPage";

class Portfolio extends Component {
  constructor(props) {
    super(props);

    this.state = {
      portfolioArr: [
        {
          idx: 1,
          filterVal: "a",
          title: "test1",
          contents: "test1번의 포트폴리오",
        },
        {
          idx: 2,
          filterVal: "a",
          title: "test2",
          contents: "test2번의 포트폴리오",
        },
        {
          idx: 3,
          filterVal: "b",
          title: "test3",
          contents: "test3번의 포트폴리오",
        },
        {
          idx: 4,
          filterVal: "c",
          title: "test4",
          contents: "test4번의 포트폴리오",
        },
        {
          idx: 5,
          filterVal: "c",
          title: "test5",
          contents: "test5번의 포트폴리오",
        },
        {
          idx: 6,
          filterVal: "c",
          title: "test6",
          contents: "test6번의 포트폴리오",
        },
      ], //포트폴리오 정보 저장하는 state
      fliterPortfolioArr: [], //포트폴리오 필터 state
    };
  }

  componentDidMount() {
    const { portfolioArr } = this.state;
    this.setState({
      fliterPortfolioArr: portfolioArr,
    });
  }

  handleOnClick = (num) => {
    const { portfolioArr } = this.state;
    let _portfolioArr = portfolioArr;

    if (num === 0) {
      _portfolioArr = _portfolioArr;
    } else if (num === 1) {
      _portfolioArr = _portfolioArr.filter(
        (portfolio) => portfolio.filterVal === "a"
      );
    } else if (num === 2) {
      _portfolioArr = _portfolioArr.filter(
        (portfolio) => portfolio.filterVal === "b"
      );
    } else if (num === 3) {
      _portfolioArr = _portfolioArr.filter(
        (portfolio) => portfolio.filterVal === "c"
      );
    }

    this.setState({ fliterPortfolioArr: _portfolioArr });
  };

  render() {
    const { fliterPortfolioArr } = this.state;

    let showPortfolioArr = (fliterPortfolioArr || []).map((portfolio, idx) => {
      return (
        <div
          className={
            portfolio.filterVal === "a"
              ? "test-rect background-red"
              : portfolio.filterVal === "b"
              ? "test-rect background-blue"
              : "test-rect background-yellow"
          }
        >
          {portfolio.title} / {idx}
        </div>
      );
    });

    return (
      <div className="portfolio-container">
        <div className="portfolio-contents-container">포트폴리오 내용 부분</div>
        <div className="portfolio-filter-container">
          <div className="portfolio-filter">
            <div
              className="test-margin"
              onClick={() => {
                this.handleOnClick(0);
              }}
            >
              전체
            </div>
            <div
              className="test-margin"
              onClick={() => {
                this.handleOnClick(1);
              }}
            >
              aaaaaa
            </div>
            <div
              className="test-margin"
              onClick={() => {
                this.handleOnClick(2);
              }}
            >
              bbbbbb
            </div>
            <div
              className="test-margin"
              onClick={() => {
                this.handleOnClick(3);
              }}
            >
              cccccc
            </div>
          </div>
          <div className="portfolio-list">{showPortfolioArr}</div>
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
