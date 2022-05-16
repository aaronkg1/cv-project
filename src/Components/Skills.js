import React from "react";

const Skill = (props) => {
  const { skill } = props;
  return (
    <div className="skills form-section">
      <label htmlFor="skill" className="form-value">
        Skill/Strength:{" "}
      </label>
      <input
        id="skill"
        name="skill"
        value={skill.skill}
        onChange={(e) => {
          props.updateSkill(e, skill.id);
        }}
      ></input>
      <label htmlFor="description" className="form-value">
        Description:{" "}
      </label>
      <textarea
        id="description"
        name="description"
        value={skill.description}
        onChange={(e) => {
          props.updateSkill(e, skill.id);
        }}
      ></textarea>
      <i
        className="fa-solid fa-circle-minus delete-btn"
        onClick={(e) => {
          props.deleteSkill(e, skill.id);
        }}
      ></i>
    </div>
  );
};

export default Skill;
