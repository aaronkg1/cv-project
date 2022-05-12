import React from "react";
import Education from "./Components/Education";
import Experience from "./Components/Experience";
import GeneralInfo from "./Components/GeneralInfo";
import DisplayCV from "./Components/DisplayCV";
import uniqid from "uniqid";
import Skill from "./Components/Skills";
import "./styles/index.css";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {
        firstName: "",
        lastName: "",
        title: " ",
        address: "",
        telephone: "",
        email: "",
        introduction: "",
        profilePic: { src: require("./Assets/blank-profile-pic.png") },
      },
      jobs: [],
      education: [],
      skills: [],
    };
    this.receiveInfo = this.receiveInfo.bind(this);
    this.createNewJob = this.createNewJob.bind(this);
    this.updateJob = this.updateJob.bind(this);
    this.deleteJob = this.deleteJob.bind(this);
    this.createNewEducation = this.createNewEducation.bind(this);
    this.updateEducation = this.updateEducation.bind(this);
    this.deleteEducation = this.deleteEducation.bind(this);
    this.createNewSkill = this.createNewSkill.bind(this);
    this.updateSkill = this.updateSkill.bind(this);
    this.deleteSkill = this.deleteSkill.bind(this);
    this.onFileChange = this.onFileChange.bind(this);
    this.onFileUpload = this.onFileUpload.bind(this);
  }

  receiveInfo(e) {
    this.setState({
      user: {
        ...this.state.user,
        [e.target.name]: e.target.value,
      },
    });
  }

  createNewJob(e) {
    e.preventDefault();
    this.setState({
      jobs: [
        ...this.state.jobs,
        {
          jobTitle: "",
          company: "",
          city: "",
          dateFrom: "",
          dateTo: "",
          description: "",
          id: uniqid(),
        },
      ],
    });
  }

  updateJob(e, jobId) {
    const { jobs } = this.state;
    const jobsCopy = [...jobs];
    let jobToUpdate = jobsCopy.filter((item) => {
      return item.id === jobId;
    });
    jobToUpdate[0][e.target.name] = e.target.value;
    this.setState({
      jobs: [...jobsCopy],
    });
  }

  deleteJob(e, jobId) {
    e.preventDefault();
    const { jobs } = this.state;
    this.setState(() => {
      return {
        jobs: jobs.filter((item) => {
          return item.id !== jobId;
        }),
      };
    });
  }

  createNewEducation(e) {
    e.preventDefault();
    this.setState({
      education: [
        ...this.state.education,
        {
          establishment: "",
          city: "",
          qualification: "",
          subject: "",
          dateFrom: "",
          dateTo: "",
          notes: "",
          id: uniqid(),
        },
      ],
    });
  }

  updateEducation(e, educationId) {
    const { education } = this.state;
    const educationCopy = [...education];
    let educationToUpdate = educationCopy.filter((item) => {
      return item.id === educationId;
    });
    educationToUpdate[0][e.target.name] = e.target.value;
    this.setState({
      education: [...educationCopy],
    });
  }

  deleteEducation(e, educationId) {
    e.preventDefault();
    const { education } = this.state;
    this.setState({
      education: education.filter((item) => {
        return item.id !== educationId;
      }),
    });
  }

  createNewSkill(e) {
    e.preventDefault();
    this.setState({
      skills: [
        ...this.state.skills,
        {
          skill: "",
          description: "",
          id: uniqid(),
        },
      ],
    });
  }

  updateSkill(e, skillId) {
    const { skills } = this.state;
    const skillsCopy = [...skills];
    let skillToUpdate = skillsCopy.filter((skill) => {
      return skill.id === skillId;
    });
    skillToUpdate[0][e.target.name] = e.target.value;
    this.setState({
      skills: [...skillsCopy],
    });
  }

  deleteSkill(e, skillId) {
    const { skills } = this.state;
    this.setState({
      skills: skills.filter((skill) => {
        return skill.id !== skillId;
      }),
    });
  }

  onFileChange(e) {
    const { user } = this.state;
    this.setState({ user: { ...user, profilePic: e.target.files[0] } });
  }

  onFileUpload() {
    const { user } = this.state;

    const imageSrc = URL.createObjectURL(user.profilePic);
    console.log(imageSrc);
    this.setState({
      user: {
        ...user,
        profilePic: {
          ...user.profilePic,
          src: imageSrc,
        },
      },
    });
  }

  render() {
    const { user, jobs, education, skills } = this.state;

    return (
      <div className="main-container">
        <form className="half-page">
          <section className="section-container">
            <h1>General Information</h1>
            <GeneralInfo
              user={user}
              receiveInfo={this.receiveInfo}
              onFileChange={this.onFileChange}
              onFileUpload={this.onFileUpload}
            />
          </section>
          <section className="section-container">
            <h1>Job Experience</h1>
            {jobs.map((job) => {
              return (
                <Experience
                  key={job.id}
                  job={job}
                  updateJob={this.updateJob}
                  deleteJob={this.deleteJob}
                />
              );
            })}
            <i
              className="fa-solid fa-circle-plus add-button"
              onClick={this.createNewJob}
            ></i>
          </section>

          <section className="section-container">
            <h1>Education History</h1>
            {education.map((school) => {
              return (
                <Education
                  key={school.id}
                  school={school}
                  updateEducation={this.updateEducation}
                  deleteEducation={this.deleteEducation}
                />
              );
            })}

            <i
              className="fa-solid fa-circle-plus add-button"
              onClick={this.createNewEducation}
            ></i>
          </section>
          <section className="section-container">
            <h1>Strengths and Skills</h1>
            {skills.map((skill) => {
              return (
                <Skill
                  key={skill.id}
                  skill={skill}
                  updateSkill={this.updateSkill}
                  deleteSkill={this.deleteSkill}
                />
              );
            })}
            <i
              className="fa-solid fa-circle-plus add-button"
              onClick={this.createNewSkill}
            ></i>
          </section>
        </form>
        <DisplayCV data={this.state} />
      </div>
    );
  }
}

export default App;
