import React, { Component } from "react";
import proud from "../../assests/images/proud.gif";

class FeelingProud extends Component {
  render() {
    const theme = this.props.theme;
    return <img src={proud} alt="proud" />;
  }
}

export default FeelingProud;
