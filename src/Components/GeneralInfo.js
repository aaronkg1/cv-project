import React from "react";
import "../styles/forms.css";

const GeneralInfo = (props) => {
  const { user } = props;
  return (
    <div className="general-info form-section" key={user.id}>
      <label className="form-value" htmlFor="firstName">
        First Name:{" "}
      </label>
      <input
        type="text"
        name="firstName"
        onChange={(e) => {
          props.receiveInfo(e);
        }}
        value={user.firstName}
        id="firstName"
      />
      <label className="form-value" htmlFor="lastName">
        Last Name:{" "}
      </label>
      <input
        type="text"
        name="lastName"
        onChange={(e) => {
          props.receiveInfo(e);
        }}
        value={user.lastName}
        id="lastName"
      />
      <div className="photo-upload">
        <label className="form-value" htmlFor="picture-upload">
          Profile Picture:
        </label>
        <input
          className="file-upload"
          type="file"
          onChange={props.onFileChange}
          name="profilePic"
        />
        <i
          className="fa-solid fa-circle-plus add-button"
          onClick={props.onFileUpload}
        ></i>
      </div>
      <label className="form-value" htmlFor="title">
        Title:{" "}
      </label>
      <select
        type="text"
        name="title"
        onChange={(e) => {
          props.receiveInfo(e);
        }}
        value={user.title}
        id="title"
      >
        <option value="mr">Mr</option>
        <option value="ms">Ms</option>
        <option value="dr">Dr</option>
        <option value="miss">Miss</option>
        <option value="mrs">Mrs</option>
      </select>
      <label className="form-value" htmlFor="address">
        Address:{" "}
      </label>
      <input
        type="text"
        name="address"
        onChange={(e) => {
          props.receiveInfo(e);
        }}
        value={user.address}
        id="address"
      />
      <label className="form-value" htmlFor="telephone">
        Telephone:{" "}
      </label>
      <input
        type="text"
        name="telephone"
        onChange={(e) => {
          props.receiveInfo(e);
        }}
        value={user.telephone}
        id="telephone"
      />
      <label className="form-value" htmlFor="email">
        Email:{" "}
      </label>
      <input
        type="text"
        name="email"
        onChange={(e) => {
          props.receiveInfo(e);
        }}
        value={user.email}
        id="email"
      />
      <label className="form-value" htmlFor="introduction">
        Introduction:{" "}
      </label>
      <textarea
        name="introduction"
        rows="5"
        onChange={(e) => {
          props.receiveInfo(e);
        }}
        value={user.introduction}
        id="introduction"
      />
    </div>
  );
};
export default GeneralInfo;
