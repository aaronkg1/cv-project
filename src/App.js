import React from "react";
import Education from "./Components/Education";
import Experience from "./Components/Experience";
import GeneralInfo from "./Components/GeneralInfo";
import DisplayCV from "./Components/DisplayCV";
import uniqid from "uniqid";
import "./styles/index.css";
class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {
        firstName: "",
        lastName: "",
        title: "mr",
        address: "",
        telephone: "",
        email: "",
        introduction: "",
      },
      jobs: [],
      education: [],
    };
    this.receiveInfo = this.receiveInfo.bind(this);
    this.createNewJob = this.createNewJob.bind(this);
    this.updateJob = this.updateJob.bind(this);
    this.deleteJob = this.deleteJob.bind(this);
    this.createNewEducation = this.createNewEducation.bind(this);
    this.updateEducation = this.updateEducation.bind(this);
    this.deleteEducation = this.deleteEducation.bind(this);
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
          dateFrom: "2020-10-15",
          dateTo: "2020-10-15",
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

  render() {
    const { user, jobs, education } = this.state;

    return (
      <div className="main-container">
        <form className="half-page">
          <section className="section-container">
            <h1>General Information</h1>
            <GeneralInfo user={user} receiveInfo={this.receiveInfo} />
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
        </form>
        <DisplayCV data={this.state} />
      </div>
    );
  }
}

export default App;
