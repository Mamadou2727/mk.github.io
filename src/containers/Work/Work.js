import React, { Component } from "react";
import "./Work.css";
import { Fade } from "react-reveal";
import { Work, works } from "../../portfolio";
import WorkCard from "../../components/workCard/WorkCard";

class Work extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <div className="main" id="certs">
        <div className="certs-header-div">
          <Fade bottom duration={2000} distance="20px">
            <h1 className="certs-header" style={{ color: theme.text }}>
              Works
            </h1>
          </Fade>
        </div>
        <div className="certs-body-div">
          {work.work.map((cert) => {
            return <WorkCard work={cert} theme={theme} />;
          })}
        </div>
      </div>
    );
  }
}

export default Work;
