import React, { Component } from "react";
import Pagination from "components/Pagination";

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
      totalCount: 0, //이벤트 영상 전체 갯수
      activePage: 1, //active 된 페이지
      rowCount: 6, //화면에 보여줄 갯수
    };
  }

  componentDidMount() {
    const { portfolioArr, fliterPortfolioArr } = this.state;
    this.setState({
      fliterPortfolioArr: portfolioArr,
      totalCount: fliterPortfolioArr.length,
    });
  }

  componentDidUpdate(prevProps, prevState) {
    const { fliterPortfolioArr } = this.state;
    const { rowCount, activePage } = this.state;
    let offset = rowCount * activePage - rowCount;

    if (prevState.activePage !== activePage) {
      // let totalCount = this.getEventVideoTotal(
      //   cctvList[selectIdx].id,
      //   startDate,
      //   endDate,
      //   rowCount,
      //   offset
      // );
      // this.setState({
      //   totalCount,
      // });
    }
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

  //페이지 변경될때 호출되는 메소드
  handleOnPageChange = (pageNumber) => {
    this.setState({
      activePage: pageNumber,
    });
  };

  render() {
    const { fliterPortfolioArr } = this.state;
    const { totalCount, rowCount, activePage } = this.state;

    let filterList = ["전체", "aaaaaa", "bbbbbb", "cccccc"];
    let showFilter = filterList.map((filter, idx) => {
      return (
        <div
          onClick={() => {
            this.handleOnClick(idx);
          }}
        >
          {filter}
        </div>
      );
    });

    let showPortfolioArr = (fliterPortfolioArr || []).map((portfolio, idx) => {
      return (
        <div
          className={
            portfolio.filterVal === "a"
              ? "gallery background-red"
              : portfolio.filterVal === "b"
              ? "gallery background-blue"
              : "gallery background-yellow"
          }
        >
          {portfolio.title} / {idx}
        </div>
      );
    });

    return (
      <div className="portfolio-container">
        <div className="filter-container">{showFilter}</div>
        <div className="portfolio-list">{showPortfolioArr}</div>
        <Pagination
          onPageChange={this.handleOnPageChange}
          total={30}
          rowCount={rowCount}
          currentPage={activePage}
        />
      </div>
    );
  }
}

export default Portfolio;
