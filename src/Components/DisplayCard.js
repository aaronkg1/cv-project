import React from "react";
import _ from "lodash";
import "../styles/DisplayCard.css";
import capitalise from "../utilities/capitalise-all-words";
import { format } from "date-fns";

const DisplayCard = (props) => {
  const { data } = props;
  if (props.title === "user") {
    return (
      <div className="split contact-card">
        <div className="half-card">
          <h2>
            {_.capitalize(data.title)} {_.capitalize(data.firstName)}{" "}
            {data.lastName}
          </h2>
          <p>
            <span className="cv-value">Address: </span>
            {data.address}
          </p>
          <p>
            <span className="cv-value">Telephone: </span>
            {data.telephone}
          </p>
          <p>
            <span className="cv-value">Email: </span>
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
        <div className="half-card">
          <img
            className="picture-display"
            src={data.profilePic.src}
            alt={data.profilePic.name}
          />
        </div>
      </div>
    );
  }
  if (props.title === "job") {
    let dateFrom;
    let dateTo;
    let cardTitle;
    if (data.dateFrom === "") {
      dateFrom = null;
    } else {
      dateFrom = format(new Date(data.dateFrom), "dd/MM/yy");
    }
    if (data.dateTo === "") {
      dateFrom = null;
    } else {
      dateTo = format(new Date(data.dateTo), "dd/MM/yy");
    }

    if (data.jobTitle === "") {
      cardTitle = null;
    }
    if (data.company === "") {
      cardTitle = (
        <div>
          <h2>
            {capitalise(data.jobTitle)} -{" "}
            <span className="date-range">
              {dateFrom} - {dateTo}
            </span>
          </h2>
        </div>
      );
    } else {
      cardTitle = (
        <div>
          <h2>
            {capitalise(data.jobTitle)} at {capitalise(data.company)} -{" "}
            <span className="date-range">
              {dateFrom} - {dateTo}
            </span>
          </h2>
        </div>
      );
    }
    return (
      <div className="card">
        {cardTitle}
        <p>
          <span className="cv-value">Location: </span>
          {capitalise(data.city)}
        </p>
        <p>
          <span className="cv-value">Job Description: </span>
          {data.description}
        </p>
      </div>
    );
  } else if (props.title === "education") {
    let dateFrom;
    let dateTo;
    if (data.dateFrom === "") {
      dateFrom = null;
    } else {
      dateFrom = format(new Date(data.dateFrom), "dd/MM/yy");
    }
    if (data.dateTo === "") {
      dateFrom = null;
    } else {
      dateTo = format(new Date(data.dateTo), "dd/MM/yy");
    }
    return (
      <div className="card">
        <div>
          <h2>
            {capitalise(data.establishment)}{" "}
            <span className="date-range">
              {dateFrom} - {dateTo}
            </span>
          </h2>
        </div>
        <p>
          <span className="cv-value">Location: </span>
          {_.capitalize(data.city)}
        </p>
        <p>
          <span className="cv-value">Subject: </span>
          {_.capitalize(data.subject)}
        </p>
        <p>
          <span className="cv-value">Qualification: </span>
          {_.capitalize(data.qualification)}
        </p>
        <p>
          <span className="cv-value">Description: </span>
          {data.notes}
        </p>
      </div>
    );
  } else if (props.title === "skill") {
    return (
      <div className="card">
        <h2>{capitalise(data.skill)}</h2>
        <p>{data.description}</p>
      </div>
    );
  }
};

export default DisplayCard;
