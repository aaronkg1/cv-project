import React from "react";
import _ from "lodash";
import "../styles/DisplayCard.css";

class DisplayCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = { ...this.props.data };
  }
  render() {
    const { data } = this.props;

    if (this.props.title === "user") {
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
      return (
        <div className="job-card">
          <h2>{_.capitalize(data.jobTitle)}</h2>
          <p>Company: {_.capitalize(data.company)}</p>
          <p>Location: {_.capitalize(data.city)}</p>
          <p>
            Date: {_.capitalize(data.dateFrom)} - {_.capitalize(data.dateTo)}
          </p>
        </div>
      );
    } else if (this.props.title === "education") {
      return (
        <div className="education-card">
          <h2>{_.capitalize(data.establishment)}</h2>
          <p>Location: {_.capitalize(data.city)}</p>
          <p>Subject: {_.capitalize(data.subject)}</p>
          <p>Qualification: {_.capitalize(data.qualification)}</p>
          <p>
            Date: {data.dateFrom} - {data.dateTo}
          </p>
        </div>
      );
    }
  }
}

export default DisplayCard;
