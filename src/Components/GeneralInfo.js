import React from "react";
import "../styles/forms.css";

class GeneralInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ...this.props.user,
    };
  }

  render() {
    return (
      <div className="general-info form-section" key={this.state.id}>
        <label htmlFor="firstName">First Name: </label>
        <input
          type="text"
          name="firstName"
          onChange={(e) => {
            this.props.receiveInfo(e);
          }}
          value={this.props.firstName}
          id="firstName"
        />
        <label htmlFor="lastName">Last Name: </label>
        <input
          type="text"
          name="lastName"
          onChange={(e) => {
            this.props.receiveInfo(e);
          }}
          value={this.props.lastName}
          id="lastName"
        />
        <label htmlFor="title">Title: </label>
        <select
          type="text"
          name="title"
          onChange={(e) => {
            this.props.receiveInfo(e);
          }}
          value={this.props.title}
          id="title"
        >
          <option value="mr">Mr</option>
          <option value="ms">Ms</option>
          <option value="dr">Dr</option>
          <option value="miss">Miss</option>
          <option value="mrs">Mrs</option>
        </select>
        <label htmlFor="address">Address: </label>
        <input
          type="text"
          name="address"
          onChange={(e) => {
            this.props.receiveInfo(e);
          }}
          value={this.props.address}
          id="address"
        />
        <label htmlFor="telephone">Telephone: </label>
        <input
          type="text"
          name="telephone"
          onChange={(e) => {
            this.props.receiveInfo(e);
          }}
          value={this.props.telephone}
          id="telephone"
        />
        <label htmlFor="email">Email: </label>
        <input
          type="text"
          name="email"
          onChange={(e) => {
            this.props.receiveInfo(e);
          }}
          value={this.props.email}
          id="email"
        />
        <label htmlFor="introduction">Introduction: </label>
        <textarea
          name="introduction"
          onChange={(e) => {
            this.props.receiveInfo(e);
          }}
          value={this.props.introduction}
          id="introduction"
        />
      </div>
    );
  }
}

export default GeneralInfo;
