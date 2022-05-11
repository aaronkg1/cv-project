import React from "react";

class Skill extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ...this.props,
    };
  }

  render() {
    const { skill } = this.props;
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
            this.props.updateSkill(e, skill.id);
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
            this.props.updateSkill(e, skill.id);
          }}
        ></textarea>
        <i
          className="fa-solid fa-circle-minus delete-btn"
          onClick={(e) => {
            this.props.deleteSkill(e, skill.id);
          }}
        ></i>
      </div>
    );
  }
}

export default Skill;
