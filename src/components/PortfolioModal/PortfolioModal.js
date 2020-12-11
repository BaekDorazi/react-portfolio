import React, { Component } from "react";
import { Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

class PortfolioModal extends Component {
  render() {
    const { show, toggle, portfolioInfo } = this.props;

    return (
      <div>
        <Modal isOpen={show} toggle={toggle}>
          <ModalHeader toggle={toggle}>{portfolioInfo.title}</ModalHeader>
          <ModalBody>
            <img src={portfolioInfo.image} width="200px" height="auto" />
          </ModalBody>
          <ModalFooter>{portfolioInfo.contents}</ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default PortfolioModal;
