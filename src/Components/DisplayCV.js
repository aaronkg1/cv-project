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
    let address;
    let telephone;
    let email;

    user.address === ""
      ? (address = null)
      : (address = <p>Address: {user.address}</p>);

    user.telephone === ""
      ? (telephone = null)
      : (telephone = <p>Telephone: {user.telephone}</p>);

    user.email === ""
      ? (email = null)
      : (email = (
          <p>
            Email:{" "}
            <a
              href={user.email}
              onClick={(e) => {
                e.preventDefault();
              }}
            >
              {user.email}
            </a>
          </p>
        ));

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
      </div>
    );
  }
}

export default DisplayCV;
