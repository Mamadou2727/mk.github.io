import React, { Component } from "react";
import "./WorkCard.css";
import { Fade } from "react-reveal";

class WorkCard extends Component {
  render() {
    const work = this.props.work;
    const theme = this.props.theme;
    return (
      <Fade bottom duration={2000} distance="20px">
        <div className="proj-card">
          <div className="content">
            <div
              className="proj-header"
              style={{ backgroundColor: work.color_code }}
            >
              <img
                className="logo_img1"
                src={require(`../../assests/images/${work.logo_path}`)}
                alt={work.alt_name}
              />
            </div>
          </div>
          <div className="proj-body">
            <h2 className="proj-body-title" style={{ color: theme.text }}>
              {work.title}
            </h2>
            <h3
              className="proj-body-subtitle"
              style={{ color: theme.secondaryText }}
            >
              {work.subtitle}
            </h3>
          </div>
        </div>
      </Fade>
    );
  }
}

export default WorkCard;
