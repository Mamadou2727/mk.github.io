import React from "react";
import "./LoaderLogo.css";
import logomkld from "../../assests/images/logomkld.gif";

class LogoLoader extends React.Component {
  render() {
    return <img src={logomkld} alt="logomkld" />;
  }
}

export default LogoLoader;
