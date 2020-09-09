import React, { Component } from "react";
import SideMenu from "../components/SideMenu";
import Home from "../pages/home/Home";
import Profile from "../pages/profile/Profile";
import Career from "../pages/career/Career";
import Skill from "../pages/skill/Skill";
import Portfolio from "../pages/portfolio/Portfolio";
import ReactPageScroller from "react-page-scroller";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { currentPage: null };
  }

  handlePageChange = (number) => {
    this.setState({ currentPage: number }); // set currentPage number, to reset it from the previous selected.
  };

  getPagesNumbers = () => {
    const pageNumbers = [];

    for (let i = 1; i <= 5; i++) {
      pageNumbers
        .push
        // <Pager.Item key={i} eventKey={i - 1} onSelect={this.handlePageChange}>
        //   {i}
        // </Pager.Item>
        ();
    }

    return [...pageNumbers];
  };

  render() {
    // const pagesNumbers = this.getPagesNumbers();

    return (
      <div className="app-container">
        {/* <Route exact path="/" component={Home} />
        <Route path="/test" component={Test} /> */}
        <SideMenu />
        <ReactPageScroller
          pageOnChange={this.handlePageChange}
          customPageNumber={this.state.currentPage}
        >
          <Home />
          <Profile />
          <Career />
          <Skill />
          <Portfolio />
        </ReactPageScroller>
        {/* <Pager className="pagination-additional-class" bsSize="large">
          {pagesNumbers}
        </Pager> */}
      </div>
    );
  }
}

export default App;
