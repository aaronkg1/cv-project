import React from "react";

const Experience = (props) => {
  const { job } = props;
  const id = job.id;
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
          props.updateJob(e, id);
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
          props.updateJob(e, id);
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
          props.updateJob(e, id);
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
          props.updateJob(e, id);
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
          props.updateJob(e, id);
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
          props.updateJob(e, id);
        }}
      />
      <i
        className="fa-solid fa-circle-minus delete-btn"
        onClick={(e) => {
          props.deleteJob(e, id);
        }}
      ></i>
    </div>
  );
};

export default Experience;
