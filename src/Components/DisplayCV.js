import React from "react";
import _ from "lodash";

class DisplayCV extends React.Component {
  constructor(props) {
    super(props);
    this.state = { ...props };
  }

  render() {
    const { user, jobs } = this.props.data;
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
      <div className="half-page">
        <header>
          {user.firstName} {user.lastName}
        </header>
        <div className="contact">
          <h1>Contact</h1>
          <p>
            {_.capitalize(user.title)} {user.firstName} {user.lastName}
          </p>
          {address}
          {telephone}
          {email}
        </div>
      </div>
    );
  }
}

export default DisplayCV;
