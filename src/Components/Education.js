import React from "react";

const Education = (props) => {
  const { school } = props;
  return (
    <div className="education form-section">
      <label htmlFor="establishent">Establishment: </label>
      <input
        type="text"
        id="establishment"
        name="establishment"
        value={school.establishment}
        onChange={(e) => {
          props.updateEducation(e, school.id);
        }}
      />
      <label htmlFor="city">Location: </label>
      <input
        type="text"
        id="city"
        name="city"
        value={school.city}
        onChange={(e) => {
          props.updateEducation(e, school.id);
        }}
      />
      <label htmlFor="subject">Subject: </label>
      <input
        type="text"
        id="subject"
        name="subject"
        value={school.subject}
        onChange={(e) => {
          props.updateEducation(e, school.id);
        }}
      />
      <label htmlFor="qualification">Qualification: </label>
      <input
        type="text"
        id="qualification"
        name="qualification"
        value={school.qualification}
        onChange={(e) => {
          props.updateEducation(e, school.id);
        }}
      />

      <label htmlFor="dateFrom">From: </label>
      <input
        type="date"
        id="dateFrom"
        name="dateFrom"
        value={school.dateFrom}
        onChange={(e) => {
          props.updateEducation(e, school.id);
        }}
      />
      <label htmlFor="dateTo">To: </label>
      <input
        type="date"
        id="dateTo"
        name="dateTo"
        value={school.dateTo}
        onChange={(e) => {
          props.updateEducation(e, school.id);
        }}
      />
      <label htmlFor="notes">Notes: </label>
      <textarea
        id="notes"
        name="notes"
        value={school.notes}
        onChange={(e) => {
          props.updateEducation(e, school.id);
        }}
      />
      <i
        className="fa-solid fa-circle-minus delete-btn"
        onClick={(e) => {
          props.deleteEducation(e, school.id);
        }}
      ></i>
    </div>
  );
};

export default Education;
