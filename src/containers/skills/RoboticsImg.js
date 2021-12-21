import React, { Component } from "react";
import robotics from "../../assests/images/robotics.gif";

export default class RoboticsImg extends Component {
  render() {
    const theme = this.props.theme;
    return <img src={robotics} />;
  }
}
