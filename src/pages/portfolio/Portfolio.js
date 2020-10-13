import React, { Component } from "react";
import ContentRect from "../../components/common/ContentRect";

class Portfolio extends Component {
  render() {
    return (
      <div className="portfolio-container">
        <div className="loader">
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
        </div>
      </div>
    );
  }
}

export default Portfolio;
