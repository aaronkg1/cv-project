import React, { useState, useEffect } from "react";
import Education from "./Components/Education";
import Experience from "./Components/Experience";
import GeneralInfo from "./Components/GeneralInfo";
import DisplayCV from "./Components/DisplayCV";
import uniqid from "uniqid";
import Skill from "./Components/Skills";
import "./styles/index.css";

const App = () => {
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    title: " ",
    address: "",
    telephone: "",
    email: "",
    introduction: "",
    profilePic: { src: require("./Assets/blank-profile-pic.png") },
  });
  const [jobs, setJobs] = useState([]);
  const [education, setEducation] = useState([]);
  const [skills, setSkills] = useState([]);

  const receiveInfo = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const createNewJob = (e) => {
    e.preventDefault();
    setJobs([
      ...jobs,
      {
        jobTitle: "",
        company: "",
        city: "",
        dateFrom: "",
        dateTo: "",
        description: "",
        id: uniqid(),
      },
    ]);
  };

  const updateJob = (e, jobId) => {
    const jobsCopy = [...jobs];
    let jobToUpdate = jobsCopy.filter((item) => {
      return item.id === jobId;
    });
    jobToUpdate[0][e.target.name] = e.target.value;
    setJobs(jobsCopy);
  };

  const deleteJob = (e, jobId) => {
    e.preventDefault();
    const newJobArray = jobs.filter((item) => {
      return item.id !== jobId;
    });
    setJobs(newJobArray);
  };
  const createNewEducation = (e) => {
    e.preventDefault();
    setEducation([
      ...education,
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
    ]);
  };
  const updateEducation = (e, educationId) => {
    const educationCopy = [...education];
    let educationToUpdate = educationCopy.filter((item) => {
      return item.id === educationId;
    });
    educationToUpdate[0][e.target.name] = e.target.value;
    setEducation(educationCopy);
  };

  const deleteEducation = (e, educationId) => {
    e.preventDefault();
    const newArray = education.filter((item) => {
      return item.id !== educationId;
    });
    setEducation(newArray);
  };

  const createNewSkill = (e) => {
    e.preventDefault();
    setSkills([
      ...skills,
      {
        skill: "",
        description: "",
        id: uniqid(),
      },
    ]);
  };

  const deleteSkill = (e, skillId) => {
    e.preventDefault();
    const skillsCopy = skills.filter((skill) => {
      return skill.id !== skillId;
    });
    setSkills(skillsCopy);
  };

  const updateSkill = (e, skillId) => {
    const skillsCopy = [...skills];
    let skillToUpdate = skillsCopy.filter((skill) => {
      return skill.id === skillId;
    });
    skillToUpdate[0][e.target.name] = e.target.value;
    setSkills(skillsCopy);
  };
  const onFileChange = (e) => {
    const userCopy = { ...user };
    userCopy.profilePic = e.target.files[0];
    setUser(userCopy);
  };

  const onFileUpload = () => {
    const imageSrc = URL.createObjectURL(user.profilePic);
    setUser({
      ...user,
      profilePic: {
        ...user.profilePic,
        src: imageSrc,
      },
    });
  };

  return (
    <div className="main-container">
      <form className="half-page">
        <section className="section-container">
          <h1>General Information</h1>
          <GeneralInfo
            user={user}
            receiveInfo={receiveInfo}
            onFileChange={onFileChange}
            onFileUpload={onFileUpload}
          />
        </section>
        <section className="section-container">
          <h1>Job Experience</h1>
          {jobs.map((job) => {
            return (
              <Experience
                key={job.id}
                job={job}
                updateJob={updateJob}
                deleteJob={deleteJob}
              />
            );
          })}
          <i
            className="fa-solid fa-circle-plus add-button"
            onClick={createNewJob}
          ></i>
        </section>

        <section className="section-container">
          <h1>Education History</h1>
          {education.map((school) => {
            return (
              <Education
                key={school.id}
                school={school}
                updateEducation={updateEducation}
                deleteEducation={deleteEducation}
              />
            );
          })}

          <i
            className="fa-solid fa-circle-plus add-button"
            onClick={createNewEducation}
          ></i>
        </section>
        <section className="section-container">
          <h1>Strengths and Skills</h1>
          {skills.map((skill) => {
            return (
              <Skill
                key={skill.id}
                skill={skill}
                updateSkill={updateSkill}
                deleteSkill={deleteSkill}
              />
            );
          })}
          <i
            className="fa-solid fa-circle-plus add-button"
            onClick={createNewSkill}
          ></i>
        </section>
      </form>
      <DisplayCV data={{ user, jobs, education, skills }} />
    </div>
  );
};

export default App;
