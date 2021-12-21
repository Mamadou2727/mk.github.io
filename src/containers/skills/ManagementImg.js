import React, { Component } from "react";
import management from "../../assests/images/management.gif";

export default class ManagementImg extends Component {
  render() {
    const theme = this.props.theme;
    return <img src={management} alt="management" />;
  }
}
