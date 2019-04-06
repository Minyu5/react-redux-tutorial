import React, { Component } from "react";
import { tabs } from "../assets/data";
import { Nav } from "react-bootstrap";

export class NavTab extends Component {
  render() {
    return (
      <Nav
        variant="pills"
        style={{ display: "flex", justifyContent: "space-between" }}
      >
        {tabs.map(tab => (
          <Nav.Item key={tab.index} style={{ display: "flex" }}>
            <Nav.Link eventKey={tab.index} style={{ display: "flex" }}>
              <h2>{tab.index}</h2>
              <div style={{ marginLeft: "10px" }}>
                <h4>{tab.title}</h4>
                <p>{tab.info}</p>
              </div>
            </Nav.Link>
          </Nav.Item>
        ))}
      </Nav>
    );
  }
}

export default NavTab;
