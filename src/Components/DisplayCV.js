import React from "react";
import _ from "lodash";
import DisplayCard from "./DisplayCard";
import "../styles/DisplayCV.css";

class DisplayCV extends React.Component {
  constructor(props) {
    super(props);
    this.state = { ...props };
  }

  render() {
    const { user, jobs, education } = this.props.data;

    return (
      <div className="half-page cv-container">
        <header>
          {user.firstName} {user.lastName}
        </header>
        <div className="contact">
          <h1>Contact</h1>
          <DisplayCard data={user} title="user" />
        </div>
        <div className="jobs">
          <h1>Experience</h1>
          {jobs.map((job) => {
            return <DisplayCard data={job} title="job" key={job.id} />;
          })}
        </div>
        <div className="education-section">
          <h1>Education</h1>
          {education.map((item) => {
            return <DisplayCard data={item} title="education" key={item.id} />;
          })}
        </div>
      </div>
    );
  }
}

export default DisplayCV;
