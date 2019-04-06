import React, { Component } from "react";
import { Modal } from "react-bootstrap";
import Tutorial from "./Tutorial";

export class Home extends Component {
  state = {
    shown: false
  };

  showModal = () => {
    this.setState({
      shown: true
    });
  };

  hideModal = () => {
    this.setState({
      shown: false
    });
  };

  render() {
    return (
      <div>
        <button
          onClick={this.showModal}
          className="btn btn btn-outline-primary btn-lg"
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)"
          }}
        >
          Open Modal
        </button>
        <Modal show={this.state.shown} onHide={this.hideModal}>
          <Tutorial hideModal={this.hideModal} />
        </Modal>
      </div>
    );
  }
}

export default Home;
