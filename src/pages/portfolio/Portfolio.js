import React, { Component } from "react";
import profileImg from "../../images/screensaver_01.png";
import profileImg2 from "../../images/homepage_01.png";
import profileImg3 from "../../images/webbanner_01.png";
import portfolioTest from "../../images/portfolio_test.png";
import Pagination from "components/Pagination";
import PortfolioModal from "components/PortfolioModal/PortfolioModal";

class Portfolio extends Component {
  constructor(props) {
    super(props);

    this.state = {
      portfolioArr: [
        {
          idx: 1,
          image: portfolioTest,
          filterVal: "device", //웹/모바일(device), 편집디자인(edit), 기타(etc) 필터값
          subTitle: "SNS CONTENTS",
          title: "콘텐츠 배너",
          period: "2019.05.21 - 05.24",
          work: "디자인 및 리사이징",
          tool: "Ps/Ai",
          contents: [
            "이오스안과 SNS",
            "인스타그램&페이스북 등에",
            "노출 되는 광고 배너",
          ],
        },
        {
          idx: 2,
          image: profileImg,
          filterVal: "edit",
          subTitle: "SNS CONTENTS2",
          title: "콘텐츠 배너2",
          period: "2019.05.21 - 05.24",
          work: "디자인 및 리사이징",
          tool: "Ps/Ai",
          contents: [
            "이오스안과 SNS",
            "인스타그램&페이스북 등에",
            "노출 되는 광고 배너",
          ],
        },
        {
          idx: 3,
          image: profileImg2,
          filterVal: "edit",
          subTitle: "SNS CONTENTS2",
          title: "유선희 바보",
          period: "2019.05.21 - 05.24",
          work: "디자인 및 리사이징",
          tool: "Ps/Ai",
          contents: [
            "이오스안과 SNS",
            "인스타그램&페이스북 등에",
            "노출 되는 광고 배너",
          ],
        },
        {
          idx: 4,
          image: profileImg3,
          filterVal: "etc",
          subTitle: "SNS CONTENTS2",
          title: "test1",
          period: "2019.05.21 - 05.24",
          work: "디자인 및 리사이징",
          tool: "Ps/Ai",
          contents: [
            "이오스안과 SNS",
            "인스타그램&페이스북 등에",
            "노출 되는 광고 배너",
          ],
        },
      ], //포트폴리오 전체 json
      filterPortfolioArr: [], //필터상태 포트폴리오 json
      showPortfolioArr: [], //한페이지에 보여줘야 할 json
      totalCount: 0, //이벤트 영상 전체 갯수
      activePage: 1, //active 된 페이지
      rowCount: 6, //화면에 보여줄 갯수
      portfolioModal: false, //포트폴리오 상세보기 모달 상태
      portfolioInfo: {}, //선택된 포트폴리오 정보
    };
  }

  componentDidMount() {
    const { portfolioArr, rowCount } = this.state;
    let _portfolioArr = portfolioArr.slice(0, rowCount);

    this.setState({
      filterPortfolioArr: portfolioArr,
      showPortfolioArr: _portfolioArr,
      totalCount: portfolioArr.length,
    });
  }

  componentDidUpdate(prevProps, prevState) {
    const { filterPortfolioArr } = this.state;
    const { rowCount, activePage } = this.state;
    let offset = rowCount * activePage - rowCount;

    if (prevState.activePage !== activePage) {
      let _portfolioArr = filterPortfolioArr.slice(offset, offset + rowCount);
      this.setState({ showPortfolioArr: _portfolioArr });
    }
  }

  //필터 눌렀을때 처리되는 메소드
  handleOnFilterClick = (num) => {
    const { portfolioArr, rowCount } = this.state;
    let _portfolioArr = portfolioArr;
    let filterPortfolioArr = [];
    let filterPortfolioLength;

    if (num === 0) {
      filterPortfolioArr = _portfolioArr;
    } else if (num === 1) {
      filterPortfolioArr = _portfolioArr.filter(
        (portfolio) => portfolio.filterVal === "device"
      );
    } else if (num === 2) {
      filterPortfolioArr = _portfolioArr.filter(
        (portfolio) => portfolio.filterVal === "edit"
      );
    } else if (num === 3) {
      filterPortfolioArr = _portfolioArr.filter(
        (portfolio) => portfolio.filterVal === "etc"
      );
    }

    filterPortfolioLength = filterPortfolioArr.length;
    _portfolioArr = filterPortfolioArr.slice(0, rowCount);

    this.setState({
      filterPortfolioArr: filterPortfolioArr,
      showPortfolioArr: _portfolioArr,
      totalCount: filterPortfolioLength,
      activePage: 1,
    });
  };

  //페이지 변경될때 호출되는 메소드
  handleOnPageChange = (pageNumber) => {
    this.setState({
      activePage: pageNumber,
    });
  };

  //모달창 상태 변경 메소드
  toggleModal = (idx) => {
    const { portfolioModal, showPortfolioArr } = this.state;
    let portfolioInfo = showPortfolioArr.find((elem) => elem.idx === idx); //선택 된 포트폴리오 정보 모달로 넘겨주기 위해

    this.setState({
      portfolioModal: !portfolioModal,
      portfolioInfo: portfolioInfo,
    });
  };

  render() {
    const { showPortfolioArr, portfolioModal, portfolioInfo } = this.state;
    const { totalCount, rowCount, activePage } = this.state;

    let filterList = ["전체", "웹/모바일", "편집디자인", "기타"];
    let filterComp = filterList.map((filter, idx) => {
      return (
        <div
          className="filter"
          onClick={() => {
            this.handleOnFilterClick(idx);
          }}
        >
          {filter}
        </div>
      );
    });

    let portfolioComp = (showPortfolioArr || []).map((portfolio, idx) => {
      return (
        <div>
          <div
            className="screen"
            onClick={() => this.toggleModal(portfolio.idx)}
          >
            <span />
            <span />
            <span />
            <span />
            <img src={portfolio.image} />
          </div>
        </div>
      );
    });

    return (
      <div className="portfolio-container">
        <div className="filter-container brackets">{filterComp}</div>
        <div className="list-container">
          <div className="portfolio-list">{portfolioComp}</div>
          <Pagination
            onPageChange={this.handleOnPageChange}
            total={totalCount}
            rowCount={rowCount}
            currentPage={activePage}
          />
          {portfolioModal && (
            <PortfolioModal
              show={portfolioModal}
              toggle={this.toggleModal}
              portfolioInfo={portfolioInfo}
            />
          )}
        </div>
      </div>
    );
  }
}

export default Portfolio;
