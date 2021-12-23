import React, { Component } from "react";
import proud from "../../assests/images/proud.gif";

class Feelingproud extends Component {
  render() {
    const theme = this.props.theme;
    return <img src={proud} alt="proud" style={{ color: theme.proud }} />;
  }
}

export default Feelingproud;
