import React, { Component } from "react";
import { shapes } from "../assets/data";
import { Tab } from "react-bootstrap";

export class TabContent extends Component {
  render() {
    return (
      <Tab.Content>
        {shapes.map(shape => (
          <Tab.Pane
            key={shape.index}
            eventKey={shape.index}
            style={{ border: "1px solid black", minHeight: "500px" }}
          >
            <div
              className={`${shape.shape}`}
              style={{
                position: "absolute",
                top: "35%",
                left: "50%",
                transform: "translate(-50%, -50%)"
              }}
            />
          </Tab.Pane>
        ))}
      </Tab.Content>
    );
  }
}

export default TabContent;
