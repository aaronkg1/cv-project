import React from "react";
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
        title: "",
        address: "",
        telephone: "",
        email: "",
        introduction: "",
      },
      jobs: [],
    };
    this.receiveInfo = this.receiveInfo.bind(this);
    this.createNewJob = this.createNewJob.bind(this);
    this.updateJob = this.updateJob.bind(this);
    this.deleteJob = this.deleteJob.bind(this);
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

  render() {
    const { user, jobs } = this.state;

    return (
      <div className="main-container">
        <form className="half-page">
          <section>
            <h1>General Information</h1>
            <GeneralInfo user={user} receiveInfo={this.receiveInfo} />
          </section>
          <section>
            <h1>Experience </h1>
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
          </section>
          <button onClick={this.createNewJob}>Add new job</button>
        </form>
        <DisplayCV data={this.state} />
      </div>
    );
  }
}

export default App;
