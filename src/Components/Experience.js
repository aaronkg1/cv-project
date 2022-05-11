import React from "react";
import uniqid from "uniqid";

class Experience extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ...this.props.job,
    };
  }

  render() {
    const { job } = this.props;
    const { id } = this.state;
    return (
      <div className="experience form-section">
        <label htmlFor="jobTitle">Job Title: </label>
        <input
          type="text"
          id="jobTitle"
          name="jobTitle"
          value={job.jobTitle}
          onChange={(e) => {
            this.props.updateJob(e, id);
          }}
        />
        <label htmlFor="company">Company: </label>
        <input
          type="text"
          id="company"
          name="company"
          value={job.company}
          onChange={(e) => {
            this.props.updateJob(e, id);
          }}
        />
        <label htmlFor="city">City: </label>
        <input
          type="text"
          id="city"
          name="city"
          value={job.city}
          onChange={(e) => {
            this.props.updateJob(e, id);
          }}
        />
        <label htmlFor="description">Job Description: </label>
        <textarea
          id="description"
          name="description"
          value={job.description}
          onChange={(e) => {
            this.props.updateJob(e, id);
          }}
        ></textarea>
        <label htmlFor="dateFrom">From: </label>
        <input
          type="date"
          id="dateFrom"
          name="dateFrom"
          value={job.dateFrom}
          onChange={(e) => {
            this.props.updateJob(e, id);
          }}
        />
        <label htmlFor="dateTo">To: </label>
        <input
          type="date"
          id="dateTo"
          name="dateTo"
          value={job.dateTo}
          onChange={(e) => {
            this.props.updateJob(e, id);
          }}
        />
        <button
          onClick={(e) => {
            this.props.deleteJob(e, id);
          }}
        >
          Delete
        </button>
      </div>
    );
  }
}

export default Experience;
