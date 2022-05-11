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
        <label htmlFor="jobTitle" className="form-value">
          Job Title:{" "}
        </label>
        <input
          type="text"
          id="jobTitle"
          name="jobTitle"
          value={job.jobTitle}
          onChange={(e) => {
            this.props.updateJob(e, id);
          }}
        />
        <label htmlFor="company" className="form-value">
          Company:{" "}
        </label>
        <input
          type="text"
          id="company"
          name="company"
          value={job.company}
          onChange={(e) => {
            this.props.updateJob(e, id);
          }}
        />
        <label htmlFor="city" className="form-value">
          City:{" "}
        </label>
        <input
          type="text"
          id="city"
          name="city"
          value={job.city}
          onChange={(e) => {
            this.props.updateJob(e, id);
          }}
        />
        <label htmlFor="description" className="form-value">
          Job Description:{" "}
        </label>
        <textarea
          id="description"
          name="description"
          value={job.description}
          onChange={(e) => {
            this.props.updateJob(e, id);
          }}
        ></textarea>
        <label htmlFor="dateFrom" className="form-value">
          From:{" "}
        </label>
        <input
          type="date"
          id="dateFrom"
          name="dateFrom"
          value={job.dateFrom}
          onChange={(e) => {
            this.props.updateJob(e, id);
          }}
        />
        <label htmlFor="dateTo" className="form-value">
          To:{" "}
        </label>
        <input
          type="date"
          id="dateTo"
          name="dateTo"
          value={job.dateTo}
          onChange={(e) => {
            this.props.updateJob(e, id);
          }}
        />
        <i
          className="fa-solid fa-circle-minus delete-btn"
          onClick={(e) => {
            this.props.deleteJob(e, id);
          }}
        ></i>
      </div>
    );
  }
}

export default Experience;
