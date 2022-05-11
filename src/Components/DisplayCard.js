import React from "react";
import _ from "lodash";
import "../styles/DisplayCard.css";
import capitalise from "../utilities/capitalise-all-words";
import { format, parseISO } from "date-fns";

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
            {data.lastName}
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
      let dateFrom;
      let dateTo;
      if (data.dateFrom === "") {
        dateFrom = null;
      } else {
        dateFrom = format(new Date(data.dateFrom), "dd-MM-yy");
      }
      if (data.dateTo === "") {
        dateFrom = null;
      } else {
        dateTo = format(new Date(data.dateTo), "dd-MM-yy");
      }
      return (
        <div className="job-card">
          <h2>{capitalise(data.jobTitle)}</h2>
          <p>Company: {capitalise(data.company)}</p>
          <p>Location: {capitalise(data.city)}</p>
          <p>{data.description}</p>
          <p>
            Date: {dateFrom} - {dateTo}
          </p>
        </div>
      );
    } else if (this.props.title === "education") {
      const dateFrom = format(new Date(data.dateFrom), "dd-MM-yy");
      const dateTo = format(new Date(data.dateTo), "dd-MM-yy");
      return (
        <div className="education-card">
          <h2>{capitalise(data.establishment)}</h2>
          <p>Location: {_.capitalize(data.city)}</p>
          <p>Subject: {_.capitalize(data.subject)}</p>
          <p>Qualification: {_.capitalize(data.qualification)}</p>
          <p>{data.notes}</p>
          <p>
            Date: {dateFrom} - {dateTo}
          </p>
        </div>
      );
    }
  }
}

export default DisplayCard;
