import React, { Component } from "react";
import programmer from "../../assests/images/programmer.gif";

export default class FullStackImg extends Component {
  render() {
    const theme = this.props.theme;
    return <img src={programmer} alt="programmer" />;
  }
}
