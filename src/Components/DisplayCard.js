import React from "react";
import _ from "lodash";
import "../styles/DisplayCard.css";

class DisplayCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = { ...this.props.data };
  }
  render() {
    if (this.props.title === "user") {
      const { data } = this.props;

      return (
        <div className="contact-card">
          <h2>
            {_.capitalize(data.title)} {_.capitalize(data.firstName)}{" "}
            {_.capitalize(data.lastName)}
          </h2>
          <p>Address: {data.address}</p>
          <p>Telephone: {data.telephone}</p>
          <p>
            Email:{" "}
            <a
              href={data.email}
              onClick={(e) => {
                e.preventDefault();
              }}
            >
              {data.email}
            </a>
          </p>
        </div>
      );
    }
    if (this.props.title === "job") {
      const { data } = this.props;

      return (
        <div className="job-card">
          <h2>{_.capitalize(data.jobTitle)}</h2>
          <p>Company: {_.capitalize(data.company)}</p>
          <p>Location: {_.capitalize(data.city)}</p>
          <p>
            {_.capitalize(data.dateFrom)} - {_.capitalize(data.dateTo)}
          </p>
        </div>
      );
    } else if (this.props.title === "education") {
      const education = this.props.data;
      return (
        <div className="educationCard">
          <h2>{_.capitalize(education.establishment)}</h2>
          <p>Location: {_.capitalize(education.city)}</p>
          <p>Subject: {_.capitalize(education.subject)}</p>
          <p>Qualification: {_.capitalize(education.qualification)}</p>
          <p>
            Dates: {education.dateFrom.toLocaleDateString()} -{" "}
            {education.dateTo.toLocaleDateString()}
          </p>
        </div>
      );
    }
  }
}

export default DisplayCard;
