import React, { Component } from "react";
// import { Pager } from "react-bootstrap";
// import { Home, Test } from "../pages";
import Home from "../pages/home/Home";
import Test from "../pages/test/Test";
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
      pageNumbers.push(
        // <Pager.Item key={i} eventKey={i - 1} onSelect={this.handlePageChange}>
        //   {i}
        // </Pager.Item>
      );
    }

    return [...pageNumbers];
  };

  render() {
    // const pagesNumbers = this.getPagesNumbers();

    return (
      <div>
        {/* <Route exact path="/" component={Home} />
        <Route path="/test" component={Test} /> */}

        <ReactPageScroller
          pageOnChange={this.handlePageChange}
          customPageNumber={this.state.currentPage}
        >
          <Home />
          <Test />
        </ReactPageScroller>
        {/* <Pager className="pagination-additional-class" bsSize="large">
          {pagesNumbers}
        </Pager> */}
      </div>
    );
  }
}

export default App;
