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
    const { user, jobs, education, skills } = this.props.data;

    return (
      <div className="half-page cv-container">
        <header>
          {user.firstName} {user.lastName}
        </header>
        <div className="contact">
          <h1>Contact</h1>
          <DisplayCard data={user} title="user" />
        </div>
        <div className="about-me-section">
          <h1>About Me</h1>
          <p className="about-me">{user.introduction}</p>
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
        <div className="skills-section">
          <h1>Skills and Strengths</h1>
          {skills.map((skill) => {
            return <DisplayCard data={skill} title="skill" key={skill.id} />;
          })}
        </div>
      </div>
    );
  }
}

export default DisplayCV;
