import React, { Component } from "react";
import { selectTab, nextTab } from "../actions/actions";
import { connect } from "react-redux";
import { Tab, Row, Col } from "react-bootstrap";
import NavTab from "./NavTab";
import TabContent from "./TabContent";

export class Tutorial extends Component {
  onSelect = tab => {
    this.props.selectTab(tab);
  };

  createAlert = () => {
    if (window.confirm("you are about to exit!")) {
      this.props.hideModal();
    }
  };

  render() {
    return (
      <div style={{ padding: "20px", textAlign: "center" }}>
        <h3>What do I need to know to create a Bot?</h3>
        <p>Follow the numbers of this tutorial</p>
        <Tab.Container
          id="left-tabs-example"
          defaultActiveKey="1"
          activeKey={this.props.activeTab}
          onSelect={this.onSelect}
        >
          <Row>
            <Col sm={3}>
              <NavTab />
            </Col>
            <Col sm={9}>
              <TabContent />
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginTop: "25px"
                }}
              >
                <button
                  className="btn btn-outline-primary"
                  onClick={this.props.hideModal}
                >
                  Skip tutorial
                </button>
                <button
                  onClick={this.createAlert}
                  className="btn btn-outline-primary"
                >
                  Next
                </button>
              </div>
            </Col>
          </Row>
        </Tab.Container>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  initialStatus: state.tutorial.initialStatus,
  activeTab: state.tutorial.activeTab
});

const mapDispatchToProps = dispatch => ({
  selectTab: data => {
    dispatch(selectTab(data));
  },
  nextTab: data => {
    dispatch(nextTab(data));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Tutorial);
